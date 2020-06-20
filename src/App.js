import React from 'react';
import "./App.css"
import {Genre, Language, QueryType} from "./enums";
import {ApiContext} from "./components/ApiContext";
import Carousel from "./components/carousel/Carousel";

function App() {
    //todo implement language switch
    /*const [language, setLanguage] = useState(Language.CZECH);*/
    const language = Language.CZECH;

    const apiContextValues = {
        apiAddress: "https://api.themoviedb.org/3/",
        apiKey: "api_key=4c367d0da4105ce1dcb1dc2d68dec2d9",
        imagesAddress: "",
        language: language,
    };
    return (
        <div className="App">
            <h1>Movie Api</h1>
            <ApiContext.Provider value={apiContextValues}>
                <Carousel header={"Oblíbené filmy"} queryType={QueryType.DISCOVER_MOVIE}/>
                <Carousel header={"Oblíbené seriály"} queryType={QueryType.DISCOVER_TV}/>
                <Carousel header={"Rodinné filmy"} queryType={QueryType.DISCOVER_MOVIE} genre={Genre.FAMILY}/>
                <Carousel header={"Dokumenty"} queryType={QueryType.DISCOVER_MOVIE} genre={Genre.DOCUMENTARY}/>
            </ApiContext.Provider>
        </div>
    );
}

export default App;