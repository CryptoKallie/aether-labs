const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}', "components/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			border: {
  				DEFAULT: 'hsl(var(--primary-light))',
  				dark: 'hsl(var(--primary-dark))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			foreground: 'hsl(var(--foreground))',
			background: 'hsl(var(--background))',
			sidebar: {
				DEFAULT: 'hsl(var(--sidebar-background))',
				foreground: 'hsl(var(--sidebar-foreground))',
				primary: 'hsl(var(--sidebar-primary))',
				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
				accent: 'hsl(var(--sidebar-accent))',
				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
				border: 'hsl(var(--sidebar-border))',
				ring: 'hsl(var(--sidebar-ring))'
			},
  			primary: {
  				light: 'hsl(var(--primary-light))',
  				DEFAULT: 'hsl(var(--primary))',
  				dark: 'hsl(var(--primary-dark))',
  				darker: 'hsl(var(--primary-darker))'
  			},
  			secondary: {
  				light: '#3275f0',
  				DEFAULT: '#2f6bd6',
  				dark: '#214c9c'
  			},
			gray: {
				light: 'hsl(var(--gray-light))',
				DEFAULT: 'hsl(var(--gray))',
				dark: 'hs(var(--gray-dark))',
				darker: 'hsl(var(--gray-darker))'
			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
			accent: 'hsl(var(--primary-light))',
  			purple: colors.purple,
  			blue: colors.blue,
  			slate: colors.slate
  		}
  	}
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
