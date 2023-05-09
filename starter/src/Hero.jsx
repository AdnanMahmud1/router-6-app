import heroImg from './assets/hero-image2.svg'


const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Next level mixtape taiyaki, meditation before they sold out polaroid
            letterpress schlitz succulents man braid. Occupy pork belly sus
            stumptown jawn gatekeep. Chicharrones post-ironic bushwick plaid
            JOMO fashion axe, chambray roof party solarpunk seitan vice fit
            typewriter.
          </p>
        </div>
        <div className="image-container">
            <img src={heroImg} alt="york camel" />
        </div>
      </div>
    </section>
  );
}
export default Hero