// import { useEffect, useState } from "react"
// import axios from "axios"
import './PokemonList.css'
import Pokemon from "../Pokemon/Pokemon";
import usePokemonList from "../../hooks/usePokemonList";


 // const [x,setX]=useState(0);
    // const [y,setY] = useState(0);
    // useEffect(()=>{
    //     console.log("effect called")
    // },[x]) //x ka change track ho raha hai,kyunki voh dependency array me hai 

   
function PokemonList(){

    const [pokemonListState,setPokemonListState] = usePokemonList(false);


    // const [pokemonList,setPokemonList] = useState([])
    // const [isLoading,setIsLoading] = useState(true);

    // const [pokedexUrl,setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon') //pokemon api


    // const [nextUrl,setNextUrl] = useState('')
    // const [prevUrl,setPrevUrl] = useState('')

//advance useState
    // const[pokemonListState,setPokemonListState] = useState({
    //     pokemonList:[],
    //     isLoading:true,
    //     pokedexUrl:'https://pokeapi.co/api/v2/pokemon',
    //     nextUrl:'empty',
    //     prevUrl:''
    // })


    // async function downloadPokemons(){
    //     // setIsLoading(true);
    //     setPokemonListState((state)=>({...state,isLoading:true}))
        
    //     // const response = await axios.get(pokedexUrl) // //this downloads list of 20 pokemons

    //     const response = await axios.get(pokemonListState.pokedexUrl) 


    //     const pokemonResults = response.data.results; //we get the array of pokemons from result 

    //     console.log(response.data)

    //     // setNextUrl(response.data.next)
    //     // console.log(nextUrl)
    //     // setPrevUrl(response.data.previous)
    //     // console.log(prevUrl)
    //     setPokemonListState((state)=>({
    //         ...state,
    //         nextUrl:response.data.next, 
    //         prevUrl:response.data.previous
    // }));

    //     //iterating over the array of pokemons, and using their url  to create an array of promises that will download those 20 pokemons
    //     const pokemonResultPromise =  pokemonResults.map((pokemon)=>axios.get(pokemon.url))
    //     // console.log(pokemonResultPromise)

    //     //passing that promise array to axios.all
    //     const pokemonData = await axios.all(pokemonResultPromise) // array of 20 pokemon detailed data 
    //     console.log(pokemonData);

        
    //     //now iterate on the data of each pokemon,and extract id, name , image, types
    //     const pokeListResult = pokemonData.map((pokeData)=>{
    //         const pokemon = pokeData.data;
    //         return {
    //             id:pokemon.id,
    //             name:pokemon.name, 
    //             image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
    //              types:pokemon.types}
    //     })

    //     console.log(pokeListResult)
        
    //     // setPokemonList(pokeListResult);
    //     // setIsLoading(false);
    //     setPokemonListState((state)=>({
    //         ...state,
    //         pokemonList:pokeListResult,
    //         isLoading:false
    //     }));
    // }


    // useEffect( ()=>{
    //     downloadPokemons();
    // },[pokedexUrl]);

    
    // useEffect( ()=>{
    //     downloadPokemons();
    // },[pokemonListState.pokedexUrl]);


    return (
        <div className="pokemon-list-wrapper">


            {/* <div className="pokemon-wrapper">
            {isLoading? " Loading....":  */}
                 <div className="pokemon-wrapper">
            {pokemonListState.isLoading? " Loading....": 

            // pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id = {p.id}/>)
            pokemonListState.pokemonList.map((p)=><Pokemon name={p.name} image={p.image} key={p.id} id = {p.id}/>)
        }
            </div>

            <div className="controls">
                {/* <button disabled={prevUrl==null} onClick={()=>setPokedexUrl(prevUrl)
                }>Prev</button> */}
<button disabled={pokemonListState.prevUrl==null} onClick={()=>{
    const urlToSet = pokemonListState.prevUrl;
    setPokemonListState({
    ...pokemonListState,
    pokedexUrl:urlToSet
})
}

                }>Prev</button>

                {/* <button disabled={nextUrl==null} onClick={()=>{setPokedexUrl(nextUrl)
                console.log(pokedexUrl)    }
                }>Next</button> */}

<button disabled={pokemonListState.nextUrl==null} onClick={()=>{
      const urlToSet = pokemonListState.nextUrl;
    setPokemonListState({
        ...pokemonListState,
        pokedexUrl:urlToSet,
    })
}
                }>Next</button>
            </div>
           


   {/* <div>
            Y:{y} <button onClick={()=>{
                setY(y+1)
            }}>Inc</button>
        </div> */}
        </div>

     
    )
}

export default PokemonList