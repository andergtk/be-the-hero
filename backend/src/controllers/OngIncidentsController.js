const db = require('../databaseConnection');

module.exports = {
  async index(req, res) {
    const { ong_id } = req.params;

    const incidents = await db('incidents')
      .where('ong_id', ong_id)
      .select('*');

    return res.json(incidents);
  }
}