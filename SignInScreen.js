import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Linking } from 'react-native'; // Import for using Linking API
import { useNavigation } from '@react-navigation/native'; // Import for navigation

const SignInScreen = () => {
  const navigation = useNavigation(); // Access navigation object

  const [username, setUsername] = useState(''); // Update state variable name
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Error state for login issues
  const [rememberMe, setRememberMe] = useState(true); // State for remember me checkbox

  const handleLogin = async () => {
    setError(null); // Clear any previous errors before login attempt

    if (!username.trim()) {
      setError('Please enter your username.');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }

    // Simulate successful login (replace with your actual API call)
    console.log('Login successful (simulated)');

    // Handle remember me functionality (replace with your storage logic)
    if (rememberMe) {
      // Store login credentials in secure storage (e.g., AsyncStorage)
      console.log('Remember Me enabled, storing credentials (simulated)');
    }
    navigation.navigate('Home'); // Redirect to home screen
  };

  const handleForgotPassword = () => {
    // Implement logic to handle forgot password functionality (e.g., navigate to forgot password screen)
    console.log('Forgot Password)'); // Replace with actual implementation
    navigation.navigate('Forgot');
  };
  

  return (
    <View style={styles.container}>
      {/* Title stacked above the logo */}
      <Text style={styles.title}>Learnify</Text>
      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Username" // Update placeholder text
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Pressable style={styles.checkbox} onPress={() => setRememberMe(!rememberMe)}>
          {rememberMe && <Image source={require('../assets/check.png')} style={styles.checkIcon} />}
        </Pressable>
        <Text style={styles.checkboxText}>Remember Me</Text>
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={{ color: 'blue' }}>Register</Text>
        </TouchableOpacity>
      </View>

      {/* Social Media Links Section */}
      <View style={styles.socialMediaLinks}>
        {/* Facebook Icon */}
        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/')}>
          <Image source={require('../assets/facebook.png')} style={styles.socialMediaIcon} />
        </TouchableOpacity>

        {/* Google Icon */}
        <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/')}>
          <Image source={require('../assets/gmail.jpg')} style={styles.socialMediaIcon} />
        </TouchableOpacity>

        {/* Twitter Icon */}
        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/')}>
          <Image source={require('../assets/twitter.png')} style={styles.socialMediaIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32, // Increase font size for title
    marginBottom: 20, // Add some space between title and logo
    marginTop:10,
  },
  logo: {
    width: '64%',
    height: '33%',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginBottom: 10, // Add some spacing between input fields
    borderRadius: 30,
  },
  button: {
    backgroundColor: '#45b6fe',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc', // Border color for unchecked state
    marginRight: 10, // Add margin for spacing between checkbox and text
  },
  checkedCheckbox: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black', // Match button color for checked state (currently blue)
    position: 'absolute',
    top: 5, // Adjust vertical centering within checkbox border
    left: 5, // Adjust horizontal centering within checkbox border
  },
  checkboxText: {
    fontSize: 16,
  },
  forgotPasswordText:{
      fontSize: 16,
      marginLeft:43,
  },
  socialMediaLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20, // Add some space after login elements
  },
  socialMediaIcon: {
    width: 70,
    height: 50,
    resizeMode: 'contain', // Ensure icons scale properly
  },
  checkIcon:{
    height:13,
    width:13,
    marginTop:2,
    marginLeft:2,
   
  }
});