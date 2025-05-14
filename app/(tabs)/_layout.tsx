import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";



const TabsLayout = () => {

  
  return (

      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "black",
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            overflow: "hidden",
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            bottom: 0,
            height: 80,
            marginHorizontal: 0,
            borderTopColor: "white",
            borderWidth: 1,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          },
          tabBarLabelStyle: {
            marginTop: 5,
            fontSize: 12,
            fontFamily: "SatoshiRegular",
          },
          
        }}
      >

        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={'black'} size={24} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Estadisticas"
          options={{
            title: "Estadisticas",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="trending-up-outline" color={'black'} size={24} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Entrada"
          options={{
            title: "Entrada",
            tabBarIcon: ({ color, size, backgroundColor }) => (
              <Ionicons 
              name="add-outline" 
              color={'white'} 
              size={24} 
              backgroundColor={'black'}  
              />
              
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Journal"
          options={{
            title: "Journal",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="create-outline" color={'black'} size={24} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="Perfil"
          options={{
            title: "Perfil",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={'black'} size={24} />
            ),
            headerShown: false,
          }}
        />


      </Tabs>
  
  );
}


export default TabsLayout;