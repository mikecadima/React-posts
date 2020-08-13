import React from "react";

const Header =({heading, children}) =>{
    return(<header>
        <div className="links">
            {children}

        </div>
        <h1>{heading}</h1>
    </header>)
}
export default Header;