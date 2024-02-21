let IDs = [];
let buttons = [];
const list = ['a1', 'a2', 'a3', 'a4','b1', 'b2', 'b3', 'b4'];
//let ids;
const input = document.getElementById("phone-number");
let inputValue = '';

input.addEventListener("input", function(event) {
   
    inputValue = event.target.value;
    console.log('input value: ', inputValue , 'buttons length: ',buttons);
    if(buttons.length > 0 && inputValue != '')
    {
        removeAttributeById('next','pointer-events-none');
    }
});



document.addEventListener('click', function(e)
{
    // const input = document.getElementById("phone-number");
    // inputValue = input.value
 
    console.log('input value: ',inputValue);
    let id = e.target.id;
    let ID = id.toUpperCase();

    if(list.includes(id))
    {
        if(buttons.includes(id) )
        {
            removeBackgroundColorById(id);
            removeFromList(buttons,id);
            removeElementById(ID);
            SubstractTotal();
            seatEmptyById('seatNumber');
            seatFullById('seats-left');
        }
        else if(buttons.length < 4)
        {
            setBackgroundColorById(id);
            buttons.push(id);
            IDs.push(ID);
            //console.log(buttons,'input value: ',inputValue, typeof inputValue);
            pushElementById(ID);
            AddTotal();
            seatFullById('seatNumber');
            seatEmptyById('seats-left');
           
        }
    }
    //console.log(buttons,IDs);


});

