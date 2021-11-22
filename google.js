let Google_Search_TextID_V = document.getElementById('Google_Search_TextID');
let Google_open_V = document.getElementById('Google_open');
 
Google_Search_TextID_V.addEventListener('change',()=>{
 
    let Google_Search_TextID_V_Text = document.getElementById('Google_Search_TextID').value;
    let url='https://www.google.com/search?q='+ Google_Search_TextID_V_Text;
   
    let mywindow =  window.open(url,'_self'); 
  




});