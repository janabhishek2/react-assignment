module.exports = {
  presets: [
    [
      "@babel/preset-react",
      {
        targets: {},
        useBuiltIns: "usage",
      },
    ],
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: "> 2%",
        },
      },
    ],
  ],
  plugins: [
    "react-hot-loader/babel",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/transform-runtime",
  ],
  env: {
    test: {
      plugins: ["dynamic-import-node"],
    },
  },
};
