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

const AddMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
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
                <Input type="text" name="name" placeholder="Enter menu name" 
                className="focus-visible:ring-0 focus-visible:border-amber-500 focus-visible:shadow-amber-500 focus-visible:shadow-lg"/>
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
    </div>
  );
};

export default AddMenu;
