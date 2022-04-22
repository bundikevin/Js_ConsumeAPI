
const apiurl = 'https://jsonplaceholder.typicode.com';

async function fetchUsers() {
    
    try {
        const response = await fetch(`${apiurl}`/users);
    
        if (!response.ok) {
            throw new Error(`Failed to fetch posts:  ${response.status}`);
        }
        
        return response.json();
        
    }catch (e) {
        
        console.log(e);
        
    } 
    
}

function listsUsers(usersContainerId) {
    
    const usersContainerElement = document.getElementById('usersContainerId');
      
    if(!usersContainerElement){
        return;
    }
    
    fetchUsers().then(users => {
        
        if(!users) {
            
            usersContainerElement.innerHTML = 'No Users';
            
        }
        
        for(const user of users) {
            
            usersContainerElement.appendChild(userElement(user));
            
        }
        
        
    }).catch(e => {
        
        console.log(e);
        
    });
    
    function userElement(users) {
        
        const unorderedListElement = document.createElement('ul');
        
        const orderedListElement = document.createElement('li');
        unorderedListElement.appendChild(orderedListElement);
        unorderedListElement.innerText = users.name;
        
        const userListItem = document.createElement('h1');
        userListItem.appendChild(unorderedListElement);
    }
    
}