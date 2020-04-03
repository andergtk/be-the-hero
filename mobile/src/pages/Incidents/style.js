import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 24,
    paddingHorizontal: 24,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerText: {
    color: '#737380',
    fontSize: 16,
  },

  headerIncidentsCounter: {
    color: '#13131a',
    fontWeight: 'bold'
  },

  title: {
    marginTop: 32,
    marginBottom: 8,
    color: '#13131a',
    fontSize: 32,
    fontWeight: 'bold',
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
  },

  incidentList: {
    marginTop: 32,
  },

  incident: {
    marginBottom: 16,
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
  },

  incidentProperty: {
    color: '#41414d',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },

  incidentValue: {
    marginTop: 8,
    marginBottom: 24,
    color: '#737380',
    fontSize: 16,
  },

  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    backgroundColor: 'rgba(224, 32, 65, .085)',
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 14,
    fontWeight: 'bold'
  },

  loading: {
    flex: 1,
    marginBottom: 24,
    textAlign: 'center',
    color: '#737380',
    fontSize: 16
  }
});