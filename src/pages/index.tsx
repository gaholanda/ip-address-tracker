import React from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';

import Header from '../styles/components/header';
import Title from '../styles/components/title';
import Container from '../styles/components/container';
import Search from '../components/Search';
import IpInfo from '../components/IpInfo';
import { AppProvider } from './../contexts/AppContext';
import EnvironmentDiv from './../styles/components/environment';

import 'nprogress/nprogress.css';

interface HomeProps {
  info: Object;
}

const Map = dynamic(() => import('../components/Map'), { ssr: false });

function Home(props: HomeProps) {
  return (
    <AppProvider {...props}>
      {process.env.APP_ENV !== 'production' && (
        <EnvironmentDiv>{process.env.APP_ENV}</EnvironmentDiv>
      )}
      <Container>
        <Header>
          <Title>IP Address Tracker</Title>
          <Search />
        </Header>
        <IpInfo />
      </Container>
      <Map />
    </AppProvider>
  );
}

export default Home;

export const getServerSideProps: GetServerSideProps = async () => {
  const DefaultInfo = require('../../__mocks__/ipInfo');

  return {
    props: {
      info: process.env.APP_ENV === 'production' ? {} : DefaultInfo,
    },
  };
};
