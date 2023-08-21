
     let total= 0;
function handleclick(target){
  const selectedIteamContainer= document.getElementById('selected-item-container');
  console.log(target.innerText);
  
  const itemsName = target.parentNode.childNodes[1].innerText;
  const li=document.createElement('li');
  li.innerText = itemsName;
  selectedIteamContainer.appendChild(li);

  const price = target.parentNode.childNodes[5].childNodes[1].innerText.split(" ")[0]; 
  
  total = parseInt(total) + parseInt(price);
  
  const Total = document.getElementById('total-price').innerText = total;
  console.log(Total);
  const discount = document.getElementById('discount-price').innerText =(Total*20)/100;
 
 document.getElementById('grand-total').innerText = Total-discount;

	


}

function cupponfunction(){

 const cupponField = document.getElementById('input-field')
  const cupponString = cupponField.value;
  const cuppon= parseFloat(cupponString)
   console.log(cuppon);

    

}



