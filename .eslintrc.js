module.exports = {
  "root": true,
  "env": {},
  "globals": {
    // "wx": "readonly",
  },
  "extends": [
    "react-app",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "warn",
    "semi": ["error", "never"],
    "no-extra-semi": "error",
    "quotes": ["error", "single"],
    "no-unused-vars": "warn",
    "comma-dangle": ["error", "only-multiline"],
    "prefer-const": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unreachable": "warn"
  }
};
