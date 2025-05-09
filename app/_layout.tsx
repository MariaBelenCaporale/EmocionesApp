import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';




export default function RootLayout() {
      const router = useRouter();

  const [loaded, error] = useFonts({
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
  });

  if (!loaded || error) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="CrearCuenta" options={{ headerShown: false }} />
        <Stack.Screen name="Bienvenida" options={{ headerShown: false }} />
        <Stack.Screen
          name="Login"
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Iniciar sesión',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleStyle: {
              fontFamily: 'ChillaxSemibold',
              fontSize: 16,
              color: '#000',
            },
            headerTintColor: '#000',
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color="black"
                />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="ForgotPassword"
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Recuperar contraseña',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleStyle: {
              fontFamily: 'ChillaxSemibold',
              fontSize: 16,
              color: '#000',
            },
            headerTintColor: '#000',
            headerLeft: () => (
              <Pressable onPress={() => navigation.goBack()}>
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color="black"
                />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Apodo"
          options={({ navigation }) => ({
            headerShown: true,
            title: 'Crear cuenta',
            headerStyle: {
              backgroundColor: 'white',
            },
            headerTitleStyle: {
              fontFamily: 'ChillaxSemibold',
              fontSize: 16,
              color: '#000',
            },
            headerTintColor: '#000',
            headerLeft: () => (
              <Pressable onPress={() => router.push("/welcome")}>
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color="black"
                />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}
