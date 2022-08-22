var text = document.querySelector('form')

text.addEventListener('submit' , function(enter){

        enter.preventDefault()
        let url = "https://pokeapi.co/api/v2/pokemon/" //url da pesquisa da api

        let nome = document.getElementById("name")

        url = url + this.name.value
        url = url.toLocaleLowerCase()

        //RESPOSTA
        let res = document.getElementById('content')
        let img = document.getElementById('img-pk')
        let html = ''

        fetch(url)
            .then(res => res.json())
            .then(function(data){
                console.log(data)
                html = 'Nome: ' + mais(data.name) + '<br>'
                html = html + 'Type: ' + mais(data.types[0].type.name)
                res.innerHTML = html

                img.innerHTML = "<img src='" + data.sprites.front_default + "'><img src='" + data.sprites.front_shiny + "'>"
            })
            .catch(function(err){
                if(err == 'SyntaxError: Unexpected token N in JSON at position 0') {
                    html = 'Pokemon não encontrado! D:'
                } else {
                    html = 'ERRO:'+err
                }

                res.innerHTML = html
            })


})


function mais(val) {
    return val[0].toUpperCase()+val.substr(1) //deixar a primeira letra em maisculo
}
