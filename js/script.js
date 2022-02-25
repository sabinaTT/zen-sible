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

/*
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

console.log(something.slips[0].advice)
*/


