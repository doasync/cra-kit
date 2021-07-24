/** @type import('eslint').Linter.Config */
const config = {
  extends: ['./eslint.config.base'],
  // Project specific rules
  rules: {
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        assert: 'htmlFor', // less strict
        depth: 25,
      },
    ],
  },
};

module.exports = config;
