function changeTriger() {

    const padding = document.getElementById('paddingInput').value;
    const margin = document.getElementById('marginInput').value;
    const border = document.getElementById('borderInput').value;

    const element = document.getElementById('myElement');
    element.style.padding = padding;
    element.style.margin = margin;
    
}
