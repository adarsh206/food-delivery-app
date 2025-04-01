import { Dispatch, SetStateAction } from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";

const CheckoutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogTitle>Review Your Order</DialogTitle>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutConfirmPage;
