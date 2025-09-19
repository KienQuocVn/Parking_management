"use client"

interface ZoneSelectorProps {
  zones: string[]
  currentZone: string
  onZoneChange: (zone: string) => void
}

// Vehicle type icons
const CarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.22.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
  </svg>
)

const MotorcycleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l.95-.95c.39-.39.39-1.02 0-1.41L9.41 9.59c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0L13.5 10.5c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L12.23 6.41c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0L16.32 7.68c.39.39 1.02.39 1.41 0s.39-1.02 0-1.41L15.05 3.59c-.39-.39-.39-1.02 0-1.41s1.02-.39 1.41 0L19.44 5.17c.39.39.39 1.02 0 1.41s-1.02.39-1.41 0z" />
  </svg>
)

const BicycleIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm14.8-9.6c-.5-.8-1.1-1.4-1.8-1.8L16.5 7.5c-.3-.1-.5-.4-.5-.8s.2-.7.5-.8L18.5 5c.8-.3 1.5-1 1.8-1.8C20.7 2.5 20.3 2 19.5 2c-.3 0-.5.1-.8.2L16.5 3.1c-.8.3-1.5 1-1.8 1.8-.3.8-.1 1.6.5 2.2l1.5 1.5c.6.6 1.4.8 2.2.5.8-.3 1.5-1 1.8-1.8.1-.3.2-.5.2-.8 0-.8-.5-1.2-1.1-.8z" />
  </svg>
)

const getZoneIcon = (zone: string) => {
  if (zone.includes("Car")) return CarIcon
  if (zone.includes("Motorcycle")) return MotorcycleIcon
  if (zone.includes("Bicycle")) return BicycleIcon
  return CarIcon
}

export default function ZoneSelector({ zones, currentZone, onZoneChange }: ZoneSelectorProps) {
  return (
    <div className="px-3 md:px-6 py-4 bg-white/50 backdrop-blur-sm border-b border-purple-200">
      <div className="flex flex-wrap gap-1 md:gap-2">
        {zones.map((zone) => {
          const Icon = getZoneIcon(zone)
          const isActive = currentZone === zone

          return (
            <button
              key={zone}
              onClick={() => onZoneChange(zone)}
              className={`flex items-center space-x-2 px-3 md:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isActive ? "bg-purple-500 text-white" : "bg-white/70 text-gray-700 hover:bg-purple-100"
              }`}
            >
              <Icon />
              <span className="hidden sm:inline">{zone}</span>
              <span className="sm:hidden">{zone.split(" ")[0]}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
