import Header from '../layouts/Header'
import Hero from '../layouts/Hero'
import Footer from '../layouts/Footer'

export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <div className="min-h-screen relative">
          <Header />
          <Hero />
          <Footer />
        </div>
      </div>
    </>
  )
}