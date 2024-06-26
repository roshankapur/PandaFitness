import Logo from "@/assets/Logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img className="h-10" alt="logo" src={Logo} />
          <p className="my-5">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
            <h3 className="font-bold">Links</h3>
            
            <p className="my-5 text-sm text-gray-500 underline hover:text-primary-500 hover:font-bold"><a href="https://www.facebook.com" target="_blank">Facebook</a></p>
            <p className="my-5 text-sm text-gray-500 underline hover:text-primary-500 hover:font-bold"><a href="https://www.instagram.com/projekt_ferrero" target="_blank">Instagram</a></p>
            <p className="my-5 text-sm text-gray-500 underline hover:text-primary-500 hover:font-bold"><a href="https://www.x.com" target="_blank">Twitter</a></p>
        
            
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">1 Hacker Wy, Melo Park, CA, US</p>
          <p>(333)425-6825</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;