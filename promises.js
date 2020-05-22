function usersRepos() { //andersonzeroone
    return new Promise(function(resolve, reject){
    
    let user = document.querySelector('.input').value;
    // let show = document.querySelector('.user');
    // let showUser = document.querySelector('p')
    // showUser.innerHTML = `Usuario: ${user}` 
    // show.appendChild(showUser);

    let ul = document.querySelector('ul');
    console.log(user);

    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.github.com/users/${user}/repos`);
    xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    let repo =  JSON.parse(xhr.responseText)  
                    console.log(` Repositorios ${repo}`)
                    
                    let repoName = reName => reName.name
                    let repoList = repo.map(repoName);
                    
                    let num = 0;
                    
                    for(let i=0; i < repoList.length; i++ ){
                        let li = document.createElement('li');
                        li.innerHTML = `Repositorio ${num +1}: ${repoList[i]}`
                        ul.appendChild(li);
                         num++;
                    }
                    document.querySelector(".input").value = ''
                }else{
                    reject('erro');
                }
            }
        }
    })
}

function usersPromises(){
    let user = document.querySelector('.input').value;

    user == '' ? (alert('Preencha o Campo!')): (
            usersRepos()
            .then( function(response){
                console.log(response);
                
            
            })
            .catch( function (erros){
                console.log(error);
            })
    )    
}

