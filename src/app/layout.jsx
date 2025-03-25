import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
 
export const metadata = {
  title: {
    default: 'Official Arknesia Wiki',
    template: '%s | Official Arknesia Wiki'
  },
  metadataBase: new URL('https://arknesia.wiki'),
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {/* Your Additional Tags */}
      </Head>
      <body>
        <Layout
          navbar={
            <Navbar
              logo={<span style={{ fontWeight: 800 }}>Arknesia Wiki</span>}
              projectLink="https://github.com/Arknesia/Arkpedia"
              chatLink="https://discord.gg/nqbNxtw5QZ"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/Arknesia/Arkpedia/tree/main"
          nextThemes={{ disableTransitionOnChange: false, defaultTheme: 'dark' }}
          navigation={{ prev: false, next: false }}
          sidebar={{ toggleButton: false }}
          footer={<Footer />}
          darkMode={false}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}