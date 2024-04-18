import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ConfirmEmailScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [message, setMessage] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false); // State for resend button disabling

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const handleCodeChange = (text) => {
    setConfirmationCode(text);
  };

  const submitConfirmationCode = async () => {
    setMessage(''); // Clear any previous message

    // Simulate sending code for validation (replace with actual API call)
    const response = await simulateValidation(username, confirmationCode);

    if (response.success) {
      setMessage('Email confirmed successfully!');
      // Navigate to a success screen or logged-in area (replace with your logic)
      navigation.navigate('SuccessScreen');
    } else {
      setMessage('Invalid confirmation code.');
    }
  };

  const resendConfirmationCode = async () => {
    setMessage(''); // Clear any previous message
    setResendDisabled(true); // Disable resend button temporarily

    // Simulate sending a new confirmation code (replace with actual API call)
    await simulateResendCode(username); // Call your resend logic

    // Simulate a cooldown period (adjust cooldown time as needed)
    setTimeout(() => setResendDisabled(false), 30000); // Enable resend after 30 seconds
  };

  const simulateValidation = (username, code) => {
    // Replace with your logic to call your backend API for validation
    // This is just a simulation for demo purposes
    return new Promise((resolve) => {
      setTimeout(() => {
        if (username === 'KennethSayan' && code === '123456') {
          resolve({ success: true });
        } else {
          resolve({ success: false });
        }
      }, 1000); // Simulate an asynchronous validation call
    });
  };

  const simulateResendCode = (username) => {
    // Replace with your logic to call your backend API to resend code
    // This is just a simulation for demo purposes
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Code resent for username:', username);
        resolve(); // Simulate successful resend
      }, 2000); // Simulate an asynchronous resend call
    });
  };

  useEffect(() => {
    // Optional: Reset states on screen load (prevents data persistence)
    setUsername('');
    setConfirmationCode('');
    setMessage('');
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Your Email</Text>
      <Text style={styles.instruction}>
        Please enter the username and confirmation code you received via email to verify your account.
      </Text>
      <TextInput
        style={styles.textInput}
        value={username}
        onChangeText={handleUsernameChange}
        placeholder="Username"
      />
      <TextInput
        style={styles.textInput}
        value={confirmationCode}
        onChangeText={handleCodeChange}
        placeholder="Confirmation Code"
        keyboardType="numeric"
      />
      <Text style={styles.message}>{message}</Text>
      <View style={styles.actionsRow}>
        <Button title="Confirm Email" onPress={submitConfirmationCode} />
        <View style={styles.actionsRowInner}>
          <TouchableOpacity disabled={resendDisabled} onPress={resendConfirmationCode}>
            <Text style={{ color: resendDisabled ? '#ccc' : 'blue', marginLeft: 10 }}>
              Resend Code
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: 'blue', marginLeft: 10 }}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    
  },
  instruction: {
    fontSize: 16,
    marginBottom: 20,
  },
  textInput: {
    height: 40,
    width:'100%', 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius:20,
    padding: 10,
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
    color: 'red',
  },
  actionsRowInner: {
    flexDirection: 'row', // Arrange elements within this view horizontally
    justifyContent: 'space-between', // Distribute remaining space evenly
    marginRight: 11, // Add margin to the left side
  },
   actionsRow: {
    
    marginLeft: 10, // Add margin to the left side
    
    borderRadius:30,
  },
});

export default ConfirmEmailScreen;