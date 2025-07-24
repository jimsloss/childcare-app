// THIS IS FOR THE ACCOUNTS SCREEN, INVOICE TAB, THE TABLES DROPDOWN MENU SELECTION
// ... this should be used for other table dropdowns

  // ## in the accounts.html template make these changes to any new table to make filter work
     
    // .. Add col-index for unique identification
     
    //     eg ... <th scope="col" col-index =1>ID</th>
    
    // .. Then add select element as below, with class name table-filter and onchange event filter_rows() 
    
    //     eg ... <th scope="col" col-index =2>Month
    //              <select class="table-filter" onchange="filter_rows()">
    //                <option value="all"></option>
    //              </select>
    //            </th>
    
    //  This was also needed at the bottom of the code
    //    <script>
    //        getUniqueValuesFromColumn()
    //    </script>


function getUniqueValuesFromColumn(mytable,scrolltable)  // both tables, not just one as expected
{
    
  var unique_col_values_dict = {}
 
    allFilters = document.querySelectorAll(mytable)          // month, parent name, status
    
    allFilters.forEach( (filter_i) =>                                           // month    (  parent name    status  )
    {
      
      col_index = filter_i.parentElement.getAttribute("col-index");             // col 2    (    col 3          col 5    )
      
      const rows = document.querySelectorAll(scrolltable + " > tbody > tr");     // 1, 2 , 3
       
      rows.forEach( (row) =>                                                    // row 1    (    row 2          row  3   ) 
      { 
        cell_value = row.querySelector("td:nth-child("+col_index+")").innerHTML;// july22  june22  august22  (karen sloss karen sloss karen sloss  OS oS oS)
        
        // if the col index is already present in the dict
        if(col_index in unique_col_values_dict) 
        {
          // if the cell value is already present in the array
          if (unique_col_values_dict[col_index].includes(cell_value))  { 
              //  alert(cell_value + " is already present in the array : " + unique_col_values_dict[col_index]) 
            } 
          else {
            unique_col_values_dict[col_index].push(cell_value);
              //  alert("Array after adding the cell value : " + unique_col_values_dict[col_index])
            }
        } else {

          unique_col_values_dict[col_index] = new Array(cell_value);
          
        
        }
        } );

         
        

      } );
        
        /**
          for(i in unique_col_values_dict) {
          alert("Column index : " + i + " has unique values : \n" + unique_col_values_dict[i]);
        }
        */
      //document.getElementById("subtotal").innerHTML = total;
      updateSelectOptions(unique_col_values_dict, mytable,scrolltable);
      
};

// Add <option> tags to the desired columns based on the unique values
function updateSelectOptions(unique_col_values_dict, mytable,scrolltable) 
{
  
  allFilters = document.querySelectorAll(mytable)
  
  allFilters.forEach((filter_i) => {
    col_index = filter_i.parentElement.getAttribute('col-index')
    
    unique_col_values_dict[col_index].forEach((i) => {
      filter_i.innerHTML = filter_i.innerHTML +  `\n <option value = "${i}">${i}</option>`
    });
  });

    /** CHANGING THE VALUE FOR TOTAL */
  /** document.getElementById("subtotal").innerHTML = "testing...."; **/
      
};

// Create filter_rows() function

//filter_value_dict {2: Value selected, 4: value, 5: value}

function filter_rows(tName) {
  
  var subs = 0; 
  var total = 0;
  var done= false;

  if(tName == "invoicesTable"){
      tFilter = ".table-filter";
      tScroll = "#VScrollTable";
  }
  else{
    tFilter = ".table-filter2";
    tScroll = "#VScrollTable2";
  }

  allFilters = document.querySelectorAll(tFilter)  // get columns to filter
  var filter_value_dict = {}

  allFilters.forEach((filter_i) => {                                // month (parentname status)
    col_index = filter_i.parentElement.getAttribute('col-index')    //    2  (    3        5   )
    value = filter_i.value                                          // july22 (   all     all   )
    if(value != "all"){
      filter_value_dict[col_index] = value;                         // july22
    }
  });
 
  var col_cell_value_dict ={};

  const rows = document.querySelectorAll(tScroll + " tbody tr");  // all rows in table, to loop through
  // start
  rows.forEach((row) => // row 1, 2 ... 4 rows instead of 3 ?? ##############
  {
    var display_row = true;
    allFilters.forEach((filter_i) =>{  // month (parentname status)
        
        col_index = filter_i.parentElement.getAttribute('col-index')
        col_cell_value_dict[col_index] = row.querySelector("td:nth-child(" + col_index + ")").innerHTML
        //alert(col_cell_value_dict[col_index])  // SHOWING A LINE THAT SHOLD NOT BE HERE ##########fixed, was using class name which related to two tables, second changed
      }
    )
  
    // comparing rows against the filtered value
  
    for (var col_i in filter_value_dict) // july2022
    {
      filter_value = filter_value_dict[col_i]
      row_cell_value = col_cell_value_dict[col_i]

      if(row_cell_value.indexOf(filter_value) == -1 && filter_value != "all") 
      {
        display_row = false;
        break;
      }
    }

    if (display_row == true)
    {
      row.style.display = "table-row";

      if(!done){
        if(tName == "invoicesTable")
        {
          amount = row.querySelector("td:nth-child(4)").innerHTML;
        }
        else
        {
          amount = row.querySelector("td:nth-child(6)").innerHTML;
        }   
        subs = subs + parseInt(amount);    
            
      }

      
    } 
    else 
    { 
      row.style.display = "none";   
      
    }

})


  total = subs;
  done = true;
  if(tName == "invoicesTable"){
    document.getElementById("subtotal").innerHTML = total;
  }
  else{
    document.getElementById("subtotal2").innerHTML = total;
  }
} // end of filter rows

  
  
  
    
  
        
