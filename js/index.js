// Index js 

PIXI.utils.sayHello() ;


var renderer = autoDetectRender(512,512,  {
    transparent: true,
    resolution: 1
}) ;


document.getElementById('display').appendChild(renderer.view);