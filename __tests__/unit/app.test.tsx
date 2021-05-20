import { shallow } from 'enzyme';
import React from 'react';
import 'jest-styled-components';

import App from '../../src/pages';

describe('Open application', () => {
  it('open the index page', () => {
    const info = {
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
    const app = shallow(<App info={info} />);
    expect(app.prop('info')).toHaveProperty('ip');
    expect(app.prop('info')).toHaveProperty('location');
    expect(app.prop('info')).toHaveProperty('isp');
  });
});
