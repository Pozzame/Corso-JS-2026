import { useState } from "react"

function FormContacts(){
    const[dati, setDati]=useState({
        nome:"",
        email:"",
        messaggio:"",
    })
    function handleChange(e){
        const{name,value} = e.target;
        {/*[name] chiave calcolata parentesi [] dicono 
            di usare come variabile/chiave il valore della 
            variabile e non la parola 'name'*/}
        {/* - {name:'a@ir'} -> chiave letterale name 
            con valore 'a@ir'
            
            - {[name]:'a@ir'} -> chiave calcolata email:'a@ir'
        */}
        setDati({...dati, [name]:value});
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log('Dati inviati',dati),
        setDati({nome:"",email:"",messaggio:""});
    }
    return(
        <section className="FormContacts">
            <div className="divFormContacts">
                <form className="formcontacts" onSubmit={handleSubmit}>
                    <label htmlFor='nome'>Nome</label>
                    <input id='nome' type="text" name='nome' value={dati.nome} onChange={handleChange} required/>

                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' name='email' value={dati.email} onChange={handleChange} required/>

                    <label hhtmlFor='messaggio'>Messaggio</label>
                    <textarea id='messaggio' name='messaggio' rows='5'
                        value={dati.messaggio}  onChange={handleChange} required/>
                    
                    <button type="submit">Invia</button>

                </form>
            </div>
        </section>
    )  
}
export default FormContacts;