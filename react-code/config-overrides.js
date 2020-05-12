const {override, fixBabelImports} = require('customize-cra')

module.exports = override(
    // 针对antd实现按需加载
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style:'css'
    })
)