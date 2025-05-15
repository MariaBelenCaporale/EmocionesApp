import CardEstado from "@/components/CardEstado/CardEstado";
import CardFrase from "@/components/CardFrase/CardFrase";
import CardImg from '@/components/CardImg/CardImg';
import CardItems from "@/components/CardItems/CardItems";
import Monedas from '@/components/Monedas/Monedas';
import { useBackHandler } from '@react-native-community/hooks';
import { useRouter } from 'expo-router';
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import Emociones from '../../constants/Emociones';
import { useUser } from "../Context/UserContext";


const Home = () => {

  /* para que no puedan volver atras*/
  useBackHandler(() => {
    return true; 
  });

  const router = useRouter();
  const emociones = Object.keys(Emociones);
  const { apodo, emocionSeleccionada, descripcionEmocion, setDescripcionEmocion } = useUser();

  return (

    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16, backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}>


        <View style={{ height: 100, justifyContent: 'center', marginVertical: 30 }}>
          <View style={{ alignItems: 'flex-end' }}>
            <Monedas
              onPress={() => router.push('/InfoMonedas')}
            />
          </View>
          <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 32 }}>¡Hola {apodo}!</Text>
          <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 18, }}>Que alegría verte por acá</Text>
        </View>

        <View style={{ width: '100%', padding: 2, gap: 35 }}>
          <CardEstado />
          <CardFrase />

          <View style={styles.cardItemsContainer}>
            <View style={styles.leftColumn}>
              <CardItems
                onPress={() => router.push('/Journal')}
                icono="create-outline"
                titulo='Mi Journal'
                subtitulo='Mi espacio personal'
              />
              <CardItems
                onPress={() => router.push('/Personajes')}
                icono="gift-outline"
                titulo='Personajes'
                subtitulo='Desbloqueá accesorios'
              />
            </View>
            <View style={styles.rightColumn}>
              {emocionSeleccionada && (
                <CardImg imagen={Emociones[emocionSeleccionada]} />
              )}

            </View>
          </View>

          <View style={styles.cardItemsContainer}>
            <View style={{ flex: 1 }}>
              <CardItems
                icono="trending-up-outline"
                titulo='Estadísticas'
                subtitulo='Mi progreso'
              />
            </View>
            <View style={{ flex: 1 }}>
              <CardItems
                icono="thumbs-up-outline"
                titulo='Mi balance'
                subtitulo='Nombrá tu día'
              />
            </View>
          </View>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  cardItemsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  leftColumn: {
    flex: 1,
    justifyContent: 'space-between',
    gap: 16,
  },
  rightColumn: {
    flex: 1,
    justifyContent: 'center',
  },
});


export default Home;