console.log("Test 1");

document.querySelector('#id1').addEventListener("mouseover", function(){this.StylePropertyMap.color='green'});
document.querySelector('#id1').addEventListener("mouseover", function(){this.StylePropertyMap.color='black'});

document.querySelector('#id1').onclick=function(){this.textContent="Hello"};