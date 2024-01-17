import { type Config } from 'tailwindcss'

export const marketingPreset = {
	theme: {
		extend: {
			keyframes: {
				'roll-reveal': {
					from: { transform: 'rotate(12deg) scale(0)', opacity: '0' },
					to: { transform: 'rotate(0deg) scale(1)', opacity: '1' },
				},
				'slide-left': {
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0px)', opacity: '1' },
				},
				'slide-top': {
					from: { transform: 'translateY(20px)', opacity: '0' },
					to: { transform: 'translateY(0px)', opacity: '1' },
				},
			},
			animation: {
				'roll-reveal': 'roll-reveal 0.4s cubic-bezier(.22,1.28,.54,.99)',
				'slide-left': 'slide-left 0.3s ease-out',
				'slide-top': 'slide-top 0.3s ease-out',
			},
		},
	},
} satisfies Omit<Config, 'content'>

export const borderAnimationPreset = {
	theme: {
		extend: {
			keyframes: {
				rotate: {
					'0%': { '--a': '0deg' },
					'100%': { '--a': '360deg' },
				},
			},
			animation: {
				rotate: 'rotate 5s linear infinite',
			},
			backgroundImage: {
				'box-pattern': `repeating-conic-gradient(from var(--a), theme('colors.primary.DEFAULT') 0%, theme('colors.primary.DEFAULT') 5%, transparent 5%, transparent 40%, theme('colors.primary.DEFAULT') 50%)`,
				'box-pattern-dark': `repeating-conic-gradient(from var(--a), theme('colors.primary.DEFAULT') 0%, theme('colors.primary.DEFAULT') 5%, transparent 5%, transparent 40%, theme('colors.primary.DEFAULT') 50%)`,
			},
		},
	},
} satisfies Omit<Config, 'content'>
