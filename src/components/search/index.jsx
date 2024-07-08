
export default function Search({search, setSearch, handleSearch}){// remember it is ({}}
    return <div className = "search-engine">
        <input 
        type="text"
        className="city-search"
        placeholder="Enter City Name"
        name="search"
        value= {search} //value = {} is what we are recieving from the prompt
        onChange={(event)=>setSearch(event.target.value)}
        />
        <button class= "SearchButt" onClick={handleSearch}>
        Search 
        </button>
    </div>
}