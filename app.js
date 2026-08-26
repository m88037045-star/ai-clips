const SUPABASE_URL = "https://pkhazfluijkfyuxgffgv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable__dR6SaYW0YXo_NeF0X3dOw_dROVRLHo";

// Load Supabase library
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

script.onload = () => {
  window.supabaseClient = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );

  console.log("Supabase connected!");
};

document.head.appendChild(script);

function createProject() {
  const input = document.getElementById("videoUrl");

  if (!input) return;

  const url = input.value.trim();

  if (!url) {
    alert("Please enter a video URL.");
    return;
  }

  localStorage.setItem("clip_source_url", url);

  window.location.href = "project.html";
}
