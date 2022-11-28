import { useState } from "react";
import { MobileIcon } from "./components/mobileIcon";
import { MobileMenu } from "./components/mobileMenu";
export const MobileNav = () => {
    const [showMenu, setShowMenu] = useState(false);
    function handleClick() {
        setShowMenu(!showMenu);
    }
    return (
        <div className="mobileNav tablet:hidden">
            <MobileIcon handleClick={handleClick} showMenu={showMenu} />
            <MobileMenu handleClick={handleClick} showMenu={showMenu} />
        </div>
    );
};
