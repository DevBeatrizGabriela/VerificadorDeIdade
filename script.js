function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    //* Se o comprimento da caixa for 0, ou seja, não ter nada nela OU o valor digitado maior do que o ano da época *//
    
    if (fAno.value.length == 0 || Number(fAno.value) > ano)  {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img') //Mesma coisa se eu fosse no HTML e adicionasse uma tag img e atribuisse à ela um id 'img'//
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-m.png')
                genero = 'um ser genuinamente feliz'
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.png')
                genero = 'um adultinho'
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.png')
                genero = 'um homem de negócios infeliz'
            } else {
                img.setAttribute('src', 'idoso-m.png')
                genero = 'um vovô gaga'
            }
        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-f.png')
                genero = 'uma ser genuinamente feliz'
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.png')
                genero = 'uma adultinha'
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-f.png')
                genero = 'uma mãe de familia infeliz'
            } else {
                img.setAttribute('src', 'idoso-f.png')
                genero = 'uma vovó gaga'
            }
        }
        
        res.style.padding = '2em 0 0 0'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        //Para adicionar um elemento colocamos ==> //
        res.appendChild(img)
        img.style.margin = '1.3rem 0 1.2rem 0'
    }

}