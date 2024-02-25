import Footer from './Footer';
import Header from './Header';
// import Providers from './providers/Provider';

const RootLayout = ({ children }) => {
    return (

        <>
            {/* <Providers> */}
            <div className="flex flex-col min-h-screen mx-auto ">
            <Header />
            <div className="flex-grow">
                
                <main>{children}</main>
               
            </div>
            <Footer />
        </div>

            {/* </Providers> */}
        </>
       
    );
};

export default RootLayout;
