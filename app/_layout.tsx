import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserProvider } from './Context/UserContext';


const RootLayout = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [fontLoaded, fontError] = useFonts({
    'ChillaxRegular': require('../assets/fonts/Chillax/Chillax-Regular.otf'),
    'ChillaxBold': require('../assets/fonts/Chillax/Chillax-Bold.otf'),
    'ChillaxMedium': require('../assets/fonts/Chillax/Chillax-Medium.otf'),
    'ChillaxSemibold': require('../assets/fonts/Chillax/Chillax-Semibold.otf'),
    'SatoshiRegular': require('../assets/fonts/Satoshi/Satoshi-Regular.otf'),
    'SatoshiMedium': require('../assets/fonts/Satoshi/Satoshi-Medium.otf'),
    'SatoshiBold': require('../assets/fonts/Satoshi/Satoshi-Bold.otf'),
    'SatoshiBlack': require('../assets/fonts/Satoshi/Satoshi-Black.otf'),
    'SatoshiLight': require('../assets/fonts/Satoshi/Satoshi-Light.otf'),
    'SatoshiItalic': require('../assets/fonts/Satoshi/Satoshi-Italic.otf'),
    'SatoshiMediumItalic': require('../assets/fonts/Satoshi/Satoshi-MediumItalic.otf'),
  });

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('userToken');

        if (token) {
          setIsAuthenticated(true);
          router.replace('/welcome');
        } 
      setLoading(false);
    };

    if (fontLoaded) {
      checkAuth();
    }
  }, [fontLoaded]);

  if (!fontLoaded || fontError || loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <UserProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            contentStyle: {
              backgroundColor: 'white',
              flex: 1,
            },
          }}
        >
          <Stack.Screen name="welcome" options={{ headerShown: false }} />
           <Stack.Screen name="(tabs)" options={{ headerShown: false, navigationBarHidden: true }} />
          <Stack.Screen name="CrearCuenta" options={{ headerShown: false }} />
          <Stack.Screen name="Bienvenida" options={{ headerShown: false }} />
          <Stack.Screen
            name="Login"
            options={({ navigation }) => ({
              headerShown: true,
              title: 'Iniciar sesión',
              headerStyle: { backgroundColor: 'white' },
              headerTitleStyle: { fontFamily: 'ChillaxSemibold', fontSize: 16, color: '#000' },
              headerTintColor: '#000',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back-outline" size={24} color="black" />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="ForgotPassword"
            options={({ navigation }) => ({
              headerShown: true,
              title: 'Recuperar contraseña',
              headerStyle: { backgroundColor: 'white' },
              headerTitleStyle: { fontFamily: 'ChillaxSemibold', fontSize: 16, color: '#000' },
              headerTintColor: '#000',
              headerLeft: () => (
                <Pressable onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back-outline" size={24} color="black" />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="Apodo"
            options={({ navigation }) => ({
              headerShown: true,
              title: 'Crear cuenta',
              headerStyle: { backgroundColor: 'white' },
              headerTitleStyle: { fontFamily: 'ChillaxSemibold', fontSize: 16, color: '#000' },
              headerTintColor: '#000',
              headerLeft: () => (
                <Pressable onPress={() => router.push("/welcome")}>
                  <Ionicons name="chevron-back-outline" size={24} color="black" />
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="NuevoEstado"
            options={{
              headerShown: true,
              title: 'Nuevo estado',
              headerStyle: { backgroundColor: 'white' },
              headerTitleStyle: { fontFamily: 'ChillaxSemibold', fontSize: 16, color: '#000' },
              headerTintColor: '#000',
              navigationBarHidden: true,
            }}
          />
          <Stack.Screen
            name="InfoMonedas"
            options={{
              headerShown: true,
              title: 'Info Monedas',
              headerTitleStyle: { fontFamily: 'ChillaxSemibold', fontSize: 16, color: '#000' },
              headerTintColor: '#000',
              navigationBarHidden: true,
              headerRight: () => (
                <Ionicons name="diamond-outline" size={24} color="black" />
              ),
            }}
          />
          <Stack.Screen
            name="Personajes"
            options={{
              headerShown: true,
              title: 'Personajes',
              headerTitleStyle: { fontFamily: 'ChillaxSemibold', fontSize: 16, color: '#000' },
              headerTintColor: '#000',
              navigationBarHidden: true,
              headerRight: () => (
                <Ionicons name="gift-outline" size={24} color="black" />
              ),
            }}
          />
        </Stack>
      </SafeAreaView>
      <StatusBar backgroundColor="transparent" style="dark" />
    </UserProvider>
  );
};


export default RootLayout;
