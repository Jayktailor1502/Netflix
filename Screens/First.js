import React ,{useContext} from 'react'
import {View, Text, Button} from 'react-native'
import { AuthContext } from '../Navigation/AuthProvider';

function First({navigation}) {

  const { logout } = useContext(AuthContext);

  return (
    console.log('first'),
    <View>
      <Text>Hi Hello....</Text>
      <Text>Netflix 1</Text>
    <Button 
      title = "sign out"
      onPress = {logout}
      />
    </View>
  )
}

export default First
