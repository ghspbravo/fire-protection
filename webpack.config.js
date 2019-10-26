const webpack = require("webpack");
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {

  const isProduction = argv.mode === 'production';
  const isDev = argv.mode === 'development';

  const commonPlugins = [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: isProduction ? '"production"' : '"development"'
        }
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        handlebarsLoader: {}
      }
    }),
    isProduction
      ? new CleanWebpackPlugin()
      : new webpack.HotModuleReplacementPlugin()
    ,
    new CopyWebpackPlugin([
      { from: './src/copy', to: './' }
    ]),


    // ABOUT
    new HtmlWebpackPlugin({
      template: "./src/html/about.hbs",
      filename: "about.html",
      title: "О нас",

      docs: [
        { title: "УСТАВ", link: "#" },
        { title: "Лист записи ЕГРЮЛ", link: "#" },
        { title: "Выписка из ЕГРЮЛ", link: "#" },
        { title: "ИНН", link: "#" },

        { title: "Решение о создании сообщества", link: "#" },
        { title: "Коды статистики", link: "#" },
        { title: "Лицензия МЧС", link: "#" },
        { title: "Выписка из реестра СРО", link: "#" },
      ]
    }),


    // PRICE
    new HtmlWebpackPlugin({
      template: "./src/html/price.hbs",
      filename: "price.html",
      title: "Стоимость",

      price: [
        { name: "Услуга", description: "Описание услуги", price: "99.99" },
        { name: "Услуга", description: "Описание услуги", price: "99.99" },
        { name: "Услуга", description: "Описание услуги", price: "99.99" },
        { name: "Услуга", description: "Описание услуги", price: "99.99" },
        { name: "Услуга", description: "Описание услуги", price: "99.99" },
      ]
    }),


    // LAW
    new HtmlWebpackPlugin({
      template: "./src/html/law.hbs",
      filename: "law.html",
      title: "Нормативы",

      rules: [
        { name: "атомные станции ", link: "#" },
        { name: "внутренний противопожарный водопровод", link: "#" },
        { name: "встроенные подземные автостоянки", link: "#" },
        { name: "места дислокации подразделений пожарной охраны", link: "#" },
        { name: "о безопасности зданий и сооружений", link: "#" },
        { name: "обеспечение огнестойкости", link: "#" },
        { name: "ограничение распространения пожара", link: "#" },
        { name: "определение категорий", link: "#" },
        { name: "отопление, вентиляция ", link: "#" },
        { name: "система оповещения и управления эвакуацией ", link: "#" },
        { name: "системы противопожарной защиты источники наружного противопожарного водоснабжения ", link: "#" },
        { name: "склады нефти и нефтепродуктов", link: "#" },
        { name: "сп здания и комплексы высотные", link: "#" },
        { name: "техника пожарная огнетушители ", link: "#" },
        { name: "установки пожарной сигнализации ", link: "#" },
        { name: "эвакуационные пути и выходы", link: "#" },
        { name: "электрооборудование", link: "#" },
      ],

      laws: [
        { name: "Постановление Правительства РФ от 25.04.2012 N 390 О противопожарном режиме ", link: "#" },
        { name: "Федеральный закон № 123-ФЗ «Технический регламент о требованиях пожарной безопасности» ", link: "#" },
        { name: "Федеральный закон № 384-ФЗ «Технический регламент о безопасности зданий и сооружений» ", link: "#" },
        { name: "Федеральный закон от 21 декабря 1994 г. N 69-ФЗ _О пожарной", link: "#" },
        { name: "Информационное письмо о требованиях пожарной безопасности, реализуемых при проектировании зданий, для которых отсутствуют нормотивные требования пожарной безопасности", link: "#" },
      ],

      liter: [
        { name: "Знаки пожарной безопасности ", link: "#" },
        { name: "Инструкция по противопожарной безопасности ", link: "#" },
        { name: "Категории пожарной опасности ", link: "#" },
        { name: "Кто несет ответственность за пожарную безопасность ", link: "#" },
        { name: "Обязанности в области пожарной безопасности", link: "#" },
        { name: "Полный перечень необходимой документации по пожарной безопасности", link: "#" },
      ]
    }),


    // SERVICES
    new HtmlWebpackPlugin({
      template: "./src/html/services.hbs",
      filename: "services.html",
      title: "Услуги",

      services: [
        { id: 1, name: "Консультирование в области обеспечения пожарной безопасности ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 2, name: "Проектирование систем безопасности", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 3, name: "Полное техническое обслуживание систем безопасности", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 4, name: "Расчет и оценка пожарных рисков ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 5, name: "Установка систем безопасности ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 6, name: "Расчеты времени путей эвакуации ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 7, name: "Аудит пожарной безопасности ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 8, name: "Дымоудаление ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 9, name: "Автоматическая пожарная сигнализация", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 10, name: "Системы пожаротушения ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 11, name: "Разработка плана эвакуации ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 12, name: "Испытание пожарных кранов, испытание пожарных лестниц, испытание ограждений крыш ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 13, name: "Пожарная экспертиза ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 14, name: "Категорирование помещений", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 15, name: "Разработка ИТМ ГО и ЧС ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 16, name: "Видеонаблюдение ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 17, name: "Контроль доступа ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
        { id: 18, name: "Декларация пожарной безопасности ", description: [{ text: "Описание услуги" }, { text: "Описание услуги 2" }] },
      ]
    })
  ]

  return {
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      path: path.resolve(__dirname, 'dist'),
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'postcss-loader']
        },
        {
          test: /\.hbs$/,
          include: path.resolve(__dirname, 'src/html/'),
          use: ['handlebars-loader']
        }
      ]
    },

    plugins: commonPlugins,

    watch: !isProduction,

    devServer: {
      contentBase: './dist',
    }
  }
};