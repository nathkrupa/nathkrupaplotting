import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { Contact, Home, Info, Menu, Target } from "lucide-react";
import { useState } from "react";
import { FaServicestack } from "react-icons/fa";
import { GiInauguration } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-router-dom";

export function NavDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="flex  items-center justify-center">
        <Menu className="cursor-pointer  " onClick={() => setIsOpen(true)} />
      </div>
      <Drawer open={isOpen} onClose={handleClose} position="right" className="">
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2 ">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item icon={Home}>
                      <Link
                        className=""
                        onClick={() => {
                          setIsOpen(false);
                          scrollToSection("home");
                        }}
                      >
                        Home
                      </Link>{" "}
                    </Sidebar.Item>
                    <Sidebar.Item icon={Info}>
                      <Link
                        className=""
                        onClick={() => {
                          setIsOpen(false);
                          scrollToSection("about");
                        }}
                      >
                        About
                      </Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={GiInauguration}>
                      <Link
                        className=""
                        onClick={() => {
                          setIsOpen(false);
                          scrollToSection("inaugration");
                        }}
                      >
                        Inaugration
                      </Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={Target}>
                      <Link
                        className=""
                        onClick={() => {
                          setIsOpen(false);
                          scrollToSection("vision");
                        }}
                      >
                        Vision{" "}
                      </Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={GrProjects}>
                      <Link
                        className=""
                        onClick={() => {
                          setIsOpen(false);
                          scrollToSection("projects");
                        }}
                      >
                        Projects
                      </Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={FaServicestack}>
                      <Link
                        className=""
                        onClick={() => {
                          setIsOpen(false);
                          scrollToSection("service");
                        }}
                      >
                        Service
                      </Link>
                    </Sidebar.Item>
                    <Sidebar.Item icon={Contact}>
                      <Link
                        className=""
                        onClick={() => {
                          setIsOpen(false);
                          scrollToSection("contact");
                        }}
                      >
                        Service
                      </Link>
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
