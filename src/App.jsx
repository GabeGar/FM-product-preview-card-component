import { useState, useEffect } from "react";

import productImgMobile from "./assets/image-product-mobile.jpg";
import productImgDesktop from "./assets/image-product-desktop.jpg";

import CartIcon from "./components/CartIcon";

const initSrcByScreenState = () => {
    return window.innerHeight >= 576 ? productImgDesktop : productImgMobile;
};

const App = () => {
    const [currentImgSrc, setCurrentImgSrc] = useState(() =>
        initSrcByScreenState()
    );

    useEffect(() => {
        const handleResize = (e) => {
            if (e.currentTarget.innerWidth < 576) {
                setCurrentImgSrc(productImgMobile);
                console.log("less than 576");
            }

            if (e.currentTarget.innerWidth >= 576) {
                setCurrentImgSrc(productImgDesktop);
                console.log("greater than or equal to 576");
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <main className="page">
            <div className="product-card">
                <section className="product-info">
                    <img
                        src={currentImgSrc}
                        alt="Gabrielle Chanel Paris perfume"
                    />
                    <span className="type">Perfume</span>
                    <h2 className="name">Gabrielle Essense Eau De Parfum</h2>
                    <p className="description">
                        A floral, solar and voluptuous interpretation composed
                        by Olivier Polge, Perfumer-Creator for the House of
                        CHANEL.
                    </p>
                    <section className="pricing">
                        <span className="discount">$149.99</span>
                        <span className="MSRP">$169.99</span>
                        <button className="action">
                            <CartIcon />
                            <span>Add to Cart</span>
                        </button>
                    </section>
                </section>
            </div>
        </main>
    );
};

export default App;
