import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 32,
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  backIcon: {
    marginRight: 8,
  },

  incident: {
    marginTop: 24,
    marginBottom: 16,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },

  incidentProperty: {
    color: '#41414d',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    color: '#737380',
    fontSize: 16,
  },

  contactBox: {
    marginBottom: 24,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },

  heroTitle: {
    color: '#13131a',
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 24
  },

  heroDescription: {
    marginTop: 16,
    fontSize: 16,
    color: '#737380',
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },

  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    width: '46%',
    borderRadius: 8,
    backgroundColor: 'rgba(224, 32, 65, .085)',
  },

  actionText: {
    marginHorizontal: 8,
    color: '#E02041',
    fontWeight: 'bold',
  }
});