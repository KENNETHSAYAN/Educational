import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import SignInScreen from './Authentication/SignInScreen';
import SignUpScreen from './Authentication/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ConfirmEmailScreen from './screens/ConfirmEmailScreen/ConfirmEmailScreen';
import LandingPage from './screens/landingpage';



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="landing" component={LandingPage} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={SignInScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Register" component={SignUpScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Forgot" component={ForgotPassword} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Email" component={ConfirmEmailScreen} options={{headerShown: false}}/>
        


        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;