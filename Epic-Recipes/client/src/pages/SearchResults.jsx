import React, { useEffect, useState } from 'react'
import { Link,  useParams } from 'react-router-dom'
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TopMenuBar from '../components/TopMenuBar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import { useMediaQuery } from '@mui/material';


export default function SearchResults() {
    const [recipeList, setRecipeList] = useState([])
    // const [ingredients, setIngredients] = useState([])

    const isMobile = useMediaQuery('(max-width: 768px)');

    const {query} = useParams("")

    const apiKey = process.env.REACT_APP_API_KEY;


    useEffect(() => {
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${query}&number=21`)
            .then((res) => {
                console.log(res.data)
                setRecipeList(res.data.results)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [apiKey, query])


  return (  
    <Box style={{ backgroundColor: "#1F2021", color: 'whitesmoke', minHeight: '100vh', display: 'flex', flexDirection: 'column' }} maxWidth>
        <TopMenuBar/>
        <br />
        {recipeList.length>0 ?
        recipeList.length===1 ?
    <Typography variant={isMobile ? "h4" : 'h3'} component="div" sx={{fontFamily:'Alkatra', position:'relative', marginTop:'-120px'}} >{recipeList.length} Search Result </Typography>
    : <Typography variant={isMobile ? "h4" : 'h3'} component="div" sx={{fontFamily:'Alkatra'}} >{recipeList.length} Search Results </Typography>
        
    :
    <Typography variant={isMobile ? "h4" : 'h3'} component="div" sx={{fontFamily:'Alkatra'}} >No Search Results At This Time. Please Come Back Later!</Typography>
        }
    <Container style={{ flexGrow: 1 }}>
    <Row style={{position:'relative', left:'0%', top:'0%'}}>
    {recipeList.map((recipe, idx) => {
        return (
          <Col sm={6} md={4} className='mt-4 mb-5'>
            <Card sx={{ maxWidth: 400, backgroundColor: "#1F2021", border:"2px solid #555556"}} key={{idx}} >
            <CardMedia
              sx={{ height: 300}}
              image={recipe.image}
              title="food"
            />
            <CardContent sx={{color:"whitesmoke"}}>
              <Typography gutterBottom variant="h5" component="div" sx={{fontFamily:'Alkatra', color:'whitesmoke'}}>
                {recipe.title}
              </Typography>
            </CardContent>
            <Divider sx={{bgcolor:'whitesmoke', height:'4px'}}/>
            <CardActions sx={{position:'relative', left:'30%'}} >
              <Button size="large" sx={{fontFamily:'Alkatra'}}><Link style={{color:'#FF8000'}} to={`/recipe/${recipe.id}`}>View Recipe</Link></Button>
            </CardActions>
          </Card>
          </Col>
        )
    }
    )
}
</Row>
</Container>
</Box>
  )
}



