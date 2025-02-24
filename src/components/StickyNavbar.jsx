import React from "react";
import {
  Navbar,
  IconButton,
  Button,
  Typography,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography as="li" variant="small" className="p-1 font-normal text-gray-500">
        <a href="#" className="flex items-center">Home</a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal text-gray-500">
        <a href="#" className="flex items-center">Use Cases</a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal text-gray-500">
        <a href="#" className="flex items-center">Workflow</a>
      </Typography>
      <Typography as="li" variant="small" className="p-1 font-normal text-gray-500">
        <a href="#" className="flex items-center">Revenue Streams</a>
      </Typography>
    </ul>
  );

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="bg-black">
        <Navbar className="h-max max-w-full rounded-none bg-black px-4 py-3 text-gray-100 border-none dark:bg-gray-800 dark:text-gray-100 lg:px-8 lg:py-6">
          <div className="max-w-screen-lg mx-auto">
            <div className="flex items-center justify-between">
              <a href="#" className="mr-4 cursor-pointer">
                <img src="/images/logo.svg" alt="Logo" className="h-[30px] w-auto" />
              </a>
              <div className="flex items-center gap-4">
                <div className="mr-4 hidden lg:block">{navList}</div>
                <div className="flex items-center gap-x-1">
                  <Button className="bg-customDark text-white rounded-full shadow-none normal-case font-normal text-base">
                    Create a Character
                  </Button>
                </div>
                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
                </IconButton>
              </div>
            </div>
          </div>
        </Navbar>

        <div className={`lg:hidden ${openNav ? 'block' : 'hidden'}`}>
          <div className="max-w-screen-lg mx-auto px-4 pb-4">
            {navList}
          </div>
        </div>
      </div>
    </div>
  );
}