module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }
  const { message } = req.body || {};
  res.status(200).json({ reply: `收到: ${message || ''}` });
};
