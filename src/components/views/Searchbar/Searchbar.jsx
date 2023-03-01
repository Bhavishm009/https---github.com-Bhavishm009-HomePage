import React from 'react'
import PropTypes from 'prop-types'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import classes from './Searchbar.module.css';



/**
 * Impliments searchbar component
 * 
 * @method
 * @param {object} props - React properties passed from higher-level
 * @returns Searchbar
 */

export const Searchbar = (props) => {
    return (
        <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <IconButton sx={{ p: '10px' }} aria-label="menu">
          <MenuIcon />
        </IconButton>
        <InputBase
          sx={{ ml: 5, flex: 1 }}
          placeholder="Search "
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
          {/* <DirectionsIcon /> */}
        </IconButton>
      </Paper>
    )
}

/**
 * Property type definations
 * 
 * @type {object}
 * @property {string} example - shows example - delete for in use
 */

export const propTypes = {
    example: PropTypes.string
};

/**
 * Default values for Searchbar
 * 
 * @type {object}
 * @property {string} example='Searchbar 
 */

export const defaultProps = {
    example:'Searchbar'
};

Searchbar.propTypes = propTypes;
Searchbar.defaultProps = defaultProps;

export default Searchbar;