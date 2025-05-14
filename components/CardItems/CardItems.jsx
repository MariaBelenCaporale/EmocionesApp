import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


const CardItems = ({ titulo, subtitulo, icono, onPress }) => {
    return (
        <Pressable onPress={onPress} style={styles.cardItems}>
            <View style={{ backgroundColor: '#FEEBEB', width: 30, height: 30, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name={icono} size={20} color="black" />
            </View>
            <View>
                <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 18 }}>{titulo}</Text>
                <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14 }}>{subtitulo}</Text>
            </View>
        </Pressable>
    )
}; 


const styles = StyleSheet.create({
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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,

        //Android
        elevation: 1,
    },
});


export default CardItems;