module.exports = function(config) {
    this.entry = {
        index: config.Path.join(config.SOURCE_DIR, 'assets', 'js', 'Pages', 'index.js'),
        vendor: config.Path.join(config.SOURCE_DIR, 'assets', 'js', 'Pages', 'vendor.js'),
    };

    this.alias = {
        vue: config.Path.resolve('./node_modules/vue/dist/vue.esm.js'),
        vuex: config.Path.resolve('./node_modules/vuex/dist/vuex.esm.js'),
        SassPath: config.Path.resolve(config.SOURCE_DIR, 'assets/scss/'),
        RouterPath: config.Path.resolve(config.SOURCE_DIR, 'assets/js/Router/'),
        UtilityPath: config.Path.resolve(config.SOURCE_DIR, 'assets/js/Utility/'),
        ComponentsPath: config.Path.resolve(config.SOURCE_DIR, 'assets/js/Components/'),
        'vue-router': config.Path.resolve('./node_modules/vue-router/dist/vue-router.esm.js'),
    };

    this.copyFiles = [
        {
            to: config.Path.join(config.SOURCE_DIR, '..', 'public', 'images'),
            from: config.Path.join(config.SOURCE_DIR, 'assets', 'images')
        },
        {
            to: config.Path.join(config.SOURCE_DIR, '..', 'public', 'js'),
            from: config.Path.join(config.SOURCE_DIR, 'assets', 'js', 'Vendors', 'jquery.min.js')
        }
    ];

    this.createHtml = function() {
        return [
            new config.HtmlWebpackPlugin({
                title: 'Nodejs with Vue',
                inject: false,
                minify: {
                    removeComments: true,
                    useShortDoctype: true,
                    collapseWhitespace: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                },
                template: config.Path.join(
                    config.SOURCE_DIR,
                    'templates',
                    'html',
                    'index.html'
                ),
                filename: config.Path.join(
                    config.SOURCE_DIR,
                    '..',
                    'public',
                    'index.html'
                ),
                assets: {
                    css: [
                        '/css/vendor.' + config.CustomTimeHash + '.css',
                        '/css/index.' + config.CustomTimeHash + '.css',
                    ],
                    js: [
                        '/js/jquery.min.js',
                        '/js/vendor.' + config.CustomTimeHash + '.js',
                        '/js/index.' + config.CustomTimeHash + '.js',
                    ]
                }
            }),
        ];
    };
}
