import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer initialRouteName="(tabs)">
        <Drawer.Screen
          name="(tabs)"
          options={{ headerShown: false, drawerLabel: 'Dashboard', title: 'Dashboard' }}
        />
        <Drawer.Screen name="announcements" options={{ drawerLabel: 'Announcements', title: 'Announcements' }} />
        <Drawer.Screen name="about" options={{ drawerLabel: 'About', title: 'About' }} />
        <Drawer.Screen name="help" options={{ drawerLabel: 'Help & Support', title: 'Help & Support' }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
