import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import DOMPurify from 'dompurify';
import { Stack, useMediaQuery } from '@mui/material';

const RecipeDirections = ({ directions }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const parseSentences = (directions) => {
    const cleanDirections = DOMPurify.sanitize(directions);
    // Create a temporary HTML element to strip HTML tags and get plain text
    const tempElement = document.createElement('div');
    tempElement.innerHTML = cleanDirections;
    const plainText = tempElement.textContent || tempElement.innerText || '';

    // Split the directions into sentences based on periods
    const sentences = plainText.split('.').filter((sentence) => sentence.trim() !== '');

    return sentences;
  };

  return (
    <div>
      {parseSentences(directions).map((sentence, index) => (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: '#1F2021' }} key={index}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primaryTypographyProps={{ style: { fontFamily: 'Alkatra', fontSize: isMobile ? '15px' : '20px' } }}
              primary={sentence.trim()} // Render the sentence as plain text
            />
          </ListItem>
          <Divider component="li" sx={{ bgcolor: '#FF8000', width: '100%', height: '2px' }} />
        </List>
      ))}
    </div>
  );
};

export default RecipeDirections;
