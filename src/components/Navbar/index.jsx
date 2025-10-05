import Search from "../Search/index.jsx"

const Navbar = () => {
    return (
        <>
            <div className=" p-6">
                <div className="relative flex flex-row justify-center items-center p-3">                    
                    <Search />
                </div>
            </div>
        </>
    )
}

export default Navbar