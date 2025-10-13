/** @type {import('stylelint').Config} */
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    'color-no-invalid-hex': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'no-unknown-animations': true,
    'no-unknown-custom-properties': true,
    'function-no-unknown': true,
    'color-no-hex': true,
    'comment-empty-line-before': null,
    "at-rule-descriptor-value-no-unknown": null,
  },
};
