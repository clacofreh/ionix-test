import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useContext} from 'react';
import {PermissionContext} from '../context/PermissionsContext';

const PermissionsScreen = () => {
  const {permissions, askLocationPermission} = useContext(PermissionContext);

  return (
    <View style={style.container}>
      <Text>PermissionsScreen</Text>
      <Button title="Press" onPress={askLocationPermission} />
      <Text>{JSON.stringify(permissions, null, 5)}</Text>
    </View>
  );
};

export default PermissionsScreen;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
