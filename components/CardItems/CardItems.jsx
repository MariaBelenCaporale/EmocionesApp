import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";


const CardItems = ({ titulo, subtitulo, icono }) => {
    return (
        <View style={styles.cardItems}>
            <Ionicons name={icono} size={24} color="black" />
            <View>
            <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 18 }}>{titulo}</Text>
            <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14 }}>{subtitulo}</Text>
            </View>
        </View>
    )
};


const styles = StyleSheet.create ({
    cardItems: {
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'space-between',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 16,
        height: 143,


        //IOS
        shadowColor: 'black',
        shadowOffset: { width:0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,

        //Android
        elevation: 1,
    },
});


export default CardItems;