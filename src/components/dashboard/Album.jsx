import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import ColorTheme from '../navs/ColorTheme';


const Album = () => {

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    return (
        <ThemeProvider theme={ColorTheme}>
            <CssBaseline />
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={3}>
                                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardMedia
                                        // style={{height: '100%'}}
                                        component="img"
                                        image="https://source.unsplash.com/random"
                                        alt="random"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions style={{justifyContent: "space-between"}}>
                                        <Button color="secondary" size="small">View</Button>
                                        <Button color="secondary" size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
        </ThemeProvider>
    );

};

export default Album