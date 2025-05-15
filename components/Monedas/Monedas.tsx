import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";




const Monedas = ({ onPress }: { onPress: () => void }) => {
    const router = useRouter();

    return (
        <Pressable style={styles.monedas} onPress={onPress}>
            <Ionicons name="diamond-outline" size={16} color={'black'}></Ionicons>
            <Text style={{ width: 'auto', fontFamily: 'SatoshiBold', fontSize: 14 }}>30M</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create ({
    monedas: {
        backgroundColor: '#FFF5D6',
        width: 'auto',
        borderRadius: 50,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
    },
})


export default Monedas;