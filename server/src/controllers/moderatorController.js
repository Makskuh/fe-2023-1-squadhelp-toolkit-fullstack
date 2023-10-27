const db = require('../models');

module.exports.getAllOffers = async (req, res, next) => {
  try {
    const offers = db.Offer.findAll();
    console.log(offers);
    res.send(offers);
  } catch (error) {
    next(error);
  }
};
