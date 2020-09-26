
var allimages=['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];
const leftImageEl = document.getElementById('left-image');
const rightImageEl = document.getElementById('right-image');
const middleImageEl = document.getElementById('middle-image');
const imagesSection = document.getElementById('images-section');

function challange(name) {
  this.name = name;
  this.path =  `assets/${name}.jpg`;
  this.votes = 0;
  this.shown = 0;
  challange.all.push(this);
}
challange.all = [];
for (let i = 0; i <allimages.length; i++) {
  new challange(allimages[i]);
}

function setProducts() {
  // store to local storage
  //1 stringify
  var imageString = JSON.stringify(challange.all);
  //2 setItem
  localStorage.setItem('products', imageString);
}
function getProducts() {
  // 1 getItem
  var imagesString = localStorage.getItem('products');
  
  // 2 parse
  if (imagesString){
    challange.all = JSON.parse(imagesString);}


  }
  




var leftIndex = randomNumber(0,allimages.length);
var rightIndex = randomNumber(0,allimages.length);
var middleIndex = randomNumber(0,allimages.length);

var r =[leftIndex,middleIndex,rightIndex];

function render () {

for(var i=0;i<allimages.length;i++){
new challange(allimages[i]);
}


while(leftIndex === rightIndex ||  r.includes(leftIndex) || r.includes(rightIndex) || middleIndex === rightIndex || middleIndex === leftIndex   || r.includes(middleIndex) )
 
{
    rightIndex = randomNumber(0,allimages.length);
    leftIndex = randomNumber(0,allimages.length);
    middleIndex = randomNumber(0,allimages.length);
    
}

r[0]=leftIndex;
r[1]=middleIndex;
r[2]=rightIndex;



///left image
if(leftIndex === 14 )
{  challange.all [14].path = `assets/${allimages[14]}.png`;
  leftImageEl.src = challange.all [leftIndex].path ; 
  challange.all[leftIndex].shown++;
  prev =1;
  console.log('Index:',leftIndex,'allimages',challange.all [leftIndex]);

}else if (leftIndex === 17 ){
  challange.all [17].path = `assets/${allimages[17]}.gif`;
leftImageEl.src = challange.all [leftIndex].path ; 
challange.all[leftIndex].shown++;
console.log('Index:',leftIndex,'allimages',challange.all [leftIndex]);

}
else {leftImageEl.src = challange.all [leftIndex].path ;
  challange.all[leftIndex].shown++;
  console.log('Index:',leftIndex,'allimages',challange.all [leftIndex]);
}
/// middle image
if(middleIndex === 14 )
{  challange.all [14].path = `assets/${allimages[14]}.png`;
  middleImageEl.src = challange.all [middleIndex].path ; 
  challange.all[middleIndex].shown++;
  console.log('Index:',middleIndex,'allimages',challange.all [middleIndex]);
  
}else if (middleIndex === 17 ){
  challange.all [17].path = `assets/${allimages[17]}.gif`;
middleImageEl.src = challange.all [middleIndex].path ; 
challange.all[middleIndex].shown++;
console.log('Index:',middleIndex,'allimages',challange.all [middleIndex]);

}
else {middleImageEl.src = challange.all [middleIndex].path ;
  challange.all[middleIndex].shown++;
  console.log('Index:',middleIndex,'allimages',challange.all [middleIndex]);
}

/// right image
if(rightIndex === 14 )
{  challange.all [14].path = `assets/${allimages[14]}.png`;
  rightImageEl.src = challange.all [rightIndex].path ; 
  challange.all[rightIndex].shown++;
  console.log('Index:',rightIndex,'allimages',challange.all [rightIndex]);
}
else if (rightIndex === 17 ){
  challange.all [17].path = `assets/${allimages[17]}.gif`;
  rightImageEl.src = challange.all [rightIndex].path ; 
  challange.all[rightIndex].shown++;
  console.log('Index:',rightIndex,'allimages',challange.all [rightIndex]);

}
else {rightImageEl.src = challange.all [rightIndex].path ;
     challange.all[rightIndex].shown++;
      console.log('Index:',rightIndex,'allimages',challange.all [rightIndex]);
  }


       /// image alt
       leftImageEl.alt = challange.all [leftIndex].name;
       rightImageEl.alt = challange.all [rightIndex].name;
       middleImageEl.alt = challange.all [middleIndex].name;
      /// image title
       leftImageEl.title = challange.all [leftIndex].name;
       rightImageEl.title = challange.all [rightIndex].name;
       middleImageEl.title = challange.all [middleIndex].name;
      
}


///addEventListener
render();
var count =0;
images.addEventListener('click',AddVotes);



  function AddVotes(event) {
      
      if(event.target.id !== 'images'){
        for (var i = 0; i < allimages.length; i++) {
          if(challange.all[i].name === event.target.title){
            challange.all[i].votes++;
            count++;
          }
        }
        render();
       
      }
      if(count === 10){
      images.removeEventListener('click',AddVotes);
      barchart();
      setProducts();
      
      
      
      
      
      
      for(var i=0;i<allimages.length;i++)
      {   document.getElementById(`${i}`).innerHTML = (' { name : '+ challange.all[i].name+' , path : '+ challange.all[i].path+' , votes : '+challange.all[i].votes +' , shown : '+challange.all[i].shown +' }');
      
      }
  }
}
getProducts();
function barchart(){
const imageNames = [];
  const votes = [];
  const shown=[];
  for (let i = 0; i < challange.all.length; i++) {
    imageNames.push (challange.all[i].name);
    votes.push(challange.all[i].votes);
    shown.push(challange.all[i].shown);
  }

    

var ctx = document.getElementById("myChart").getContext("2d");

var data = {
    labels: allimages,
    datasets: [
        {
            label: "votes",
            backgroundColor: "blue",
            data: votes
        },
        
        {
            label: "shown",
            backgroundColor: "green",
            data: shown
        }
    ]
};

var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        barValueSpacing: 50,
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                }
            }]
        }
    }
});}

//RandomNumber functions
function randomNumber(min, max) {
return Math.floor(Math.random() * (max - min )) + min;}