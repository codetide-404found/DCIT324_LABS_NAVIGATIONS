import React from 'react';
import { View, Text } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Campus Connect</Text>
      <Text style={{ marginVertical: 10 }}>
        A simple student app for announcements, courses, timetable, and campus news.
      </Text>
      <Text>Firstname Lastname</Text>
      <Text>Student ID: 10912345</Text>
    </View>
  );
}
