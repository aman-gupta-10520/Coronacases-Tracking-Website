fetch('https://corona.lmao.ninja/v2/countries/India')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  document.getElementById("country").innerHTML = data.country;
  document.getElementById("sactive").innerHTML = data.active.toLocaleString();
  document.getElementById("sconfirm").innerHTML = data.cases.toLocaleString();

  document.getElementById("scritical").innerHTML = data.critical.toLocaleString();
  document.getElementById("sdeaths").innerHTML = data.deaths.toLocaleString();
  document.getElementById("srecover").innerHTML = data.recovered.toLocaleString();
  document.getElementById("stest").innerHTML = data.tests.toLocaleString();
  document.getElementById("flag").src = data.countryInfo.flag;
});

fetch('https://corona.lmao.ninja/v2/countries')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
  data.forEach(element => {
    latitude=element.countryInfo.lat
    longitude=element.countryInfo.long
    var cc=element.cases;
    var colors
    if(cc<255000){
      cc=Math.floor(cc/1000)
      colors="rgb("+cc+",0,0)"
    }
    else{
      colors="rgb(255,0,0)"
    }
  var mark= new mapboxgl.Marker({
    draggable: false,
    color:colors
  })
  mark.setLngLat([longitude,latitude])
  mark.setPopup(
  new mapboxgl.Popup({ offset: 25 }) // add popups
             .setHTML("<div class='pop'><h2><strong>Country:</strong> "+element.country+" <img src="+element.countryInfo.flag+"></img></h2>"+
                  "<h2><strong>Continent:</strong> "+element.continent+"</h2>"+
                  "<h2><strong>Population:</strong> "+element.population+"</h2>"+
                 "<h2><strong>Total-Cases:</strong> "+element.cases+"</h2>"+
                  "<h2><strong>Active-Cases:</strong> "+element.active+"</h2>"+
                  "<h2><strong>Total-Deaths:</strong> "+element.deaths+"</h2></div>"

           )
)
  mark.addTo(map)

  });
});
function searh(){
  var inputVal = document.getElementById("txt").value;
  var x='https://corona.lmao.ninja/v2/countries/';
  x=x+inputVal.toLowerCase();
  fetch(x)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    document.getElementById("country").innerHTML = data.country;
    document.getElementById("sactive").innerHTML = data.active.toLocaleString();
    document.getElementById("sconfirm").innerHTML = data.cases.toLocaleString();
    document.getElementById("scritical").innerHTML = data.critical.toLocaleString();
    document.getElementById("sdeaths").innerHTML = data.deaths.toLocaleString();
    document.getElementById("srecover").innerHTML = data.recovered.toLocaleString();
    document.getElementById("stest").innerHTML = data.tests.toLocaleString();
    document.getElementById("flag").src = data.countryInfo.flag;
    latitude=data.countryInfo.lat
    longitude=data.countryInfo.long

  });
}
function statesearch(){
  var inputVal = document.getElementById("tx").value;
  var inpp=inputVal.toLowerCase();
  var inp=inputVal.toLowerCase().slice(0,5);
  fetch('https://api.rootnet.in/covid19-in/stats/latest')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    for(var i=0;i<=35;i++){
      document.getElementById("x").deleteRow(-1)
    }
    for(var j=0;j<=35;j++){
      if((data.data.regional[j].loc).toLowerCase()==inpp){
        var table2 = document.getElementById("x");

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table2.insertRow(-1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        cell0.innerHTML = 1;
        cell1.innerHTML = data.data.regional[j].loc;
        cell2.innerHTML = data.data.regional[j].confirmedCasesIndian;
        cell3.innerHTML = data.data.regional[j].confirmedCasesForeign;
        cell4.innerHTML = data.data.regional[j].discharged;
        cell5.innerHTML = data.data.regional[j].deaths;
      }

      else if((data.data.regional[j].loc).toLowerCase().slice(0,5)==inp){
        var table2 = document.getElementById("x");

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table2.insertRow(-1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        var cell0 = row.insertCell(0);
        var cell1 = row.insertCell(1);
        var cell2 = row.insertCell(2);
        var cell3 = row.insertCell(3);
        var cell4 = row.insertCell(4);
        var cell5 = row.insertCell(5);
        cell0.innerHTML = 1;
        cell1.innerHTML = data.data.regional[j].loc;
        cell2.innerHTML = data.data.regional[j].confirmedCasesIndian;
        cell3.innerHTML = data.data.regional[j].confirmedCasesForeign;
        cell4.innerHTML = data.data.regional[j].discharged;
        cell5.innerHTML = data.data.regional[j].deaths;
      }
    }
  });
}
document.getElementById("txt")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("srch").click();
    }
});

document.getElementById("tx")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("srcc").click();
    }
});

fetch('https://api.rootnet.in/covid19-in/stats/latest')
.then((response) => {
  return response.json();
})
.then((data) => {
  console.log(data);
/*  document.getElementById("x").append("<tr>" +
    "<td>"+data.data.regional[0].loc+"</td>" +
    "<td>"+data.data.regional[0].confirmedCasesIndian+"</td>" +
    "<td>"+data.data.regional[0].confirmedCasesForeign+"</td>" +
    "</tr>");
    document.getElementById("x").append("<tr>" +
      "<td>"+data.data.regional[0].loc+</td>+
      "<td>"+data.data.regional[0].confirmedCasesIndian+"</td>" +
      "<td>"+data.data.regional[0].confirmedCasesForeign+"</td>" +
      "</tr>");*/
      for(var i=0;i<=35;i++){
      var table = document.getElementById("x");

      // Create an empty <tr> element and add it to the 1st position of the table:
      var row = table.insertRow(-1);

      // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
      var cell0 = row.insertCell(0);
      var cell1 = row.insertCell(1);
      var cell2 = row.insertCell(2);
      var cell3 = row.insertCell(3);
      var cell4 = row.insertCell(4);
      var cell5 = row.insertCell(5);

      // Add some text to the new cells:
      cell0.innerHTML = i+1;
      cell1.innerHTML = data.data.regional[i].loc;
      cell2.innerHTML = data.data.regional[i].confirmedCasesIndian;
      cell3.innerHTML = data.data.regional[i].confirmedCasesForeign;
      cell4.innerHTML = data.data.regional[i].discharged;
      cell5.innerHTML = data.data.regional[i].deaths;

}
  });
function state(){
  document.getElementById("states").style.display="block";
  document.getElementById("countr").style.display="none";
  document.getElementById("st").style.display="block";

}
function country(){
  document.getElementById("states").style.display="none";
  document.getElementById("countr").style.display="block";

}
change(0)
function change(n){
  var classes=document.getElementsByClassName("sec");
  var act=document.getElementsByClassName("butt");
  var hm=document.getElementsByClassName("but")
  for(var i=0;i<classes.length;i++){
    classes[i].style.display="none";

  }
  for(var j=0;j<act.length;j++){
    act[j].className=act[j].className.replace(" active","");
  }
  for(var j=0;j<hm.length;j++){
    hm[j].className=hm[j].className.replace(" activ","");
  }
  if(n==1){
    document.getElementById("st").innerHTML="Statewise";
  }
  else{
    document.getElementById("st").innerHTML="Countrywise";

  }
  classes[n].style.display="block";
  act[n].className+=" active";
  hm[n].className+=" activ";
}
var test=document.getElementById("nav");
test.addEventListener("mouseover",function(event){
   document.getElementById("menu").style.width="200px";
});
var tes=document.getElementById("menu");
tes.addEventListener("mouseleave",function(event){
   document.getElementById("menu").style.width="0px";
});
function mobile(){
  document.getElementById("menu").style.width="100px";

}
/* js for dark ligth mode*/
var flag=1;
function dark(){
  flag=0;
  document.getElementById("mode").innerHTML='<i class="las la-sun" title="Light-Mode"></i>';
  var ar=document.getElementsByClassName("back");
  document.getElementById("nav").style.background="#3F3F3F";
  document.getElementById("menu").style.background="#3F3F3F";
  var arr2=document.getElementsByClassName("text1");
  for(var j=0;j<arr2.length;j++){
    arr2[j].style.color="#ffff"
  }
  for(var i=0;i<ar.length;i++){
    ar[i].style.background="#3F3F3F"
  }
 document.body.style.background="#3F3F3F"
 var table=document.getElementById("x");
 var rows = table.getElementsByTagName("tr");

for(i = 0; i < rows.length; i++){
  if(i % 2 == 0){

       rows[i].style.background="#4a4646";
rows[i].style.color="#ffff";
     }else{

       rows[i].style.background="#3F3F3F";
       rows[i].style.color="#ffff";

     }
}
document.getElementById("box").className=document.getElementById("box").className.replace(" light_selected","");

document.getElementById("box").className+=" dark_selected";
}

function light(){
  flag=1
  document.getElementById("mode").innerHTML='<i class="las la-moon" title="Dark-Mode"></i>';

  var arr=document.getElementsByClassName("back");
  document.getElementById("nav").style.background="#f7f7f5";
  document.getElementById("menu").style.background="#f7f7f5";
  var arr2=document.getElementsByClassName("text1");
  for(var j=0;j<arr2.length;j++){
    arr2[j].style.color="#2a2b2a"
  }
  for(var j=0;j<arr.length;j++){
    arr[j].style.background="#ffff"
  }
 document.body.style.background="#ffff";
 var ltable=document.getElementById("x");
 var lrows = ltable.getElementsByTagName("tr");

for(i = 0; i < lrows.length; i++){
  if(i % 2 == 0){

       lrows[i].style.background="rgb(237,237,237)";
      lrows[i].style.color="#2a2b2a";
     }else{

       lrows[i].style.background="#ffff";
       lrows[i].style.color="#2a2b2a";

     }
}
document.getElementById("box").className=document.getElementById("box").className.replace(" dark_selected","");
document.getElementById("box").className+=" light_selected";
}
dark()
function modes(){
  if(flag==1){
    dark();

  }
  else{
    light();
  }
}
