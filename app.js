function updateproductNumber (product, price, isIncreasing){
    const productInput= document.getElementById(product+ '-number');
    let productNumber = productInput.value;
    

    if(isIncreasing){
        productNumber = parseInt(productNumber)+1;


    }
    else if (productNumber>0){
        productNumber = parseInt(productNumber)-1;

    }
    productInput.value=productNumber;
    //update total
    const productTotal = document.getElementById(product+'-total');
    productTotal.innerText = productNumber*price;

    //calculate total
    calculateTotal();

}

function getInputValue (product){
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt( productInput.value);
    return productNumber;

}
 
function calculateTotal(){
    
    const phoneTotal = getInputValue('phone') *1219;
    const caseTotal = getInputValue('case')*59;
    const subTotal = phoneTotal + caseTotal;
    const taxamount= subTotal/10;
    const totalprice = subTotal + taxamount;

    //update html
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxamount;
    document.getElementById('total-price').innerText = totalprice;



}

//phone increase decrease
document.getElementById('phone-plus').addEventListener('click', function(){
updateproductNumber('phone', 1219 ,true);
});
document.getElementById('phone-minus').addEventListener('click', function(){
    updateproductNumber('phone', 1219, false);
});




// handle   case increase decrease

document.getElementById('case-plus').addEventListener('click', function(){
    
       updateproductNumber( 'case',59, true);
    
  
});
document.getElementById('case-minus').addEventListener('click', function(){
    
       updateproductNumber( 'case',59, false);
    
});