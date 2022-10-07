module.exports = api => {
  api.cache(true);

  return {
    presets: [
      [
        'react-app',
        {
          flow: false,
          typescript: true,
          runtime: 'automatic'
        }
      ],
      [
        '@babel/preset-env',
        {
          loose: true
        }
      ]
    ],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            app: './src/app',
            lib: './src/lib'
          }
        }
      ]
    ]
  };
};
