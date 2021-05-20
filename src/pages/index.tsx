import React from 'react';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import PublicIP from 'public-ip';
import axios from 'axios';

import Header from '../styles/components/header';
import Title from '../styles/components/title';
import Container from '../styles/components/container';
import Search from '../components/Search';
import IpInfo from '../components/IpInfo';
import { AppProvider } from './../contexts/AppContext';

interface HomeProps {
  info: Object;
}

const Map = dynamic(() => import('../components/Map'), { ssr: false });

function Home(props: HomeProps) {
  return (
    <AppProvider {...props}>
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
  const ip = await PublicIP.v4();
  const { data } = await axios.get(
    `${process.env.API_URL}${process.env.API_KEY}&ipAddress=${ip}`
  );

  return {
    props: {
      info: data,
    },
  };
};
