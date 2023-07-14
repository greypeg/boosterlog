import { Footer } from "../footer";
import { Navbar } from "../navbar";

export const Layout: React.FC<any> = ({ children }) => {
    return (
        <div className="flex flex-col h-screen justify-between bg-[#1A1A1D]">
            <Navbar />
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#1A1A1D] py-18">
                <div className="container flex flex-col items-center justify-center gap-12 px-4 py-6 ">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}