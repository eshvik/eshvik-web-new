export default function Site({ params }: { params: { site: string } }) {
  return <h1>Subdomain: {params.site}</h1>
}