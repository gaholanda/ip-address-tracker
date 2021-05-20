import React, { useEffect, useState, createContext, ReactNode } from 'react';
import nprogress from 'nprogress';
import API from '../api';

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
      API.GetIpInfo(ip)
        .then((res) => {
          setInfo(res);
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
      API.GetDomainInfo(domain)
        .then((res) => {
          setInfo(res);
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
