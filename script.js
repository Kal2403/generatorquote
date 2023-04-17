function generate() {
    let quotes = {
        'Lana Del Rey': 'Who are you? Are you in touch with all of your darkest fantasies? Have you created a life for yourself where you can experience them? I have. I am fucking crazy. But I am free.',
        'Albert Einstein': 'Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.',
        'Carrie Bradshaw': 'Maybe some women arent meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.',
        'Pierce Brown': 'Man cannot be freed by the same injustice that enslaved it.'
    }

    let authors = Object.keys(quotes);

    let author = authors[Math.floor(Math.random() * authors.length)]

    let quote = quotes[author]
    
    document.getElementById('quote').innerHTML = quote;

    document.getElementById('author').innerHTML = author;
}