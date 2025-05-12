import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";

const TabsLayout = () => {
  return (
    <View style={{ flex: 1 }}>

    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#db314a",
        tabBarInactiveTintColor: "black",
        tabBarShowLabel: true,
        tabBarStyle: {
          position: "absolute",
          overflow: "hidden",
          borderRadius: 50,
          bottom: 15,
          height: "auto",
          marginHorizontal: 16,
          borderTopColor: "white",
          borderWidth: 1,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "SatoshiBlack",
          marginVertical: 5,
        },
      }}
    >
        <Tabs.Screen
          name="welcome"
          options={{
            tabBarStyle: { display: 'none' }
            
          }}
        />
        <Tabs.Screen
          name="Home"
          options={{
            tabBarStyle: { display: 'none' }
            
          }}
        />
      </Tabs>

  </View>
  );
}


export default TabsLayout;