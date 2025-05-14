import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";


const HeaderImg = ({ imagen, titulo, onPress, mostrarInfo = false }) => {
    return (
        <View style={styles.container}>
            <Image source={imagen} />
            <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 30, textAlign: 'center' }}>{titulo}</Text>
            
            {mostrarInfo && (
                <Pressable
                    onPress={onPress}
                    style={{
                        gap: 5,
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        width: '100%',
                    }}
                >
                    <Ionicons name="information-circle-outline" size={24} color={'black'} />
                    <Text style={{ fontFamily: 'SatoshiBold', fontSize: 14 }}>Info</Text>
                </Pressable>
            )}
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        gap: 10,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        paddingHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        height: 190,

         // iOS
         shadowColor: 'black',
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.1,
         shadowRadius: 4,
 
         // Android
         elevation: 1,
    }
});

export default HeaderImg;