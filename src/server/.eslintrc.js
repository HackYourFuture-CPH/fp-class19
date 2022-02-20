module.exports = {
  rules: { 'no-console': 'off' },
  overrides: [
    {
      files: ['**/seeds/**/*.js', '**/controllers/**/*.js'],
      rules: {
        camelcase: 'off',
      },
    },
  ],
};
