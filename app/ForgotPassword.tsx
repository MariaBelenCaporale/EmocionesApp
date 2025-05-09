import ButtonPrincipal from "@/components/ButtonPrincipal/ButtonPrincipal";
import Header from "@/components/Header/Header";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";



const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-around' }}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                <Header
                    titulo='¡Te ayudamos!'
                    subtitulo='Ingresá tu email para recibir el código de verificación'
                />

                <View style={{ width: '100%', paddingHorizontal: 16, paddingVertical: 10, flex: 1 }}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="ejemplo@ejemplo.com"
                        placeholderTextColor="#888"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                
                <ButtonPrincipal 
                    onPress={() => { }}
                    titulo='Enviar código'
                    />

            </ScrollView>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    input: {
        height: 48,
        borderColor: '#E9E9E9',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontFamily: 'SatoshiRegular',
        fontSize: 16,
        color: '#000',
    },
    label: {
        fontFamily: 'SatoshiRegular',
        fontSize: 14,
        color: 'black',
        paddingBottom: 10,
    },
    scrollContent: {
        height: '100%',
    },
});


export default ForgotPassword;