import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type TabBarIconProps = {
  color: string;
  size?: number;
  focused?: boolean;
};

/**
 * TabLayout para la navegación principal de la aplicación.
 * Configura las pestañas con iconos, estilos y comportamiento háptico.
 */
export default function TabLayout() {
  const colorScheme = useColorScheme() || 'light';
  const activeColor = Colors[colorScheme].tint;

  // Crear un renderizador de icono reutilizable
  const renderTabIcon = (name: string) => ({ color }: TabBarIconProps) => (
    <IconSymbol size={28} name={name} color={color} />
  );

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: {
          // Use a transparent background on iOS to show the blur effect
          ...(Platform.OS === 'ios' && { position: 'absolute' }),
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: renderTabIcon('house.fill'),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: renderTabIcon('paperplane.fill'),
        }}
      />
    </Tabs>
  );
}
