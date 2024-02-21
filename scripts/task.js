let IDs = [];
let buttons = [];
const list = ['a1', 'a2', 'a3', 'a4','b1', 'b2', 'b3', 'b4'];
//let ids;

document.addEventListener('click', function(e)
{
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
        }
        else if(buttons.length < 4)
        {
            setBackgroundColorById(id);
            buttons.push(id);
            pushElementById(ID);
            AddTotal();
        }
    }
    //console.log(buttons,IDs);


});


function removeFromList(list, item) {
    let index = list.indexOf(item);
    if (index !== -1) 
    {
        list.splice(index, 1);
    }
    return list;
}