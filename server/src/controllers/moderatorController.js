const db = require('../models');

module.exports.getAllOffers = async (req, res, next) => {
  try {
    const offers = await db.Offer.findAll({
      order: [['id', 'desc']],
      include: [
        {
          model: db.Contest,
          include: [
            {
              model: db.User,
              required: true,
              attributes: {
                exclude: ['password', 'role', 'balance', 'accessToken'],
              },
            },
          ],
        },
        {
          model: db.User,
          required: true,
          attributes: {
            exclude: ['password', 'role', 'balance', 'accessToken'],
          },
          
        },
      ],
    });
    res.send(offers);
  } catch (error) {
    next(error);
  }
};
