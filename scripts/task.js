//let totalBooked = 0;
document.addEventListener('click', function(e)
{

    const list = ['a1', 'a2', 'a3', 'a4','b1', 'b2', 'b3', 'b4'];
    let ID = e.target.id, len = 0;



    if(list.includes(ID))
    {
        if(setBackgroundColorById(ID))
        {
            //totalBooked++;
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
            let val = getTextElementValueById('total-amt');
            setTextElementValueById('total-amt', val+550);
            val = getTextElementValueById('grand-total');
            setTextElementValueById('grand-total', val+550);

        }
        else
        {
            const box = document.getElementById(ID.toUpperCase());
            box.remove();
            seatEmpty();
            let val = getTextElementValueById('total-amt');
            setTextElementValueById('total-amt', val-550);
            val = getTextElementValueById('grand-total');
            setTextElementValueById('grand-total', val-550);
        }
    }

})

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



function seatEmpty()
{
    let seatLeft = 'seats-left';
    let j = getTextElementValueById(seatLeft);
    //console.log('seats left ',j);
    setTextElementValueById(seatLeft,j+1);
}

function seatFull()
{
    let seatLeft = 'seats-left';
    let j = getTextElementValueById(seatLeft);
   // console.log('seats left ',j);
    setTextElementValueById(seatLeft,j-1);
}
   

