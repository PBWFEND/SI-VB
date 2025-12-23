// crud_supabase.js
import { createClient } from '@supabase/supabase-js';

// Ganti dengan URL dan ANON KEY dari proyek Supabase Anda
const SUPABASE_URL = 'https://nvohfjiywlqepzuslrfw.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im52b2hmaml5d2xxZXB6dXNscmZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwOTQ2MjQsImV4cCI6MjA4MDY3MDYyNH0.RxVhiTFVf_LrAwzRERbmFYqp8p2waxXuStKG0ZYOB_8';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function mainSupabase() {
  console.log("--- DEMO SUPABASE (CLOUD) ---");

  // 1. CREATE
  console.log("\n[CREATE] Menambahkan tugas...");
  await supabase.from('todos').insert([
    { tugas: 'Belajar Supabase', selesai: false },
    { tugas: 'Mengerjakan Modul 9', selesai: true },
  ]);

  // 2. READ
  console.log("\n[READ] Membaca semua tugas...");
  const { data: todos } = await supabase.from('todos').select('*');
  console.log(todos);

  // 3. UPDATE
  console.log("\n[UPDATE] Mengubah 'Belajar Supabase'...");
  await supabase
    .from('todos')
    .update({ selesai: true })
    .eq('tugas', 'Belajar Supabase');

  // 4. DELETE
  console.log("\n[DELETE] Menghapus 'Mengerjakan Modul 9'...");
  await supabase
    .from('todos')
    .delete()
    .eq('tugas', 'Mengerjakan Modul 9');

  // 5. READ (Final)
  console.log("\n[READ] Hasil akhir:");
  const { data: finalData } = await supabase.from('todos').select('*');
  console.log(finalData);
}

mainSupabase();