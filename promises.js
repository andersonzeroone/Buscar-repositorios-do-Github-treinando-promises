function usersRepos() { //andersonzeroone
    return new Promise(function(resolve, reject){
    
    let list = [];
    this.list = list;
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
                    setLoading(false);
                    reject('erro na requisição!');
                }
            }
        }
    })
    .then( (response) =>{
        console.log(response);
        console.log( typeof response)
        console.log( response[0].name);

        let ul = document.querySelector('ul');
        let num = 0;
        
        
        response.forEach(repo => {
            list.push(repo.name)
        });
        
        console.log(list);

        list.forEach( repoName =>{
            let li = document.createElement('li');
            li.setAttribute('id', 'list');
            li.innerHTML = `Repositorio ${num +1}: ${repoName}`
            ul.appendChild(li);
             num++;
        }) 
        
        // let reposList = response.map((repo)=> {

        //     let li = document.createElement('li');
        //     li.innerHTML = `Repositorio ${num +1}: ${repo.name}`
        //     ul.appendChild(li);
        //      num++;

        //     list.push(repo.name);
        // })
        // console.log(list);

    })
    .catch((erros) =>{ console.warn(erros),alert(erros)})
}

function usersPromises(){
    let list = document.querySelectorAll('li').value;

    if(list == ''){
    // let user = document.querySelector('.input').value
    usersRepos()  
    }else{
        document.querySelectorAll('list').remove()
    }
    // user == '' ? alert('Preencha o Campo!'):usersRepos()     
}



function setLoading(loading){

    let user = document.querySelector('.input').value;
    let show = document.querySelector('.user');
    let showUser = document.createElement('p');

    let loadingEl = document.querySelector('.load');
    let menssenger = document.createElement('span') ;
   
    loading == true?(
        showUser.innerHTML = `Usuario: ${user}` ,
        show.appendChild(showUser),
        menssenger.setAttribute('id', 'loading'),
        menssenger.innerHTML = 'loading...',  
        loadingEl.appendChild(menssenger)
        )
        :document.getElementById('loading').remove()
        

}

