import axios from 'axios';
import React, { useEffect, useState, createContext, ReactNode } from 'react';
import nprogress from 'nprogress';

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
  changeIP: (value: string) => void;
  changeDomain: (value: string) => void;
}

interface AppProviderProps {
  children: ReactNode;
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
  const [ip, setIp] = useState('');
  const [domain, setDomain] = useState('');

  function changeIP(ip: string) {
    setIp(ip);
  }

  function changeDomain(domain: string) {
    setDomain(domain);
  }

  useEffect(() => {
    if (ip !== '') {
      axios
        .get(`api/info?ip=${ip}`)
        .then(({ data }) => {
          setInfo(data);
          nprogress.done();
        })
        .catch((err) => {
          console.log(err);
          nprogress.done();
        });
    }
  }, [ip]);

  useEffect(() => {
    if (domain !== '') {
      axios
        .get(`api/info?domain=${domain}`)
        .then(({ data }) => {
          setInfo(data);
          nprogress.done();
        })
        .catch((err) => {
          console.log(err);
          nprogress.done();
        });
    }
  }, [domain]);

  return (
    <AppContext.Provider
      value={{
        info,
        changeIP,
        changeDomain,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
