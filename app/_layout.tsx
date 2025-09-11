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
            headerStyle: { backgroundColor: '#000000ff' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' }
          }} 
        />
        <Stack.Screen 
          name="login" 
          options={{ 
            headerShown:false,
            title: 'Login Screen',
            headerStyle: { backgroundColor: '#000000ff' },
            headerTintColor: '#fff'
          }} 
        />
        <Stack.Screen 
          name="posts" 
          options={{ 
            headerShown:false,
            title: 'Posts List',
            headerStyle: { backgroundColor: '#000000ff' },
            headerTintColor: '#fff'
          }} 
        />
        <Stack.Screen 
          name="post-details" 
          options={{ 
            headerShown:false,
            title: 'Post Details',
            headerStyle: { backgroundColor: '#000000ff' },
            headerTintColor: '#fff'
          }} 
        />
        <Stack.Screen 
          name="counter" 
          options={{ 
            title: 'Counter App',
            headerShown:false,
            headerStyle: { backgroundColor: '#000000ff' },
            headerTintColor: '#fff'
          }} 
        />
      </Stack>
    </>
  );
}