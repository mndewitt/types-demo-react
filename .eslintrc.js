module.exports = {
  extends: ["react-app"],
  plugins: ["graphql"],
  rules: {
    "graphql/template-strings": [
      2,
      {
        env: "apollo",
        schemaJson: require("./graphql-schema.json"),
      },
    ],
  },
  overrides: [],
};
