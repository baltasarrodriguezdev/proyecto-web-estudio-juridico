export default async function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${baseUrl}/api/ping`, { cache: "no-store" });
  const data = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h1>Conexión OK</h1>
      <p><b>API URL:</b> {baseUrl}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}