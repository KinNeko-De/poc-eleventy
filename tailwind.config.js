module.exports = {
  content: [
    './src/**/*.{njk,md,html,js}',
    './src/_includes/**/*.{njk,md,html}'
  ],
  safelist: [
    'hidden',
    'md:hidden',
    'md:flex',
    'md:block',
    'flex',
    'flex-col',
    'space-x-6',
    'space-y-2',
    'items-center',
    'justify-between',
    'max-w-2xl',
    'mx-auto',
    'text-center',
    'block',
    'hover:text-blue-400'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
