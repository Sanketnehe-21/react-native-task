# React Native Assignment

This project is built using **React Native with Expo** and demonstrates the implementation of common app features like authentication, API integration, navigation, state handling, and styling.

## Features Implemented

- **Login Screen**
  - Email & Password inputs
  - Login button with Alert to show entered details
- **Posts API Integration**
  - Fetch posts from `https://jsonplaceholder.typicode.com/posts`
  - Display posts in a FlatList
  - Tap on a post to navigate to a **Post Details** screen
- **Counter App**
  - Increment, Decrement, and Reset functionality
- **Navigation**
  - Implemented using **Expo Router (Stack Navigation)**
- **Styling**
  - Global header and footer with Flexbox layout
  - Black & White modern theme

## Project Structure

```
app/
├── index.tsx           # Home screen with navigation buttons
├── login.tsx           # Login Screen
├── posts.tsx           # Posts List Screen
├── post-details.tsx    # Post Details Screen
├── counter.tsx         # Counter Screen
components/
└── PostItem.tsx        # Reusable Post item component
styles/
└── globalStyles.tsx    # Global header/footer styles
types/
└── index.ts            # Type definitions (Post interface)
```

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Sanketnehe-21/react-native-task.git
cd react-native-task
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the project
```bash
npx expo start
```

## Tech Stack

- **React Native (Expo)**
- **Expo Router (Stack Navigation)**
- **TypeScript**
- **Flexbox for Layout**

## Notes

- Developed as part of an assignment to test knowledge of React Native basics, API integration, navigation, and state handling
- Clean and modular code with reusable components
