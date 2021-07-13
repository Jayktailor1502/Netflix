import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const AppStack = ({ navigation }) => {
    return (
        <Stack.Navigator>
            {/* <Stack.Screen
                name="Available Consultations"
                component={Consultation}
                initialParams={{ date: null, filter: false}}
                options={{
                    headerTitleAlign: 'center',
                    headerTitleStyle: {
                        fontFamily: 'Kufam-SemiBoldItalic',
                        fontSize: 20,
                    },
                    headerStyle: {
                        shadowColor: '#fff',
                        elevation: 2,
                        backgroundColor: "skyblue",
                    },
                }}
            /> */}
             <Stack.Screen
                name="First"
                component={Filter}
                options={{ headerShown: true }}
            />
        </Stack.Navigator>
    )
}

export default AppStack
