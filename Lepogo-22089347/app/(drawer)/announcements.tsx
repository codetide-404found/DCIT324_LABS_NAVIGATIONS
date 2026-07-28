import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { announcements } from '../../data/dummyData';

export default function AnnouncementsScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Announcements</Text>
      <FlatList
        data={announcements}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>{item.title} - {item.date}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}
