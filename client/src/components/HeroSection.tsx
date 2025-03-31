import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import HeroPizza from "../assets/pizza.jpg";

const HeroSection = () => {
    const [searchText, setSearchText] = useState<string>("");
    const navigate = useNavigate();
    return (
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto md:p-10 rounded-lg items-center justify-center m-4 gap-20">
        <div className="flex flex-col gap-10 md:w-[50%]">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold md:font-extrabold md:text-5xl text-4xl bg-gradient-to-r from-orange-600 via-green-600 to-pink-600 bg-clip-text text-transparent">
              Order Tasty Food Anytime & Anywhere
            </h1>
            <p className="text-gray-500">
              Hey! Our Delicious food is waiting for you, we are always near to
              you.
            </p>
          </div>
          <div className="relative flex items-center gap-2">
            <Input
              type="text"
              value={searchText}
              placeholder="Search restaurant by name, city & country"
              onChange={(e) => setSearchText(e.target.value)}
              className="pl-10 shadow-lg focus-visible:ring-0 focus-visible:border focus-visible:border-orange-500 focus-visible:shadow-amber-500"
            />
         <Search className="text-gray-500 absolute inset-y-2 left-2" />
            <Button onClick={() => navigate(`/search/${searchText}`)} className="bg-orange hover:bg-hoverColor">Search</Button>
          </div>
        </div>
      <div>
          <img 
          src={HeroPizza} 
          alt="" 
          className="object-cover w-full max-h-[350px] rounded-4xl"
          />
        </div>
      </div>
    );
  };
  

export default HeroSection