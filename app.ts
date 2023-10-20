import express from 'express';
import routes from './routes/joiRoutes'


const app = express();
const port = process.env.PORT || 5000;
app.use(express.json());
app.use('/api', routes);


app.listen(port,() =>{
    console.log(`App is listning on port ${port}`)
});