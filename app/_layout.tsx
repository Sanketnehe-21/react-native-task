import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen 
          name="index" 
          options={{ 
            title: 'React Native Tasks',
            headerStyle: { backgroundColor: '#6366f1' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }} 
        />
        <Stack.Screen 
          name="login" 
          options={{ 
            title: 'Login Screen',
            headerStyle: { backgroundColor: '#6366f1' },
            headerTintColor: '#fff'
          }} 
        />
        <Stack.Screen 
          name="posts" 
          options={{ 
            title: 'Posts List',
            headerStyle: { backgroundColor: '#6366f1' },
            headerTintColor: '#fff'
          }} 
        />
        <Stack.Screen 
          name="post-details" 
          options={{ 
            title: 'Post Details',
            headerStyle: { backgroundColor: '#6366f1' },
            headerTintColor: '#fff'
          }} 
        />
        <Stack.Screen 
          name="counter" 
          options={{ 
            title: 'Counter App',
            headerStyle: { backgroundColor: '#6366f1' },
            headerTintColor: '#fff'
          }} 
        />
      </Stack>
    </>
  );
}