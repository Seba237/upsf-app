/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1A2849',
          dark: '#0F1A35',
          50: '#F2F4F8',
          100: '#E5E9F1',
          200: '#C8D0E0',
          400: '#5A6786',
          900: '#0F1A35'
        },
        cream: {
          DEFAULT: '#FAF7F0',
          200: '#F1EFE8',
          300: '#E8E5DB'
        },
        ink: {
          DEFAULT: '#1F1E1B',
          soft: '#3D3B36',
          mute: '#75726B',
          faint: '#A8A59C'
        },
        rule: '#D5D2C8',
        accent: {
          rust: '#C44A2D',
          forest: '#0F6E56',
          ochre: '#B5821C',
          mauve: '#5B3D7A'
        }
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15, 26, 53, 0.04), 0 4px 12px rgba(15, 26, 53, 0.04)',
        card: '0 0.5px 1px rgba(0,0,0,0.04), 0 2px 8px rgba(15, 26, 53, 0.04)'
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem'
      }
    }
  },
  plugins: []
}
