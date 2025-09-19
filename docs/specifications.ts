Generate
a
Next.js
application (using React and Tailwind CSS)
that
creates
the
frontend
UI
for a Parking Manager dashboard. The
base
UI
should
match
this
screenshot: a
modern, purple - gradient
background
dashboard
with a sidebar
menu, header
with floor selectors
and
stats, a
main
grid
of
parking
spaces
showing
occupied
and
empty
spots
with vehicle icons, entry/exit
labels, and
a
bottom
user
profile
card.Use
a
light
purple(#E0BBE4)
to
white
gradient
background.Enhance
it
to
support
multiple
floors(with a button to add new floors via a modal), and
within
each
floor, multiple
zones
for vehicle types
: cars, motorcycles, bicycles (
with zone tabs
and
type - specific
icons
). Make it responsive
for desktop and mobile.
\
Break down the generation into small parts: first the layout structure, then individual components, then data and interactivity, styling, and finally the README file. Output the code in a folder structure
with files like
app/page.tsx, components/Header.tsx, etc.
\
Part 1: Overall Project Structure and Setup
\
Use Next.js 14
with App Router.
\
Install and configure Tailwind CSS
for styling.\
Root layout in app/layout.tsx
with HTML structure, font (use Inter from Google Fonts), and
body
class for gradient background: bg-gradient-to-b from-purple-200 to-white.\
Main page in app/page.tsx that imports and assembles components: Sidebar, Header, ZoneSelector, ParkingGrid, UserProfile, and AddFloorModal.\
Use SVG icons for vehicles (car: simple top-down car shape; motorcycle: bike with handlebars; bicycle: simple cycle shape), arrows, bells, etc. (generate simple inline SVGs).\
No backend; use React state for floors (initial: B1 to B5), zones per floor (Car Zone, Motorcycle Zone, Bicycle Zone), and hardcoded parking data that varies by zone/vehicle type.\
Use useState in page.tsx for current floor, current zone, and list of floors (allow adding new floors like B6 via modal).
\
Part 2: Sidebar Component (components/Sidebar.tsx)
\
Vertical sidebar on the left, fixed width ~200px, with purple accent.\
Menu items: Dashboard (icon: home), Booking (icon: calendar), Parking Spaces (active, highlighted in purple), Reports (icon: chart), Problems (icon: alert), Roles and permissions (icon: users).\
Use a list with hover effects (bg-purple-100 on hover).\
Active item: bg-purple-500 text-white.\
Add a "Manage Floors\" item that opens the AddFloorModal when clicked.
\
Part 3: Header Component (components/Header.tsx)
\
Top bar spanning the width, with logo "Parking Manager\" in red-green-yellow dots followed by text.\
Floor tabs: dynamically render from state (e.g., B1, B2 (active, purple bg), B3, B4, B5); clickable to switch current floor.\
Add a \"+\" button next to floors to open AddFloorModal for adding new floors (e.g., input for new floor name like B6).\
Stats: dynamically calculate and show \"X Filled Y Empty\" based on current floor and zone's hardcoded data.\
Notification bell icon with red dot (4 notifications).\
Blue \"Report Problem\" button with rounded corners.
Make it sticky at top.

Part 4: ZoneSelector Component (components/ZoneSelector.tsx)

Below header, tabs for zones: "Car Zone", "Motorcycle Zone", "Bicycle Zone" (active tab highlighted in purple).
Clickable to switch current zone, updating the ParkingGrid accordingly.
Use Tailwind for tab styling (e.g., flex row, rounded tabs).
