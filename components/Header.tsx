import Link from "next/link";

function Header() {
    return (
        <header className="flex justify-between p-5 max-w-7xl mx-auto">
            <div className="flex items-center space-x-5">
                <Link href="/">
                    <img className="w-44 object-contain cursor-pointer"
                        src="https://firebasestorage.googleapis.com/v0/b/songs-845230.appspot.com/o/1_s986xIGqhfsN8U--09_AdA.png?alt=media&token=65c57067-adbe-417d-a976-c08c2fc455b5"
                        alt="" />
                </Link>
                <div className="hidden md:inline-flex items-center space-x-5">
                    <h3>About</h3>
                    <h3>Contact</h3>
                    <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
                </div>
            </div>

            <div className="flex items-center space-x-5 text-green-600">
                <h3>Sign In</h3>
                <h3 className="border px-4 rounded-full border-green-600">Get Started</h3>
            </div>
        </header>
    );
}

export default Header;
