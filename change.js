
const change = document.getElementById("change")
function change_all(){    if (document.getElementsByTagName('div')[6].innerText==='Budnizcky'){
        document.getElementsByTagName('div')[6].innerText='Будницкий';        document.getElementsByTagName('div')[7].innerText='Егор';
        document.getElementsByTagName('div')[8].innerText='Игоревич';        document.getElementsByTagName('div')[9].innerText='муж.';
        document.getElementsByTagName('div')[11].innerText='г. Москва';    }
    else{
        if (document.getElementsByTagName('div')[6].innerText==='Будницкий'){            document.getElementsByTagName('div')[6].innerText='Budnitsky';
            document.getElementsByTagName('div')[7].innerText='Egor';            document.getElementsByTagName('div')[8].innerText='Igorevich';
            document.getElementsByTagName('div')[9].innerText='male';            document.getElementsByTagName('div')[11].innerText='Moscow';
        }
    }}
change.addEventListener("click", change_all)