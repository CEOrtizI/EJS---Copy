// Open upload dialogue when button is clicked
function openDialog() {
    document.getElementById('inputFile').click();
}

function readData(){
        var fr=new FileReader();
        fr.onload=function(){
            document.getElementById('output')
                    .textContent=fr.result;
        }
        fr.readAsText(this.files[0]);        
}

function syncronicSearch(){
    //Declare vars
    var input,filter,table,tr,td,i,txtValue,searchIndex
    input = document.getElementById("searchTerm")
    filter = input.value.toUpperCase()
    table = document.getElementById("animalsTable")
    tr = table.getElementsByTagName("tr")
    searchIndex = document.getElementById("searchIndex").value

    //Loop through all table rows, and hide those that do not match
    for (i = 0; i<tr.length; i++) {
        //("td")[this index selects a different search column]
        td = tr[i].getElementsByTagName("td")[searchIndex]
        if (td){
            txtValue = td.textContent || td.innerText
            if(txtValue.toUpperCase().indexOf(filter) > -1 ){
                tr[i].style.display = ""
            }
            else {
                tr[i].style.display = "none"
            }
        }
    }
}

function exportData(data){
    //updatePets(data)
    export2txt(data)
}

// Export saved data to txt
function export2txt(data) {
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], {
      type: "text/plain"
    }));
    a.setAttribute("download", "data.txt");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('loadBtn').addEventListener('click', openDialog);
    var el = document.getElementById('inputFile')
        if(el){
            document.getElementById('inputFile')
                .addEventListener('change', function() {

                var fr=new FileReader();
                fr.onload=function(){
                    document.getElementById('output')
                            .textContent=fr.result;
                }
                fr.readAsText(this.files[0]);        
            })
        }
});


