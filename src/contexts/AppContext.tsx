import React, { useState, createContext, ReactNode } from 'react';

interface AppContextData {
  info: {
    ip?: string;
    location?: {
      country?: string;
      region?: string;
      city?: string;
      lat?: number;
      lng?: number;
      timezone?: string;
    };
    isp?: string;
  };
  ip: string;
  changeInfo: (value: Object) => void;
  changeIP: (value: string) => void;
}

interface AppProviderProps {
  children: ReactNode;
  ip: string;
  info: Object;
}

const DefaultInfo = {
  ip: '8.8.8.8',
  location: {
    country: 'US',
    region: 'California',
    city: 'Mountain View',
    lat: 37.38605,
    lng: -122.08385,
    timezone: '-07:00',
  },
  isp: 'Google LLC',
};

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children, ...rest }: AppProviderProps) {
  const [info, setInfo] = useState(rest.info ?? DefaultInfo);

  const [ip, setIp] = useState(rest.ip ?? '');

  function changeInfo(info: Object) {
    setInfo(info);
  }

  function changeIP(ip: string) {
    setIp(ip);
  }

  return (
    <AppContext.Provider
      value={{
        info,
        ip,
        changeInfo,
        changeIP,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
