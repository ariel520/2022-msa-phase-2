import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard(props:any) {
  const theme = useTheme();
  return (
    <Card sx={{ display: 'flex',width: 350}} style={{marginLeft:'120px'}} >
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
           {props.Track.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {props.Track.artists[0].name}
          </Typography>
        </CardContent>
       
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 200 } }
        image={props.Track.album.images[0].url}
   
      />
    </Card>
  );
}
