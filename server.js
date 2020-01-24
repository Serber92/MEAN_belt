const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const path = require("path");
const mongoose = require('mongoose');

app.use(express.static( __dirname + '/belt-app/dist/belt-app' ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost/MEAN_belt', {useNewUrlParser: true});

const PetSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: [3, 'Name should be at lest 3 chartacters long']},
  type: { type: String, required: true, minlength: [3, 'Type should be at lest 3 chartacters long']},
  description: { type: String, required: true, minlength: [3, 'Description should be at lest 3 chartacters long']},
  skill1: String,
  skill2: String,
  skill3: String,
  likes:Number,
 }, {timestamps: true })
 const Pet = mongoose.model('Pet', PetSchema);

app.post('/new_pet', (req, res)=>{
    const pet = new Pet();
  pet.name = req.body.name;
  pet.type = req.body.type;
  pet.description = req.body.description;
  pet.skill1 = req.body.skill1;
  pet.skill2 = req.body.skill2;
  pet.skill3 = req.body.skill3;
  pet.likes = req.body.likes;
  pet.save()
    .then(newPetData => {
      console.log('Pet created: ', newPetData);
      res.json(newPetData);
    })

  .catch(err => res.json(err));
})


app.get('/all_pets', (req, res) => {  
  Pet.find()
      .then(data => res.json(data))
      .catch(err => res.json(err));
});

app.get('/get_pet/:id', (req, res) => {  
  Pet.find({_id: req.params.id})
      .then(data => res.json(data))
      .catch(err => res.json(err));
});

app.post('/update_pet/:id', (req, res)=>{
  Pet.updateOne({_id: req.params.id}, {
   name: req.body.name,
   type: req.body.type,
   description: req.body.description,
   skill1: req.body.skill1,
   skill2: req.body.skill2,
   skill3: req.body.skill3,
  },{ runValidators: true })
    .then(newPetData => {
      console.log('Pet updated: ', newPetData);
      res.json(newPetData);
    })
    .catch(err => res.json(err));
})

app.post('/like/:id', (req, res) => { 
  console.log('liking ', req.body);
  Pet.updateOne({_id: req.params.id},{
    likes: parseInt(req.body.likes) + 1,
  })
      .then(data => res.json(data))
      .catch(err => res.json(err));
});

app.get('/adopt/:id', (req, res) => {  
  Pet.remove({_id: req.params.id})
      .then(data => res.json(data))
      .catch(err => res.json(err));
});






app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./belt-app/dist/belt-app/index.html"))
});


app.listen(8000, () => console.log("listening on port 8000"));