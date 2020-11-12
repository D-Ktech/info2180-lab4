window.onload=function(){
    let searchbutton=document.getElementById("sbtn");
    searchbutton.addEventListener('click',function(a){
        a.preventDefault();
        let httpreq=new XMLHttpRequest();
        let url="superheroes.php";
        let heroes=function(){
            if(httpreq.readyState===XMLHttpRequest.DONE){
                if(httpreq.status===200){
                    let i=httpreq.i;
                    alert(i);
                    $("#result").html(i);
                }else{
                    alert("Something went wrong with this request");
                };
            };
        };
        httpreq.onreadystatechange=heroes;
        httpreq.open('GET',url);
        httpreq.send();
    });
};
