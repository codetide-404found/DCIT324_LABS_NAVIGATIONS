import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { ProfileContext } from '../../../context/ProfileContext';

export default function ProfileScreen() {
  const router = useRouter();
  const { profile } = useContext(ProfileContext);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Profile</Text>
      <Text>Name: {profile.name}</Text>
      <Text>Index Number: {profile.indexNumber}</Text>
      <Text>Programme: {profile.programme}</Text>
      <Text>Level: {profile.level}</Text>
      <Text>Bio: {profile.bio}</Text>
      <View style={{ marginTop: 20 }}>
        <Button title="Edit Profile" onPress={() => router.push('/edit-profile')} />
      </View>
    </View>
  );
}
