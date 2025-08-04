module.exports = {
  content: ["./src/**/*.{html,njk,md,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',
        secondary: '#6c757d',
        accent: '#495057',
        neutral: '#f8f9fa',
        text: '#212529',
        background: '#ffffff'
      },
      fontFamily: {
        'primary': ['Georgia, 'Times New Roman', serif', 'sans-serif'],
        'secondary': ['Arial, 'Helvetica Neue', sans-serif', 'serif']
      }
    }
  },
  plugins: []
}