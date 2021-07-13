import { useState, useEffect } from "react"
import axios from 'axios';
import '../css/css.css'

export function Pays() {

    const [data, setData] = useState([])
    const [filtre, setFiltre] = useState('')
    const [maxListe, setMaxListe] = useState('')
    const [valeurFiltreInitial, setValeurFiltreInitial] = useState(5)
    const [affichageListe, setAffichageListe] = useState('Tout voir')


    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            'https://restcountries.eu/rest/v2/all',
          );
    
          setData(result.data);
          setMaxListe(result.data.length)
        //   console.log(result.data[5])
        };

        fetchData();
    }, [])

    function strUcFirst(a){
        return (a+'').charAt(0).toUpperCase()+a.substr(1)
    }

    const [aff, setAff] = useState(0)

    const Filtre = () => {
        // console.log(aff)
        if(aff === 0){
            setValeurFiltreInitial(maxListe)
            setAffichageListe('Voir moins')  
            setAff(1)

        } else {
            setValeurFiltreInitial(5)
            setAffichageListe('Tout voir')
            setAff(0)

        }
    }

    const [nomPays, setNomPays] = useState('Veuillez selectionner un pays')
    const [capitalePays, setCapitalePays] = useState('?')
    const [populationPays, setPopulationPays] = useState('?')
    const [nomRegion, setNomRegion] = useState('?')
    const [drapeauPays, setDrapeauPays] = useState('')
    const [horairePays, setHorairePays] = useState('?')
    const [latitudePays, setLatitude] = useState('?')
    const [longitudePays, setLongitude] = useState('?')


    function separerNb(nbr){
		var nombre = ''+nbr;
		var retour = '';
		var count=0;
		for(var i=nombre.length-1 ; i>=0 ; i--)
		{
			if(count!=0 && count % 3 == 0)
				retour = nombre[i]+' '+retour ;
			else
				retour = nombre[i]+retour ;
			count++;
		}
		return setPopulationPays(retour)
    }


    return(
        <div>
            <div className="flex">
                <div className="gauche">
                    <ul>
                        <input type="text" 
                            className="inputFiltre"
                            value={filtre} 
                            placeholder="Filtrer par pays" 
                            onChange={(e) => {
                                const value = e.target.value
                                setFiltre(strUcFirst(value))
                            }} 
                        /><br /><br />
                        {data.filter(name => name.name.includes(filtre)).slice(0, valeurFiltreInitial).map((item,key) => ( // s a ng
                            <div className="listePays" key={key}>
                                <li onClick={() => (
                                    <div>
                                        {setNomPays(item.name)}
                                        {setCapitalePays(item.capital)}
                                        {separerNb(item.population)}
                                        {setNomRegion(item.region)}
                                        {setDrapeauPays(item.flag)}
                                        {setHorairePays(item.timezones)}
                                        {setLatitude(item.latlng[0])}
                                        {setLongitude(item.latlng[1])}
                                    </div>
                                )}>
                                    {item.name}
                                </li>
                            </div>
                        ))}
                        <div className="btnVoir" onClick={() => Filtre()}
                            >{affichageListe}</div>
                    </ul> 
                </div>       
                <div className="droite">
                    <h1> Pays : {nomPays}</h1>
                    <h2>Capitale : {capitalePays}</h2>
                    <h3>Population : {populationPays}</h3>
                    <h3>Région : {nomRegion}</h3>
                    <h3><img src={drapeauPays} width="150px"></img></h3>
                    <h3>Horaire : {horairePays}</h3>
                    <h3>Lattitude : {latitudePays}</h3>
                    <h3>Longitude : {longitudePays}</h3>
                </div>    
            </div>
        </div>
    )
}