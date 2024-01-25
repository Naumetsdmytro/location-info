module.exports = {
  extends: [
    "react",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin: @typescript-eslint/recommended-requiring-type-checking",
    "plugin:prettier/recommended",
    "plugin: perfectionist/recommended-natural",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-filename-extension": [0],
    "import/extensions": 0,
    "import/no-extraneous-dependencies": 0,
    "@typescript/no-misused-promises": 0,
    "@typescript/no-empty-function": 0,
  },
};
