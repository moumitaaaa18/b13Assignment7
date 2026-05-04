KeenKeeper Project

This is a React (Vite) based web application to manage friendships and track interactions like Call, Text, and Video.

---

Features

- Home page with friend cards
- Friend details page (Call, Text, Video options)
- Timeline page (shows interaction history)
- Stats page (Pie chart using Recharts)
- Toast notification when clicking Call/Text/Video
- Loading animation when navigating between pages
- 404 page for invalid routes
- Responsive design (mobile, tablet, desktop)
- Footer section (based on design)

---

How it works

- Click on a friend card → opens friend details
- Click Call / Text / Video →
  - Shows toast message
  - Adds activity to Timeline
- Timeline becomes empty again after refresh

---

Technologies Used

- React (Vite)
- React Router DOM
- Recharts
- React Toastify
- CSS

---

Run the project

npm install
npm run dev

---

Build

npm run build

---

Deployment

This project is deployed using Vercel.