document.addEventListener('click', function(e){

    const list = ['a1', 'a2', 'a3', 'a4','b1', 'b2', 'b3', 'b4'];
    let ID = e.target.id;
    if(list.includes(ID))
    {
        
    if(setBackgroundColorById(ID))
    {
        ID = ID.toUpperCase();  
        seatFull();
        let el = document.createElement('div');
        el.classList.add('flex');
        el.classList.add('justify-between');
        el.setAttribute('id',ID);
        let el1 = document.createElement('p'),
        el2 = document.createElement('p'),
        el3 = document.createElement('p');
        el1.innerText = ID;
        el2.innerText = 'economy' ;
        el3.innerText = '550';
        el.appendChild(el1);
        el.appendChild(el2);
        el.appendChild(el3);
        let parent = document.getElementById('ticket');
        parent.appendChild(el); 
        console.log(parent)
        let val = getTextElementValueById('total-amt');
        setTextElementValueById('total-amt', val+550);
    }
    else
     {
        ID = ID.toUpperCase();
        const box = document.getElementById(ID);
        console.log(box)
        box.remove();
        seatEmpty();
        let val = getTextElementValueById('total-amt');
        setTextElementValueById('total-amt', val-550);
    }
}

})

function seatEmpty()
{
    let seatLeft = 'seats-left';
    let j = getTextElementValueById(seatLeft);
    console.log('seats left ',j);
    setTextElementValueById(seatLeft,j+1);
}

function seatFull()
{
    let seatLeft = 'seats-left';
    let j = getTextElementValueById(seatLeft);
    console.log('seats left ',j);
    setTextElementValueById(seatLeft,j-1);
}
   
