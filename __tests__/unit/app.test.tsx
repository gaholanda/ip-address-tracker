import { shallow } from 'enzyme';
import React from 'react';
import 'jest-styled-components';

import App from '../../src/pages';
import Info from '../../__mocks__/ipInfo';

describe('Open application', () => {
  it('open the index page', () => {
    const app = shallow(<App info={Info} />);
    expect(app.prop('info')).toHaveProperty('ip');
    expect(app.prop('info')).toHaveProperty('location');
    expect(app.prop('info')).toHaveProperty('isp');
  });
});
