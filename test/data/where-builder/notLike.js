const { Op } = require('sequelize');

module.exports = [
  {
    it: 'Not Like operator simple (key[notLike]=value)',
    request: {
      key: {
        notLike: 'value',
      },
    },
    expected: {
      key: {
        [Op.notLike]: 'value',
      },
    },
  },
  {
    it: 'Not Like simple with association (key.key[notLike]=value)',
    request: {
      'key.key': {
        notLike: 'value',
      },
    },
    expected: {
      '$key.key$': {
        [Op.notLike]: 'value',
      },
    },
  },
  {
    it: 'Not Like operator multi (key1[notLike]=value1&key2[notLike]=value2)',
    request: {
      key1: {
        notLike: 'value1',
      },
      key2: {
        notLike: 'value2',
      },
    },
    expected: {
      key1: {
        [Op.notLike]: 'value1',
      },
      key2: {
        [Op.notLike]: 'value2',
      },
    },
  },
];
