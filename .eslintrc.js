module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "prettier",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      plugins: ["prettier"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    camelcase: "off",
    "prettier/prettier": "error",
  },
};
