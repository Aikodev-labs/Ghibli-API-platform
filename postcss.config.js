export default {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
      
      },
    },
  ],
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
