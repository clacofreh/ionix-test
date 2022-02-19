import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {PermissionContext} from '../context/PermissionsContext';
import HomeScreen from '../screens/HomeScreen';
import LoadingScreen from '../screens/LoadingScreen';
import PermissionsScreen from '../screens/PermissionsScreen';

//Se crea el stack para asignar screens
const Stack = createStackNavigator();

const Navigator = () => {
  const {permissions} = useContext(PermissionContext);

  if (permissions.locationStatus === 'unavailable') {
    return <LoadingScreen />;
  }
  return (
    <Stack.Navigator
      initialRouteName="Permissions"
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white',
        },
      }}>
      {permissions.locationStatus === 'granted' ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Permissions" component={PermissionsScreen} />
      )}
    </Stack.Navigator>
  );
};

export default Navigator;
