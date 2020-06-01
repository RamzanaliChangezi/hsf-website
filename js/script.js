document.addEventListener('DOMContentLoaded', main)

function main()
{
  
  
  document.querySelector('.tg-b').innerHTML = 'Ramzan Ali Changezi'
  
  document.querySelector('.tg-b').onclick = runadd;
  function runadd()
  {
    document.location.href='http://ramzanali.rf.gd/';
  }
  
  document.querySelector('.body').style.cssText = 'transition: .6s; opacity: 1 !important';
  document.querySelector('.main').style.cssText = 'transition: .6s; opacity: 1 !important';
  
  
  document.querySelector('#menu').onclick = run_menu;
  document.querySelector('#close_menu').onclick = close_menu;
  document.querySelector('.close_menu').onclick = close_menu;
  document.querySelector('.overlay').onclick = close_menu;
  
  function run_menu()
  {
    //alert()
    var menu_body = document.querySelector('.menu-body');
    document.querySelector('#menu').style.display = 'none'
    document.querySelector('#close_menu').style.display = 'block'
    menu_body.style.transform = "translateX(000px)";
    document.querySelector('.overlay').style.display = 'block';
     
    
  }
  function close_menu()
  {
    var menu_body = document.querySelector('.menu-body');
    document.querySelector('#menu').style.display = 'block'
    document.querySelector('#close_menu').style.display = 'none'
    menu_body.style.transform = "translateX(-800px)";
    document.querySelector('.overlay').style.display = 'none';
  }
  
  
  
}