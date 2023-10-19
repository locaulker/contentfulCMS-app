import HeroImg from "./assets/hero.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure,
            magnam temporibus, adipisci exercitationem autem voluptas, quisquam
            beatae possimus mollitia atque? Ex eos consectetur dicta quam
            adipisci accusantium nam ad.
          </p>
        </div>
        <div className="img-container">
          <img src={HeroImg} alt="Woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}
export default Hero
