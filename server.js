const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/api/agent', async (req, res) => {
  const { message } = req.body || {};
  res.json({ reply: `收到: ${message || ''}` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on ${port}`));
