const supabaseUrl = 'https://zcfiewtlnsxwmkjapnnl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjZmlld3RsbnN4d21ramFwbm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQyMTEwNzksImV4cCI6MjA5OTc4NzA3OX0.H6je9HVwjBM54uuG1EfwDiXtgWUekrYX2LXS8VIjcuA';

let supabaseClient = null;

try {
    if (typeof window !== 'undefined' && window.supabase) {
        supabaseClient = window.supabase.createClient(supabaseUrl, supabaseAnonKey);
    } else if (typeof supabase !== 'undefined' && supabase.createClient) {
        supabaseClient = supabase.createClient(supabaseUrl, supabaseAnonKey);
    }
} catch (e) {
    console.error("Error initializing Supabase:", e);
}

var supabase = supabaseClient;
