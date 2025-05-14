import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";




const Monedas = ({ onPress }) => {
    const router = useRouter();

    return (
        <Pressable style={styles.monedas} onPress={onPress}>
            <Ionicons name="diamond-outline" size={18} color={'black'}></Ionicons>
            <Text style={{ width: 'auto', fontFamily: 'SatoshiBold', fontSize: 16 }}>30M</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create ({
    monedas: {
        backgroundColor: '#FFEBAD',
        width: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingHorizontal: 8,
        paddingVertical: 8,
        flexDirection: 'row',
    },
})


export default Monedas;