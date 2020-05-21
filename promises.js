function usersRepos() {
    return new Promise(function(resolve, reject){
    
    let user = document.querySelector('.input').value;
    let ul = document.querySelector('ul');

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
                  
                    let repo =  JSON.parse(xhr.responseText)  
                    console.log(` Repositorios ${repo}`)
                    
                    let num = 0;

                    let repoList = repo.map( (repoName) => {
                        let li = document.createElement('li');
                        li.innerHTML = `Repositorio ${num +1} ${repoName.name}`
                        ul.appendChild(li);
                        num++ 
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

