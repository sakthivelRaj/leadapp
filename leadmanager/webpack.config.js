var path = require('path');

module.exports = {

    entry : './frontend/src/index.js',
    output : {
        path : path.resolve(__dirname , 'frontend/static/frontend'),
        filename: 'main.js'
    },
    module : {
        rules : [    
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },

    mode:'development'
}
