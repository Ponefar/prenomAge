import { useState, useEffect } from "react"
import axios from 'axios';
import '../css/css.css'

export function AgePrenom() {

    const [data, setData] = useState([])
    const [prenom, setPrenom] = useState('')
    const [pays, setPays] = useState('FR')
    const [resultatApi, setResultatApi] = useState('?')
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://api.agify.io/?name='+prenom+'&country_id='+pays)
            setData(result.data)
            setResultatApi(result.data.age)

        }   

        fetchData()

    }, [prenom, pays, resultatApi])


    return(
        <div>
            <div className="flex">
                <div className="gaucheA">
                    <br />
                    <input className="inputFiltre" type="text" value={prenom} placeholder="prénom" onChange={((e) => {
                        setPrenom(e.target.value)

                    })} /><br /><br />
                    <select className="submit" onChange={e => {
                        setPays(e.target.value)
                        
                    }}>
                        <option value="FR">France</option>
                        <option value="US">États-unis</option>
                        <option value="IT">Italie</option>
                        <option value="DE">Allemagne</option>
                    </select> <br /><br /> <br />
                     
                </div>
                <div className="droite">
                    <h1>Prénom : {prenom}</h1>
                    <h3>Pays : {pays}</h3>
                    <h3>Age Moyen portant ce prénom : <span className="bold">{resultatApi} ans</span> </h3>
                </div>
            </div>
        </div>
    )
}