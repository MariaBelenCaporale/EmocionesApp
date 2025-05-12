
import Header from '@/components/Header/Header';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import ButtonPrincipal from '../components/ButtonPrincipal/ButtonPrincipal';
import Chip from '../components/Chip/Chip';
import { useUser } from './Context/UserContext';

const emociones = [
    '🤬 Enojado/a',
    '🥺 Angustiado/a',
    '😔 Desilusionado/a',
    '🙂‍↔️ Relajado/a',
    '😏 Confiado/a',
    '🥰 Enamorado/a',
    '🥳 Feliz',
];

const NuevoEstado = () => {
    const router = useRouter();
    const { apodo, descripcionEmocion, setDescripcionEmocion } = useUser();


    return (
        <SafeAreaView style={{ flex: 1, paddingHorizontal: 16, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                <Header
                    titulo='¡Es momento de registrar tu emoción!'
                />

                <View style={{ gap: 30 }}>
                    <View style={{ gap: 20, }}>
                        <Text style={{ fontFamily: 'ChillaxMedium', fontSize: 18 }}>¿Cómo te sentís hoy?</Text>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 10, }}>
                            {emociones.map((emocion, i) => (
                                <Chip key={i} emocion={emocion} />
                            ))}
                        </View>
                    </View>

                    <View style={{ gap: 20, }}>
                        <Text style={{ fontFamily: 'ChillaxMedium', fontSize: 18 }}>¿Qué te hizo sentir así {apodo}?</Text>
                        <View>
                            <TextInput
                                style={styles.input}
                                placeholder='Escribí lo que quieras...'
                                multiline
                                value={descripcionEmocion}
                                onChangeText={setDescripcionEmocion}
                            />
                            <Text style={{ fontSize: 12, fontFamily: 'SatoshiRegular', textAlign: 'right', paddingHorizontal: 5, paddingVertical: 5, }}>Opcional</Text>
                        </View>
                    </View>

                <ButtonPrincipal
                    titulo='Finalizar'
                    onPress={() => router.push('/(tabs)/Home')}
                />
                </View>
            </ScrollView>
        </SafeAreaView>
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
})

export default NuevoEstado;
