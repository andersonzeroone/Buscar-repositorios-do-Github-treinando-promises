function usersPromises(){
    let user = document.querySelector('.input').value; 
    let ul = document.querySelector('ul'); 
    let urlUser = `https://api.github.com/users/${user}`; 
    let urlRepos =  `https://api.github.com/users/${user}/repos`;     
    
    if(ul != null ){
        document.getElementById('ulList').remove()
        // document.getElementById('name').remove()
    }

    user == '' ?(alert('Preencha o Campo!')):
        ( 
            usersRepos(urlUser)
                .then((user) =>{
                    console.log(` repo ${user}`);
                        usersRepos(urlRepos)
                            .then( (repositorio) =>{
                                render(user, repositorio);
                            })
                    
                })
                .catch((erros) =>{ console.warn(erros),alert(erros)})
        )  
}

const usersRepos = (url) => new Promise((resolve, reject) =>{
    setLoading(true);
    let xhr = new XMLHttpRequest();
    xhr.open('GET',`${url}`);
    xhr.send(null);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){

                    setLoading(false);
                    resolve(JSON.parse(xhr.responseText));
                    
                }else{
                    setLoading(false);
                    document.getElementById('name').remove()
                    reject('erro na requisição!');
                }
            }
        }
}) 


function setLoading(loading){

    let loadingEl = document.querySelector('.load');
    let menssenger = document.createElement('span') ;
   
    loading == true?(
            menssenger.setAttribute('id', 'loading'),
            menssenger.innerHTML = 'loading...',  
            loadingEl.appendChild(menssenger)
        )
        :(
            document.getElementById('loading').remove()

        )
              
}

function render(user,repositorio){

    



    console.log(`aqui ${user}`)
    let list = [];

        let ul = document.createElement('ul');
        ul.setAttribute('id','ulList');

        let render = document.querySelector('.render');
        let num = 0;
        
        repositorio.forEach(repo => {
            list.push({
                repositorioName:repo.name,
                url: repo.html_url
            })
        });
        
        console.log(list);

        list.forEach( repo =>{

            let li = document.createElement('li');
            li.setAttribute('id', 'list');
            li.appendChild(document.createTextNode(`${num +1}: ${repo.repositorioName} =>  `))
            let urlLink = document.createElement('a');
            urlLink.setAttribute('target','_blank');
            urlLink.setAttribute('href', repo.url);
            urlLink.appendChild(document.createTextNode('Visitar'));
            
            li.appendChild(urlLink);
            ul.appendChild(li);
            render.appendChild(ul)
            num++;
        })

        document.querySelector(".input").value = ''
}
