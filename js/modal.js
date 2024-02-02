class Modal
{
    constructor(id)
    {
        var projectItem = document.getElementsByClassName("project-item")[id];
        console.log(projectItem);
        var modal = document.getElementsByClassName("modal")[id];
        var span = document.getElementsByClassName("close")[id];

        projectItem.onclick = function()
        {
            modal.style.display = "block";
        }

        span.onclick = function()
        {
            modal.style.display = "none";
        }
    }
}

var elements = document.getElementsByClassName("modal");

//console.log(elements);

for (let index = 0; index < elements.length; index++) {
    new Modal(index);    
}