import ButtonPrincipal from "@/components/ButtonPrincipal/ButtonPrincipal";
import { useRouter } from "expo-router";
import React from "react";
import { Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from "react-native";


const NuevaCuenta = () => {
    const router = useRouter();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');

    const [emailTouched, setEmailTouched] = React.useState(false);
    const [passwordTouched, setPasswordTouched] = React.useState(false);
    const [repeatPasswordTouched, setRepeatPasswordTouched] = React.useState(false);

    const [emailError, setEmailError] = React.useState('');
    const [passwordError, setPasswordError] = React.useState('');
    const [repeatPasswordError, setRepeatPasswordError] = React.useState('');

    const isValidEmail = (email: string) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const validateEmail = () => {
        if (email.trim() === '') {
            setEmailError('El email es obligatorio');
        } else if (!isValidEmail(email)) {
            setEmailError('El email no es válido');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = () => {
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[^A-Za-z0-9]/.test(password);
        const isLongEnough = password.length >= 8;

        if (password === '') {
            setPasswordError('La contraseña es obligatoria');
        } else if (!hasUppercase || !hasNumber || !hasSpecialChar || !isLongEnough) {
            setPasswordError('La contraseña no cumple con los requisitos');
        } else {
            setPasswordError('');
        }
    };


    const validateRepeatPassword = () => {
        if (repeatPassword === '') {
            setRepeatPasswordError('Repetir la contraseña es obligatorio');
        } else if (password !== repeatPassword) {
            setRepeatPasswordError('Las contraseñas no coinciden');
        } else {
            setRepeatPasswordError('');
        }
    };





    React.useEffect(() => {
        if (emailTouched) validateEmail();
        if (passwordTouched) validatePassword();
        if (repeatPasswordTouched) validateRepeatPassword();
    }, [email, password, repeatPassword, emailTouched, passwordTouched, repeatPasswordTouched]);

    const isFormValid = () => {
        return !emailError && !passwordError && !repeatPasswordError;
    };





    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
                <View style={styles.container}>

                    <View style={{ width: '100%', paddingHorizontal: 16, paddingVertical: 20, flex: 1, gap: 30 }}>
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
                                onBlur={() => { setEmailTouched(true); validateEmail(); }}
                            />
                            {emailTouched && emailError !== '' && (
                                <Text style={styles.errorText}>{emailError}</Text>
                            )}
                        </View>
                        <View>
                            <Text style={styles.label}>Contraseña</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="********"
                                placeholderTextColor="#888"
                                secureTextEntry
                                value={password}
                                onChangeText={setPassword}
                                onBlur={() => {
                                    setPasswordTouched(true); validatePassword();

                                }}
                            />
                            {passwordTouched && passwordError !== '' && (
                                <Text style={styles.errorText}>{passwordError}</Text>
                            )}
                        </View>
                        <View style={{ gap: 5, paddingVertical: 10, paddingHorizontal: 10, backgroundColor: '#F7F7F7', borderRadius: 8, }}>
                            <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14, marginBottom: 10 }}>Debe contener al menos:</Text>
                            <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14 }}>- 1 Letra mayúscula</Text>
                            <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14 }}>- 8 Caracteres</Text>
                            <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14 }}>- 1 Número</Text>
                            <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14 }}>- 1 Caracter especial</Text>
                        </View>
                        <View>
                            <Text style={styles.label}>Repetir contraseña</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="********"
                                placeholderTextColor="#888"
                                secureTextEntry
                                value={repeatPassword}
                                onChangeText={setRepeatPassword}
                                onBlur={() => {
                                    setRepeatPasswordTouched(true); validateRepeatPassword();

                                }}
                            />
                            {repeatPasswordTouched && repeatPasswordError !== '' && (
                                <Text style={styles.errorText}>{repeatPasswordError}</Text>
                            )}
                        </View>
                    </View>

                    <View style={{ width: '100%', paddingHorizontal: 16 }}>
                        <ButtonPrincipal
                            onPress={() => router.push('/Bienvenida')}
                            titulo='Continuar'
                            disabled={!isFormValid()}
                        />
                    </View>
                </View>
            </ScrollView>

        </TouchableWithoutFeedback>

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
    },
    errorText: {
        color: 'red',
        fontFamily: 'SatoshiRegular',
        fontSize: 12,
        marginTop: 5,
    },
});


export default NuevaCuenta;