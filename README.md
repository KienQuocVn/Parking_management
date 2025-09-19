# Parking Manager Dashboard

A modern, responsive parking management dashboard built with Next.js, React, and Tailwind CSS.

## Features

- **Multi-floor Management**: Support for multiple parking floors (B1-B5 by default)
- **Zone-based Organization**: Separate zones for cars, motorcycles, and bicycles
- **Real-time Statistics**: Live tracking of occupied and available parking spaces
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive UI**: Modern interface with purple gradient theme
- **Floor Management**: Add new floors dynamically through modal interface

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Inter font and gradient background
│   ├── page.tsx            # Main dashboard page with state management
│   └── globals.css         # Global styles and Tailwind configuration
├── components/
│   ├── Sidebar.tsx         # Desktop navigation sidebar
│   ├── MobileSidebar.tsx   # Mobile navigation drawer
│   ├── Header.tsx          # Top header with floor tabs and stats
│   ├── ZoneSelector.tsx    # Zone selection tabs
│   ├── ParkingGrid.tsx     # Main parking grid display
│   ├── UserProfile.tsx     # User profile card
│   └── AddFloorModal.tsx   # Modal for adding new floors
├── types/
│   └── parking.ts          # TypeScript type definitions
└── docs/
    └── specifications.ts   # Original project specifications
```

## Key Components

### Dashboard Layout
- **Sidebar**: Navigation menu with parking management options
- **Header**: Floor selection, statistics, and notifications
- **Zone Selector**: Toggle between car, motorcycle, and bicycle zones
- **Parking Grid**: Visual representation of parking spaces
- **User Profile**: Current user information

### Responsive Features
- Mobile-first design approach
- Collapsible sidebar for mobile devices
- Adaptive grid layout (4 columns on mobile, 8 on desktop)
- Responsive typography and spacing
- Touch-friendly interface elements

### State Management
- React hooks for local state management
- Dynamic floor and zone switching
- Real-time statistics calculation
- Modal state management

## Customization

### Adding New Floors
1. Use the "+" button in the header
2. Enter floor name (e.g., B6, L1, P1)
3. New floor is automatically added with default parking data

### Modifying Parking Data
Edit the `mockParkingData` object in `app/page.tsx` to customize:
- Number of parking spaces per zone
- Occupied vs. available ratios
- Zone configurations

### Styling
The application uses Tailwind CSS with a custom purple gradient theme. Key colors:
- Primary: Purple (#8B5CF6)
- Background: Purple-to-white gradient
- Accents: Red (occupied), Gray (empty), Blue (actions)

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is created for demonstration purposes.
