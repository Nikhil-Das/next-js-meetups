# Next.js Meetups

A full-stack Next.js application for managing and displaying meetups. Users can view existing meetups, see detailed information about each meetup, and create new meetups. The application uses MongoDB for data storage and Next.js API routes for handling backend functionality.

## Features

- View list of all meetups
- View detailed information about specific meetups
- Add new meetups with title, image, address, and description
- Responsive design with custom CSS modules
- Server-side rendering for optimal performance
- MongoDB integration for data persistence

## Tech Stack

- **Frontend**: React.js 18.2.0, Next.js 13.4.7
- **Backend**: Next.js API Routes
- **Database**: MongoDB 5.6.0
- **Styling**: CSS Modules

## Project Structure

```
├── components/
│   ├── layout/          # Layout components
│   ├── meetups/         # Meetup-related components
│   └── ui/              # Reusable UI components
├── pages/
│   ├── api/            # API routes
│   ├── [meetupId]/     # Dynamic meetup detail pages
│   └── new-meetup/     # New meetup creation page
└── styles/             # Global styles
```

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/Nikhil-Das/next-js-meetups.git
cd next-js-meetups
```

2. Install dependencies:
```bash
npm install
```

3. Set up your MongoDB connection:
   - Create a MongoDB database
   - Configure your connection string in the appropriate environment variables

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm start` - Starts the production server

## Project Components

### Layout Components
- `Layout.js` - Main layout wrapper
- `MainNavigation.js` - Navigation header

### Meetup Components
- `MeetupDetail.js` - Detailed view of a single meetup
- `MeetupItem.js` - Individual meetup card
- `MeetupList.js` - Grid layout of meetup items
- `NewMeetupForm.js` - Form for creating new meetups

### UI Components
- `Card.js` - Reusable card component for consistent styling

## Deployment

The application can be deployed to various platforms that support Next.js applications, such as:
- Vercel (recommended)
- Netlify
- AWS
- Digital Ocean

## License

This project is private and not licensed for public use.

## Version

Current version: 0.1.0