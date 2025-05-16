import HeaderImg from '@/components/Header/HeaderImg';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Libro from '../assets/images/libro.png';
import ButtonPrincipal from '../components/ButtonPrincipal/ButtonPrincipal';
import Chip from '../components/Chip/Chip';
import Emociones from '../constants/Emociones';
import { useUser } from './Context/UserContext';

const NuevoEstado = () => {
    const router = useRouter();
    const { apodo, descripcionEmocion, setDescripcionEmocion } = useUser();

    const emociones = Object.keys(Emociones);

    return (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

            <HeaderImg
                imagen={Libro}
                titulo='Agregar estado'
            />
            <SafeAreaView style={{ flex: 1, paddingHorizontal: 16, backgroundColor: 'white' }}>
                <View style={{ gap: 30 }}>
                    <View style={{ gap: 20 }}>
                        <Text style={{ fontFamily: 'ChillaxMedium', fontSize: 18 }}>¿Cómo te sentís hoy?</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}>
                            {emociones.map((emocion, i) => (
                                <Chip key={i} emocion={emocion} />
                            ))}
                        </View>
                    </View>

                    <View style={{ gap: 20 }}>
                        <Text style={{ fontFamily: 'ChillaxMedium', fontSize: 18 }}>¿Qué te hizo sentir así {apodo}?</Text>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder='Escribí lo que quieras...'
                                multiline
                                value={descripcionEmocion}
                                onChangeText={setDescripcionEmocion}
                            />
                            <Text style={{ fontSize: 12, fontFamily: 'SatoshiRegular', textAlign: 'right', paddingHorizontal: 5, paddingVertical: 5 }}>Opcional</Text>
                        </View>
                    </View>

                    <ButtonPrincipal
                        titulo='Finalizar'
                        onPress={() => router.push('/(tabs)/Home')}
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#CECECE',
        borderRadius: 10,
        padding: 12,
        fontSize: 16,
        fontFamily: 'SatoshiRegular',
        minHeight: 100,
        textAlignVertical: 'top',
    },
    scrollContent: {
        flexGrow: 1,
    }
});

export default NuevoEstado;
