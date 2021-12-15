/* 
const api_url ="https://api.adviceslip.com/advice/search/{query}";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getapi(api_url);




 
$("form").on("submit", (event) => {
event.preventDefault();
const userInput = $('input[type="text"]').val();
$.ajax({
    url: "https://api.adviceslip.com/advice/search/{query}" + userInput
}).then(
    (data) => {
     $("#id").html(data.ID);
     $("#advice").html(data.Advice);
     $("#date").html(data.Date);
    },
    (error) => {
        console.log("bad request", error)
    }
);
})
*/

/* didn't work */
async function getAdvice(e) {
    e.preventDefault();

    const userInput = $('input[type="text"]').val();
    const url = `https://api.adviceslip.com/advice/search/${userInput}`;
    
    const response = await fetch(url);
    const data = await response.json();

    $("#id").html(data.ID);
    $("#advice").html(data.Advice);
    $("#date").html(data.Date);

};

$("form").on("submit", getAdvice);

console.log(getAdvice)

// $.getJSON("https://api.adviceslip.com/advice/search/{query}", function(callback) {
//     console.log(callback);
// });
