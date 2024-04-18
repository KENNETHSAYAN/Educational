import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Import for bottom tab navigation
import ProfileScreen from './ProfileScreen';
import SignInScreen from '../Authentication/SignInScreen';
import Explorer from './Explorer';

// Replace with your actual API endpoint or data source
const COURSES_DATA = [
  { id: 1, title: 'Mathematics', image: require('../assets/math.png') },
  { id: 2, title: 'Science', image: require('../assets/science.png') },
  { id: 3, title: 'History', image: require('../assets/history.png') },
  { id: 4, title: 'English', image: require('../assets/english.png') },
  // Add more courses here
];

const HomeScreen = ({ navigation }) => {
  const [courses, setCourses] = useState([]);

  // Simulate fetching data on component mount (replace with actual API call)
  useEffect(() => {
    setCourses(COURSES_DATA);
  }, []);

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      style={styles.courseItem}
      onPress={() => navigation.navigate('CourseDetails', { courseId: item.id })}
    >
      <View style={styles.courseImageContainer}>
        <Image source={item.image} style={styles.courseImage} />
      </View>
      <Text style={styles.courseTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header with logo and app name (add your logo image) */}
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.appName}>Learning Platform</Text>
      </View>

      <Text style={styles.heading}>Explore Courses</Text>

      {/* Course list with grid layout and elevated items */}
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={styles.courseList}
      />
    </View>
  );
};

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#45b6fe', // Adjust active tab color
        tabBarInactiveTintColor: '#ccc', // Adjust inactive tab color
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
  tabBarIcon: ({ color }) => (
    <Image source={require('../assets/home-icon.png')} style={{ tintColor: color, width: 24, height: 24 }} />
  ),
  headerShown: false
}} />

<Tab.Screen name="Explore" component={Explorer} options={{
  tabBarIcon: ({ color }) => (
    <Image source={require('../assets/School-icon.png')} style={{ tintColor: color, width: 24, height: 24 }} />
  ),
  headerShown: false
}} />

<Tab.Screen name="Profile" component={ProfileScreen} options={{
  tabBarIcon: ({ color }) => (
    <Image source={require('../assets/Profile-icon.png')} style={{ tintColor: color, width: 24, height: 24}} />
  ),
  headerShown: false,
  
}} />
    </Tab.Navigator>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Light background color
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 70,
    height: 60,
    marginRight:10,
    marginTop:100,
  },
  appName: {
    fontSize: 20,
    marginTop:100,
    fontWeight: 'bold',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop: 50,
  },
  courseList: {
    padding: 2, // Add some padding to
  },
  courseItem: {
    width: '50%',
    marginBottom: 100,
    alignItems: 'center',
    backgroundColor: '#fff', // White background for course items
    borderRadius: 10, // Rounded corners
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2, // Add subtle shadow for elevation
    elevation: 2, // Additional elevation for more visual separation

  },
  courseImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden', // Clip image within container
  },

  courseImage: {
    width: '100%',
    borderColor: 'black',
    height: '100%',
    resizeMode: 'cover', // Stretch image to fill container
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});
