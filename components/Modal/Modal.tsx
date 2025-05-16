import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
    Dimensions,
    Image,
    Modal,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import ButtonPrincipal from "../ButtonPrincipal/ButtonPrincipal";
import Monedas from "../Monedas/Monedas";

const { height } = Dimensions.get("window");

const router = useRouter();

const ModalPersonalizado = ({
    visible,
    onClose,
    titulo,
    subtitulo,
    imagen,
    monedas,

}: {
    visible: boolean;
    onClose: () => void;
    titulo?: string;
    subtitulo?: string;
    imagen: any;
    monedas: number;

}) => {
    return (
        <Modal
            animationType="slide"
            transparent
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <TouchableOpacity style={styles.background} onPress={onClose} activeOpacity={1} />
                <View style={styles.modalContent}>
                    <View style={styles.header}>
                        <Monedas onPress={() => router.push('/InfoMonedas')} />
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="close-outline" size={30} color={'black'} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }}>
                        <Image source={imagen} style={{ width: 100, height: 100 }} />
                    </View>

                    <View style={styles.body}>
                        <View style={{ paddingVertical: 10, }}>
                            {titulo && <Text style={styles.titulo}>{titulo}</Text>}
                            <Text style={{ fontFamily: 'SatoshiBold', fontSize: 16 }}>Se descontarán: {monedas}</Text>
                        </View>


                        <Text style={{ textAlign: 'left' }}>{subtitulo}</Text>
                    </View>

                    <View>
                        <ButtonPrincipal
                            titulo="Desbloquear personaje" onPress={function (): void {
                                throw new Error("Function not implemented.");
                            }} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0,0,0,0.4)",
    },
    background: {
        flex: 1,
    },
    modalContent: {
        height: height * 0.7,
        backgroundColor: "white",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 16,
    },
    titulo: {
        fontSize: 24,
        fontFamily: "ChillaxSemibold",
    },
    cerrar: {
        fontSize: 16,
        fontFamily: "ChillaxMedium",
        color: "#007aff",
    },
    body: {
        flex: 1,
        paddingVertical: 20,
    },
});

export default ModalPersonalizado;
