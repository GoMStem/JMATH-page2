import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import ScrollProgress from '@/components/ScrollProgress'
import RevealObserver from '@/components/RevealObserver'
import ScrollTop from '@/components/ScrollTop'

export const metadata: Metadata = {
  title: 'J-MATH — 프리미엄 수학 전략 코칭',
  description: '정확한 진단 · 맞춤 개념조합 · 실전 피드백',
  verification: {
    other: {
      'naver-site-verification': 'ef0ea5c134e4a07eaa5b8514bae17ce22d19841d',
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700;800;900&family=Noto+Serif+KR:wght@600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body>
        <ScrollProgress />
        <Nav />
        {children}
        <ScrollTop />
        <RevealObserver />
      </body>
    </html>
  )
}
