import express from 'express';
import cors from 'cors';
import {addNewTv, getAllTv} from './src/tvLibrary.js';


const PORT = 3030;


const app = express();
app.use(cors());
app.use(express.json());


//get all tvshows
app.get("/tvshows",getAllTv);
//add tvshows
add.post("/tvshows", addNewTv);




app.listen(PORT, () => {

console.log(`Listening on http://locahost:${PORT}`);

}); 
