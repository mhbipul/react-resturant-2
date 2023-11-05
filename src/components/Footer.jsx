import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
            <p>&copy; 2023 mhbipul99bd@gmail.com</p>

        </div>
    </div>
  )
}

export default Footer