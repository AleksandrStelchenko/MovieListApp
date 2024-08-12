module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "^@screens/(.+)": "./src/screens/\\1",
          "^@navigation/(.+)": "./src/navigation/\\1",
        },
      },
    ],
  ],
};
