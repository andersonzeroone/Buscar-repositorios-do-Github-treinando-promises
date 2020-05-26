function usersPromises(){
    let user = document.querySelector('.input').value; 
    let ul = document.querySelector('ul'); 
    let urlUser = `https://api.github.com/users/${user}`; 
    let urlRepos =  `https://api.github.com/users/${user}/repos`;     
    
    if(ul != null ){
        document.getElementById('ulList').remove()
       
    }

    user == '' ?(alert('Preencha o Campo!')):
        ( 
            usersRepos(urlUser)
                .then( function(user){
                    console.log(` repo ${user}`);
                        usersRepos(urlRepos)
                            .then( function (repositorio){
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
    console.log(user.login);

    let linkUser = document.createElement('a');
    linkUser.setAttribute('target', '_blank');
    linkUser.setAttribute('href', user.html_url);
    linkUser.appendChild(document.createTextNode('Acessar'));

    // document.querySelector('.data .link').appendChild(linkUser);
    
    let imgUser = document.querySelector('.user .img').cloneNode(true);
    imgUser.querySelector('.img img').src = user.avatar_url;
    document.querySelector('.user').appendChild(imgUser);

    let renderUser = document.querySelector('.user .data').cloneNode(true);
    renderUser.querySelector('.userName').innerHTML = `User Name: ${user.login}`
    renderUser.querySelector('.name').innerHTML = `Name: ${user.name}`;
    renderUser.querySelector('.locale').innerHTML = `Location: ${user.location}`
    renderUser.querySelector('.link').innerHTML = linkUser
    // renderUser.querySelector('.user p').innerHTML = `Repositorios:`
    document.querySelector('.user').appendChild(renderUser);

    // let imgEl = document.createElement('img');
    // imgEl.setAttribute('src',user.avatar_url);


    // let name = document.createElement('span');
    // name.appendChild(document.createTextNode(`Name:${user.name}`));

    // let userName = document.createElement('span');
    // userName.appendChild(document.createTextNode(`user Name:${user.login}`));


    // let locale = document.createElement('span');
    // locale.appendChild(document.createTextNode(`Localização:${user.location}`)); 



    // let renderUser = document.querySelector('.user');
    // renderUser.appendChild(imgEl);
    // renderUser.appendChild(name);
    // renderUser.appendChild(userName);
    // renderUser.appendChild(locale);
    // renderUser.appendChild(linkUser);
 
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
            li.appendChild(document.createTextNode(`* ${repo.repositorioName} =>  `))
            let urlLink = document.createElement('a');
            urlLink.setAttribute('target','_blank');
            urlLink.setAttribute('href', repo.url);
            urlLink.appendChild(document.createTextNode('Visitar'));
            
            li.appendChild(urlLink);
            ul.appendChild(li);
            render.appendChild(ul)
        })

        document.querySelector(".input").value = ''
}
