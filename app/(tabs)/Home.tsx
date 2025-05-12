import CardEstado from "@/components/CardEstado/CardEstado";
import CardFrase from "@/components/CardFrase/CardFrase";
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


        <View style={{ width: '100%', height: 140, justifyContent: 'center', backgroundColor: 'white'}}>
          <Text style={{ fontFamily: 'ChillaxSemibold', fontSize: 32 }}>¡Hola {apodo}!</Text>
          <Text style={{ fontFamily: 'SatoshiRegular', fontSize: 18, }}>Que alegría verte por acá</Text>
        </View>

        <View style={{ width: '100%', padding: 2, gap: 35}}>
          <CardEstado />
          <CardFrase />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({

});


export default Home;