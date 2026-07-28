import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { feed } from '../../../../data/dummyData';

export default function FeedScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Campus Feed</Text>
      <FlatList
        data={feed}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({
                pathname: '/(drawer)/(tabs)/home/[id]',
                params: {
                  id: item.id,
                  title: item.title,
                  date: item.date,
                  description: item.description,
                },
              })
            }
            style={{ marginBottom: 15 }}
          >
            <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
            <Text>{item.date}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
