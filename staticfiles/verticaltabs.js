
function openContent(event, requirement) 
{
  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");
  //window.alert("###############  " + tabcontent.item(0));

  if (tabcontent.item(0) === null) 
  {
    tabcontent = document.getElementsByClassName("tabcontent2");  
  } 

  photo=document.getElementById("childphoto");
  photo.style.display = "none";
  for (i = 0; i < tabcontent.length; i++) 
  {
    tabcontent[i].style.display = "none";
    
  }
  
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) 
  {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  
  document.getElementById(requirement).style.display = "block";
  event.currentTarget.className += " active";
}

function testFunction()
{
  document.getElementById("Main").click();
}
// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();

function changephoto()
{
 
}   

// function openTab(tabname)
//{
 // document.getElementById(tabname).click(); // Simulates button click
//}

// no longer needed as couldnt get to work, so redesigned to remove need to link to tabs from other pages
function openTab(link)
{
  
 // window.open("/accounts");
  //openContent(event, tab);
  //document.getElementById(tab).click(); // Simulates button click
  //console.log(tag);
  alert("opentab accessed and run : " + link)
}

//  accounts - invoices tab - selection boxes change
function changeInvoiceTable(x)
{
  //body.style.backgroundColor="red";
  window.alert("testing : " + x);  // x =[object HTMLSelectElement]
 
 
 /*var input, filter, table, tr, td, i;
 input = document.getElementById("nextm");
 filter = input.value.toUpperCase();
 table = document.getElementById("VScrollTable");

 tr = table.getElementsByTagName("tr");
 
   for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }*/
  }



// trying to get the drop down boxes to change the view when selection changes

// https://stackoverflow.com/questions/57936735/call-a-django-view-from-javascript
// Step 5: use your views from JavaScript

//Urls['products:products-list']