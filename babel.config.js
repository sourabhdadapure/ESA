module.exports = {
  presets: ['@babel/preset-env', 'module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['transform-class-properties']
  ]
}
