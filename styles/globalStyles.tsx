import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  header: {
    backgroundColor: '#000000ff',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  footer: {
    backgroundColor: '#374151',
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});
