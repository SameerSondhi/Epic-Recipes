import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Ingredients from './RecipeIngredients';
import Directions from './RecipeDirections';
import Description from './RecipeDescription';
import WinePairing from './WinePairing';
import Credits from './Credits';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DesktopDetailTabs() {
  const [value, setValue] = React.useState(0);
  const [ingredients, setIngredients] = useState([]);
  const [directions, setDirections] = useState('');
  const [description, setDescription] = useState('')
  const [wines, setWines] = useState('')
  const [sourceName, setSourceName] = useState('')
  const [sourceUrl, setSourceUrl] = useState('')
  
  const { id } = useParams()

  const apiKey = process.env.REACT_APP_API_KEY;


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`)
      .then((response) => {
        console.log("This is the .then function ", response.data);
        setIngredients(response.data.extendedIngredients);
        setDirections(response.data.instructions);
        setDescription(response.data.summary)
        setWines(response.data.winePairing.pairingText)
        setSourceName(response.data.sourceName)
        setSourceUrl(response.data.sourceUrl)
      })
      .catch((error) => { console.log("This is the error message ", error) })

    console.log("Running before data is received")
  }, [apiKey, id]);

  return (
    <Box sx={{ width: '100%', bgcolor: '#1F2021' }}> {/* Added background color */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered >
        <Tab label="Description" {...a11yProps(0)} sx={{color:'#FF8000', fontFamily:'Alkatra', fontSize:'15px'}} />
          <Tab label="Ingredients" {...a11yProps(1)} sx={{color:'#FF8000', fontFamily:'Alkatra', fontSize:'15px'}}/>
          <Tab label="Directions" {...a11yProps(2)} sx={{color:'#FF8000', fontFamily:'Alkatra', fontSize:'15px'}} />
          <Tab label="Pairs Well With" {...a11yProps(3)} sx={{color:'#FF8000', fontFamily:'Alkatra', fontSize:'15px'}} />
          <Tab label="Credits" {...a11yProps(4)} sx={{color:'#FF8000', fontFamily:'Alkatra', fontSize:'15px'}} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}
      style={{
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center' // Center the content vertically
      }} >
        <Description description={description} /> {/* Pass the value state to the Directions component */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}
      style={{
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center' // Center the content vertically
      }} >
        <Ingredients ingredients={ingredients} /> {/* Pass the value state to the Ingredients component */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}
      style={{
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center' // Center the content vertically
      }} >
        <Directions directions={directions} /> {/* Pass the value state to the Directions component */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}
      style={{
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center' // Center the content vertically
      }} >
        <WinePairing wines={wines} /> {/* Pass the value state to the Directions component */}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}
      style={{
        display: 'flex',
        justifyContent: 'center', // Center the content horizontally
        alignItems: 'center' // Center the content vertically
      }} >
        <Credits sourceName={sourceName} sourceUrl={sourceUrl} />  {/* Pass the value state to the Directions component */}
      </CustomTabPanel>
      <br />
    </Box>
  );
}
