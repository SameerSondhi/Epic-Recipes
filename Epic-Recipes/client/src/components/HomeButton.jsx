import * as React from 'react';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export default function HomeButton() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const BlackHomeIcon = styled(HomeIcon)({
    color: 'black',
  });

  return (
    <Box display='flex' justifyContent='flex-start' marginLeft='-15px'>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <BlackHomeIcon sx={{fontSize:'35px'}} />
        </Button>
      </Link>
    </Box>
  );
}