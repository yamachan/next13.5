export default async function Zen() {
    const res = await fetch('https://api.github.com/zen')  
    const data = await res.text()
    return (
      <main>
        <p className="p-4">{data}</p>
      </main>
  )
}