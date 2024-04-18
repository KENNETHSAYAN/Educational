import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import for navigation

const ProfileScreen = () => {
  const navigation = useNavigation(); // Access navigation object

  const [user, setUser] = useState(null); // State to store user data

  // Simulate fetching user data (replace with your actual API call)
  useEffect(() => {
    const fetchUserData = async () => {
      // Simulate fetching data from an API or local storage
      const userData = {
        name: 'Kenneth Sayan',
        gender: 'Male',
        birthDate: '1990-01-01', // Adjust format as needed
        mobileNumber: '+1234567890',
        email: 'sayankennethangel@gmail.com',
      };
      setUser(userData);
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'Yes', onPress: () => navigation.navigate('Login') }, // Assuming Login screen name
      ]
    );
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <View style={styles.profileHeader}>
            {/* Logo (replace with your logo image) */}
            <Image
              source={require('../assets/logo.png')} // Adjust path to your logo
              style={[styles.logo, { position: 'absolute', bottom: 20, marginHorizontal:20 }]} // Absolute positioning
            />

            {/* User name */}
            <Text style={styles.profileName}>{user.name}</Text>
          </View>

          {/* User details */}
          <Text style={styles.profileDetailLabel}>Gender:</Text>
          <Text style={styles.profileDetailValue}>{user.gender}</Text>

          <Text style={styles.profileDetailLabel}>Birth Date:</Text>
          <Text style={styles.profileDetailValue}>{user.birthDate}</Text>

          <Text style={styles.profileDetailLabel}>Mobile Number:</Text>
          <Text style={styles.profileDetailValue}>{user.mobileNumber}</Text>

          <Text style={styles.profileDetailLabel}>Email Address:</Text>
          <Text style={styles.profileDetailValue}>{user.email}</Text>

          {/* Add other profile information display components here (optional) */}

          <TouchableOpacity style={styles.button} onPress={handleLogout}>
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text>Loading user profile...</Text>
      )}
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  profileHeader: {
    flexDirection: 'row', // Maintain horizontal arrangement
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileDetailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  profileDetailValue: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#45b6fe',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginTop: 20, // Add some margin after user details
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});