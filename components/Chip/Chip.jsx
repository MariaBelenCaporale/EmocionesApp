import { Pressable, StyleSheet, Text } from "react-native";


const Chip = ({ emocion, onPress, activo }: { emocion: string, onPress: () => void, activo: boolean }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.chip,
        activo && styles.chipActivo
      ]}
    >
      <Text style={[styles.chipText, activo && styles.chipTextActivo]}>{emocion}</Text>
    </Pressable>
  );
};


const styles = StyleSheet.create({
  chip: {
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#F7F7F7',
    alignSelf: 'flex-start',
  },
  chipActivo: {
    backgroundColor: '#9D7BD9',
  },
  text: {
    padding: 8,
    fontFamily: 'SatoshiRegular',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default Chip;
