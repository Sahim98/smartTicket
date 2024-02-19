function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId)
{
    const element = document.getElementById(elementId);
    if(element.classList.contains('bg-[#1DD100]'))
    {
        removeBackgroundColorById(elementId);
        unAllocate();
        
        return 0 ;
    }

    else
    {
        element.classList.add('bg-[#1DD100]');
        allocate();
        return 1;
   }
    
}

function allocate()
{
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

// function getElementTextById(elementId){
//     const element = document.getElementById(elementId);
//     const text = element.innerText;
//     return text;
// }


