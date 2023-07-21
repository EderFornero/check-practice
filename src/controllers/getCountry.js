let countries = []; 

//retornar todos
const getCountry = () => {
    return countries; 
}


//filtrar por id
const getCountryById = (id) => {
    const countryFound = countries.find(e => e.id === +id); 
    //si no encuentra, retorna error
    if(!countryFound) return {error: "ID do not exist"}; 
    //si encuentra retorna el pais
    return countryFound;
}

//crear
let id = 1;
const postCountry = (name, language, continent) => {

    const newCountry = {
        id: id++, 
        name,
        language,
        continent, 
    }

    countries.push(newCountry); 
    return newCountry; 
}

//modificar

const putCountry = (id, name, language, continent) => {
    const countryFound = getCountryById(id); 

    if(countryFound['error']) return countryFound['error']; 

    countryFound.name = name || countryFound.name
    countryFound.language = language || countryFound.language
    countryFound.continent = continent || countryFound.continent

    return countryFound; 

}

//borrar 

const deleteCountry = (id) => {
    const countryFound = getCountryById(id); 
    
    if(countryFound['error']) return countryFound['error'];

    countries = countries.filter(e => e.id !== +id); 

    return countries; 

}



module.exports = {
    getCountry, 
    getCountryById,
    postCountry,
    putCountry,
    deleteCountry,
}