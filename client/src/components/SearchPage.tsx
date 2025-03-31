import { useParams } from "react-router-dom";
import FilterPage from "./FilterPage";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import { Badge } from "./ui/badge";
import { MapPin, X } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";
import HeroPizza from "../assets/hero_pizza.png";
const SearchPage = () => {
  const params = useParams();
  const [searchQuery, setSearchQuery] = useState<string>("");

  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <FilterPage />
        <div className="flex-1">
          {" "}
          {/* flex-1 takes the left/rest spaces*/}
          {/* Search Input Field  */}
          <div className="flex items-center gap-2">
            <Input
              type="text"
              value={searchQuery}
              placeholder="Search by restaurant & cuisines"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="focus-visible:border focus-visible:border-orange-500 focus-visible:ring-0 focus-visible:shadow-amber-500 shadow-lg"
            />
            <Button
              className="bg-orange hover:bg-hoverColor">
              Search
            </Button>
          </div>
          {/* Searched Items display here  */}
          <div>
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2 my-3">
          <h1 className="font-medium text-lg">
                (2) Search result found
              </h1>
              <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                {
                ["Biryani", "Momos", "Galebi"].map(
                  (selectedFilter: string, idx: number) => (
                    <div
                      key={idx}
                      className="relative inline-flex items-center max-w-full"
                    >
                      <Badge
                        className="text-[#D19254] rounded-md shadow-lg hover:cursor-pointer pr-6 whitespace-nowrap hover:shadow-lg hover:shadow-orange-400"
                        variant="outline"
                      >
                        {selectedFilter}
                      </Badge>
                      <X size={16}
                        className="absolute text-[#D19254] right-1 hover:cursor-pointer"
                      />
                    </div>
                  )
                )}
              </div>
          </div>
          {/** Restaurant Card */}
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                    <AspectRatio ratio={16 / 6}>
                    <img src={HeroPizza}
                          alt="pizza"
                          className="w-full h-full object-cover"
                        />
                    </AspectRatio>
                    <div className="absolute top-2 left-2 bg-white dark:bg-gray-700 bg-opacity-75 rounded-lg px-3 py-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            Featured
                        </span>
                    </div>
                </div>
                <CardContent>
                    <h1 className="text-2xl top-0 font-bold dark:text-gray-100 
                    bg-gradient-to-r from-orange-500 via-green-500 to-pink-500 bg-clip-text text-transparent">Pizza House</h1>
                    <div className="mt-2 gap-1 flex items-center text-gray-600 dark:text-gray-400">
                        <MapPin size={16}/>
                        <p className="text-sm">
                          City:{" "}
                          <span className="font-medium">Delhi</span>
                        </p>
                    </div>
                </CardContent>
            </Card>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
