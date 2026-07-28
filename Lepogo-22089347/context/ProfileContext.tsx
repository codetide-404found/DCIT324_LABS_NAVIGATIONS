import React, { createContext, ReactNode, useState } from 'react';

export type Profile = {
  name: string;
  indexNumber: string;
  programme: string;
  level: string;
  bio: string;
};

type ProfileContextType = {
  profile: Profile;
  setProfile: (p: Profile) => void;
};

export const ProfileContext = createContext<ProfileContextType>({
  profile: {
    name: '',
    indexNumber: '',
    programme: '',
    level: '',
    bio: '',
  },
  setProfile: () => {},
});

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>({
    name: 'Isaac Kwame Doe',
    indexNumber: '22089347',
    programme: 'BSc. Math. Science',
    level: '300',
    bio: 'Passionate about mobile development.',
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
