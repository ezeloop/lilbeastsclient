import { CardMedia } from '@mui/material';
import React from 'react';

const Avatar = ({ data }) => {
  return (
    <div className="avatar">
      <CardMedia
        className="avatar-image"
        component="img"
        height="140"
        image={data.image[0].url}
        alt="green iguana"
      />
    </div>
  );
}

export default Avatar;