import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface CardPersonajesProps {
    personaje: string;
    subtitulo: string;
    imagen: any;
    monedas: string | number;
    onPress: () => void;
}

const CardPersonajes: React.FC<CardPersonajesProps> = ({ personaje, imagen, monedas, onPress, subtitulo }) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%', height: 120, overflow: 'hidden' }}>
                <Image source={imagen} style={{ resizeMode: 'cover' }} />
            </View>
            <View style={{ alignItems: 'center', paddingTop: 10, }}>
                <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 16 }}>{personaje}</Text>
                <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14 }}>{monedas}</Text>
                <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14 }}>{subtitulo}</Text>
            </View>
        </Pressable>
    )
};


const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 'auto',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 16,
        gap: 10,
        borderWidth: .1,

    },
});


export default CardPersonajes;