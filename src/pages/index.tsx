import Header from '../styles/components/header';
import Title from '../styles/components/title';
import Container from '../styles/components/container';
import Search from '../components/Search';
import IpInfo from '../components/IpInfo';

function Home() {
  return (
    <Container>
      <Header>
        <Title>IP Address Tracker</Title>
        <Search />
      </Header>
      <IpInfo />
    </Container>
  );
}

export default Home;
