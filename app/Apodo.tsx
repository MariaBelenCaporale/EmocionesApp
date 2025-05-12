import ButtonPrincipal from "@/components/ButtonPrincipal/ButtonPrincipal";
import { useRouter } from "expo-router";
import React from "react";
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useUser } from "./Context/UserContext";


const Apodo = () => {
    const router = useRouter();
    const [apodo, setApodo] = React.useState('');
    const { setApodo: saveApodo } = useUser();

    const handleContinue = () => {
        saveApodo(apodo);
        router.push('/NuevaCuenta');
    };


    return (
        <SafeAreaProvider style={{ flex: 1, backgroundColor: '#fff' }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
           
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    <View style={{ width: '100%', paddingHorizontal: 16, paddingVertical: 50, flex: 1, gap: 30 }}>
                        <View>
                            <Text style={styles.label}>¿Cómo te gustaría que te llamemos?</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Zoella"
                                placeholderTextColor="#888"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                value={apodo}
                                onChangeText={setApodo}
                            />
                        </View>

                    </View>

                    <ButtonPrincipal
                        onPress={handleContinue}
                        titulo='Continuar'
                        disabled={apodo.trim().length === 0}
                    />

                </View>
            </ScrollView>

            </TouchableWithoutFeedback>
        </SafeAreaProvider>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
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
        flexGrow: 1,
    }
});


export default Apodo;