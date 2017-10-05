
const wiki_link = 'https://en.wikipedia.org/wiki'

//J-Query Coding

$(document).ready(function(){
    $("#searchButton").click(function(){
        var searchTerm=$("#searchTerm").val();
        
        api_url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ 
        searchTerm + "&format=json&callback=?";
        
        $.ajax({
            type: "GET",
            url: api_url,
            async:false,
            dataType:"json",
            success:function(data){
                for(var i=0; i<data[1].length; i++){
               $("#output").prepend("<li class='listItems'><a href="+data[3][i]+ ">" 
               +data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
                }
            },
            error: function(errorMessage){
                console.log("error");
            }
        })
    })
})






/*Regular JS Coding

(function(){
    document.querySelector("#searchButton").addEventListener("click", function(){
        let searchTerm = document.querySelector('#searchterm').value;
        const api_url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ searchTerm + "&format=json&callback=?"

    })
})()


$("#output").html("");
$("#output").prepend('<li><a href=${data[3][0]'>${data[1][0]}</a><p>$data[2][0]}</p></li>");


*/
