import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const Dots = ({ selected }) => {
    let backgroundColor;

    backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

    return (
        <View
            style={{
                width: 6,
                height: 6,
                marginHorizontal: 3,
                backgroundColor
            }}
        />
    );
}

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Skip</Text>
    </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Next</Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity
        style={{ marginHorizontal: 10 }}
        {...props}
    >
        <Text style={{ fontSize: 16 }}>Done</Text>
    </TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
    return (
        <>
            <View style={{ flex: 1 }}>
                <Onboarding
                    SkipButtonComponent={Skip}
                    NextButtonComponent={Next}
                    DoneButtonComponent={Done}
                    DotComponent={Dots}
                    onSkip={() => navigation.replace("LoginScreen")}
                    onDone={() => navigation.navigate("LoginScreen")}
                    pages={[
                        {
                            // rgba(52, 52, 52, 0.0)
                            backgroundColor: 'red',
                            image: <Image style={styles.image} source={require('../Assets/s1.jpg')} />,
                            title: 'netflix',
                            subtitle: 'Netflix',
                        },
                        {
                            backgroundColor: 'red',
                            image: <Image style={styles.image} source={require('../Assets/s2.jpg')} />,
                            subtitle: 'Netflix',
                            title: 'netflix'
                        },
                        {
                            backgroundColor: 'red',
                            image: <Image style={styles.image} source={require('../Assets/s3.jpg')} />,
                            subtitle: 'Share Your Thoughts With Similar Kind of People',
                            title: 'netflix',
                        },
                        {
                            backgroundColor: 'red',
                            image: <Image style={styles.image} source={require('../Assets/s4.jpg')} />,
                            subtitle: "Let The Spot Light Capture You",
                            title: 'netflix',
                        },
                    ]}
                />
            </View>
        </>
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        resizeMode: 'center',
        // width: '99%',
        top: 40,
        // bottom: 50,
    },
    btn : {
        width: '80%',
    }
});