import Chip from "@/components/Chip/Chip";
import HeaderImg from "@/components/Header/HeaderImg";
import CardMonedas from "@/components/Monedas/CardMonedas";
import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";


const Personajes = () => {
    return (
        <View style={{ height: 'auto', flex: 1 }}>
            <View style={{ position: 'relative' }}>
                <HeaderImg
                    titulo='Tu reflejo emocional'
                    onPress={() => { }}
                    mostrarInfo={false}
                />

                <View style={{ paddingHorizontal: 16, bottom: 40 }}>
                    <CardMonedas
                        onPress={() => router.push('/InfoMonedas')}
                    />
                </View>
            </View>

            <View style={{ paddingHorizontal: 16, gap: 10 }}>
                <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 20, paddingVertical: 10 }}>Personajes</Text>
                <Pressable style={styles.filtros} >
                    <Text style={styles.buttons}>Filtrar por emoción</Text>
                </Pressable>
                <ScrollView horizontal={true} contentContainerStyle={styles.scrollContent} alwaysBounceHorizontal={true} showsHorizontalScrollIndicator={false} >

                    <View style={{ gap: 10, flexDirection: 'row' }}>


                        <Chip
                            emocion={'🤬 Enojado/a'}
                        />
                        <Chip
                            emocion={'🥺 Angustiado/a'}
                        />
                        <Chip
                            emocion={'😔 Desilusionado/a'}
                        />
                        <Chip
                            emocion={'🙂‍↔️ Relajado/a'}
                        />
                        <Chip
                            emocion={'😏 Confiado/a'}
                        />
                        <Chip
                            emocion={'🥰 Enamorado/a'}
                        />
                        <Chip
                            emocion={'🥳 Feliz'}
                        />
                    </View>
                </ScrollView>
            </View>

        </View>
    )
};


const styles = StyleSheet.create({
    scrollContent: {
        flexGrow: 1,
    },
    filtros: {
        flexDirection: 'column'
    },
    buttons: {
        fontFamily: 'ChillaxMedium',
        fontSize: 14,
    },
})

export default Personajes;