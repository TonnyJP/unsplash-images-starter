import React from "react"
import { useAppContext } from "./context/globalContext"

export const SearchForm = () => {
 const { inputValue, setIsError } = useAppContext();

    const submitForm = (e) =>{
        e.preventDefault()
        const searchValue = e.target.elements.search.value
        if(!searchValue){
            setIsError(true)
            return
        }else{
            setInputValue(searchValue)
        }
        console.log(inputValue);
        e.target.elements.search.value= ""
    }
    return (
    <section>
        <h2 className="title">unsplash images</h2>
        <form className="search-form" onSubmit={submitForm}>
          <input type="text" placeholder="cat" name="search" className="form-input search-input"/>
          <button type="submit" className="btn">Search</button>
       </form>
    </section>)
}