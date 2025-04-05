import { Dispatch, FormEvent, SetStateAction, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { MenuFormSchema, menuSchema } from "../schema/menuSchema";

const EditMenu = ({
  selectedMenu,
  editOpen,
  setEditOpen,
}: {
  selectedMenu: MenuFormSchema;
  editOpen: boolean;
  setEditOpen: Dispatch<SetStateAction<boolean>>;
}) => {
    
    const [input, setInput] = useState<MenuFormSchema>({
        name: "",
        description: "",
        price: 0,
        image: undefined,
      });

      const [error, setError] = useState<Partial<MenuFormSchema>>({})
      const loading = false;
      const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setInput({ ...input, [name]: type === "number" ? Number(value) : value });
      };
    
    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         const result = menuSchema.safeParse(input);
            if(!result.success){
              const fieldErrors = result.error.formErrors.fieldErrors;
              setError(fieldErrors as Partial<MenuFormSchema>);
              return;
            }

        // api start here
    }

    useEffect(() => { 
        setInput({
          name: selectedMenu?.name || "",
          description: selectedMenu?.description || "",
          price: selectedMenu?.price || 0,
          image: undefined,
        });
      }, [selectedMenu]);

  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Menu</DialogTitle>
          <DialogDescription>
            Update your menu to keep your offerings fresh and exciting!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submitHandler}>
              <div className="my-4">
                <Label className="mb-2">Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                  placeholder="Enter menu name"
                  className="focus-visible:ring-0 focus-visible:border-amber-500 focus-visible:shadow-amber-500 focus-visible:shadow-lg"
                />
                 {error && <span className="text-xs font-medium text-red-600">{error.name}</span>}
              </div>
              <div className="my-4">
                <Label className="mb-2">Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  placeholder="Enter menu description"
                  className="focus-visible:ring-0 focus-visible:border-amber-500 focus-visible:shadow-amber-500 focus-visible:shadow-lg"
                />
                 {error && <span className="text-xs font-medium text-red-600">{error.description}</span>}
              </div>
              <div className="my-4">
                <Label className="mb-2">Price in (Rupees)</Label>
                <Input
                  type="number"
                  name="price"
                  value={input.price}
                  onChange={changeEventHandler}
                  placeholder="Enter menu price"
                  className="focus-visible:ring-0 focus-visible:border-amber-500 focus-visible:shadow-amber-500 focus-visible:shadow-lg"
                />
                 {error && <span className="text-xs font-medium text-red-600">{error.price}</span>}
              </div>
              <div className="my-4">
                <Label className="mb-2">Upload Menu Image</Label>
                <Input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      image: e.target.files?.[0] || undefined,
                    })
                  }
                  placeholder="Enter menu image"
                />
                 {error && <span className="text-xs font-medium text-red-600">{error.image?.name}</span>}
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
  );
};

export default EditMenu;
