import { Redirect, Slot } from "expo-router";
import { ActivityIndicator } from "react-native";
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


export default function AppLayout() {
  const loading = false; 
  const isLogged = true; 

  if (loading) {
    return (
      <SafeAreaView className="bg-white h-full flex justify-center items-center">
        <ActivityIndicator className="text-blue-300" size="large" />
      </SafeAreaView>
    );
  }

  if (!isLogged) {
    return <Redirect href="/sigin-in" />;
  }

  return <Slot />;
}
