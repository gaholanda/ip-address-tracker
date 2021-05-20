const API_URL =
  'https://geo.ipify.org/api/v1?apiKey=at_Zko5T4x9d3J5lWPw9h6xDHODTDl1Q';

export default {
  GetIpInfo: async (ip: string) => {
    const response = await fetch(`${API_URL}&ipAddress=${ip}`);
    return response.json();
  },
  GetDomainInfo: async (domain: string) => {
    const response = await fetch(`${API_URL}&domain=${domain}`);
    return response.json();
  },
};
