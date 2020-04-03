const connection = require('../database/connection');
const crypto = require('crypto');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
  async index(req, res) {
    const ngos = await connection('ngos').select('*');

    return res.json(ngos);
  },
  async create(req, res) {
    const { name, email, whats, city, uf } = req.body;
    const id = generateUniqueId();

    await connection('ngos').insert({ id, name, email, whats, city, uf });

    return res.json({ id });
  },
};
