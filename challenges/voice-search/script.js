
// Initialize the speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

const searchImage = () => {
    recognition.start();
    console.log('Recognition start');
}

// Returns the text once recognition is done
recognition.onresult = (event) => {
    const term = event.results[0][0].transcript;
    console.log("Received Term "+term);
    fetchImageByTerm(term);
};

// Notifies the end of recognition
recognition.onspeechend = function () {
    recognition.stop();
    console.log('Recognition end');
}

// Notifies if there are any errors
recognition.onerror = function (event) {
    console.log('Error occurred in recognition: ' + event.error);
}

const fetchImageByTerm = async (term) => {
    const params = new URLSearchParams({
        client_id: 'kEXuCiYVH6djkX_kVhQs9j4t5W-2ejDdZXe3gHz80jU',
        query: term,
        per_page: 1
    })
    const imageData = await fetch(`https://api.unsplash.com/search/photos?${params}`)
    .then((res) => res.json())
    .then((data) => data.results[0]);
    if(imageData) {
        document.getElementById("search-result-image").src = imageData.urls.full ?? imageData.urls.raw;
        document.getElementById("description").innerHTML = imageData.alt_description ?? imageData.description;
        document.getElementById("term").innerHTML = term;
    }
}
fetchImageByTerm('cool');