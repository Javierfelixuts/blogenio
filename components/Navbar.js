import Image from "next/image"
import { useEffect } from "react";

const Navbar = () => {
    useEffect(() => {
        console.log("oj");
        const handleScroll = () => {
          console.log("window", window.scrollY)
          if (window.scrollY > 100) {
            setIsFixed(true);
          } else {
            setIsFixed(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <>
        <nav className={`p-2 sm:p-4 shadow-md rounded-md text-center navbar`}>
            <Image className='text-black mx-auto' src="/logo.svg" height={30} width={30} alt='back'/>  
            <h1 className='text-md sm:text-3xl text-center'>BLOGENIO</h1>
        </nav>
        </>
    )
}

export default Navbar