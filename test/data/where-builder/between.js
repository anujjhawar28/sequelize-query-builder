const { Op } = require('sequelize');

module.exports = [
  {
    it: 'Between operator simple (key[between][]=1&key[between][]=2)',
    request: {
      key: {
        between: [1, 2],
      },
    },
    expected: {
      key: {
        [Op.between]: [1, 2],
      },
    },
  },
  {
    it: 'Between simple with association (key.key[between][]=1&key.key[between][]=2)',
    request: {
      'key.key': {
        between: [1, 2],
      },
    },
    expected: {
      '$key.key$': {
        [Op.between]: [1, 2],
      },
    },
  },
  {
    it: 'Between operator multi (key1[between][]=1&key1[between][]=2&key2[between][]=1&key2[between][]=2)',
    request: {
      key1: {
        between: [1, 2],
      },
      key2: {
        between: [1, 2],
      },
    },
    expected: {
      key1: {
        [Op.between]: [1, 2],
      },
      key2: {
        [Op.between]: [1, 2],
      },
    },
  },
];
