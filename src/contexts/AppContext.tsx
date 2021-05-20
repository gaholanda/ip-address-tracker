import axios from 'axios';
import React, { useEffect, useState, createContext, ReactNode } from 'react';
import nprogress from 'nprogress';
import PublicIP from 'public-ip';

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
  changeInfo: (value: Object) => void;
}

interface AppProviderProps {
  children: ReactNode;
  info: Object;
}

export const AppContext = createContext({} as AppContextData);

export function AppProvider({ children, ...rest }: AppProviderProps) {
  const [info, setInfo] = useState(rest.info);
  const [ip, setIp] = useState('');
  const [domain, setDomain] = useState('');

  function changeIP(ip: string) {
    setIp(ip);
  }

  function changeDomain(domain: string) {
    setDomain(domain);
  }

  function changeInfo(info: Object) {
    setInfo(info);
  }

  useEffect(() => {
    nprogress.start();
    PublicIP.v4().then((ip) =>
      axios
        .get(`api/info?ip=${ip}`)
        .then(({ data }) => {
          setInfo(data);
          nprogress.done();
        })
        .catch((err) => {
          console.log(err);
          nprogress.done();
        })
    );
  }, []);

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
        changeInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
