import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonPrincipalProps {
  titulo: string;
  onPress: () => void;
  tituloDos?: string;
  onPressDos?: () => void;
  iconoDos?: React.ReactNode; 
}

const ButtonPrincipal = ({
  titulo,
  onPress,
  tituloDos,
  onPressDos,
  iconoDos,
}: ButtonPrincipalProps) => {
  return (
    <View style={{ gap: 15 }}>
      {titulo && onPress && (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.textoButton}>{titulo}</Text>
      </Pressable>
      )}

      {tituloDos && onPressDos && (
        <Pressable style={styles.buttonGoogle} onPress={onPressDos}>
          <View style={styles.iconTextContainer}>
          {iconoDos}
            <Text style={styles.textoButtonGoogle}>{tituloDos}</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'black',
    borderRadius: 50,
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoButton: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'SatoshiMedium',
  },
  buttonGoogle: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoButtonGoogle: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'SatoshiMedium',
    marginLeft: 8,
  },
  iconTextContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonPrincipal;
