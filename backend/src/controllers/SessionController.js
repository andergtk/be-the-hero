const db = require('../databaseConnection');

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await db('ongs')
      .where('id', id)
      .select('name')
      .first();

    if (!ong)
      return res.status(404).json({
        error: 'ONG Not Found'
      });

    return res.json(ong);
  }
}