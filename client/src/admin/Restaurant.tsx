import { Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { FormEvent, useState } from "react";
import { RestaurantFormSchema, restaurantFromSchema } from "../schema/restaurantSchema";

const Restaurant = () => {
  const [input, setInput] = useState<RestaurantFormSchema>({
    restaurantName: "",
    city: "",
    country: "",
    deliveryTime: 0,
    cuisines: [],
    imageFile: undefined,
  });

  const [errors, setErrors] = useState<Partial<RestaurantFormSchema>>({});

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input)
    
    const result = restaurantFromSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors as Partial<RestaurantFormSchema>);
      return;
    }
    //add restaurant api implementation start from here
  };

  const loading = false;
  const restaurant = false;

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-5 bg-gradient-to-r from-orange-500 via-green-500 to-rose-500 bg-clip-text text-transparent">
            Add Restaurant
          </h1>
          <form onSubmit={submitHandler}>
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              {/* Restaurant Name  */}
              <div>
                <Label className="mb-2">Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  value={input.restaurantName}
                  onChange={changeEventHandler}
                  placeholder="Enter your restaurant name"
                />
                 {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.restaurantName}
                  </span>
                )}
              </div>
              <div>
                <Label className="mb-2">City</Label>
                <Input
                  type="text"
                  name="city"
                  value={input.city}
                  onChange={changeEventHandler}
                  placeholder="Enter your city name"
                />
                 {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.city}
                  </span>
                )}
              </div>{" "}
              <div>
                <Label className="mb-2">Country</Label>
                <Input
                  type="text"
                  name="country"
                  value={input.country}
                  onChange={changeEventHandler}
                  placeholder="Enter your country name"
                />
                 {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.country}
                  </span>
                )}
              </div>{" "}
              <div>
                <Label className="mb-2">Delivery Time</Label>
                <Input
                  type="number"
                  name="deliveryTime"
                  value={input.deliveryTime}
                  onChange={changeEventHandler}
                  placeholder="Enter your delivery time"
                />
                 {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.deliveryTime}
                  </span>
                )}
              </div>{" "}
              <div>
                <Label className="mb-2">Cuisine</Label>
                <Input
                  type="text"
                  name="cuisines"
                  value={input.cuisines}
                  onChange={(e) =>
                    setInput({ ...input, cuisines: e.target.value.split(",") })
                  }
                  placeholder="e.g. Momos, Biryani, Pizza"
                />
                 {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.cuisines}
                  </span>
                )}
              </div>{" "}
              <div>
                <Label className="mb-2">Upload Restaurant Banner</Label>
                <Input  onChange={(e) =>
                    setInput({
                      ...input,
                      imageFile: e.target.files?.[0] || undefined,
                    })
                  }
                type="file" name="imageFile" accept="image/*" />
                {errors && (
                  <span className="text-xs text-red-600 font-medium">
                    {errors.imageFile?.name}
                  </span>
                )}
              </div>
            </div>
            <div className="my-5 w-fit">
              {loading ? (
                <Button disabled className="bg-orange hover:bg-hoverColor">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button className="bg-orange hover:bg-hoverColor">
                  {restaurant
                    ? "Update Your Restaurant"
                    : "Add Your Restaurant"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
