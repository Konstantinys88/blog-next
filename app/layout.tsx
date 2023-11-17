import { TheFooter } from '@/components/TheFooter'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import { TheHeader } from '@/components/TheHeader'


// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
	weight: '400',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="ru">
			<body className={roboto.className}>
				<TheHeader />
				<main className='container'>
					{children}
				</main>
				<TheFooter />

			</body>
		</html>
	)
}
