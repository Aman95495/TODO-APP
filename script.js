let add_new_todo = ()=>{
    let fetched_data = (resp)=>{
        if(resp.ok){
            document.getElementById('added_message').innerHTML = 'Item Added Successfully';
        }
        else{
            document.getElementById('added_message').innerHTML = `Some Error Occurred`;
        } 
    }
    fetch("http://localhost:3000/todos", {
        method: "POST",
        body: JSON.stringify(
            {
                title: document.getElementById('title').value,
                completed: document.getElementById('completedTrue').checked,
                description: document.getElementById('description').value
            }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(fetched_data);
}


let display_all_todos = ()=>{
    let printData = (data)=>{
        console.log(data);
        let Content = `
            <table border="2" style="text-align:center;padding:3px;width:360px">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th></th>
                    <th>Description</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
        `;

        for(let i=0; i<data.length; i++){
            let ele = `        
            <tr style="font-size:12px;">
                <td style="padding:4px;">${data[i].id}</td>
                <td style="padding:4px;">${data[i].title}</td>
                <td style="padding:4px;">${data[i].description}</td>
            `;

            if(data[i].completed){
                ele += `
                        <td style="padding:4px;color:rgb(1, 154, 1);">${data[i].completed}</td>
                    </tr>
                `;
            }
            else{
                ele += `
                        <td style="padding:4px;color:red;">${data[i].completed}</td>
                    </tr>
                `;                
            }
            Content += ele;
        }

        Content += `
                </tbody>
            </table>
        `;


        document.getElementById('display_todos').innerHTML = Content;
    }
    let fetched_data = (resp)=>{
        resp.json().then(printData);
    }
    fetch("http://localhost:3000/todos", {
        method: "GET",
    }).then(fetched_data);
}


let delete_todo = ()=>{
    let fetched_data = (resp)=>{
        if(resp.ok){
            document.getElementById('delete_message').innerHTML = 'Item Deleted Successfully';
        }
        else{
            document.getElementById('delete_message').innerHTML = `ID NOT FOUND`;
        }
    }
    let id = document.getElementById('delete_id').value;
    fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE"
    }).then(fetched_data);
}


let update_todo = ()=>{
    let fetched_data = (resp)=>{
        if(resp.ok){
            document.getElementById('update_message').innerHTML = 'Item Updated Successfully';
        }
        else{
            document.getElementById('update_message').innerHTML = `ID NOT FOUND`;
        }
    }
    let id = document.getElementById('give_update_id').value;
    fetch(`http://localhost:3000/todos/${id}`, {
        method: "PUT",
        body: JSON.stringify(
            {
                title: document.getElementById('updated_title').value,
                completed: document.getElementById('updated_completedTrue').checked,
                description: document.getElementById('updated_description').value
            }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(fetched_data);
}

let retrieve_one_item = ()=>{
    let printData = (data)=>{
        console.log(data);
        let Content = "";


        Content += `
                <table class="keyValueTable">
                <tr>
                    <td class="key">Task Id</td>
                    <td class="value">${data.id}</td>
                </tr>
                <tr>
                    <td class="key">Task Title</td>
                    <td class="value">${data.title}</td>
                </tr>
                <tr>
                    <td class="key">Description</td>
                    <td class="value">${data.description}</td>
                </tr>
                <tr>
                    <td class="key">Completed</td>
                    <td class="value">${data.completed}</td>
                </tr>
            </table>
            `

        document.getElementById('retrieve_one_item_id').innerHTML = Content;
    }
    let fetched_data = (resp)=>{
        if(resp.ok){
            resp.json().then(printData);
        }
        else{
            document.getElementById('retrieve_one_item_id').innerHTML = `ID NOT FOUND`;
        }
    }

    let id = document.getElementById('give_id').value;
    fetch(`http://localhost:3000/todos/${id}`, {
        method: "GET",
    }).then(fetched_data);
}



document.addEventListener('DOMContentLoaded', (event)=>{
    console.log("Hello");
})