import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobCard = ({ job, featured }) => {
  const { title, company, location, salary, image } = job;

  return (
    <View style={[styles.card, featured && styles.featuredCard]}>
      <View style={styles.iconContainer}>
        <Image
          source={image}
          style={styles.icon}
        />
      </View>
      <View style={styles.jobInfo}>
        <Text style={[styles.title, featured && styles.featuredTitle]}>{title}</Text>
        <Text style={[styles.company, featured && styles.featuredCompany]}>{company}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={[styles.salary, featured && styles.featuredSalary]}>{salary}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, // for Android shadow
  },
  featuredCard: {
    backgroundColor: '#20539D',
    marginHorizontal: 10,
    width: 250,
    height: 150,
    justifyContent: 'space-around',
  },
  iconContainer: {
    marginRight: 15,
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  jobInfo: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuredTitle: {
    color: '#FFF',
  },
  company: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  featuredCompany: {
    color: '#FFF',
  },
  location: {
    fontSize: 12,
    color: '#AAA',
    marginBottom: 5,
  },
  salary: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuredSalary: {
    color: '#FFF',
  },
});

export default JobCard;
