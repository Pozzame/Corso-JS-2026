function Contacts(){
    return(
      <section className="contacts">
        <div className="contacts">
            <div className="column50">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.093435450764!2d12.48689581156884!3d41.89084761449602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61b6532013ad%3A0x28f1c82e908503c4!2sColosseo!5e0!3m2!1sit!2sit!4v1789812150191!5m2!1sit!2sit" 
                    width="400" 
                    height="400" 
                    style={{border:0}}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="strict-origin-when-cross-origin">
                </iframe>
            </div>
            <div className="column50, contacts">
                <h2>Dove siamo</h2>
                <p>Via Esempio 1, Roma, 00100</p>
                <p>
                    <a href="tel:003900000000000" target='_blank'>
                        +39 000 000 00 000
                    </a>
                </p>
                <p>
                    <a href="mailto:info@bookshelf.it" target='_blank'>
                        info@bookshelf.it 
                    </a>
                </p>
            </div>
        </div>
      </section>  
    )
}
export default Contacts;