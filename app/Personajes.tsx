import CardPersonajes from "@/components/CardPersonajes/CardPersonajes";
import Chip from "@/components/Chip/Chip";
import HeaderImg from "@/components/Header/HeaderImg";
import CardMonedas from "@/components/Monedas/CardMonedas";
import personajeInfo from "@/constants/personajeInfo";
import { router } from "expo-router";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ModalPersonalizado from '../components/Modal/Modal';

const Personajes = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [personajeSeleccionado, setPersonajeSeleccionado] = useState<null | {
        nombre: string;
        subtitulo: string;
        monedas: string;
        imagen: any;
        emocion: string;
    }>(null);

    const [emocionSeleccionada, setEmocionSeleccionada] = useState<string | null>(null);

    const abrirModalConPersonaje = (nombrePersonaje: string) => {
        const data = personajeInfo[nombrePersonaje as keyof typeof personajeInfo];
        if (data) {
            setPersonajeSeleccionado(data);
            setModalVisible(true);
        }
    };

    const manejarSeleccionEmocion = (emocion: string) => {
        setEmocionSeleccionada(prev => (prev === emocion ? null : emocion));
    };

    const personajesFiltrados = Object.entries(personajeInfo).filter(
        ([, data]) => !emocionSeleccionada || data.emocion === emocionSeleccionada
    );

    return (
        <View style={{ height: 'auto', flex: 1 }}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            >
                <View style={{ position: 'relative' }}>
                    <HeaderImg
                        titulo="Tu reflejo emocional"
                        onPress={() => { }}
                        mostrarInfo={false}
                        imagen={undefined}
                    />

                    <View style={{ paddingHorizontal: 16, bottom: 40 }}>
                        <CardMonedas onPress={() => router.push("/InfoMonedas")} />
                    </View>
                </View>

                <View style={{ paddingHorizontal: 16, gap: 10 }}>
                    <Text style={{ fontFamily: "ChillaxSemibold", fontSize: 20, paddingVertical: 10 }}>
                        Personajes
                    </Text>

                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={styles.scrollContent}
                        alwaysBounceHorizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        <View style={{ gap: 10, flexDirection: "row" }}>
                            {[
                                "🤬 Enojado/a",
                                "🥺 Angustiado/a",
                                "😔 Desilusionado/a",
                                "🙂‍↔️ Relajado/a",
                                "😏 Confiado/a",
                                "🥰 Enamorado/a",
                                "🥳 Feliz",
                            ].map((emocion) => (
                                <Chip
                                    key={emocion}
                                    emocion={emocion}
                                    activo={emocionSeleccionada === emocion}
                                    onPress={() => manejarSeleccionEmocion(emocion)}
                                />
                            ))}
                        </View>
                    </ScrollView>

                    <View style={styles.containerPersonaje}>
                        <View style={{ flex: 1, gap: 16 }}>
                            {personajesFiltrados
                                .filter((_, index) => index % 2 === 0)
                                .map(([nombre, data]) => (
                                    <CardPersonajes
                                        key={nombre}
                                        personaje={data.nombre}
                                        monedas={data.monedas}
                                        imagen={data.imagen}
                                        subtitulo={''}
                                        onPress={() => abrirModalConPersonaje(nombre)}
                                    />
                                ))}
                        </View>

                        <View style={{ flex: 1, gap: 16 }}>
                            {personajesFiltrados
                                .filter((_, index) => index % 2 !== 0)
                                .map(([nombre, data]) => (
                                    <CardPersonajes
                                        key={nombre}
                                        personaje={data.nombre}
                                        monedas={data.monedas}
                                        imagen={data.imagen}
                                        subtitulo={''}
                                        onPress={() => abrirModalConPersonaje(nombre)}
                                    />
                                ))}
                        </View>
                    </View>
                </View>
            </ScrollView>

            <ModalPersonalizado
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                titulo={personajeSeleccionado?.nombre}
                subtitulo={personajeSeleccionado?.subtitulo}
                imagen={personajeSeleccionado?.imagen}
                monedas={personajeSeleccionado?.monedas}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    containerPersonaje: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 16,
        marginTop: 30,
    },
});

export default Personajes;
