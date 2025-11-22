import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = "https://wupufnjutqplcsqqxhcb.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1cHVmbmp1dHFwbGNzcXF4aGNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3MzE0NzUsImV4cCI6MjA3OTMwNzQ3NX0.Rjm0pD_H32oSJAMTChF71gUZMXWdgiCuEy-L1nDvAFA";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function mainSupabase() {
  console.log("--- DEMO SUPABASE (CLOUD) ---");

  // CREATE
  await supabase.from('todos').insert([
    { tugas: 'Belajar Supabase', selesai: false },
    { tugas: 'Mengerjakan Modul 8', selesai: true },
  ]);

  // READ
  const { data: todos } = await supabase.from('todos').select('*');
  console.log(todos);

  // UPDATE
  await supabase
    .from('todos')
    .update({ selesai: true })
    .eq('tugas', 'Belajar Supabase');

  // DELETE (perbaikan)
  await supabase
    .from('todos')
    .delete()
    .eq('tugas', 'Mengerjakan Modul 8');

  // READ FINAL
  const { data: finalData } = await supabase.from('todos').select('*');
  console.log(finalData);
}

mainSupabase();
