import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 max-w-2xl mx-auto">
      <Input
        type="text"
        placeholder="Enter city name (e.g., London, Tokyo, New York)..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 h-14 text-lg bg-card/80 backdrop-blur-sm border-2 border-border focus:border-primary transition-colors"
      />
      <Button 
        type="submit" 
        size="lg"
        className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-soft hover:shadow-weather transition-all"
      >
        <Search className="mr-2 h-5 w-5" />
        Search
      </Button>
    </form>
  );
};
