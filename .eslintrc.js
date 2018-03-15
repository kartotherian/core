module.exports = {
  extends: 'kartotherian',
  rules: {
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        // Dangling commas are unsupported in node
        functions: 'never',
      },
    ],
  },
};
