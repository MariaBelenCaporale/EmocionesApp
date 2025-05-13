import Enojado from '@/assets/images/enojado.png';
import CardEstado from "@/components/CardEstado/CardEstado";
import CardFrase from "@/components/CardFrase/CardFrase";
import CardImg from '@/components/CardImg/CardImg';
import CardItems from "@/components/CardItems/CardItems";
import React, { useEffect } from "react";
import { BackHandler, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { useUser } from "../Context/UserContext";


const Home = () => {

  const { apodo } = useUser();

  //Para que el user no pueda volver atras
  useEffect(() => {
    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );
    return () => backHandler.remove();
  }, []);


  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16, backgroundColor: 'white' }}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>


        <View style={{ width: '100%', height: 140, justifyContent: 'center', backgroundColor: 'white' }}>
          <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 32 }}>¡Hola {apodo}!</Text>
          <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 18, }}>Que alegría verte por acá</Text>
        </View>

        <View style={{ width: '100%', padding: 2, gap: 35 }}>
          <CardEstado />
          <CardFrase />

          <View style={styles.cardItemsContainer}>
            <View style={styles.leftColumn}>
              <CardItems
                icono="create-outline"
                titulo='Mi Journal'
                subtitulo='Mi espacio personal'
              />
              <CardItems
                icono="create-outline"
                titulo='Personajes'
                subtitulo='Desbloqueá accesorios'
              />
            </View>
            <View style={styles.rightColumn}>
              <CardImg
                imagen={Enojado}
              />
            </View>
          </View>

          <View style={styles.cardItemsContainer}>
            <View style={{ flex: 1 }}>
            <CardItems
              icono="create-outline"
              titulo='Estadísticas'
              subtitulo='Mi progreso'
            />
            </View>
            <View style={{ flex: 1 }}>
            <CardItems
              icono="create-outline"
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
  scrollContent: {
    flexGrow: 1,
  },
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