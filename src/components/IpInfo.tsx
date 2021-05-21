import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import Info from '../styles/components/info';

function IpInfo() {
  const { info } = useContext(AppContext);

  return (
    <Info>
      <li>
        <p>ip address</p>
        <h3>{info.ip ?? '-'}</h3>
      </li>
      <li>
        <p>location</p>
        <h3>
          {info.location?.city ?? '-'}, {info.location?.region ?? '-'},{' '}
          {info.location?.country ?? '-'}
        </h3>
      </li>
      <li>
        <p>timezone</p>
        <h3>UTC {info.location?.timezone ?? '-'}</h3>
      </li>
      <li>
        <p>isp</p>
        <h3>{info.isp ?? '-'}</h3>
      </li>
    </Info>
  );
}

export default IpInfo;
