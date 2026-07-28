import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { courses } from '../../../data/dummyData';

export default function CoursesScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.code}
        renderItem={({ item }) => (
          <Text style={{ marginBottom: 8 }}>
            {item.code} - {item.title} ({item.credits} credits)
          </Text>
        )}
      />
    </View>
  );
}
