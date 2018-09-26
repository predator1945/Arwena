const path = require('path')


module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js",
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'fonts/',    // where the fonts will go
                    publicPath: '../'       // override the default path
                }
            }]
        },
        ]
    },
    watchOptions: {
        poll: 1000, // Check for changes every second,
        ignored: '/node_modules/',
        aggregateTimeout: 500,

    },
    watch: true,
    devServer: {
        contentBase: path.join(__dirname, "/public"),
        historyApiFallback: true,
        contentBase: './',
        
    }
}