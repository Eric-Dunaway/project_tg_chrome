module.exports = {
  pages: {
    'popup/popup': {
      entry: 'src/popup/popup.js',
      title: 'Popup',
    },
    'options/options': {
      entry: 'src/options/options.js',
      title: 'Options',
    },
    'standalone/standalone': {
      entry: 'src/standalone/standalone.js',
      filename: 'app.html',
      title: 'project_chrome',
    },
  },

  pluginOptions: {
    browserExtension: {
      registry: undefined,
      components: {
        background: true,
        popup: true,
        options: true,
        contentScripts: true,
        standalone: true,
      },
      api: 'browser',
      usePolyfill: true,
      autoImportPolyfill: true,
      componentOptions: {
        background: {
          entry: 'src/background.js',
        },
        contentScripts: {
          entries: {
            'content_scripts/content-script': ['src/content_scripts/content-script.js'],
          },
        },
      },
    },
  },
};
