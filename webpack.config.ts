import path from "path";
import webpack from "webpack";
import minicss from "mini-css-extract-plugin";
import htmlWebpackPlug from "html-webpack-plugin";

const htmlplug: htmlWebpackPlug = new htmlWebpackPlug({
  template: "./src/index.html",
});

const minicssplug: minicss = new minicss({
  filename: "[name].css",
  chunkFilename: "[id].css",
});

const config: webpack.Configuration = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          minicss.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    port: 3000,
  },
  plugins: [htmlplug, minicssplug],
};

export default config;
