import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Cloud, CloudRain, CloudSnow, Sun, Wind, Shirt } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";

/**
 * Props for the WeatherCard component
 */
interface WeatherCardProps {
  city: string;
  searchTrigger: number;
}

/**
 * Weather data structure returned from the API
 */
interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
  windSpeed: number;
  condition: string;
}

/**
 * Map weather conditions to corresponding emojis and icon components
 * @param condition - Weather condition string from API
 * @returns Object containing emoji and React icon component
 */
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

/**
 * Generate fashion suggestion based on weather conditions
 * @param weather - Current weather data
 * @returns Fashion advice string
 */
const getFashionSuggestion = (weather: WeatherData): string => {
  const temp = weather.temperature;
  const condition = weather.condition.toLowerCase();
  
  if (temp < 0) {
    return "🧥 Bundle up! Heavy coat, scarf, gloves, and warm boots essential!";
  } else if (temp < 10) {
    return "🧥 Chilly vibes! Wear a warm jacket, long pants, and closed shoes.";
  } else if (temp < 20) {
    return "👕 Mild weather! Light jacket or sweater with jeans works perfectly.";
  } else if (temp < 28) {
    return "👕 Comfy weather! T-shirt and light pants or shorts are ideal.";
  } else {
    return "🩳 Hot day! Light, breathable clothes, sunglasses, and stay hydrated!";
  }
};

/**
 * Generate a weather-related joke
 * @param weather - Current weather data
 * @returns Weather joke string
 */
const getWeatherJoke = (weather: WeatherData): string => {
  const condition = weather.condition.toLowerCase();
  const jokes: { [key: string]: string } = {
    clear: "Why did the sun go to school? To get a little brighter! ☀️",
    clouds: "What did one cloud say to the other? I mist you! ☁️",
    rain: "What's a rain cloud's favorite drink? Mountain Dew! 🌧️",
    snow: "What do you call a snowman in summer? A puddle! ❄️",
    thunderstorm: "Why did the lightning break up? It found the relationship too shocking! ⚡",
  };
  
  return jokes[condition] || "What's the weather's favorite snack? Climate-control bars! 🌤️";
};

/**
 * WeatherCard component displays current weather data for a city
 * Includes temperature, conditions, humidity, wind speed, fashion advice, and jokes
 */
export const WeatherCard = ({ city, searchTrigger }: WeatherCardProps) => {
  const { toast } = useToast();
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetch weather data from OpenWeather API
   * Handles errors for missing API key, invalid key, city not found, and network issues
   */
  useEffect(() => {
    const fetchWeather = async () => {
      // Check for API key in environment variables
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
        // Fetch weather data from OpenWeather API
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric`
        );

        // Handle 401 Unauthorized error (invalid API key)
        if (response.status === 401) {
          setError("🔐 Unauthorized: Your API key is invalid. Please check your VITE_OPENWEATHER_API_KEY in the environment variables.");
          return;
        }

        // Handle 404 Not Found error (city doesn't exist)
        if (response.status === 404) {
          setError(`🗺️ City Not Found: "${city}" doesn't exist or couldn't be found. Try a different city name.`);
          return;
        }

        // Handle other HTTP errors
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} - ${response.statusText}`);
        }

        // Parse the API response
        const data = await response.json();

        // Update state with weather data
        setWeather({
          temperature: Math.round(data.main.temp),
          description: data.weather[0].description,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          condition: data.weather[0].main,
        });
      } catch (err) {
        // Handle network errors and other exceptions
        if (err instanceof TypeError && err.message.includes('fetch')) {
          setError("🌐 Network Error: Unable to connect to the weather service. Check your internet connection.");
        } else {
          setError(`❌ Error: ${err instanceof Error ? err.message : 'Failed to fetch weather data'}`);
        }
      } finally {
        setLoading(false);
      }
    };

    // Fetch weather data when city or searchTrigger changes
    if (city) {
      fetchWeather();
    }
  }, [city, searchTrigger]);

  /**
   * Handle wardrobe upload button click
   * Currently shows a "Coming Soon" toast notification
   */
  const handleWardrobeUpload = () => {
    toast({
      title: "Coming Soon! 👗",
      description: "The wardrobe upload feature will be available soon. Stay tuned!",
    });
  };

  // Show loading skeleton while fetching data
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

  // Show error message if something went wrong
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

  // Return null if no weather data is available
  if (!weather) {
    return null;
  }

  const { emoji, icon } = getWeatherEmoji(weather.condition);
  const fashionAdvice = getFashionSuggestion(weather);
  const weatherJoke = getWeatherJoke(weather);

  return (
    <Card className="bg-gradient-card backdrop-blur-lg border-2 border-primary/20 shadow-weather hover:shadow-xl transition-all duration-300 hover:scale-105">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center text-foreground">
          {city}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Weather icon and temperature display */}
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

        {/* Humidity and wind speed metrics */}
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

        {/* Fashion suggestion based on weather */}
        <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
          <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Shirt className="w-4 h-4 text-secondary" />
            Fashion Suggestion
          </h3>
          <p className="text-sm text-muted-foreground">{fashionAdvice}</p>
        </div>

        {/* Weather-related joke */}
        <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
          <h3 className="font-semibold text-foreground mb-2">😄 Weather Joke</h3>
          <p className="text-sm text-muted-foreground">{weatherJoke}</p>
        </div>

        {/* Wardrobe upload button */}
        <Button 
          onClick={handleWardrobeUpload}
          className="w-full bg-primary hover:bg-primary/90"
        >
          <Shirt className="w-4 h-4 mr-2" />
          Upload Your Wardrobe for AI Assistance
        </Button>
      </CardContent>
    </Card>
  );
};
