function setcookie(cid , cvalue){
    document.cookie = cid + '=' + cvalue ;
    var date = new Date() ; 
    date.setMonth(date.getYear() + 3000);
    document.cookie += ('; expires=' + date.toUTCString());
}

function deletelist(cid){
    var date = new Date() ; 
    date.setMonth(date.getYear() - 1);
    document.cookie = cid + '=; expires=Wed, 31 Oct 2012 08:50:17 UTC;';
}

function addtask(){
    // var data = document.getElementById('objective').value;
    // console.log(data);
    var data = prompt("กรอกหน่อยย!!!!!")
    let id = Date.now();
    if (data != '' && data != null){
        addList(data,id);
        setcookie(id,data);
        // checklist();
    }
}

function addList(value, id = 'None'){
    var list = document.getElementById('ft_list');
    var texts = document.createTextNode(value);
    var div = document.createElement('div');
    div.appendChild(texts); div.id = id ;
    if (value === '' && id === 'None') alert('กรอกหน่อยยยยยยย!!!!');
    else{
        list.prepend(div);
    }
    div.onclick = function(e){
        // var div = this. ;
        if(confirm(`${this.id}`)){
            // console.log(this.id);
            deletelist(this.id);
            this.remove();   
        }   
    }   
    
}

function checklist(){
    let data = document.cookie.split(";");
    console.log(data);
    if (!(data[0] == '' && data.length === 1)){
        for(let i = 0 ; i < data.length ; i++){
            let part_cookie = data[i].split("=") ;
            addList(part_cookie[1] , part_cookie[0]);
        }
    }
}
