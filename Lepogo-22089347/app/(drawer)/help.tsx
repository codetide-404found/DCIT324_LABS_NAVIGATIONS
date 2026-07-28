import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { faqs } from '../../data/dummyData';

export default function HelpScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Help & Support</Text>
      <FlatList
        data={faqs}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 15 }}>
            <Text style={{ fontWeight: 'bold' }}>Q: {item.question}</Text>
            <Text>A: {item.answer}</Text>
          </View>
        )}
      />
    </View>
  );
}
