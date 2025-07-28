import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import { variables } from './data.js';

const app = express();

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);

// If import.meta.url is file:///B:/Portfolio_express/src/app.js, then __filename will be B:\Portfolio_express\src\app.js
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs')


app.set('views', path.join(__dirname, '../assets/html') )

app.use('/assets', express.static(path.join(__dirname, '../assets')));

app.listen(3000, ()=>{
    console.log("Running on port 3000");
    console.log(__filename,"______", __dirname)

})




app.get("/", (req, res) => {
    res.render(
        "index.ejs",
        {
            data:            variables.data, 
            description:     variables.description,
            work_experiences:variables.work_experiences,
            skills:          variables.skills,
            education:       variables.education,
            certifications:  variables.certifications,
            projects:        variables.projects
        }
    )
})