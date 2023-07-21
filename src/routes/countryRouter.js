const router = require("express").Router();
const { getCountry, getCountryById, postCountry, putCountry, deleteCountry } = require("../controllers/getCountry");

router.get("/", (req, res) => {

  try {
    const { id } = req.query;

    if (!id) {
      return res.status(200).json(getCountry());
    }
    const country = getCountryById(id); 

    if(country['error']) throw Error(country['error']); 

    return res.status(200).json(country);

  } catch (error) {
    return res.status(404).send(error.message); 
  }
});

router.post("/", (req, res) => {
    try {

        const {name, language, continent} = req.body; 

        if(!name || !language || !continent) {
            throw Error('Need more information'); 
        }

        const country = postCountry(name, language, continent); 

        return res.status(200).json(country); 

    } catch (error) {
        return res.status(404).send(error.message);
    }
})

router.put("/", (req, res) => {
    try {
        const {id, name, language, continent} = req.body; 

        if(!id) throw Error('Must contain an ID'); 

        const country = putCountry(id, name, language, continent); 

        return res.status(200).json(country); 

    } catch (error) {
        return res.status(404).send(error.message); 
    }
})


router.delete("/:id", (req, res) => {

    try {
        const {id} = req.params; 
        const deleted = deleteCountry(id);

        if(deleted['error']) throw Error(deleted['error']); 

        return res.status(200).json(deleted); 

    } catch (error) {
        return res.status(404).send(error.message); 
    }
})


module.exports = router;
