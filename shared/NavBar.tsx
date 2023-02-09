import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed w-full  z-50 bg-blue-dark-500 top-0 border-b-2 border-b-blue-dark-200 left-0 right-0 px-4 tablet:px-0">
      <nav className="container mx-auto">
        <div className=" grid grid-cols-4 tablet:grid-cols-12 desktop:grid-cols-24 gap-4 flex-wrap">
          <div className="col-span-2 h-16">
            <Link href={"/"}>
              <Image
                className="h-full"
                src="/logo.png"
                alt="logo"
                width={"91px"}
                height={"64px"}
                layout="fixed"
                priority
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
