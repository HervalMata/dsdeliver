import React from 'react';
import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => (
    <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.text}>DS Deliver</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#DA5C5C',
        height: 100,
        paddingTop: 50,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        fontWeight:'bold',
        fontSize: 18,
        lineHeight: 25,
        letterSpacing: -0.24,
        color: '#FFF',
        marginLeft: 15,
        fontFamily: 'OpenSans_700Bold'
    }
});

export default Header;
