const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            '@text-color': 'white',
            '@border-color-base': '#222222',
            '@disabled-color': 'rgba(0, 0, 0, .25)'
        },
    }),
);