const gallery=document.querySelector('.container');
const popup=document.querySelector('.lightbox');
const popupimage=document.querySelector('.fullimage');
const popupclose=document.querySelector('#close');
gallery.addEventListener('click',(e)=>{
    if(e.target=document.getElementsByClassName('img')){
        console.log('hello');
        const imagesrc =e.target.src;
    popup.style.display='flex';
    popupimage.src=imagesrc;
}else{
    popup.style.display='none';
}
});
popupclose.addEventListener('click',()=>{
    popup.style.display='none';
})
