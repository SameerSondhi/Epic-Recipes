import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Box from '@mui/material/Box';
import ButtonAppBar from './TopMenuBar';
import { Typography } from '@mui/material';
import RecipeDetailTabs from './RecipeDetailTabs';
import CircularProgress from '@mui/material/CircularProgress';


const DesktopRecipeDetail = () => {
    const { id } = useParams()
    const [recipe, setRecipe] = useState({})
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
            .then((response) => {
                console.log("This is the .then function ", response.data)
                setRecipe(response.data)
            })
            .catch((error) => { console.log("This is the error message ", error) })

        console.log("Running before data is received")

    }, [apiKey, id])

    // Handle null or loading state
    if (!recipe.title) {
        return <Box sx={{ display: 'flex',
        justifyContent: 'center', // Horizontally center the content
        alignItems: 'center', // Vertically center the content
        height: '100vh', // Set the height of the container to full viewport height 
        backgroundColor:'#1F2021'
    }}>
        <CircularProgress />
      </Box>
    }

    return (
        <Box sx={{ backgroundColor: "#1F2021", color: 'whitesmoke', minHeight: '100vh' }}>
      <ButtonAppBar position="static" sx={{ backgroundColor: 'black', color: 'white' }}/>
      <Box>
        <Typography variant="h3" component="div" className='mt-3 mb-3' sx={{ fontFamily: 'Alkatra', color: 'aliceblue'}}>{recipe.title}</Typography>
        <img src={recipe.image} alt="recipe" height="400px" />
        </Box>
        <br />
        <Box>
        <Typography variant="h4" component="div" sx={{ fontFamily: 'Alkatra', color: 'aliceblue' }}>Number of servings: {recipe.servings}</Typography>
        {recipe.readyInMinutes>=60 ?
        recipe.readyInMinutes === 60 ?
        <Typography variant="h4" component="div" sx={{ fontFamily: 'Alkatra', color: 'aliceblue' }}>Ready in: {(recipe.readyInMinutes)/60} hour</Typography>
        :
        <Typography variant="h4" component="div" sx={{ fontFamily: 'Alkatra', color: 'aliceblue' }}>Ready in: {Math.floor(recipe.readyInMinutes/60)} hours {recipe.readyInMinutes%60} minutes</Typography>
        :
        <Typography variant="h4" component="div" sx={{ fontFamily: 'Alkatra', color: 'aliceblue' }}>Ready in: {recipe.readyInMinutes} minutes</Typography>
        }
      </Box>
      <br />
      <Box>
      <RecipeDetailTabs/>
      </Box>
 
     </Box>
  )
}

export default DesktopRecipeDetail


    