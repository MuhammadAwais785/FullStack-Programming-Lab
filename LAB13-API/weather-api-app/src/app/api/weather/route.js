import { NextResponse } from 'next/server';

export async function GET(request) {
  // 1. URL se city ka naam nikalna
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  // Agar user city dena bhool jaye
  if (!city) {
    return NextResponse.json(
      { error: 'City parameter is required. Example: /api/weather?city=London' },
      { status: 400 }
    );
  }

  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  
  // Agar .env.local me key configure na ho
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Server configuration error: Missing API Key.' },
      { status: 500 }
    );
  }

  try {
    // 2. OpenWeather API ko request bhejna (units=metric se temperature Celsius me milega)
    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&units=metric&appid=${apiKey}`;

    const response = await fetch(openWeatherUrl);

    // 3. Agar OpenWeather error de (jaise city spelling galat ho)
    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: `City '${city}' not found. Please check the spelling.` },
          { status: 404 }
        );
      }
      return NextResponse.json(
        { error: 'Failed to fetch data from weather service.' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // 4. Data ko clean aur task ki requirement ke mutabiq format karna
    const formattedWeather = {
      city: data.name,
      currentTemperature: `${Math.round(data.main.temp)}°C`,
      weatherCondition: data.weather[0].description,
      humidityLevel: `${data.main.humidity}%`
    };

    // Clean JSON response return karna
    return NextResponse.json(formattedWeather, { status: 200 });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'An unexpected internal server error occurred.' },
      { status: 500 }
    );
  }
}