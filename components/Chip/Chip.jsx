import { useUser } from "@/app/Context/UserContext";
import coloresEmociones from '@/constants/coloresEmociones';
import { Pressable, StyleSheet, Text } from "react-native";

const Chip = ({ emocion, fixed = false }) => {
  const { emocionSeleccionada, setEmocionSeleccionada } = useUser();
  const isSelected = emocionSeleccionada === emocion;
  const baseColor = coloresEmociones[emocion] || '#f7f7f7';
  const backgroundColor = isSelected && !fixed ? '#CECECE' : baseColor;

  return (
    <Pressable
      onPress={() => !fixed && setEmocionSeleccionada(emocion)}
      style={[styles.chip, { backgroundColor }]}
    >
      <Text style={styles.text}>{emocion}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  chip: {
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignSelf: 'flex-start',
  },
  text: {
    padding: 8,
    fontFamily: 'SatoshiRegular',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default Chip;
