import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import { RectButton } from "react-native-gesture-handler";
import Header from "../Header";

const Home = () => {
    const navigation = useNavigation();
    const handleOnPress = () => {
        navigation.navigate('Orders');
    }

    return (
        <>
            <Header />
            <View style={styles.container}>
                <Image source={require('../../assets/deliveryman.png')} />
                <Text style={styles.title}>Acompanhe os pedidos e {'\n'} entregue no prazo!</Text>
                <Text style={styles.subtitle}>Receba todos os pedidos do seu {'\n'} restaurante na palma da sua mão!</Text>
            </View>
            <View style={styles.footer}>
                <RectButton style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.buttonText}>VER PEDIDOS</Text>
                </RectButton>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
        alignItems: "center"
    },
    title: {
        color: '#263238',
        fontSize: 26,
        lineHeight: 35,
        fontWeight: "bold",
        marginTop: 31,
        textAlign: "center"
    },
    subtitle: {
        color: '#9E9E9E',
        fontSize: 16,
        lineHeight: 22,
        marginTop: 15,
        textAlign: "center"
    },
    footer: {
        marginTop: '15%',
        alignItems: "center"
    },
    button: {
        backgroundColor: '#DA5C5C',
        flexDirection: "row",
        borderRadius: 10
    },
    buttonText: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 50,
        paddingRight: 50,
        fontWeight: "bold",
        fontSize: 18,
        color: '#FFF',
        letterSpacing: -0.24
    }
});

export default Home;