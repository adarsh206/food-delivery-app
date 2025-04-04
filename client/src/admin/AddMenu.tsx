import { Loader2, Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { useState } from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import EditMenu from "./EditMenu";

const AddMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const loading = false;

  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-lg md:text-2xl bg-gradient-to-r from-orange-600 via-green-600 to-pink-600 bg-clip-text text-transparent">
          Available Menus
        </h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger>
            <Button className="bg-orange hover:bg-hoverColor">
              <Plus className="mr-2" />
              Add Menus
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add A New Menu</DialogTitle>
              <DialogDescription>
                Create a menu that will make your restaurant stand out.
              </DialogDescription>
            </DialogHeader>
            <form action="">
              <div className="my-4">
                <Label className="mb-2">Name</Label>
                <Input
                  type="text"
                  name="name"
                  placeholder="Enter menu name"
                  className="focus-visible:ring-0 focus-visible:border-amber-500 focus-visible:shadow-amber-500 focus-visible:shadow-lg"
                />
              </div>
              <div className="my-4">
                <Label className="mb-2">Description</Label>
                <Input
                  type="text"
                  name="description"
                  placeholder="Enter menu description"
                  className="focus-visible:ring-0 focus-visible:border-amber-500 focus-visible:shadow-amber-500 focus-visible:shadow-lg"
                />
              </div>
              <div className="my-4">
                <Label className="mb-2">Price in (Rupees)</Label>
                <Input
                  type="text"
                  name="price"
                  placeholder="Enter menu price"
                  className="focus-visible:ring-0 focus-visible:border-amber-500 focus-visible:shadow-amber-500 focus-visible:shadow-lg"
                />
              </div>
              <div className="my-4">
                <Label className="mb-2">Upload Menu Image</Label>
                <Input
                  type="file"
                  name="image"
                  placeholder="Enter menu image"
                />
              </div>
              <DialogFooter className="mt-5">
                {loading ? (
                  <Button disabled className="bg-orange hover:bg-hoverColor">
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button className="bg-orange hover:bg-hoverColor">
                    Submit
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
          <img
            src="https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg"
            alt=""
            className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
          />
          <div className="flex-1">
            <h1 className="text-lg font-semibold text-gray-800">Biryani</h1>
            <p className="text-sm tex-gray-600 mt-1">
              Delicious biryani for you only.
            </p>
            <h2 className="text-md font-semibold mt-2">
              Price: <span className="text-orange-600">80</span>
            </h2>
          </div>
          <Button size={"sm"} className="bg-orange hover:bg-hoverColor mt-2">
            Edit
          </Button>
        </div>
      </div>
      <EditMenu selectedMenu = {selectedMenu}
        />
    </div>
  );
};

export default AddMenu;
