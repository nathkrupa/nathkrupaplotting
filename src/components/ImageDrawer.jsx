import { Button, Drawer } from "flowbite-react";
import { useState } from "react";
import { HiBars2, HiSquaresPlus } from "react-icons/hi2";
import { CLOUDINARY_URL, InaugurationImages } from "../utils/constants";

export function ImageDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex py-6">
        <Button className="bg-blue-500" onClick={() => setIsOpen(true)}>
          Learn more
        </Button>
      </div>
      <Drawer
        open={isOpen}
        onClose={handleClose}
        position="bottom"
        className="p-0 "
      >
        <Drawer.Header
          title="Drawer"
          className="cursor-pointer px-4 pt-4 hover:bg-gray-50 dark:hover:bg-gray-700"
        />
        <Drawer.Items className="p-4">
          <div className="grid grid-cols-3 gap-4 lg:grid-cols-4 mx-auto max-h-96 overflow-y-auto">
            {InaugurationImages.map((image, index) => (
              <img
                key={index}
                src={`${CLOUDINARY_URL}${image}`}
                alt={`inauguration-${index}`}
                className="h-full object-cover rounded-lg"
              />
            ))}
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
