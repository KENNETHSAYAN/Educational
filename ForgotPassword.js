import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import for navigation

const ForgotPassword = () => {
  const navigation = useNavigation(); // Access navigation object

  const [email, setEmail] = useState('');
  const [error, setError] = useState(null); // Error state for forgot password attempt
  const [success, setSuccess] = useState(null); // State variable for success message

  const handleForgotPassword = async () => {
    setError(null); // Clear any previous errors before request

    if (!email.trim()) {
      setError('Please enter your email address.');
      return;
    }

    // Simulate sending a reset password email (without actual API call)
    console.log('Forgot password request sent for:', email);
    setSuccess('A reset password link has been sent to your email'); // Simulate success message
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
      />
    
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Send Reset Password</Text>
      </TouchableOpacity>

      {success && <Text style={styles.successText}>{success}</Text>}

      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginTop: 150,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  errorText: {
    color: 'red',
  },
  successText: {
    color: 'green',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '100%',
    marginTop: 10,
    borderRadius: 30,
  },
  button: {
    backgroundColor: '#45b6fe',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginTop: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  backButton: {
    color: 'blue',
  },
});