import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "@/scenes/home";
import Benefits from "@/scenes/benefits";

function App() {

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isPageTop, setIsPageTop] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = ()=>{
      if(window.scrollY === 0){
        setIsPageTop(true);
        setSelectedPage(SelectedPage.Home);
      }else{
        setIsPageTop(false);
      }
    }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    
  }, [])
  return (
    <>
      <div className="app bg-gray-20">
        <Navbar
          isPageTop={isPageTop}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        <Home
          setSelectedPage={setSelectedPage}
        />
        <Benefits
          setSelectedPage={setSelectedPage}
        />
      </div>
      
    </>
  )
}

export default App;
