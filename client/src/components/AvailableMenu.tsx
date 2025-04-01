import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6 bg-gradient-to-r from-orange-600 via-green-600 to-pink-600 bg-clip-text text-transparent">
        Available Menus
      </h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg"
            alt=""
            className="w-full h-40 object-cover"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Biryani
            </h2>
            <p className="text-sm text-gray-600 mt-2">This is good biryani</p>
            <h3 className="text-lg font-semibold mt-4">
              Price: <span className="text-orange-400">₹200</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button
              onClick={() => {
                addToCart(menu);
                navigate("/cart");
              }}
              className="w-full bg-orange hover:bg-hoverColor"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;
