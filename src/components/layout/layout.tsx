import { Footer } from "../footer";
import { Navbar } from "../navbar";

export const Layout: React.FC<any> = ({ children }) => {
    return (
        <div className="grid">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}