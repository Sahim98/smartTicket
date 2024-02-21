function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    removeBackgroundColorById(elementId);
    element.classList.add('bg-[#1DD100]');
}

function allocate(){
    let seatID= "seatNumber";
    let i = getTextElementValueById(seatID);
    setTextElementValueById(seatID,i+1);

}

function unAllocate()
{
    let seatID= "seatNumber";
    let i = getTextElementValueById(seatID);
    setTextElementValueById(seatID,i-1);
}

function removeBackgroundColorById(elementId)
{
    const element = document.getElementById(elementId);
    element.classList.remove('bg-[#1DD100]');
}


function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function removeElementById(id)
{
    const box = document.getElementById(id);
    box.remove();
}


function pushElementById(id)
{
    let el = document.createElement('div');
            el.classList.add('flex');
            el.classList.add('justify-between');
            el.setAttribute('id',id);
            let el1 = document.createElement('p'),
            el2 = document.createElement('p'),
            el3 = document.createElement('p');
            el1.innerText = id;
            el2.innerText = 'economy' ;
            el3.innerText = '550';
            el.appendChild(el1);
            el.appendChild(el2);
            el.appendChild(el3);
            let parent = document.getElementById('ticket');
            parent.appendChild(el); 
}

function checkCoupon(){
    let coupon = document.getElementById('coupon').value;
    console.log(coupon)
    if(coupon == "NEW15" || coupon == "Couple 20")
    {
        let e = document.getElementById('coupon-sec');
        let val = getTextElementValueById('grand-total');
        e.classList.add('hidden');

        if(coupon == "NEW15")
        {
           
            setTextElementValueById('grand-total', val*.85);
        }
        else
        {
            setTextElementValueById('grand-total', val*.80);
        }
    }
}

function AddTotal(){
    let val = getTextElementValueById('total-amt');
    setTextElementValueById('total-amt', val+550);
    val = getTextElementValueById('grand-total');
    setTextElementValueById('grand-total', val+550);

}

function SubstractTotal(){
    let val = getTextElementValueById('total-amt');
    setTextElementValueById('total-amt', val-550);
    val = getTextElementValueById('grand-total');
    setTextElementValueById('grand-total', val-550);
}

function seatEmptyById(id){
   
    let j = getTextElementValueById(id);
    setTextElementValueById(id,j-1);
}

function removeAttributeById(id,attr){
    let e = document.getElementById(id);
    e.classList.remove(attr);
}

function setAttributeById(id,attr){
    let e = document.getElementById(id);
    e.classList.add(attr);

}

function seatFullById(id)
{
    let j = getTextElementValueById(id);
    setTextElementValueById(id,j+1);
}


function removeFromList(list, item) {
    let index = list.indexOf(item);
    if (index !== -1) 
    {
        list.splice(index, 1);
    }
    return list;
}