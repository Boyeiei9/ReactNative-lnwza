import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = "https://epsdwykgjyjvcejxctvf.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwc2R3eWtnanlqdmNlanhjdHZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MzU5MjUsImV4cCI6MjA4NjAxMTkyNX0.fpHLexH174v67xTJFuTTWoYiFWOEChrtL5Vq_D-8-SM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
