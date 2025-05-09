import ButtonPrincipal from "@/components/ButtonPrincipal/ButtonPrincipal";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from "react-native";


const data: { id: string; backgroundColor: string; image: any; title: string; description: string; }[] = [
    {
        id: "1",
        backgroundColor: '#EDFBFC',
        image: require('../assets/images/welcome.png'),
        title: "¡Registrá tus emociones!",
        description: "Tomate un momento para conectar con vos y registrar cómo estás y cómo te sentís a medida que pasan los días.",
    },
    {
        id: "2",
        backgroundColor: '#FFFAEB',
        image: require('../assets/images/welcome.png'),
        title: "¡Escribí en tu Journal!",
        description: "Anotá lo que viviste, cómo te sentiste y cualquier idea que quieras recordar. Este es tu espacio personal. Escribí con libertad, sin juicios.",
    },
    {
        id: "3",
        backgroundColor: '#FEEBEB',
        image: require('../assets/images/welcome.png'),
        title: "¡Tu reflejo emocional!",
        description: "Vas a tener un personaje que te acompaña y vive tus mismas emociones, día a día.",
    },
];

const { width } = Dimensions.get("window");

const CrearCuenta = () => {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const renderItem = ({ item }: { item: { id: string; backgroundColor: string; image: any; title: string; description: string; } }) => (
        <View style={styles.slide}>
          <View style={[styles.imageContainer, { backgroundColor: item.backgroundColor }]}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.texContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.description}</Text>
          </View>
        </View>
      );
      

    const handleScroll = (event) => {
        const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
        setCurrentIndex(newIndex);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item: { id: string; }) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handleScroll}
            />

            <View style={styles.indicatorContainer}>
                {data.map((_, index) => (
                    <View
                        key={index}
                        style={[
                            styles.indicator,
                            currentIndex === index && styles.activeIndicator,
                        ]}
                    />
                ))}
            </View>


            <View style={{ width: '100%', justifyContent: 'center'}}>
                <ButtonPrincipal
                    titulo="Crear cuenta"
                    onPress={() => router.push("/Apodo")}
                />

            </View>
        </View>
    )

};

const styles = StyleSheet.create({

    button: {
        backgroundColor: '#DB314A',
        width: '100%',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    buttonDos: {
        width: '100%',
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    containerIm: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    navText: {
        fontSize: 16,
        color: "white",
        textAlign: 'center',
        fontFamily: 'SatoshiBlack',
    },
    navTextDos: {
        fontSize: 16,
        color: "#DB314A",
        textAlign: 'center',
        fontFamily: 'SatoshiBlack',
    },
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    slide: {
        width: width,
        flex: 1,
        gap: 40,
    },
    image: {
        height: 200,
        width: '100%',
        resizeMode: "contain",
        marginBottom: 20,
    },
    imageContainer: {
        height: 300,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomLeftRadius: 24,
        borderBottomEndRadius: 24,
    },
    containerTextos: {
        alignItems: "flex-start",
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontFamily: 'ChillaxSemibold',
        color: 'black',
    },
    text: {
        fontSize: 16,
        color: "black",
        fontFamily: 'SatoshiRegular',
    },
    texContainer: {
        padding: 20,
        gap: 12,
        paddingHorizontal: 20,
        paddingVertical: 20,
        alignItems: 'flex-start',
    },
    indicatorContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: 250,
    },
    indicator: {
        width: 8,
        height: 8,
        borderRadius: 5,
        backgroundColor: "#CECECE",
        marginHorizontal: 5,
    },
    activeIndicator: {
        backgroundColor: "black",
    },

});

export default CrearCuenta;