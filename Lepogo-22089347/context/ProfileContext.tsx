import React, { createContext, useState, ReactNode } from 'react';

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
    name: 'Ama Serwaa',
    indexNumber: '10912345',
    programme: 'BSc. Computer Science',
    level: '400',
    bio: 'Final year CS student passionate about mobile development.',
  });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}
