let pocetno=document.querySelectorAll(".first select");
let zavrsno=document.querySelectorAll(".final select");
let izracunaj=document.querySelector("button");

let godPoc=document.querySelector(".first input");
let godZav=document.querySelector(".final input");

let h2=document.querySelectorAll(".h2-wrapper h2");
let nula=document.querySelector(".nula");
let warning=document.querySelector("h3");

let pocDani=31,year,month,days,preostali,wDays,istiDatum=false;

godPoc.value="2022";
godZav.value="2022";
izracunaj.addEventListener("click",e=>{
    e.preventDefault();
    let pocMesec=parseInt(pocetno[0].value);
    let zavMesec=parseInt(zavrsno[0].value);
    if(godPoc.value>godZav.value){
        warning.style.display="block";
        return;
    }
    else{
        warning.style.display="none";
    }

    let odabirPoc=parseInt(pocetno[1].options[pocetno[1].selectedIndex].innerText);
    let odabirZav=parseInt(zavrsno[1].options[zavrsno[1].selectedIndex].innerText);

    let istiM=pocMesec===zavMesec ? true : false;
    let istiD=odabirPoc===odabirZav ? true : false;
    let istaG=godPoc.value===godZav.value ? true : false;
    if(istiM===true && istiD===true && istaG===true){
        h2.forEach(e=>{
            e.style.display="none";
        });
        nula.style.display="block";
    }
    else{
        h2.forEach(e=>{
            e.style.display="block";
        });
        nula.style.display="none";
    }
    
    year=(godZav.value)-(godPoc.value);
    month=zavMesec-pocMesec;
    if(pocMesec>zavMesec){
        month=12+(zavMesec-pocMesec);
        year--;
    }
    if((pocMesec>zavMesec) && (odabirPoc>odabirZav)){
        month--; 
    }
    else if(odabirPoc>odabirZav){
        month--;
    }
    
    days=odabirPoc>odabirZav ? ((pocDani+odabirZav)-odabirPoc) : (odabirZav-odabirPoc);
    let weeks=(month*4.333333333333333)+preostali+1;

    preostali=Math.trunc(days/7);
    wDays=days-(preostali*7)+1;
    let totalDays=(weeks*7)+wDays;

    let monthWhenGod=(year*12)+month;
    let weekgod=(monthWhenGod*4.333333333333333)+(days-preostali);
    let totalWhenGod=(weekgod*7)+wDays;

    let imaLiGodina=year>0 ? true : false;
    h2[1].style=imaLiGodina===true ? "display:block" : "display:none";
    
    h2[0].innerText=imaLiGodina===true ? `${year} years ${month} months ${days} days` : `${month} months ${days} days`;
    h2[1].innerText=imaLiGodina===true ? `or ${Math.trunc(monthWhenGod)} months ${days} days` : "";
    h2[2].innerText=imaLiGodina===true ? `or ${Math.trunc(weekgod)} weeks ${wDays} days` : `or ${Math.trunc(weeks)} weeks ${wDays} days`;  
    h2[3].innerText=imaLiGodina===true ? `or ${Math.trunc(totalWhenGod)} days` : `or ${Math.trunc(totalDays)} days`;
    h2[4].innerText=imaLiGodina===true ? `or ${Math.trunc(totalWhenGod*24)} hours` : `or ${Math.trunc(totalDays*24)} hours`;
    h2[5].innerText=imaLiGodina===true ? `or ${Math.trunc(totalWhenGod*24*60)} minutes` : `or ${Math.trunc(totalDays*24*60)} minutes`;
    h2[6].innerText=imaLiGodina===true ? `or ${Math.trunc(totalWhenGod*24*60*60)} seconds` : `or ${Math.trunc(totalDays*24*60*60)} seconds`;

});