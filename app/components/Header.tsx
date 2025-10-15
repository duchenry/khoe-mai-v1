import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div className="flex p-6 items-center justify-between">
            <Logo />
            <Navbar />
        </div>
    )
}