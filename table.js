let rules = {1: '#00FF00', 0: '#AAAAAA'};

function render(data,table_id){
  return new Promise((resolve,reject) => {
      // draw table
      for(var b="",c=0; c <= data.length+1;c++){
         b += "<tr>";
         for(var d=0;d <= data[0].length+1; d++){
           b += '<td data-row="'+c+'" data-column="'+d+'"></td>';
         }
         b+="</tr>";
      }
      $(table_id).append(b);

      // render table (draw numbers on edge)

      var table = $(table_id);
      var colHeaders = table.find("tr:first td");
      var lastColHeaders = table.find("tr:last td");
      var tr = table.find("tr");
      var rowHeaders = tr.find("td:first");
      var lastRowHeaders= tr.find("td:last");

      for(var a=0;a < data.length;a++){

        for(var b=0;b < data[0].length;b++) {renderCell(a,b, data, table); }
        colHeaders.css("background","#eee"), lastColHeaders.css("background","#eee");
      	for(var c=0;c < data[0].length;c++) {
          colHeaders[c+1].innerHTML = c+1;
          lastColHeaders[c+1].innerHTML=c+1;
        }
        rowHeaders.css("background","#eee"),
        lastRowHeaders.css("background","#eee");
      	for(var c=0;c<data.length;c++) rowHeaders[c+1].innerHTML=c+1, lastRowHeaders[c+1].innerHTML=c+1;
      }
      resolve("ok");
  });

}

function renderCell(a, b, data, table){
    let cellData = data[a][b];
    a++;
    b++;

    table.find('td[data-row="'+a+'"][data-column="'+b+'"]').css({
      background: rules[cellData],
      color: rules[cellData]}
    )
}
