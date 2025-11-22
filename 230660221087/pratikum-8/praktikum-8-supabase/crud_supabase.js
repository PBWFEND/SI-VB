import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fdwwbncfmiulhadrgsvt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkd3dibmNmbWl1bGhhZHJnc3Z0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM3OTM4MzUsImV4cCI6MjA3OTM2OTgzNX0.NoEp62LplqW4jBaIDgB8I2iHIbWTT5tZJFHeDHX0Jtw';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function mainSupabase() {
  console.log("--- DEMO SUPABASE (CLOUD) ---");

  console.log("\n[CREATE] Menambahkan tugas...");
  await supabase.from('todos').insert([
    { tugas: 'Belajar Supabase', selesai: false },
    { tugas: 'Mengerjakan Modul 9', selesai: true },
  ]);

  console.log("\n[READ] Membaca semua tugas...");
  const { data: todos } = await supabase.from('todos').select('*');
  console.log(todos);

  console.log("\n[UPDATE] Mengubah 'Belajar Supabase'...");
  await supabase
    .from('todos')
    .update({ selesai: true })
    .eq('tugas', 'Belajar Supabase');

  console.log("\n[DELETE] Menghapus 'Mengerjakan Modul 9'...");
  await supabase
    .from('todos')
    .delete()
    .eq('tugas', 'Mengerjakan Modul 9');

  console.log("\n[READ] Hasil akhir:");
  const { data: finalData } = await supabase.from('todos').select('*');
  console.log(finalData);
}

mainSupabase();
