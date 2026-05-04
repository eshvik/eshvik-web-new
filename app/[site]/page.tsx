import { supabase } from "@/lib/supabase";

export default async function SitePage({ params }: any) {
  const { site } = params;

  const { data, error } = await supabase
    .from("sites")
    .select("*")
    .eq("name", site)
    .single();

  if (error || !data) {
    return <h1>❌ Site not found</h1>;
  }

  return (
    <div dangerouslySetInnerHTML={{ __html: data.content }} />
  );
}