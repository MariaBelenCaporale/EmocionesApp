import ButtonPrincipal from '@/components/ButtonPrincipal/ButtonPrincipal';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isChecked, setChecked] = useState(false);

    const handleLogin = () => {
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
                >
                    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                        <View style={{ paddingVertical: 30, gap: 30 }}>
                            <View>
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
                            <View>
                                <Text style={styles.label}>Contraseña</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="*********"
                                    placeholderTextColor="#888"
                                    secureTextEntry
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <View style={styles.rememberMeRow}>
                                    <View style={styles.checkboxContainer}>
                                        <Checkbox
                                            style={styles.checkbox}
                                            value={isChecked}
                                            onValueChange={setChecked}
                                            color={isChecked ? '#000' : undefined}
                                        />
                                        <Text style={styles.checkboxText}>Recordarme</Text>
                                    </View>
                                    <Pressable>
                                        <Text style={styles.linkText}>¿Olvidaste la contraseña?</Text>
                                    </Pressable>
                                </View>
                            </View>
                        </View>

                        <View >
                            <ButtonPrincipal
                                onPress={handleLogin}
                                titulo="Iniciar sesión"
                            />
                            <Text style={styles.separator}>- o -</Text>
                            <View style={{ gap: 15 }}>
                                <ButtonPrincipal
                                    onPressDos={() => { }}
                                    tituloDos="Ingresar con Face ID"
                                />
                                <ButtonPrincipal
                                    onPressDos={() => { }}
                                    tituloDos="Iniciar sesión con Google"
                                    iconoDos={<Ionicons name="logo-google" size={24} color="black" />}
                                />
                            </View>
                            <View style={styles.signupRow}>
                                <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14 }}>¿Aún no tenés cuenta?</Text>
                                <Pressable onPress={() => router.push('/welcome')}>
                                    <Text style={{ fontFamily: 'SatoshiBold', fontSize: 14 }}>Crear cuenta</Text>
                                </Pressable>
                            </View>
                        </View>

                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
        padding: 16,
    },
    scrollContent: {
        height: 'auto',
        gap: 15,
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
    rememberMeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
    },
    checkbox: {
        borderRadius: 4,
        backgroundColor: '#D9D9D9',
        borderColor: '#D9D9D9',
    },
    checkboxText: {
        fontFamily: 'SatoshiMedium',
        fontSize: 12,
    },
    linkText: {
        fontFamily: 'SatoshiMedium',
        fontSize: 12,
    },
    separator: {
        textAlign: 'center',
        marginVertical: 16,
        fontFamily: 'SatoshiRegular',
    },
    signupRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        marginTop: 20,
    },

});

export default Login;
