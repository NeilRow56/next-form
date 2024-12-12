import Navbar from './mainComponents/Navbar'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex min-h-screen flex-col bg-slate-100'>
      {/* Sidebar and Main Content */}

      <Navbar />

      {children}
    </div>
  )
}
