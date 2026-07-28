import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { timetable } from '../../../data/dummyData';

export default function TimetableScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Timetable</Text>
      <FlatList
        data={timetable}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <Text style={{ marginBottom: 8 }}>
            {item.day} {item.time} - {item.course} @ {item.venue}
          </Text>
        )}
      />
    </View>
  );
}
