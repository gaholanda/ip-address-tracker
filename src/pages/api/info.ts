import axios from 'axios';

const API_URL = `${process.env.API_URL}${process.env.API_KEY}`;

export default async (req, res) => {
  const { ip, domain } = req.query;
  const { data, status } = await axios.get(
    `${API_URL}&${ip ? `ipAddress=${ip}` : `domain=${domain}`}`
  );

  res.status(status).json(data);
};
