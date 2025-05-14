import Chip from "@/components/Chip/Chip";
import HeaderImg from "@/components/Header/HeaderImg";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Libro from '../../assets/images/libro.png';



const Journal = () => {

    const [filtrarEstado, setFiltrarEstado] = useState(null);

    const filtrado = (section) => {
        setFiltrarEstado(filtrarEstado === section ? null : section)
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
            <View style={{ gap: 30, backgroundColor: 'white', }}>

                <HeaderImg
                    titulo='Mi Journal'
                    imagen={Libro}
                    mostrarInfo
                    onPress={() => { }}
                />

                <View style={{ gap: 30, paddingHorizontal: 16 }}>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontFamily: 'SatoshiMedium', fontSize: 14 }}>Filtrar por</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, }}>

                            {/* FILTRADO POR ÁNIMO */}
                            <View style={styles.containerFiltros}>
                                <Pressable style={styles.filtros} onPress={() => filtrado('sectionA')}>
                                    <Text style={styles.buttons}>Ánimo</Text>
                                </Pressable>
                            </View>

                            {/* FILTRADO POR MES */}
                            <View style={styles.containerFiltros}>
                                <Pressable style={styles.filtros} onPress={() => filtrado('sectionB')}>
                                    <Text style={styles.buttons}>Mes</Text>
                                </Pressable>
                            </View>

                            {/* FILTRADO POR BALANCE */}
                            <View style={styles.containerFiltros}>
                                <Pressable style={styles.filtros} onPress={() => filtrado('sectionC')}>
                                    <Text style={styles.buttons}>Balance</Text>
                                </Pressable>
                            </View>
                        </View>

                        {filtrarEstado === 'sectionA' && (
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
                        )}


                        {filtrarEstado === 'sectionB' && (
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Pressable style={styles.botonMes}>
                                    <Ionicons name='chevron-back-outline' size={20} color={'black'} />
                                </Pressable>
                                <Text style={{ fontFamily: 'SatoshiMedium', fontSize: 18 }}>Septiembre</Text>
                                <Pressable style={styles.botonMes}>
                                    <Ionicons name='chevron-forward-outline' size={20} color={'black'} />
                                </Pressable>
                            </View>
                        )}

                        {filtrarEstado === 'sectionC' && (
                            <Text>Balance datos</Text>
                        )}


                    </View>



                    <View style={styles.container}>
                        <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 16 }}>Todavía no agregaste nada a tu Journal.
                            Podés hacerlo presionando en +</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};


const styles = StyleSheet.create({
    containerFiltros: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    botonMes: {
        backgroundColor: '#F7F7F7',
        borderRadius: 8,
        width: 45,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollContent: {
        flexGrow: 1,
        backgroundColor: 'white',
    },
    container: {
        backgroundColor: '#F7F7F7',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    buttons: {
        fontFamily: 'ChillaxMedium',
        fontSize: 14,
    },
    filtros: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'column'
    },
})


export default Journal;