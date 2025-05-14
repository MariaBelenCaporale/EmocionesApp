import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from "react-native";

if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const Accordion = () => {
    const [expanded, setExpanded] = useState(null); 

    const toggleExpand = (section) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(expanded === section ? null : section); 
    };

    return (
        <View style={styles.container}>
            {/* Primer accordion */}
            <TouchableOpacity onPress={() => toggleExpand('section1')} style={styles.header}>
                <Text style={styles.headerText}>Estado emocional</Text>
                <Ionicons name={expanded === 'section1' ? "chevron-up-outline" : "chevron-down-outline"} size={24} color={'black'} />
            </TouchableOpacity>
            {expanded === 'section1' && (
                <View style={styles.content}>
                    <Text style={{ fontFamily: 'SatoshiBlack', fontSize: 12 }}>Obtenés 10 Monedas</Text>
                    <Text style={{ fontFamily: 'SatoshiMedium', fontSize: 14, lineHeight: 24 }}>
                        Registrar cómo te sentís es clave. Mantené tu estado emocional actualizado y sumá monedas cada vez que lo hagas.
                    </Text>
                </View>
            )}

            {/* Segundo accordion */}
            <TouchableOpacity onPress={() => toggleExpand('section2')} style={styles.header}>
                <Text style={styles.headerText}>Estado emocional + descripción</Text>
                <Ionicons name={expanded === 'section2' ? "chevron-up-outline" : "chevron-down-outline"} size={24} color={'black'} />
            </TouchableOpacity>
            {expanded === 'section2' && (
                <View style={styles.content}>
                    <Text style={{ fontFamily: 'SatoshiBlack', fontSize: 12 }}>Obtenés 20 Monedas</Text>
                    <Text style={{ fontFamily: 'SatoshiMedium', fontSize: 14, lineHeight: 24 }}>
                        ¿Querés sumar más? Además de registrar tu emoción, agregá detalles en tu Journal sobre cómo te sentís y qué viviste.
                    </Text>
                </View>
            )}

            {/* Tercer accordion */}
            <TouchableOpacity onPress={() => toggleExpand('section3')} style={styles.header}>
                <Text style={styles.headerText}>Mi balance</Text>
                <Ionicons name={expanded === 'section3' ? "chevron-up-outline" : "chevron-down-outline"} size={24} color={'black'} />
            </TouchableOpacity>
            {expanded === 'section3' && (
                <View style={styles.content}>
                    <Text style={{ fontFamily: 'SatoshiBlack', fontSize: 12 }}>Obtenés 30 Monedas</Text>
                    <Text style={{ fontFamily: 'SatoshiMedium', fontSize: 14, lineHeight: 24 }}>
                        Una vez al día, completá tu balance escribiendo la palabra que define tu día y por qué la elegiste.
                    </Text>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        overflow: 'hidden',
        gap: 10,
    },
    header: { 
        borderRadius: 8, 
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFFAEB',
        alignItems: 'center',
    },
    headerText: { 
        fontFamily: 'ChillaxMedium',
        fontSize: 16,
    },
    content: { 
        paddingVertical: 8,
        paddingHorizontal: 10, 
        gap: 5,
    },
});

export default Accordion;
