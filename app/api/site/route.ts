import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
"https://ajhuzmwfygflppnmzzxw.supabase.co/",
"sb_publishable_PNcQchuKerVK2FwmPUVW8Q_tp1z0zX0" 
);

export async function GET(req: Request) {
const { searchParams } = new URL(req.url);
const name = searchParams.get("name");

const { data, error } = await supabase
.from("sites")
.select("*")
.eq("name", name)
.single();

if (error || !data) {
return NextResponse.json({ error: "Not found" }, { status: 404 });
}

return NextResponse.json(data); 