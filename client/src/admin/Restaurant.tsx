import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

const Restaurant = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-5 bg-gradient-to-r from-orange-500 via-green-500 to-rose-500 bg-clip-text text-transparent">Add Restaurant</h1>
          <form action="">
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              {/* Restaurant Name  */}
              <div>
                <Label className="mb-2">Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  placeholder="Enter your restaurant name"
                />
              </div>
              <div>
                <Label className="mb-2">Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  placeholder="Enter your restaurant name"
                />
              </div>{" "}
              <div>
                <Label className="mb-2">Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  placeholder="Enter your restaurant name"
                />
              </div>{" "}
              <div>
                <Label className="mb-2">Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  placeholder="Enter your restaurant name"
                />
              </div>{" "}
              <div>
                <Label className="mb-2">Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  placeholder="Enter your restaurant name"
                />
              </div>{" "}
              <div>
                <Label className="mb-2">Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  placeholder="Enter your restaurant name"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
