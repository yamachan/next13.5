function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function ZenComponent() {
  const res = await fetch('https://api.github.com/zen')
  await sleep(2000)
  const data = await res.text()
  return (
    <span>{data}</span>
  );
}