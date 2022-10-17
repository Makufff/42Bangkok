function random_color(){
    var hex , color ;
    hex = '0123456789ABCDEF';
    color = '#'
    console.log(Math.random()*16);
    for(let i = 0 ;i < 6 ; i++) color += hex[Math.floor(Math.random() * 16)];
    return color ;
}

function change_color(){
    document.body.style.backgroundColor = random_color();
}