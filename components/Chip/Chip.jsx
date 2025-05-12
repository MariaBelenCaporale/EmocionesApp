import { useUser } from "@/app/Context/UserContext";
import { Pressable, StyleSheet, Text } from "react-native";



const Chip = ({ emocion }) => {

    const { emocionSeleccionada, setEmocionSeleccionada } = useUser();

    const isSelected = emocionSeleccionada === emocion;

    return (
            <Pressable
             style={[
                styles.chip,
                { backgroundColor: isSelected ? '#CECECE' : '#f7f7f7' }
             ]}
             onPress={() => setEmocionSeleccionada(emocion)}
             >
                <Text style={{ padding: 10, fontFamily: 'SatoshiRegular', fontSize: 16, textAlign: 'center' }}>{emocion}</Text>
            </Pressable>
    )
};

const styles = StyleSheet.create ({
    chip: {
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 2,
        alignSelf: 'flex-start',
    },
})


export default Chip;
