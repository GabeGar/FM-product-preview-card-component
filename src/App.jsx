import productImg from "./assets/image-product-mobile.jpg";

import CartIcon from "./components/CartIcon";

const App = () => {
    return (
        <main className="page">
            <div className="product-card">
                <section className="product-info">
                    <img
                        src={productImg}
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
