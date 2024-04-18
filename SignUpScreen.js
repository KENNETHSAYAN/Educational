import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
// Import for navigation (replace with your actual import statement)
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation(); // Access navigation object

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null); // Error state for registration issues

  const Source = require('../assets/icon.png'); // Replace with your logo source

  const handleRegister = async () => {
    setError(null); // Clear any previous errors before registration attempt

    if (!username.trim()) {
      setError('Please enter your username.');
      return;
    }
    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }
    if (!password.trim()) {
      setError('Please enter your password.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
      
    }
    navigation.navigate('Email'); // Redirect to Login screen (replace with your logic)
  };

  return (
    <View style={styles.container}>
      {/* Title stacked above the logo */}
      <Text style={styles.title}>Learnify</Text>
      <Image source={require('../assets/logo.png')} style={styles.logo} />

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry value={confirmPassword} onChangeText={setConfirmPassword} />

      <Pressable style={[styles.button]} disabled={false} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>

      <View style={{ flexDirection: 'row' }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ color: 'blue' }}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 32, // Increase font size for title
    marginTop:20,
  },
  logo: {
    width: '45%',
    height: '23%',
    marginTop:10,
    
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginBottom: 5,
    borderRadius: 30,
  },
  button: {
    backgroundColor: '#45b6fe',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});