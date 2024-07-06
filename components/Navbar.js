import Image from "next/image"

const Navbar = () => {
    return (
        <>
        <nav className={`p-4 shadow-md rounded-md text-center navbar`}>
            <Image className='text-black mx-auto' src="/logo.svg" height={30} width={30} alt='back'/>  
            <h1 className='text-3xl text-center'>BLOGENIO</h1>
        </nav>
        </>
    )
}

export default Navbar