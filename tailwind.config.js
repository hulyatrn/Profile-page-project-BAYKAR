module.exports = {
  mode: 'jit',
  purge:["./src/**/*.html"],
  content: [],
  theme: {
    extend: {
      colors: {
        gray: {
          light: "#E5E5E5",
          borderbg: "#F4F4F4",
          dark: "#0275B1",
        },
    },
  },
  plugins: [],
}
};
