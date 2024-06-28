import React from "react";

const MainLayout = ({ children }) => {
    return(
        <div className="container mx-auto px-4">
            {children}
        </div>
    )
}

export default MainLayout