const db = require('../models');

module.exports.getAllOffers = async (req, res, next) => {
  try {
    const offers = await db.Offer.findAll();
    res.send(offers);
  } catch (error) {
    next(error);
  }
};
