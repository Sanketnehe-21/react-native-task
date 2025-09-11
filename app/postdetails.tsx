import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function PostDetailsScreen() {
  const params = useLocalSearchParams();

  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const title = Array.isArray(params.title) ? params.title[0] : params.title;
  const body = Array.isArray(params.body) ? params.body[0] : params.body;
  const userId = Array.isArray(params.userId) ? params.userId[0] : params.userId;

  if (!id || !title || !body || !userId) {
    return (
      <View style={styles.container}>
        <View style={globalStyles.header}>
          <Text style={globalStyles.headerText}>Post Details</Text>
        </View>

        <View style={styles.errorContainer}>
          <Text style={styles.errorTitle}>Post Not Found</Text>
          <Text style={styles.errorText}>
            The requested post could not be loaded. Please try again.
          </Text>
          <View style={styles.debugInfo}>
            <Text style={styles.debugTitle}>Debug Info:</Text>
            <Text style={styles.debugText}>ID: {id || 'Missing'}</Text>
            <Text style={styles.debugText}>Title: {title ? 'Present' : 'Missing'}</Text>
            <Text style={styles.debugText}>Body: {body ? 'Present' : 'Missing'}</Text>
            <Text style={styles.debugText}>User ID: {userId || 'Missing'}</Text>
          </View>
        </View>


      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerText}>Post #{id}</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.postContainer}>
          <View style={styles.metaInfo}>
            <Text style={styles.metaText}>Post ID: {id}</Text>
            <Text style={styles.metaText}>User ID: {userId}</Text>
          </View>

          <Text style={styles.title}>{title}</Text>
          <Text style={styles.body}>{body}</Text>


        </View>
      </ScrollView>


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
  postContainer: {
    margin: 16,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  metaInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  metaText: {
    fontSize: 12,
    color: '#6b7280',
    fontWeight: '500',
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
    marginBottom: 16,
    lineHeight: 32,
  },
  body: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
    marginBottom: 24,
  },
  additionalInfo: {
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#000000ff',
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#dc2626',
    marginBottom: 12,
  },
  errorText: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
  },
  debugInfo: {
    backgroundColor: '#f3f4f6',
    padding: 16,
    borderRadius: 8,
    width: '100%',
    maxWidth: 300,
  },
  debugTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 8,
  },
  debugText: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 4,
  },
});