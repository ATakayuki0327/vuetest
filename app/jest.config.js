module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    testMatch: ['**/tests/**/*.spec.js'],  // テストファイルの場所を指定
    transform: {
      '^.+\\.vue$': 'vue-jest'
    }
  };
  