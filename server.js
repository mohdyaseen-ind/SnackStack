// server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = 5050;

app.use(cors());

app.get('/', (req, res) => {
    res.send('NamasteFoods Proxy Server is running 💖');
  });

  app.get('/menu/:resId', async (req, res) => {
    const { resId } = req.params;
    const swiggyURL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61&lng=77.23&restaurantId=${resId}`;
  
    try {
        const response = await fetch(swiggyURL, {
            headers: {
              'User-Agent': 'Mozilla/5.0',
              'Accept': 'application/json',
              'Referer': 'https://www.swiggy.com/',
            },
          });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: "Swiggy API error", code: response.status });
      }
  
      const data = await response.json();
      res.json(data);
    } catch (err) {
      res.status(500).json({ error: "Failed to fetch menu", details: err.message });
    }
  });

  app.listen(PORT, () => {
    console.log(`🚀 Proxy server running at http://localhost:${PORT}`);
  });