const API_KEY = "50e698fcb4083448c88dee245a4b7c69";

export async function GET(req) {
  const city = new URL(req.url).searchParams.get("q");
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    
  );
  const data = await res.json();
  return Response.json(data);
}
