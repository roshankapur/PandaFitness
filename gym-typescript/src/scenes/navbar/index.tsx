import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import YellowActionButton from "@/shared/YellowActionButton";

type Props = {
    isPageTop: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isPageTop, selectedPage,setSelectedPage}: Props) => {
    const flexBetween = "flex justify-between items-center";
    const [isMenuToggled, setMenuIsToggled] = useState<boolean>(false);
    const isMediumLargeScreen = useMediaQuery("(min-width: 1060px)");
    const navbarBg = isPageTop ? "" : "bg-primary-100 drop-shadow";

    return (
    <nav>
        <div className={`${navbarBg} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* logo  on the left*/}
                    <img className= "h-10" alt="logo" src={Logo}/>

                    {/* nav elements on the right*/}
                    {isMediumLargeScreen ? (
                        <div className={`${flexBetween} w-full`}>
                            {/* inner left - nav buttons*/}
                            <div className={`${flexBetween} gap-8 text-sm`}>
                                <Link 
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Our Classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page="Contact Us"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>

                            {/* inner right - signup/signin*/}
                            <div  className={`${flexBetween} gap-8`}>
                                <p>Sign In</p>
                                <YellowActionButton setSelectedPage = {setSelectedPage}>Become a Member</YellowActionButton>
                            </div>
                        </div>
                        //mobile view
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setMenuIsToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white"/>
                            </button>
                        )}
                </div>
            </div>
        </div>

        {/*Mobile Menu*/}
        {!isMediumLargeScreen && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                {/*close menu button*/}
                <div className="flex justify-end p-12">
                    <button
                        onClick={() => setMenuIsToggled(!isMenuToggled)}
                    >
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>
                
                {/*menu navigation buttons */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                    <Link 
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link 
                        page="Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            </div>
        )}
    </nav>
    );
}

export default Navbar