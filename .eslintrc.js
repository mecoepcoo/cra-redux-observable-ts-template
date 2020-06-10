module.exports = {
  "root": true,
  "parserOptions": {
    "ecmaVersion": 2019,
    "sourceType": "module",
    "ecmaFeatures": true,
    "project": './tsconfig.json',
    "tsconfigRootDir": __dirname,
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "globals": {
    // "wx": "readonly",
  },
  "extends": [
    "react-app",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint"
  ].map((key) => require.resolve(`eslint-config-${key}`)),
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "plugins": ["@typescript-eslint", "react-hooks", "prettier"],
  "rules": {
    "prettier/prettier": 1,
    "semi": 0,
    "no-extra-semi": 1,
    "quotes": ["error", "single"],
    "no-unused-vars": 0,
    "comma-dangle": ["warn", "only-multiline"],
    "prefer-const": 0,
    "@typescript-eslint/no-unused-vars": 1,
    "no-unreachable": 1,
    'react/jsx-wrap-multilines': 0,
    'react/prop-types': 0,
    'react/forbid-prop-types': 0,
    'react/sort-comp': 1,
    'react/jsx-one-expression-per-line': 0,
    'generator-star-spacing': 0,
    'function-paren-newline': 0,
    'function-paren-newline': 0,
    'import/order': 1,
    'react/jsx-props-no-spreading': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        optionalDependencies: true,
        devDependencies: [
          '**/tests/**.{ts,js,jsx,tsx}',
          '**/_test_/**.{ts,js,jsx,tsx}',
          '/mock/**/**.{ts,js,jsx,tsx}',
          '**/**.test.{ts,js,jsx,tsx}',
          '**/_mock.{ts,js,jsx,tsx}',
          '**/example/**.{ts,js,jsx,tsx}',
          '**/examples/**.{ts,js,jsx,tsx}',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'linebreak-style': 0,
    'no-prototype-builtins': 'off',
    'import/prefer-default-export': 'off',
    'import/no-default-export': [0, 'camel-case'],
    'react/jsx-filename-extension': 'off',
    'sort-imports': 0,
    'no-use-before-define': ['error', {
      functions: false,
      classes: true,
      variables: true
    }],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true
      },
    ],
    '@typescript-eslint/explicit-function-return-type': [
      'off',
      {
        allowTypedFunctionExpressions: true
      },
    ],
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'import/no-cycle': 0,
    'react/no-array-index-key': 'warn',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'off', // Checks effect dependencies
    // Conflict with prettier
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'operator-linebreak': 0,
    'no-param-reassign': 2,
    'space-before-function-paren': 0,
    'import/extensions': 0,
    // 不必要的校验
    '@typescript-eslint/naming-convention': 0,
    'class-methods-use-this': 0,
    'no-else-return': 0,
    // 避免报错（未知原因）
    '@typescript-eslint/lines-between-class-members': 0,
    '@typescript-eslint/dot-notation': 0,
    // 团队内的特别约定
    'import/no-duplicates': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    'max-classes-per-file': 0,
    'no-console': 0,
  }
};
