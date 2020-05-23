function usersRepos() { //andersonzeroone
    return new Promise(function(resolve, reject){
    
    setLoading(true)
    let ul = document.querySelector('ul');
    let user = document.querySelector('.input').value;

    console.log(user);

    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.github.com/users/${user}/repos`);
    xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    setLoading(false);
                    resolve(JSON.parse(xhr.responseText))
    
                }else{
                    reject('erro na requisição');
                }
            }
        }
    })
    .then( function(response){
        console.log(response);
        console.log( typeof response)
        console.log( response[0].name)
   
        let list = [];
       
        this.list = list
        let num = 0;
        let ul = document.querySelector('ul');
        let reposList = response.map((repo)=> {

            let li = document.createElement('li');
            li.innerHTML = `Repositorio ${num +1}: ${repo.name}`
            ul.appendChild(li);
             num++;

             list.push(repo.name)
        })
        console.log(list)

    })
    .catch( function (erros){
        console.warn(error);
    })
}

function usersPromises(){
    let user = document.querySelector('.input').value;

    user == '' ? alert('Preencha o Campo!'):usersRepos()     
}



function setLoading(loading){
    if(loading == true){
  
        let user = document.querySelector('.input').value;
        let show = document.querySelector('.user');
        let showUser = document.createElement('p')
        showUser.innerHTML = `Usuario: ${user}` 
        show.appendChild(showUser);

        let loadingEl = document.querySelector('.load');
        let menssenger = document.createElement('span') ;
        menssenger.setAttribute('id', 'loading');
        menssenger.innerHTML = 'loading...'  
        loadingEl.appendChild(menssenger) 
       
    }else{
        document.getElementById('loading').remove();            

    }
}