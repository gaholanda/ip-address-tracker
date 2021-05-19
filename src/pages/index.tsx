import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import PublicIP from 'public-ip';

import Header from '../styles/components/header';
import Title from '../styles/components/title';
import Container from '../styles/components/container';
import Search from '../components/Search';
import IpInfo from '../components/IpInfo';
import { AppProvider } from './../contexts/AppContext';

interface HomeProps {
  ip: string;
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
  const getIpInfo = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=at_Zko5T4x9d3J5lWPw9h6xDHODTDl1Q&ipAddress=${ip}`
  );

  const info = await getIpInfo.json();

  return {
    props: {
      ip: ip,
      info: info,
    },
  };
};
