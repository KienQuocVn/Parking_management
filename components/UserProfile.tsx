"use client"

export default function UserProfile() {
  return (
    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-purple-200">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold text-sm">GH</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">Guy Hawkins</p>
          <p className="text-gray-600 text-xs">guy@hawkins.com</p>
        </div>
      </div>
    </div>
  )
}
