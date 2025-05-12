import { useUser } from "@/app/Context/UserContext";
import { Ionicons } from '@expo/vector-icons';
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Chip from "../Chip/Chip";

const CardEstado = () => {
    const { emocionSeleccionada } = useUser();

    return (
        
        <View style={styles.card}>
            <Text>Fecha</Text>
            <Text>Último estado actualizado</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Chip emocion={emocionSeleccionada} fixed />
                <Pressable style={{ flexDirection: 'row', gap: 2}}>
                    <Text style={{ fontFamily: 'SatoshiMedium', fontSize: 14  }}>Agregar emocion</Text>
                    <Ionicons name="chevron-forward-outline" size={18} color="black" />
                </Pressable>
            </View>
        </View>
    )
};


const styles = StyleSheet.create ({
    card: {
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 24,
        gap: 10,

        //IOS
        shadowColor: 'black',
        shadowOffset: { width:0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,

        //Android
        elevation: 1,
   
    },
});


export default CardEstado;