import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { ProfileContext } from '../context/ProfileContext';

export default function EditProfileScreen() {
  const router = useRouter();
  const { profile, setProfile } = useContext(ProfileContext);
  const [name, setName] = useState(profile.name);
  const [bio, setBio] = useState(profile.bio);
  const [programme, setProgramme] = useState(profile.programme);

  const handleSave = () => {
    setProfile({ ...profile, name, bio, programme });
    router.back();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />

      <Text>Bio</Text>
      <TextInput value={bio} onChangeText={setBio} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />

      <Text>Programme</Text>
      <TextInput value={programme} onChangeText={setProgramme} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />

      <Button title="Save" onPress={handleSave} />
    </View>
  );
}
