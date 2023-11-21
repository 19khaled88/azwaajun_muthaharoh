import Footer from './Footer';
import Header from './Header';

const RootLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen mx-auto ">
            <Header />
            <div className="flex-grow">
                
                <main>{children}</main>
               
            </div>
            <Footer />
        </div>
    );
};

export default RootLayout;
