import { useState } from "react";
import { WeatherCard } from "@/components/WeatherCard";
import { SearchBar } from "@/components/SearchBar";
import { JokeCard } from "@/components/JokeCard";
import { Cloud, CloudRain, Sun } from "lucide-react";

/**
 * Main Index page component for the Weather Explorer app
 * Displays weather data with animated background elements
 */
const Index = () => {
  // State for tracking the current city and search triggers
  const [city, setCity] = useState("");
  const [searchTrigger, setSearchTrigger] = useState(0);

  /**
   * Handle city search submission
   * @param cityName - Name of the city to search for
   */
  const handleSearch = (cityName: string) => {
    setCity(cityName);
    setSearchTrigger(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-sky relative overflow-hidden">
      {/* Animated background clouds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Cloud className="absolute top-20 left-10 text-primary/10 w-32 h-32 animate-float" style={{ animationDelay: '0s' }} />
        <CloudRain className="absolute top-40 right-20 text-primary/10 w-24 h-24 animate-float" style={{ animationDelay: '2s' }} />
        <Sun className="absolute bottom-20 left-1/4 text-secondary/20 w-40 h-40 animate-pulse-slow" />
        <Cloud className="absolute bottom-40 right-1/3 text-primary/10 w-28 h-28 animate-float" style={{ animationDelay: '4s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-6xl font-bold text-foreground mb-4 tracking-tight">
            🌤️ Weather Explorer
          </h1>
          <p className="text-xl text-muted-foreground font-medium">
            Your Beginner-Friendly Weather API Toolkit
          </p>
        </header>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Search bar for entering city name */}
          <SearchBar onSearch={handleSearch} />
          
          {/* Display weather and joke cards when a city is searched */}
          {city && (
            <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
              <WeatherCard city={city} searchTrigger={searchTrigger} />
              <JokeCard />
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Index;
