const path = require('path');

module.exports = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true }
  },
  // Import global CSS from src
  previewHead: (head) => {
    return head + `<link rel="stylesheet" href="/src/index.css" />`;
  }
};
