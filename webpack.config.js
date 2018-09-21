'use strict'

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

const isDev = process.env.NODE_ENV ==='development'

const config = {
    entry: path.join(__dirname,'src/main.js'),
    output: {
        filename: "bundle.js",
        path:path.join(__dirname,'dist/js')
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.js$/,
                loader: "babel-loader"
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options: {
                            limit:1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        }),
        new HTMLPlugin({
             filename: 'index.html',
             template: path.resolve(__dirname, 'index.html'),
             inject: true
        })
    ],
    resolve: {
        alias: { 'vue': 'vue/dist/vue.js' }
    }
}

if(isDev){
    config.devServer = {
        port:'8080',
        host:'127.0.0.1',
        overlay:{
            errors:true
        }
    }
}

module.exports = config