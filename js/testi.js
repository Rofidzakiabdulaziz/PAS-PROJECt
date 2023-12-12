async function getMenuDataApi(){
    const response = await fetch("db/testi.json")
    const dataApi =await response.json()
    console.log(dataApi)

   dataApi.Card.forEach((dataindex) => {
    addtestimo(dataindex.Image , dataindex.Testi , dataindex.Deksripsi , dataindex.Bintang);
    console.log(dataindex.Image)
   });
}
getMenuDataApi()

const row_testi = document.getElementById("row-testi")
console.log(row_testi) 


const addtestimo = (img , testi , deksripsi , Bintang) => {
    let dapat = `<div class="col-sm-4 col-12">
    <div class="menu-testi">
    <div>
     <div class="menu-icontesti text-start "><img src="${img}" class=""></img>  
     <div class="inpo"> 
     <h4>Nama:${testi}</h4>
     <h6>${Bintang}</h6>
     <p>${deksripsi}</p>
     </div>
     </div>
   </div>
  </div>
</div>`;

    row_testi.innerHTML += dapat ;
}