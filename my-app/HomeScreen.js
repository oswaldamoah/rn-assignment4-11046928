import React from 'react';
import { View, Text, FlatList, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import JobCard from './JobCard';

const jobs = [
  // Featured Jobs
  { id: '1', title: 'Software Engineer', company: 'Facebook', location: 'Menlo Park, CA', salary: '$180,000', featured: true, image: require('./assets/facebook.png') },
  { id: '2', title: 'Data Scientist', company: 'Google', location: 'Mountain View, CA', salary: '$170,000', featured: true, image: require('./assets/google.png') },
  { id: '3', title: 'Marketing Manager', company: 'Apple', location: 'Cupertino, CA', salary: '$120,000', featured: true, image: require('./assets/apple.png') },
  { id: '4', title: 'UX/UI Designer', company: 'Microsoft', location: 'Redmond, WA', salary: '$110,000', featured: true, image: require('./assets/microsoft.png') },
  { id: '5', title: 'Sales Manager', company: 'Tesla', location: 'Austin, TX', salary: '$100,000 + commission', featured: true, image: require('./assets/tesla.png') },
  { id: '6', title: 'Business Analyst', company: 'Twitch', location: 'Remote', salary: '$90,000', featured: true, image: require('./assets/twitch.png') },
  { id: '7', title: 'Project Manager', company: 'Playstation', location: 'Los Angeles, CA', salary: '$85,000', featured: true, image: require('./assets/playstation.png') },
  { id: '8', title: 'Human Resources Specialist', company: 'Spotify', location: 'New York, NY', salary: '$75,000', featured: true, image: require('./assets/spotify.png') },

  // Popular Jobs
  { id: '9', title: 'Full Stack Developer', company: 'Amazon', location: 'Seattle, WA', salary: '$150,000', featured: false, image: require('./assets/amazon.png') },
  { id: '10', title: 'Backend Engineer', company: 'Netflix', location: 'Los Gatos, CA', salary: '$140,000', featured: false, image: require('./assets/netflix.png') },
  { id: '11', title: 'Front End Developer', company: 'Airbnb', location: 'San Francisco, CA', salary: '$130,000', featured: false, image: require('./assets/airbnb.png') },
  { id: '12', title: 'Content Writer', company: 'BBC News', location: 'Remote', salary: '$80,000', featured: false, image: require('./assets/bbc.png') },
  { id: '13', title: 'Graphic Designer', company: 'Native Magazine', location: 'Abuja, Nigeria', salary: '$6,000 negotiable', featured: false, image: require('./assets/nativemag.png') },
  { id: '14', title: 'Web Developer', company: 'YouTube', location: 'Miami, FL', salary: '$70,000', featured: false, image: require('./assets/youtube.png') },
  { id: '15', title: 'Social Media Manager', company: 'DefJam Recordings', location: 'Austin, TX', salary: '$55,000', featured: false, image: require('./assets/defjam.png') },
  { id: '16', title: 'Hospitality Representative', company: 'Burj Khalifa', location: 'Dubai, UAE', salary: '$45,000', featured: false, image: require('./assets/burj.png') },
];

const HomeScreen = ({ route }) => {
  const { email, name } = route.params || {};

  const renderFeaturedJobs = ({ item }) => <JobCard job={item} featured />;
  const renderPopularJobs = ({ item }) => <JobCard job={item} />;

  const featuredJobs = jobs.filter(job => job.featured);
  const popularJobs = jobs.filter(job => !job.featured);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
        <Image
          source={require('./assets/profile.png')}
          style={styles.profileImage}
        />
      </View>
      <TextInput
        style={styles.searchInput}
        placeholder="Search a job or position"
      />
      <View style={styles.jobSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={featuredJobs}
          renderItem={renderFeaturedJobs}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.jobSection}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
          <TouchableOpacity onPress={() => { }}>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={popularJobs}
          renderItem={renderPopularJobs}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userInfo: {
    flexDirection: 'column',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#7A7A7A',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchInput: {
    height: 50,
    borderRadius: 25,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  jobSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllText: {
    fontSize: 14,
    color: '#20539D',
  },
});

export default HomeScreen;
