var menuItem = document.getElementById("menu").getElementsByTagName("li");
for ( i = 0; i < menuItem.length; i++) {
    menuItem[0].addEventListener("click",selectItem);
}
    function selectItem(){
    alert("info@goldensalamon.com");
}
    menuItem[1].addEventListener("click",select);
    function select(){
    alert("+966920024432");
}
    menuItem[2].addEventListener("click",sele);
    function sele(){
    alert("الطريق الدائري الغربي-مخرج28-مقابل بنك الرياض-الرياض-السعودية12987");
}

