import dynamic from 'next/dynamic';
import Header from '../styles/components/header';
import Title from '../styles/components/title';
import Container from '../styles/components/container';
import Search from '../components/Search';
import IpInfo from '../components/IpInfo';

const Map = dynamic(() => import('../components/Map'), { ssr: false });

function Home() {
  return (
    <div>
      <Container>
        <Header>
          <Title>IP Address Tracker</Title>
          <Search />
        </Header>
        <IpInfo />
      </Container>
      <Map />
    </div>
  );
}

export default Home;
