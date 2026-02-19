import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox() {
    let info = {
        city: "Delhi",
        feelsLike: 19.02,
        humidity: 77,
        temp: 19.05,
        tempMin: 19.05,
        tempMax: 19.05,
        weather: "mist"
    }
    return(
        <div className='InfoBox'>
        <h2>Weather Info - {info.weather}</h2>
        <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
            sx={{ height: 140 }}
            image="https://images.unsplash.com/photo-1628534262701-0ada95e46152?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
                <p>Humidity = {info.humidity}</p>
                <p>Temperature = {info.temp}&deg;C</p>
                <p>Min Temperature = {info.tempMin}&deg;C</p>
                <p>Max Temperature = {info.tempMax}&deg;C</p>
                <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C</p>
            </Typography>
        </CardContent>
        </Card>
        </div>
        </div>
    );
}