module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@components": "./src/components",
          "@models": "./src/models",
          "@screens": "./src/screens",
          "@theme": "./src/theme/index.ts",
          "@ts": "./src/types",
          "@utils": "./src/utils",
        },
      },
    ],
  ],
};
