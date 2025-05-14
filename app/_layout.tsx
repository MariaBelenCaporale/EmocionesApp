import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { Stack, useNavigation, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UserProvider } from './Context/UserContext';




const RootLayout = () => {
  const router = useRouter();
  const navigation = useNavigation();

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
    'SatoshiMediumItalic': require('../assets/fonts/Satoshi/Satoshi-MediumItalic.otf'),
  });

  if (!loaded || error) {
    return null;
  }

  return (
       <UserProvider>
          <SafeAreaView style={{ flex: 1 }}>

            <Stack
              screenOptions={{
                contentStyle: {
                  backgroundColor: 'white',
                  flex: 1,
                }
              }}>
              <Stack.Screen name="(tabs)" options={{ headerShown: false, navigationBarHidden: true, }} />
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
                    <Pressable onPress={() => {''}}>
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
              <Stack.Screen
                name="NuevoEstado"
                options={() => ({
                  headerShown: true,
                  title: 'Nuevo estado',
                  headerStyle: {
                    backgroundColor: 'white',
                  },
                  headerTitleStyle: {
                    fontFamily: 'ChillaxSemibold',
                    fontSize: 16,
                    color: '#000',
                  },
                  headerTintColor: '#000',
                  navigationBarHidden: true,
                })}
              />
              <Stack.Screen
                name="InfoMonedas"
                options={() => ({
                  headerShown: true,
                  title: 'Info Monedas',
                  headerTitleStyle: {
                    fontFamily: 'ChillaxSemibold',
                    fontSize: 16,
                    color: '#000',
                  },
                  navigationBarHidden: true,
                  headerTintColor: '#000',
                  
                  headerRight: () => (
                    <Ionicons
                    name="diamond-outline" 
                    size={24}
                    color="black"
                  />
                  )
                })}
              />
              <Stack.Screen
                name="Personajes"
                options={() => ({
                  headerShown: true,
                  title: 'Personajes',
                  
                  headerTitleStyle: {
                    fontFamily: 'ChillaxSemibold',
                    fontSize: 16,
                    color: '#000',
                  },
                  navigationBarHidden: true,
                  headerTintColor: '#000',
                  headerRight: () => (
                    <Ionicons
                    name="gift-outline" 
                    size={24}
                    color="black"
                  />
                  )
                })}
              />
          
            </Stack>
          </SafeAreaView>

          <StatusBar backgroundColor='transparent' style="black" />
        </UserProvider>

  );
}

export default RootLayout;