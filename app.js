const SUPABASE_URL = "YOUR_SUPABASE_URL";
const SUPABASE_PUBLISHABLE_KEY = "YOUR_SUPABASE_PUBLISHABLE_KEY";

// Load Supabase
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


// Create project
function createProject() {
  const input = document.getElementById("videoUrl");

  if (!input) {
    alert("Video URL input not found.");
    return;
  }

  const url = input.value.trim();

  if (!url) {
    alert("Please enter a video URL.");
    return;
  }

  // Save URL
  localStorage.setItem("clip_source_url", url);

  // Open project page
  window.location.href = "Project.html";
}
