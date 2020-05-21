function usersRepos() {
    return new Promise(function(resolve, reject){
    
    let user = document.querySelector('.input').value;
    let ul = document.querySelector('ul');
    let li = document.createElement('li');


    let show = document.querySelector('.user');
    let showUser = document.createElement('p')
    showUser.innerHTML = `Usuario: ${user}` 

    show.appendChild(showUser);
    
    console.log(user);

    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.github.com/users/${user}/repos`);
    xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                  
                    let respo =  JSON.parse(xhr.responseText)  
                    console.log(respo)
                    let respoName
                    let a = 0 
                   

                    let test  = respo.map( function (userLi){
                        let li = document.createElement('li');
                        li.innerHTML = `Repositorio ${a +1} ${userLi.name}`
                        ul.appendChild(li);
                        a++
                       
                    })  

           
                }else{
                    reject('erro');
                }
            }
        }
    })
}

function usersPromises(){
    usersRepos()
        .then( function(response){
            console.log(response);
           
        })
        .catch( function (erros){
            console.log(error);
        })
}
