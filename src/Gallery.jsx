import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import React from "react"
import { useAppContext } from "./context/globalContext"

export const Gallery =() => {

    const {inputValue} = useAppContext()
    //const [response, setResponse] = React.useState({isLoading: false, isError: false,})

  
        const response = useQuery({
        queryKey: ["images", inputValue],
        queryFn: async () => {
            const result = await axios.get(`https://api.unsplash.com/search/photos?client_id=${import.meta.env.VITE_API_KEY}&query=${inputValue}`)
        console.log(import.meta.env.VITE_API_KEY)
            return result.data
        }
    })
    //setResponse(resp)
    

    React.useEffect(() => {

    },[inputValue])
   if(response.isLoading){
    return <section>
        <h4>Loading...</h4>
    </section>
   }
   if(response.isError){
    return <section>
        <h4>There was an error...</h4>
    </section>
   }

   const results = response.data.results
   if(results.lenght <= 0){
    return <section>
        <h4>Nothing found</h4>
    </section>
   }
    return (
        <section className="image-container">
            {results.map((image) => {
                console.log(image)
                return <img src={image?.urls?.regular} key={image.id} alt={image.alt_description} className="img" />
            })}
        </section>
    )
}