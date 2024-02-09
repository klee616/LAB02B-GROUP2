function changeTab(id){
//disable all tab
document.getElementById("tab1").classList.remove("active");
document.getElementById("tab2").classList.remove("active");
document.getElementById("tab3").classList.remove("active");
//disable tag bar

document.getElementById("tabBtn1").classList.remove("tab-bar-item-active");
document.getElementById("tabBtn2").classList.remove("tab-bar-item-active");
document.getElementById("tabBtn3").classList.remove("tab-bar-item-active");


document.getElementById("tab"+id).classList.add("active");
document.getElementById("tabBtn"+id).classList.add("tab-bar-item-active");

}


function changeArticle(id){
    document.getElementById("articleContent1").classList.add("hidden-content");
    document.getElementById("articleContent2").classList.add("hidden-content");
    document.getElementById("articleContent3").classList.add("hidden-content");

    document.getElementById("articleContent" + id).classList.remove("hidden-content");

}

