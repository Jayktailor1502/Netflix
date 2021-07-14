import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingScreen from '../Screens/OnBoardingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../Screens/LoginScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); 
  
    // GoogleSignin.configure({
    //   webClientId: "488485713978-0nrkoghs0kbnce4li567r7mlu6ibpcci.apps.googleusercontent.com",
    // });
  
  }, []);

  if (isFirstLaunch === null) {
    return null; 
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'LoginScreen';
  }

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Onboarding"
        component={OnBoardingScreen}
        options={{header: () => null}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{header: () => null}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;