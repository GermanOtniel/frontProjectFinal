const baseURL = 'http://localhost:3000/auth/';

export function signup(userData){
    return fetch(baseURL + 'signup', {
        method:'post',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(res=>{
        if(!res.ok) return Promise.reject(res);
        return res.json();
    })
    .then(user=>{
        //localStorage.setItem('user', JSON.stringify(user))
        return user;
    });
}

export function login(userData){

  return fetch(baseURL + 'login',{
    method:'post',
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(userData),
    credentials: "include"
  })
  .then(res=>{
    if(!res.ok) return Promise.reject(res)
    return res.json();
  })
  .then(user=>{
    //convertimos al usuario en texto 
    //const userTexto = JSON.stringify(user);
    //lo guardamos en el navegador del user 
    localStorage.setItem('user',JSON.stringify(user));
    return user;
  })

}


export function getSingleUser(id){
  //console.log("peticion");
  return fetch( baseURL + 'profile/' + id )
  .then(res=>{
    if(!res.ok) return Promise.reject(res.statusText);
    return res.json()
  })
  .then(user=>{
    return user
  })
}

export function addCredits(credits){
  //console.log("peticion");
  return fetch(baseURL+'profile',{
    method:'post',
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(credits),
    credentials:"include"
})
  .then(res=>{
    if(!res.ok) return Promise.reject(res.statusText);
    return res.json()
  })
  .then(user=>{
    return user
  })
}

export function logout(){
  console.log('salirrrrss')
  return fetch( baseURL + 'logout' )
  .then(res=>{
    if(!res.ok) return Promise.reject(res.statusText);
    return 
  })
  .then(logoutUser=>{
    return logoutUser
  })
}