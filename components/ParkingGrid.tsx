"use client"

interface ZoneData {
  filled: number
  empty: number
  total: number
}

interface ParkingGridProps {
  floor: string
  data: Record<string, ZoneData>
}

const CarSVG = ({ occupied = false, color = "red" }: { occupied?: boolean; color?: string }) => {
  const colors = {
    red: occupied ? "#ef4444" : "#e5e7eb",
    blue: occupied ? "#3b82f6" : "#e5e7eb",
    green: occupied ? "#10b981" : "#e5e7eb",
    gray: occupied ? "#6b7280" : "#e5e7eb",
  }

  return (
    <svg className="w-8 h-8" viewBox="0 0 40 24" fill="none">
      <rect
        x="2"
        y="6"
        width="36"
        height="12"
        rx="2"
        fill={colors[color as keyof typeof colors]}
        stroke={occupied ? "#374151" : "#d1d5db"}
        strokeWidth="1"
      />
      <circle cx="10" cy="18" r="3" fill={occupied ? "#1f2937" : "#9ca3af"} />
      <circle cx="30" cy="18" r="3" fill={occupied ? "#1f2937" : "#9ca3af"} />
      <rect x="8" y="8" width="6" height="4" rx="1" fill={occupied ? "#ffffff40" : "#f3f4f6"} />
      <rect x="16" y="8" width="8" height="4" rx="1" fill={occupied ? "#ffffff40" : "#f3f4f6"} />
      <rect x="26" y="8" width="6" height="4" rx="1" fill={occupied ? "#ffffff40" : "#f3f4f6"} />
    </svg>
  )
}

const MotorcycleSVG = ({ occupied = false, color = "blue" }: { occupied?: boolean; color?: string }) => {
  const colors = {
    red: occupied ? "#ef4444" : "#e5e7eb",
    blue: occupied ? "#3b82f6" : "#e5e7eb",
    green: occupied ? "#10b981" : "#e5e7eb",
    gray: occupied ? "#6b7280" : "#e5e7eb",
  }

  return (
    <svg className="w-6 h-6" viewBox="0 0 32 20" fill="none">
      <circle
        cx="8"
        cy="16"
        r="4"
        fill={colors[color as keyof typeof colors]}
        stroke={occupied ? "#374151" : "#d1d5db"}
      />
      <circle
        cx="24"
        cy="16"
        r="4"
        fill={colors[color as keyof typeof colors]}
        stroke={occupied ? "#374151" : "#d1d5db"}
      />
      <path d="M8 16 L16 8 L20 8 L24 16" stroke={occupied ? "#374151" : "#d1d5db"} strokeWidth="2" fill="none" />
      <path d="M14 8 L18 4 L22 4" stroke={occupied ? "#374151" : "#d1d5db"} strokeWidth="2" fill="none" />
    </svg>
  )
}

export default function ParkingGrid({ floor, data }: ParkingGridProps) {
  const generateZoneSpots = (zoneLetter: string, zoneData: ZoneData) => {
    const spots = []
    const colors = ["red", "blue", "green", "gray"]
    const vehicleTypes = [CarSVG, MotorcycleSVG]

    for (let i = 1; i <= 8; i++) {
      const spotLabel = `${zoneLetter}${i}`
      const isOccupied = i <= zoneData.filled
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      const VehicleComponent = vehicleTypes[Math.floor(Math.random() * vehicleTypes.length)]

      spots.push({
        id: spotLabel,
        occupied: isOccupied,
        color: randomColor,
        VehicleComponent,
        position: i,
      })
    }

    return spots
  }

  const zones = ["A", "B", "C", "D", "E", "F"]

  return (
    <div className="relative">
      <div className="absolute top-8 -right-4 z-10">
        <div className="bg-green-500 text-white px-3 py-1 rounded-l-full text-xs font-medium shadow-lg">Entry</div>
      </div>

      <div className="absolute bottom-8 -right-4 z-10">
        <div className="bg-red-500 text-white px-3 py-1 rounded-l-full text-xs font-medium shadow-lg">Exit</div>
      </div>

      <div className="bg-white/30 backdrop-blur-sm rounded-lg p-6 border border-purple-200">
        <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto">
          {zones.map((zoneLetter) => {
            const zoneData = data[zoneLetter] || { filled: 0, empty: 8, total: 8 }
            const spots = generateZoneSpots(zoneLetter, zoneData)

            return (
              <div key={zoneLetter} className="bg-white/50 rounded-lg p-4 border border-gray-200">
                {/* Zone Header */}
                <div className="text-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">Zone {zoneLetter}</h3>
                  <p className="text-xs text-gray-600">
                    {zoneData.filled}/{zoneData.total} occupied
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {spots.map((spot) => (
                    <div key={spot.id} className="flex flex-col items-center">
                      {/* Parking Spot */}
                      <div
                        className={`flex items-center justify-center w-16 h-12 rounded border-2 transition-all cursor-pointer ${
                          spot.occupied
                            ? "border-gray-400 bg-gray-100"
                            : "border-gray-300 bg-white hover:border-purple-300 hover:bg-purple-50"
                        }`}
                        onClick={() => console.log(`Clicked spot ${spot.id}`)}
                      >
                        {spot.occupied ? (
                          <spot.VehicleComponent occupied={true} color={spot.color} />
                        ) : (
                          <div className="w-8 h-8 border-2 border-dashed border-gray-300 rounded"></div>
                        )}
                      </div>

                      {/* Spot Label */}
                      <div className="text-xs font-medium text-gray-600 mt-1">{spot.id}</div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Floor Info */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>
            Floor <span className="font-semibold text-purple-600">{floor}</span>
          </p>
          <p className="mt-1">Mixed parking for cars and motorcycles • 6 zones • 48 total spots</p>
        </div>
      </div>
    </div>
  )
}
