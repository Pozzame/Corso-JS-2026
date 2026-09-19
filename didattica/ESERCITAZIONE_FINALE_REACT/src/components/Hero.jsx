function Hero({hero:{h1,p}}){
{/*function Hero({titolo, descrizione}){ */}
    return(
      <section className="hero">
        <h1>{h1}</h1>
        {/*<h1>{titolo}</h1> */}
        <p>{p}</p>
        {/*<p>{descrizione}</p> */}
      </section>
  )
}
export default Hero;