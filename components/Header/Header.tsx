import React from "react";
import { StyleSheet, Text, View } from "react-native";


const Header = ({ titulo, subtitulo }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 24, textAlign: 'center' }}>{titulo}</Text>
            <Text style={{ textAlign: 'center', fontFamily: 'SatoshiRegular', fontSize: 16 }}>{subtitulo}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        width: '100%', 
        backgroundColor:'white', 
        paddingHorizontal: 24, 
        gap: 16, 
        justifyContent: 'center', 
        paddingVertical: 12,
        height: 200,
    }
});

export default Header;