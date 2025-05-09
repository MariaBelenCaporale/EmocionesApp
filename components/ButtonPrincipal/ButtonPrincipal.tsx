import { Pressable, StyleSheet, Text, View } from "react-native";

interface ButtonPrincipalProps {
  titulo: string;
  onPress: () => void;
  tituloDos?: string;
  onPressDos?: () => void;
  iconoDos?: React.ReactNode;
  tituloTres?: string;
  preguntaTres?: string;
  onPressTres?: () => void;
  conBorde?: boolean;
  disabled?:  boolean;
}

const ButtonPrincipal = ({
  titulo,
  onPress,
  tituloDos,
  onPressDos,
  iconoDos,
  tituloTres,
  preguntaTres,
  onPressTres,
  conBorde,
  disabled,
}: ButtonPrincipalProps) => {
  return (
    <View style={{ width: '100%', gap: 20, height: 230, paddingVertical: 40, paddingHorizontal: 16, backgroundColor: 'transparent', bottom: 0, justifyContent: 'center' }}>

      {titulo && onPress && (
        <Pressable style={[styles.button, disabled && { backgroundColor: '#CECECE' }]} 
        onPress={onPress}
          disabled={disabled}
          >
          <Text style={styles.textoButton}>{titulo}</Text>
        </Pressable>
      )}

      {tituloDos && onPressDos && (
        <Pressable 
          style={[
            styles.buttonGoogle,
          !conBorde && { borderWidth: 0 }, 
        ]} 
        onPress={onPressDos}
        >
          <View style={styles.iconTextContainer}>
            {iconoDos}
            <Text style={styles.textoButtonGoogle}>{tituloDos}</Text>
          </View>
        </Pressable>
      )}
      
      {/* Pregunta */}
      {tituloTres && onPressTres && (
       
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 5, marginBottom: 10}}>
            <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 14 }}>{preguntaTres}</Text>
            <Pressable onPress={onPressTres}>
            <Text style={{fontSize: 14, fontFamily: 'SatoshiBold'}}>{tituloTres}</Text>
            </Pressable>
          </View>
       
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
    backgroundColor: 'transparent',
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
