const path = require('path');

module.exports = {
    module: {
        loaders: [
        {
            test: /\.css$/,
            loaders: ["style", "css"],
            include: path.resolve(__dirname, '../')
        },
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"],
            include: path.resolve(__dirname, '../src')
        }, {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }]
    }
}
