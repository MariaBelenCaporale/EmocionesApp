import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Monedas from "./Monedas";


const CardMonedas = ({ onPress }) => {
    return (
        <View style={{ borderRadius: 8 , borderWidth: 1,  backgroundColor: 'white', paddingHorizontal: 8, paddingVertical: 16, gap: 24 }}>
            <View style={{ gap: 6 }}>
                <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 20 }}>¡Usá tus monedas!</Text>
                <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 16 }}>Desbloqueá versiones especiales de tus personajes.</Text>
            </View>

            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Monedas />
                <Pressable
                    onPress={onPress}
                    style={{
                        gap: 5,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Ionicons name="information-circle-outline" size={24} color={'black'} />
                    <Text style={{ fontFamily: 'SatoshiBold', fontSize: 14 }}>Info</Text>
                </Pressable>
            </View>
        </View>
    )
};



export default CardMonedas;