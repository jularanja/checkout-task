import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';


export function StarRating() {
  const [value, setValue] = React.useState<number | null>(0);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}      
    >
      <Rating style={{color:'black'}}
        name="simple-controlled"
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        size="large"
        sx={{
          fontSize: "9rem"          
        }}        
      />
     
    </Box>
  );
}
