

async function imagemApi (){
    //Chega a resposta 
    let respostaApi = await fetch('https://dog.ceo/api/breeds/image/random');
    let dadosApi = await respostaApi.json();
    document.querySelector(".img-dog").src= dadosApi.message;
    console.log(dadosApi);

}
imagemApi()