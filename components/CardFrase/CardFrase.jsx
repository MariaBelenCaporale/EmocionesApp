import React from "react";
import { StyleSheet, Text, View } from "react-native";


const CardFrase = () => {
    return (
        <View style={ styles.cardFrase }>
            <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 18}}>Tu frase</Text>
            <Text style={{ fontFamily: 'SatoshiMediumItalic', fontSize: 16 }}>Acá va a venir una frase según cómo se siente el user</Text>
        </View>
    )
};

const styles = StyleSheet.create ({
    cardFrase: {
        width: '100%',
        justifyContent: 'center',
        height: 'auto',
        paddingVertical: 24,
        paddingHorizontal: 16,

        borderWidth: 1,
        borderColor: '#BDBDBD',
        borderRadius: 12,
    },
});


export default CardFrase;