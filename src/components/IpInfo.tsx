import Info from '../styles/components/info';

function IpInfo() {
  return (
    <Info>
      <li>
        <p>ip address</p>
        <h3>192.212.174.101</h3>
      </li>
      <li>
        <p>location</p>
        <h3>Brooklyn, NY 10001</h3>
      </li>
      <li>
        <p>timezone</p>
        <h3>UTC -05:00</h3>
      </li>
      <li>
        <p>isp</p>
        <h3>SpaceX Starlink</h3>
      </li>
    </Info>
  );
}

export default IpInfo;
