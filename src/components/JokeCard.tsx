import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { RefreshCw, Smile } from "lucide-react";

/**
 * JokeCard component displays random jokes from the Official Joke API
 * Includes refresh button to fetch new jokes
 */
export const JokeCard = () => {
  const [joke, setJoke] = useState<string>("");
  const [loading, setLoading] = useState(false);

  /**
   * Fetch a random joke from the Official Joke API
   * Displays a fallback joke if the API request fails
   */
  const fetchJoke = async () => {
    setLoading(true);
    try {
      // Fetch random joke from Official Joke API
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(`${data.setup}\n\n${data.punchline}`);
    } catch (error) {
      // Fallback joke if API fails
      setJoke("Why did the weather app break up with the thermometer? It just wasn't their temperature! 😄");
    } finally {
      setLoading(false);
    }
  };

  // Fetch initial joke on component mount
  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <Card className="bg-gradient-card backdrop-blur-lg border-2 border-accent/20 shadow-weather hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
        <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Smile className="w-6 h-6 text-accent" />
          Daily Joke
        </CardTitle>
        <Button
          variant="outline"
          size="icon"
          onClick={fetchJoke}
          disabled={loading}
          className="border-accent/50 hover:bg-accent/10 hover:border-accent"
        >
          <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-4/6" />
          </div>
        ) : (
          <p className="text-lg text-foreground leading-relaxed whitespace-pre-line">
            {joke}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
