import { Pressable, StyleSheet, Text, View } from "react-native";


interface ButtonPrincipalProps {
    titulo: string;
    onPress: () => void;
}

const ButtonPrincipal = ({ titulo, onPress, tituloDos, onPressDos }: ButtonPrincipalProps) => {
    return (
        <View style={{ gap: 15 }}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.textoButton}>{titulo}</Text>
            </Pressable>

            <Pressable style={styles.buttonGoogle} onPress={onPressDos}>
                <Text style={styles.textoButtonGoogle}>{tituloDos}</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'black',
        borderRadius: 50,
        width: '100%',
    },
    textoButton: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    },
    buttonGoogle: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
    },
    textoButtonGoogle: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        padding: 10,
    }
});

export default ButtonPrincipal;