import React from 'react';
import { View, Text, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function EventDetailsScreen() {
  const router = useRouter();
  const { title, date, description } = useLocalSearchParams<{
    id: string;
    title: string;
    date: string;
    description: string;
  }>();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ marginVertical: 10 }}>{date}</Text>
      <Text style={{ marginBottom: 20 }}>{description}</Text>
      <Button title="Back" onPress={() => router.back()} />
    </View>
  );
}
