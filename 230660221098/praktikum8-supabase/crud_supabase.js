// crud_supabase.js
import { createClient } from '@supabase/supabase-js';

// Ganti dengan URL dan ANON KEY dari proyek Supabase Anda
const SUPABASE_URL = 'https://supabase.com/dashboard/project/esrhitmyhkcxjcfonddt/settings/api-keys/legacy';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzcmhpdG15aGtjeGpjZm9uZGR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1OTc3MjQsImV4cCI6MjA4MTE3MzcyNH0.Xy2Hk8GZ2Pjnw47mGGMk1TtCsseeD1EW2ylRCZ1nKXU';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function mainSupabase() {
  console.log('--- DEMO SUPABASE (CLOUD) ---');

  // 1. CREATE
  console.log('\n[CREATE] Menambahkan tugas...');
  await supabase.from('todos').insert([
    { tugas: 'Belajar Supabase', selesai: false },
    { tugas: 'Mengerjakan Modul 9', selesai: true },
  ]);

  // 2. READ
  console.log('\n[READ] Membaca semua tugas...');
  const { data: todos } = await supabase.from('todos').select('*');
  console.log(todos);

  // 3. UPDATE
  console.log("\n[UPDATE] Mengubah 'Belajar Supabase'...");
  await supabase.from('todos').update({ selesai: true }).eq('tugas', 'Belajar Supabase');

  // 4. DELETE
  console.log("\n[DELETE] Menghapus 'Mengerjakan Modul 9'...");
  await supabase.from('todos').delete().eq('tugas', 'Mengerjakan Modul 9');

  // 5. READ (Final)
  console.log('\n[READ] Hasil akhir:');
  const { data: finalData } = await supabase.from('todos').select('*');
  console.log(finalData);
}

mainSupabase();
