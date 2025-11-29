import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Cloud, CloudRain, CloudSnow, Sun, Wind } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface WeatherCardProps {
  city: string;
  searchTrigger: number;
}

interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  condition: string;
}

// Map weather conditions to emojis and icons
const getWeatherEmoji = (condition: string): { emoji: string; icon: JSX.Element } => {
  const lowerCondition = condition.toLowerCase();
  
  if (lowerCondition.includes('clear')) {
    return { emoji: '☀️', icon: <Sun className="w-16 h-16 text-secondary" /> };
  } else if (lowerCondition.includes('cloud')) {
    return { emoji: '☁️', icon: <Cloud className="w-16 h-16 text-muted-foreground" /> };
  } else if (lowerCondition.includes('rain') || lowerCondition.includes('drizzle')) {
    return { emoji: '🌧️', icon: <CloudRain className="w-16 h-16 text-primary" /> };
  } else if (lowerCondition.includes('snow')) {
    return { emoji: '❄️', icon: <CloudSnow className="w-16 h-16 text-primary" /> };
  } else if (lowerCondition.includes('thunder') || lowerCondition.includes('storm')) {
    return { emoji: '⛈️', icon: <CloudRain className="w-16 h-16 text-destructive" /> };
  } else if (lowerCondition.includes('mist') || lowerCondition.includes('fog')) {
    return { emoji: '🌫️', icon: <Cloud className="w-16 h-16 text-muted-foreground" /> };
  }
  
  return { emoji: '🌤️', icon: <Sun className="w-16 h-16 text-secondary" /> };
};

export const WeatherCard = ({ city, searchTrigger }: WeatherCardProps) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      // Check for API key in environment
      const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
      
      if (!apiKey) {
        setError("⚠️ API Key Missing: Please add your OpenWeather API key to continue. See instructions below for setup.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      setWeather(null);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
        );

        if (response.status === 401) {
          setError("🔐 Unauthorized: Your API key is invalid. Please check your VITE_OPENWEATHER_API_KEY in the .env file.");
          return;
        }

        if (response.status === 404) {
          setError(`🗺️ City Not Found: "${city}" doesn't exist or couldn't be found. Try a different city name.`);
          return;
        }

        if (!response.ok) {
          throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();

        setWeather({
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          condition: data.weather[0].main,
        });
      } catch (err) {
        if (err instanceof TypeError && err.message.includes('fetch')) {
          setError("🌐 Network Error: Unable to connect to the weather service. Check your internet connection.");
        } else {
          setError(`❌ Error: ${err instanceof Error ? err.message : 'Failed to fetch weather data'}`);
        }
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city, searchTrigger]);

  if (loading) {
    return (
      <Card className="bg-gradient-card backdrop-blur-lg border-2 shadow-weather">
        <CardHeader>
          <Skeleton className="h-8 w-3/4" />
        </CardHeader>
        <CardContent className="space-y-4">
          <Skeleton className="h-24 w-24 rounded-full mx-auto" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-6 w-2/3 mx-auto" />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-gradient-card backdrop-blur-lg border-2 border-destructive/50 shadow-weather">
        <CardContent className="pt-6">
          <Alert variant="destructive">
            <AlertCircle className="h-5 w-5" />
            <AlertDescription className="text-base whitespace-pre-line">
              {error}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    );
  }

  if (!weather) {
    return null;
  }

  const { emoji, icon } = getWeatherEmoji(weather.condition);

  return (
    <Card className="bg-gradient-card backdrop-blur-lg border-2 border-primary/20 shadow-weather hover:shadow-xl transition-all duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-foreground">
          {city}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center gap-4">
          <div className="relative">
            {icon}
            <span className="absolute -top-2 -right-2 text-4xl">{emoji}</span>
          </div>
          
          <div className="text-center">
            <p className="text-6xl font-bold text-foreground mb-2">
              {weather.temperature}°C
            </p>
            <p className="text-xl text-muted-foreground capitalize font-medium">
              {weather.description}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
          <div className="flex items-center gap-2 justify-center">
            <Cloud className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Humidity</p>
              <p className="text-lg font-semibold">{weather.humidity}%</p>
            </div>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Wind className="w-5 h-5 text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Wind Speed</p>
              <p className="text-lg font-semibold">{weather.windSpeed} m/s</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
