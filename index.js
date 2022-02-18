module.exports = {
  env: {
    browser: true,
    jasmine: true,
    mocha: true,
    jest: true,
    node: true,
    es6: true,
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
  rules: {
    // 允许在 for 循环中使用 ++
    "no-plusplus": [
      "error",
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    "import/prefer-default-export": "off",
  },
  extends: [
    "eslint-config-airbnb-base",
    "eslint-plugin-vue/lib/configs/vue3-recommended",
    "eslint-config-prettier",
  ].map(require.resolve),
  parserOptions: {
    tsconfigRootDir: process.cwd(),
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
    extraFileExtensions: [".vue"],
  },
};
