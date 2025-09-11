import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import PostItem from '../components/PostItem';
import { globalStyles } from '../styles/globalStyles';
import { Post } from '../types';

export default function PostsScreen() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      const validPosts = data.filter((post: any) => 
        post && 
        typeof post.id === 'number' && 
        typeof post.userId === 'number' && 
        typeof post.title === 'string' && 
        typeof post.body === 'string'
      );
      
      console.log(`Loaded ${validPosts.length} valid posts out of ${data.length} total`);
      setPosts(validPosts);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch posts. Please try again.');
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    fetchPosts();
  };

  const renderPost = ({ item, index }: { item: Post; index: number }) => {
   
    if (!item) {
      console.warn(`Post at index ${index} is null/undefined`);
      return null;
    }
    return <PostItem post={item} />;
  };

  const renderEmptyState = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No posts available</Text>
    </View>
  );

  if (loading && !refreshing) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6366f1" />
        <Text style={styles.loadingText}>Loading posts...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerText}>Posts ({posts.length})</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item, index) => item?.id ? item.id.toString() : `post-${index}`}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={renderEmptyState}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#6366f1']}
              tintColor="#6366f1"
            />
          }
        />
      </View>

      <View style={globalStyles.footer}>
        <Text style={globalStyles.footerText}>End of List</Text>
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
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#6b7280',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
});