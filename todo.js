// Mine
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

let curr_id = 1;
let list = []

let retrieve_all_items = (req, res)=>{
  res.send(list);
}

let retrieve_one_item =(req, res)=>{
  let id = req.params.id;
  let item = list.find(item=>item.id == id);
  if(item){
    res.send(item);
  }
  else{
    res.status(404).send(`ID NOT FOUND`);
  }
}

let create_todo = (req, res)=>{
  let new_todo = req.body;
  curr_id += 1;
  let td = {
    id: curr_id,
    title: new_todo.title,
    completed: new_todo.completed,
    description: new_todo.description
  }
  list.push(td);

  let ans = {id: curr_id};
  res.status(201).send(ans);
}

let update_todo = (req, res)=>{
  let id = req.params.id;
  let item = list.find(item=>item.id == id);
  if(item){
    let modified = req.body;

    if(modified.title){
      item.title = modified.title;
    }

    if(modified.completed){
      item.completed = modified.completed;
    }

    if(modified.description){
      item.description = modified.description;
    }

    res.send("Item Modified Successfully");

  }
  else{
    res.status(404).send(`ToDo for ID ${id} is Not Defined`);
  }
}

let delete_todo = (req, res)=>{
  let id = req.params.id;
  let item = list.find(item=>item.id == id)
  if(item){
    let new_list = list.filter(item=> item.id != id);
    list = new_list;
    res.send("Item Deleted Successfully");
  }
  else{
    res.status(404).send(`ToDO for ID ${id} is Not Defined`);
  }
}

app.delete('/todos/:id', delete_todo);
app.put('/todos/:id', update_todo);
app.post('/todos', create_todo);
app.get('/todos/:id', retrieve_one_item);
app.get('/todos', retrieve_all_items);


// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname+'/index.html'));
// })


// module.exports = app;

// app.get('/', (req, res)=>{
//     let message = `
//     <html>
//         <head>
//             <title>Server</title>
//         </head>
//         <body>
//             <i style="font-size: 50px;">Todo Server</i><br>
//         </body>
//     </html>
//     `;
//     res.send(message);
// })


app.listen(port, ()=>{
  console.log(`Your Work Deployed On Port ${port}`);
})