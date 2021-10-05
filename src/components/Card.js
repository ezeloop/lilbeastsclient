import * as React from 'react';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import styled from 'styled-components';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon
} from "react-share";

const CardContainer = styled.div`
  display: inline-block;
  border-radius: 3px;
  margin: 2rem;
  background: transparent;
  color: white;
  border: 4px solid white;
  ${'' /* @media (max-width: 420px) {
  width: 200px;
  padding: 0;

} */}
`

export default function PetCard({ data }) {

  const [yearsOld, setYearsOld] = React.useState('');
  const [sex, setSex] = React.useState(false);
  const [msg, setMsg] = React.useState('')

  React.useEffect(() => {
    const calculateYears = () => {
      if (data.age === 0) {
        setYearsOld(`${data.months} months`)
      } else {
        setYearsOld(`${data.age} years and ${data.months} months`)
      }
    }

    const handleSex = () => {
      if (data.sex.name === 'female') {
        return setSex(false)
      } else {
        setSex(true)
      }
    }

    const createMsgForPosting = () => {
      setMsg(`Do u wanna adopt me and make me happy? My name is ${data.name} and i'm ${yearsOld} and this is me: ${data.image[0].url}`)
    }
    calculateYears();
    handleSex();
    createMsgForPosting();

    //eslint-disable-next-line
  }, [data])



  return (
    <CardContainer>
      <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
        <CardMedia
          component="img"
          height="140"
          image={data.image[0].url}
          alt={data.image[0].name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {yearsOld}
          </Typography>
          {sex ? <MaleIcon color="secondary" /> : <FemaleIcon style={{ color: 'pink' }} />}
          <Typography gutterBottom variant="h5" component="div">
          Veterinary: {data.veterinary.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.text}
          </Typography>
        </CardContent>
        <CardActions>
          <FacebookShareButton
            url="http://lilbeastscentertest.com/"
            quote={msg}
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <WhatsappShareButton
            url="http://lilbeastscentertest.com/"
            title={msg}
          >
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </CardActions>
      </Card>
    </CardContainer>
  );
}