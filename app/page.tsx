"use client"

import { useState } from "react"
import Sidebar from "@/components/Sidebar"
import Header from "@/components/Header"
import ParkingGrid from "@/components/ParkingGrid"
import UserProfile from "@/components/UserProfile"
import AddFloorModal from "@/components/AddFloorModal"
import MobileSidebar from "@/components/MobileSidebar"

// Initial floors data
const initialFloors = ["B1", "B2", "B3", "B4", "B5"]

// Mock parking data with 6 zones per floor, each zone has 8 spots (2 columns x 4 rows)
const mockParkingData = {
  B1: {
    A: { filled: 6, empty: 2, total: 8 },
    B: { filled: 4, empty: 4, total: 8 },
    C: { filled: 5, empty: 3, total: 8 },
    D: { filled: 3, empty: 5, total: 8 },
    E: { filled: 7, empty: 1, total: 8 },
    F: { filled: 2, empty: 6, total: 8 },
  },
  B2: {
    A: { filled: 5, empty: 3, total: 8 },
    B: { filled: 6, empty: 2, total: 8 },
    C: { filled: 3, empty: 5, total: 8 },
    D: { filled: 4, empty: 4, total: 8 },
    E: { filled: 2, empty: 6, total: 8 },
    F: { filled: 7, empty: 1, total: 8 },
  },
  B3: {
    A: { filled: 4, empty: 4, total: 8 },
    B: { filled: 3, empty: 5, total: 8 },
    C: { filled: 6, empty: 2, total: 8 },
    D: { filled: 5, empty: 3, total: 8 },
    E: { filled: 1, empty: 7, total: 8 },
    F: { filled: 4, empty: 4, total: 8 },
  },
  B4: {
    A: { filled: 2, empty: 6, total: 8 },
    B: { filled: 5, empty: 3, total: 8 },
    C: { filled: 4, empty: 4, total: 8 },
    D: { filled: 6, empty: 2, total: 8 },
    E: { filled: 3, empty: 5, total: 8 },
    F: { filled: 1, empty: 7, total: 8 },
  },
  B5: {
    A: { filled: 7, empty: 1, total: 8 },
    B: { filled: 2, empty: 6, total: 8 },
    C: { filled: 5, empty: 3, total: 8 },
    D: { filled: 3, empty: 5, total: 8 },
    E: { filled: 6, empty: 2, total: 8 },
    F: { filled: 4, empty: 4, total: 8 },
  },
}

export default function ParkingManager() {
  const [floors, setFloors] = useState(initialFloors)
  const [currentFloor, setCurrentFloor] = useState("B2")
  const [isAddFloorModalOpen, setIsAddFloorModalOpen] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const addFloor = (floorName: string) => {
    setFloors([...floors, floorName])
    mockParkingData[floorName as keyof typeof mockParkingData] = {
      A: { filled: 0, empty: 8, total: 8 },
      B: { filled: 0, empty: 8, total: 8 },
      C: { filled: 0, empty: 8, total: 8 },
      D: { filled: 0, empty: 8, total: 8 },
      E: { filled: 0, empty: 8, total: 8 },
      F: { filled: 0, empty: 8, total: 8 },
    }
  }

  const getCurrentStats = () => {
    const floorData = mockParkingData[currentFloor as keyof typeof mockParkingData]
    if (!floorData) return { filled: 0, empty: 0 }

    let totalFilled = 0
    let totalEmpty = 0

    Object.values(floorData).forEach((zone) => {
      totalFilled += zone.filled
      totalEmpty += zone.empty
    })

    return { filled: totalFilled, empty: totalEmpty }
  }

  return (
    <div className="flex h-screen bg-gradient-to-b from-purple-200 to-white">
      <div className="hidden lg:block">
        <Sidebar onManageFloors={() => setIsAddFloorModalOpen(true)} />
      </div>

      <MobileSidebar
        isOpen={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
        onManageFloors={() => setIsAddFloorModalOpen(true)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <Header
          floors={floors}
          currentFloor={currentFloor}
          onFloorChange={setCurrentFloor}
          onAddFloor={() => setIsAddFloorModalOpen(true)}
          stats={getCurrentStats()}
          onMobileMenuToggle={() => setIsMobileSidebarOpen(true)}
        />

        <div className="flex-1 p-3 md:p-6 overflow-auto">
          <ParkingGrid
            floor={currentFloor}
            data={mockParkingData[currentFloor as keyof typeof mockParkingData] || {}}
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <UserProfile />
      </div>

      <AddFloorModal
        isOpen={isAddFloorModalOpen}
        onClose={() => setIsAddFloorModalOpen(false)}
        onAddFloor={addFloor}
        existingFloors={floors}
      />
    </div>
  )
}
