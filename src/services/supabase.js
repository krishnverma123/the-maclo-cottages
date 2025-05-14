// import { createClient } from "@supabase/supabase-js";
// export const supabaseUrl = "https://fkrhlogbooyfxhqneiyb.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrcmhsb2dib295ZnhocW5laXliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxODk0OTMsImV4cCI6MjA0OTc2NTQ5M30.ORKd19RXKotx-vHuPE2BzVpXElXv0TTN1us6OZx41X4";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default supabase;

//==========================supabase connection ===========================================



import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://rgjizquudtwcuxuvduwu.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnaml6cXV1ZHR3Y3V4dXZkdXd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3NDk3MjAsImV4cCI6MjA2MTMyNTcyMH0.yxRC8GEEfdiK8bKTLDwJ09qV0sdNQrXCxxZu4FjO_34";
const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase;
