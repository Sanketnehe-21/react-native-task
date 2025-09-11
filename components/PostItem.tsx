import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Post } from '../types';

interface PostItemProps {
  post: Post;
}

export default function PostItem({ post }: PostItemProps) {
  const router = useRouter();

  if (!post) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Post data not available</Text>
      </View>
    );
  }

  const handlePress = () => {
    if (!post.id || !post.title || !post.body || !post.userId) {
      console.warn('Missing post data:', post);
      return;
    }

    router.push({
      pathname: '/postdetails',
      params: {
        id: post.id.toString(),
        title: post.title,
        body: post.body,
        userId: post.userId.toString(),
      },
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.header}>
        <Text style={styles.id}>#{post.id || 'N/A'}</Text>
        <Text style={styles.userId}>User {post.userId || 'Unknown'}</Text>
      </View>
      <Text style={styles.title} numberOfLines={2}>
        {post.title || 'No title available'}
      </Text>
      <Text style={styles.body} numberOfLines={3}>
        {post.body || 'No content available'}
      </Text>
      <View style={styles.footer}>
        <Text style={styles.readMore}>Tap to read more →</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 6,
    padding: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  id: {
    fontSize: 12,
    fontWeight: '700',
    color: '#6366f1',
    backgroundColor: '#ede9fe',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  userId: {
    fontSize: 12,
    color: '#6b7280',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
    lineHeight: 22,
  },
  body: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    alignItems: 'flex-end',
  },
  readMore: {
    fontSize: 12,
    color: '#6366f1',
    fontWeight: '500',
  },
  errorContainer: {
    backgroundColor: '#fee2e2',
    marginVertical: 6,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fecaca',
  },
  errorText: {
    color: '#dc2626',
    fontSize: 14,
    textAlign: 'center',
  },
});