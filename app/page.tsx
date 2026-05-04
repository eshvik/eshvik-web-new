export default function SitePage({ params }: { params: { site: string } }) {
  const siteName = params.site;

  return (
    <div style={{ padding: "40px", color: "white", background: "black", height: "100vh" }}>
      <h1>🚀 {siteName}.eshvik.in</h1>
      <p>This is your live SaaS site.</p>
      <p>Powered by ESHVIK</p>
    </div>
  );
}