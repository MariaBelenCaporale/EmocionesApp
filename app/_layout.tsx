import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function RootLayout() {


  const [loaded, error] = useFonts({
    'ChillaxRegular': require('../assets/fonts/Chillax/Chillax-Regular.otf'),
    'ChillaxBold': require('../assets/fonts/Chillax/Chillax-Bold.otf'),
    'ChillaxMedium': require('../assets/fonts/Chillax/Chillax-Medium.otf'),
    'ChillaxSemibold': require('../assets/fonts/Chillax/Chillax-Semibold.otf'),
  });

  if (!loaded || error) {
    return null;
  }

  return (
      <SafeAreaProvider> 
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="CrearCuenta" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
