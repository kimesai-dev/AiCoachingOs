import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">AI Coaching Platform</h1>
      <p className="mt-2">Welcome!</p>
      <div className="mt-4 space-x-4">
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </div>
  )
}
