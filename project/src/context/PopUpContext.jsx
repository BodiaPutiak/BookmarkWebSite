import { createContext, useContext, useState, useEffect } from "react";

const PopUpContext = createContext();

export function usePopUp() {
    return useContext(PopUpContext);
}

export function PopUpProvider({children}) {
    const [openPopUp, setOpenPopUp] = useState(false);

    if (openPopUp) {
        document.body.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
    }
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setOpenPopUp(true);
        }, 30000)

        return () => {
            clearTimeout(timeoutId);
        }
    }, [])

    const handleCloseButton = () => {
        setOpenPopUp(false);
    }

    const handleLogoHover = () => {
        setOpenPopUp(!openPopUp);
    }
    return (
        <PopUpContext.Provider value={{openPopUp, handleCloseButton, handleLogoHover}}>
            {children}
        </PopUpContext.Provider>
    )
}