const Hero = () => {
    return (
        <main className="hero">
            <div className="hero-content">
                <h1>STEP INTO STYLE, STEP INTO COMFORT</h1>
                <p>EXPERIENCE PEAK COMFORT AND STYLE WITH OUR LATEST COLLECTION OF PREMIUM SHOES. CRAFTED WITH PRECISION AND DESIGNED FOR EVERY OCCASION, OUR SHOES EMBODY ELEGANCE, DURABILITY, AND UNPARALLELED PERFORMANCE. MAKE EVERY STEP A STATEMENT WITH OUR EXCEPTIONAL FOOTWEAR
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                </div>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amzon" />
                    <img src="/images/flipkart.png" alt="fp" />
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/hero-image.png" alt="shoe" />
            </div>
        </main>
    )
}

export default Hero;