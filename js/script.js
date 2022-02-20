// $.ajax({
//     url: "https://api.adviceslip.com/advice/search/{query}"}).then(
//         (data) => {
//             // console.log(data);
//         },
//         (error) => {
//             console.log('bad request: ', error)
//         }
//     );

$('form').on('submit', (e) => {
    e.preventDefault();
    const query = $("input[type='text']").val();
    const url = `https://api.adviceslip.com/advice/search/${query}`;
    $.ajax({
        url
    }).then(
        (data) => {
            $('#quote').html(data)
        },
        (error) => {
            console.log('bad request: ', error)
        }
    );
});

// let btn = document.getElementById("input-button");
// btn.addEventListener("click", function(e){
//     e.preventDefault();
//     console.log("naber")
// })

// let quotes = document.getElementById("#quotes");
// const btn = document.getElementById("input-button");
// const userInput = document.getElementById("input-box");
// btn.addEventListener("click", function(e) {
//     e.preventDefault();
//     let myRequest = new XMLHttpRequest ();
//     myRequest.open("GET", 'https://api.adviceslip.com/advice/search/`${userInput}`'),
//     myRequest.onload = function() {
//         let myData = JSON.parse(myRequest.responseText);
//         console.log(myData.slips[0].advice)
//         // renderHTML(myData);
//     };
//     myRequest.send(); 
// });


const something = {
    "total_results": "1",  
    "query": "book", 
    "slips": 
    [
        {
            "id": 18,
            "advice": "Don't judge a book by its cover, unless it has a synopsis on the back.",
            "date": "2016-04-03"
        }
    ]
}
// console.log(something.slips[0].advice)


// function renderHTML(data) {
//     let htmlString = "";
//     quotes.insertAdjacentHTML("beforeend", "testing 123");
// }




/*
{
    "total_results": "1", 
    "query": "spider", 
    "slips": [
        {
            "id":1,
            "advice":"Remember that spiders are more afraid of you, than you are of them.",
            "date":"2015-05-26"
        }
    ]
}

*/



/*
const api_url ="https://api.adviceslip.com/advice/search/{query}";

async function getapi(url)
{
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
}

getapi(api_url);


/*
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

/* didn't work 
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

const adviceButton = document.querySelector("#input-button");
adviceButton.addEventListener("click", function(e){

})
*/

// $.getJSON("https://api.adviceslip.com/advice/search/{query}", function(callback) {
//     console.log(callback);
// });

