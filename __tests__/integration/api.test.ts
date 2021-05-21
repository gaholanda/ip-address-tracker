import axios from 'axios';

describe('Get domain info from api', () => {
  it(`returns globo.com info`, async () => {
    const { data, status } = await axios.get(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.API_KEY}&domain=globo.com`
    );
    expect(status).toEqual(200);
    expect(data).toHaveProperty('ip');
  });
});
