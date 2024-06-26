import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";
import React from "react";


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const YellowActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-200 ease-in-out"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href= {`#${SelectedPage.ContactUs}`}
    >
        {children}
    </AnchorLink>
  )
}

export default YellowActionButton