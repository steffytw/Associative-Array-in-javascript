// ---------------------------------Single Array--------------------------------------------------------------------

var bookInformation=[]; // single array

function pushSingleArrayData() {
	var titleVal=document.getElementById('titleSingleArray').value;
	if (titleVal=="") {
		window.alert("Tile must be Filled !! ")
	}
	else{
		var title=document.getElementById('titleSingleArray').value;
		var tableData=document.getElementById("SingArraytable");
		var tr=document.createElement("tr");
		var tdTitle=document.createElement("td");
		var actionButtton=document.createElement("td");
		var editButton=document.createElement("button");
		var deteteButton=document.createElement("button");

		editButton.setAttribute('class','btn btn-success');
		deteteButton.setAttribute('class','btn btn-danger');
		deteteButton.setAttribute('onclick','deleteSingleArrayData(this)');
		editButton.setAttribute('onclick','editSingleArrayData()');
		tr.setAttribute('onclick','changeSingleArrayData()')
		bookInformation.push(title);
		tdTitle.appendChild(document.createTextNode(title));
		editButton.appendChild(document.createTextNode("Edit"));
		deteteButton.appendChild(document.createTextNode("Detete"));
		// appending elements
		tableData.appendChild(tr);
		tr.appendChild(tdTitle);
		tr.appendChild(actionButtton);
		actionButtton.appendChild(editButton);
		actionButtton.appendChild(deteteButton);

		document.getElementById('titleSingleArray').value="";
		document.getElementById("pushSinlgeVal").innerHTML="<strong> Pushed Array : </strong>"+JSON.stringify(bookInformation);
		console.log(bookInformation);
	}

	
}

function popSingleArrayData() {
  	document.getElementById("tableSingleArrayInfo").deleteRow(-1); //deletion in table
  	bookInformation.pop(); // deletion in array
	document.getElementById("popSingleVal").innerHTML="<strong> Poped Array : </strong>"+JSON.stringify(bookInformation);
	console.log(bookInformation);
}
function shiftSingleArrayData() {
	document.getElementById("tableSingleArrayInfo").deleteRow(1); //deletion in table
	bookInformation.shift(); // deletion in array
	document.getElementById("shiftSingleVal").innerHTML="<strong> Shifted Array : </strong>"+JSON.stringify(bookInformation);
	console.log(bookInformation);
}
function findElementSingleArray(){
	var titleSingleArray=document.getElementById("titleSingleArray").value;
	var findData=bookInformation.find(findElementInSingleArray);
	console.log("find Data : ",findData);
	if (findData==titleSingleArray){
		document.getElementById("findSingleVal").innerHTML="<strong> Found the value in the book array</strong>"+JSON.stringify(findData);
	}
	else{
		document.getElementById("findSingleVal").innerHTML="<strong> This value is not in the book array</strong>";
	}
}
function findElementInSingleArray(bookInformation){
	var titleSingleArray=document.getElementById("titleSingleArray").value;
	return bookInformation==titleSingleArray;
}
function filterTableDataSingleArray() {
  findElementSingleArray();
  var search, filter, table, tr, td, i, txtValue;
  search = document.getElementById("titleSingleArray");
  filter = search.value.toUpperCase();
  table = document.getElementById("tableSingleArrayInfo");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("td")[0];
	    if (td) {
	      txtValue = td.textContent || td.innerText;
	      if (txtValue.toUpperCase().indexOf(filter) > -1) {
	        	tr[i].style.display = "";
	      	} else {
	        	tr[i].style.display = "none";
	      	}
	    }       
  	}
  	document.getElementById("titleSingleArray").value="";
}
function deleteSingleArrayData(rowValue) {
	var i = rowValue.parentNode.parentNode.rowIndex;
	var indx=i-1;
	var bookIndex=bookInformation[indx]
	console.log("book index",bookIndex);
	const indexVal = bookInformation.indexOf(bookIndex);
	if (indexVal > -1) {
		console.log("splices",bookInformation.splice(indexVal, 1));
	}
	
	// console.log(" Array : ", delete bookDetails[indx]);
  	document.getElementById("tableSingleArrayInfo").deleteRow(i);
  	document.getElementById("delSingleVal").innerHTML="<strong>  Array After Deletion : </strong>"+JSON.stringify(bookInformation);
	console.log(bookInformation);
}
function changeSingleArrayData() {
	var tableIdInfo=document.getElementById('tableSingleArrayInfo');
	for (var i = 1; i < tableIdInfo.rows.length; i++) { 
	 tableIdInfo.rows[i].onclick = function() {
	 	rowInfo=this.rowIndex;
	 	console.log("row index in change ",rowInfo);
	 	document.getElementById('titleSingleArray').value=this.cells[0].innerHTML;
	 }
	}
	console.log(bookInformation);
}
function editSingleArrayData(){
	var tableIdInfo=document.getElementById('tableSingleArrayInfo');
	for (var i = 1; i < tableIdInfo.rows.length; i++) { 
	 tableIdInfo.rows[i].onclick = function() {
	 	rowInfo=this.rowIndex;
	 	console.log("row index in table ",rowInfo);
	 	arrayIndex=rowInfo-1;// array
	 	var bookIndexVal=bookInformation[arrayIndex]; // array
	 	var indexValOfElement = bookInformation.indexOf(bookIndexVal);// array
	 	console.log("book index in array",indexValOfElement);// array
	 	var input=document.getElementById('titleSingleArray').value; //array
	 	console.log("input val ",input);
	 	bookInformation.splice(indexValOfElement, 1,input);//array
	 	console.log("Splice Array ",bookInformation);
	 	document.getElementById("editSingleVal").innerHTML="<strong> Edited Array  : </strong>"+JSON.stringify(bookInformation);
	 	tableIdInfo.rows[rowInfo].cells[0].innerHTML=document.getElementById('titleSingleArray').value;
	 }
	}
	

}
function sortSingleArray(n) {
  // sort array
 	bookInformation.sort(function(a, b) {
   		var x = a.toLowerCase(); 
		   var y = b.toLowerCase(); 
		   if(x < y) {
		       return -1;
		   }
		   if(x > y) {
		       return 1;
		   }
		   return 0;
	})
	document.getElementById("sortSingleval").innerHTML="<strong> Sorted Array : </strong>"+JSON.stringify(bookInformation);
// sort table
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tableSingleArrayInfo");
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}





// ---------------------------------Associative Array---------------------------------------------------------------





var bookDetails = [];// associative array

function pushData() {
	var titledata=document.getElementById('title').value;
	var authorData=document.getElementById('author').value;
	if (titledata=="") {
		window.alert("Title must be filled");
	}
	else if(authorData==""){
		window.alert("Author must be filled");
	}
	else{
		var title=document.getElementById('title').value;
		var author=document.getElementById('author').value;
		var type=document.getElementById('type').value;
		var tableData=document.getElementById("tableData");
		var tr=document.createElement("tr");
		var tdTitle=document.createElement("td");
		var tdAuthor=document.createElement("td");
		var tdType=document.createElement("td");
		var actionButtton=document.createElement("td");
		var editButton=document.createElement("button");
		var deteteButton=document.createElement("button");

		editButton.setAttribute('class','btn btn-success');
		deteteButton.setAttribute('class','btn btn-danger');
		deteteButton.setAttribute('onclick','deleteData(this)');
		editButton.setAttribute('onclick','editData(this)');
		tr.setAttribute('onclick','changeData()');

		bookDetails.push({title,author,type});

		tdTitle.appendChild(document.createTextNode(title));
		tdAuthor.appendChild(document.createTextNode(author));
		tdType.appendChild(document.createTextNode(type));
		editButton.appendChild(document.createTextNode("Edit"));
		deteteButton.appendChild(document.createTextNode("Detete"));
		// appending elements
		tableData.appendChild(tr);
		tr.appendChild(tdTitle);
		tr.appendChild(tdAuthor);
		tr.appendChild(tdType);
		tr.appendChild(actionButtton);
		actionButtton.appendChild(editButton);
		actionButtton.appendChild(deteteButton);
		document.getElementById('title').value="";
		document.getElementById('author').value="";
		document.getElementById("pushVal").innerHTML="<strong> Pushed Array : </strong>"+JSON.stringify(bookDetails);
		console.log(bookDetails);
	}
	

	
}
function popData() {
  	document.getElementById("tableInfo").deleteRow(-1); //deletion in table
  	bookDetails.pop(); // deletion in array
	document.getElementById("popVal").innerHTML="<strong> Poped Array : </strong>"+JSON.stringify(bookDetails);
	console.log(bookDetails);
}
function shiftData() {
	document.getElementById("tableInfo").deleteRow(1); //deletion in table
	bookDetails.shift(); // deletion in array
	document.getElementById("shiftVal").innerHTML="<strong> Shifted Array : </strong>"+JSON.stringify(bookDetails);
	console.log(bookDetails);
}

function changeData() {
	var tableIdInfo=document.getElementById('tableInfo');
	for (var i = 1; i < tableIdInfo.rows.length; i++) { 
	 tableIdInfo.rows[i].onclick = function() {
	 	rowInfo=this.rowIndex;
	 	console.log("row index in change ",rowInfo);
	 	document.getElementById('title').value=this.cells[0].innerHTML;
	 	document.getElementById('author').value=this.cells[1].innerHTML;
	 	document.getElementById('type').value=this.cells[2].innerHTML;
	 }
	}

}
function editData(){
	var tableIdInfo=document.getElementById('tableInfo');
	for (var i = 1; i < tableIdInfo.rows.length; i++) { 
	 	tableIdInfo.rows[i].onclick = function() {
		 	rowInfo=this.rowIndex;
		 	arrayIndex= rowInfo-1;
		 	var bookIndex=bookDetails[arrayIndex].title;
			console.log("book index ",bookIndex);
			var bookTitlePosition = bookDetails.map(function(booksTitle) { 
				console.log("book Title : ",booksTitle.title);
                return booksTitle.title; 
            }).indexOf(bookIndex);
            console.log("book index in edit data",bookTitlePosition);
            var title=document.getElementById('title').value;
            var author=document.getElementById('author').value;
            var type=document.getElementById('type').value;
            console.log("edit data in splice",bookDetails.splice(bookTitlePosition, 1,{title,author,type}));//array
            console.log(bookDetails);
		 	tableIdInfo.rows[rowInfo].cells[0].innerHTML=document.getElementById('title').value;
		 	tableIdInfo.rows[rowInfo].cells[1].innerHTML=document.getElementById('author').value;
		 	tableIdInfo.rows[rowInfo].cells[2].innerHTML=document.getElementById('type').value;
	 	}	
	}	
}
function deleteData(rowValue) {
	console.log("row value",rowValue);
	var i = rowValue.parentNode.parentNode.rowIndex;
	document.getElementById("tableInfo").deleteRow(i);
	var indx=i-1;// array index
	var bookIndex=bookDetails[indx].title;
	console.log("book index ",bookIndex);
	var bookTitlePosition = bookDetails.map(function(booksTitle) { 
				console.log("book Title : ",booksTitle.title);
                return booksTitle.title; 
            }).indexOf(bookIndex);
    console.log("book Title bookTitlePosition: ",bookTitlePosition); 
	console.log("spliced array",bookDetails.splice(bookTitlePosition,1));
	console.log(bookDetails);
	document.getElementById("delVal").innerHTML="<strong>Book Array After Deletion</strong>"+JSON.stringify(bookDetails);

}
function findElement(){ // find array value
	var search=document.getElementById("search").value;
	var findData=bookDetails.find(findElementInTheArray);
	console.log("find Data : ",findData);
	if (findData.title==search){
		document.getElementById("findVal").innerHTML="<strong> Found the title in the book array</strong>"+JSON.stringify(findData);
	}
	else{
		document.getElementById("findVal").innerHTML="<strong> This title is not in the book array</strong>";
	}
}
function findElementInTheArray(bookDetails){ // check array value
	var search=document.getElementById("search").value;
	return bookDetails.title ==search ;
}
function filterTableData() { //filter table
  findElement();
  var search, filter, table, tr, td, i, txtValue;
  search = document.getElementById("search");
  filter = search.value.toUpperCase();
  table = document.getElementById("tableInfo");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
	td = tr[i].getElementsByTagName("td")[0];
	    if (td) {
	      txtValue = td.textContent || td.innerText;
	      if (txtValue.toUpperCase().indexOf(filter) > -1) {
	        	tr[i].style.display = "";
	      	} else {
	        	tr[i].style.display = "none";
	      	}
	    }       
  	}
}

function TableSort(n) { 
  // sort array
 	bookDetails.sort(function(a, b) {
   		var x = a.title.toLowerCase(); 
		   var y = b.title.toLowerCase(); 
		   if(x < y) {
		       return -1;
		   }
		   if(x > y) {
		       return 1;
		   }
		   return 0;
	})
	document.getElementById("sortval").innerHTML="<strong> Sorted Array : </strong>"+JSON.stringify(bookDetails);
// sort table
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tableInfo");
  switching = true;
  dir = "asc"; 
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++;      
    } else {
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}



// -------------------------------------------multiselect--------------------------------------------------------------



var expanded = false;

function showCheckboxes() {
	var checkboxes = document.getElementById("checkboxes");
	if (!expanded) {
		checkboxes.style.display = "block";
		expanded = true;
	} else {
		checkboxes.style.display = "none";
		expanded = false;
	}
	
}

function selectedData(e){
	if (e.checked==true ){
		document.getElementById('selectInfo').style.display='none';
		console.log("passed selected value : ",e)
		var ul=document.getElementById('selectList');
		var li = document.createElement("li");
		ul.setAttribute('class','form-control');
		li.setAttribute('id',e.value);
		li.appendChild(document.createTextNode(e.value));
		console.log("selected value : ",e.value);
		ul.appendChild(li);
	}
	else{
		alert('deselected !');
		deleteList();
	}
}
function deleteList(){
	var listItems = document.getElementsByTagName("li"); 
	console.log("list listItems.length",listItems.length);
	for (var i = 0; i < listItems.length; i++) {
		console.log("list",listItems[i]);
		console.log("list value",listItems[i].value);
		var listValue = listItems[i].firstChild.data;
		console.log("value in list : ",listValue);

		listItems[i].onclick= function() {
			alert("inside list deletion");
			console.log(this.parentNode.removeChild(this));
		}
	}

}