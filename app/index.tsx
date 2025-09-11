import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const navigationButtons = [
    { title: 'Task 1: Login Screen', route: '/login', color: '#000000ff' },
    { title: 'Task 2: API Posts List', route: '/posts', color: '#000000' },
    { title: 'Task 3: Counter App', route: '/counter', color: '#000000' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.welcomeText}>Choose task</Text>
        
        {navigationButtons.map((button, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.navigationButton, { backgroundColor: button.color }]}
            onPress={() => router.push(button.route as any)}
          >
            <Text style={styles.buttonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 30,
    color: '#374151',
    fontWeight: '500',
  },
  navigationButton: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginVertical: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});
