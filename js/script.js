$('form').on('submit', (e) => {
    e.preventDefault();
    const query = $("input[type='text']").val();
    const url = `https://api.adviceslip.com/advice/search/${query}`;
    $.ajax({
        url, 
        dataType: "JSON"
    }).then(
        (data) => {
            // console.log(data)
            // console.log(data.total_results)
            /*
            const adviceArray = data.slips[0].advice;
            console.log(adviceArray)
            for (let i = 0; i< adviceArray; i++) {
                let randomAdvice = adviceArray[Math.floor(Math.random()*adviceArray.length)];
                console.log(randomAdvice)
                $('#quote').html(randomAdvice)
            }
            */
            $('#quote').html(data.slips[0].advice[1])

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


