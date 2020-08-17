const path=require("path");
const HtmlWebpackPlugin=require("html-webpack-plugin");
//const webpack=require("webpack");
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
module.exports={
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname,"dist")
    },
    // devServer:{
    //     contentBase:__dirname + '/dist',
    //     port:3000,
    //     hot: true
    // },
    //watch:true,
    plugins:[new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        })],
    module:{
        rules:[
            {
                test: /\.scss$/,
                use:[MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ] 
            },
            {
                test: /\.js$/,
                enforce: 'pre',
                use: ['source-map-loader']
              },
               {
                    test :/\.html/,
                    use:['html-loader']
                },
                 {
                  test:/\.(svg|png|jpeg|gif|jpg)$/,
                  use: {
                    loader:'file-loader',
                    options:{
                        name:"[name].[ext]",
                        outputPath:"img/",
                        }
                    }
              }
        ]
    }
    
};