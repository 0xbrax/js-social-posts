const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": null //"https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

let postContainer = document.getElementById('container');

posts.forEach((element) => {
    let newDateFormat = element['created'].substring(8, 10) + '-' + element['created'].substring(5, 7) + '-' + element['created'].substring(0, 4);
    element['created'] = newDateFormat;

    if (element['author']['image'] == null) {
        const nameArray = element['author']['name'].split(' ');
        let textProfilePic = '';

        for (let x = 0; x < nameArray.length; x++) {
            textProfilePic += nameArray[x].charAt(0);
        }

        postContainer.innerHTML += `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <div class="profile-pic-default"><span>${textProfilePic}</span></div>                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${element['author']['name']}</div>
                            <div class="post-meta__time">${element['created']}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${element['content']}</div>
                <div class="post__image">
                    <img src="${element['media']}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button js-like-button" href="#" data-postid="${element['id']}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-1" class="js-likes-counter">${element['likes']}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>
        `;
    } else {
        postContainer.innerHTML += `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${element['author']['image']}" alt="${element['author']['name']}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${element['author']['name']}</div>
                        <div class="post-meta__time">${element['created']}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${element['content']}</div>
            <div class="post__image">
                <img src="${element['media']}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button js-like-button" href="#" data-postid="${element['id']}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${element['likes']}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `;
    }
});

let likeBtn = document.querySelectorAll('.js-like-button');
let likeCounter = document.querySelectorAll('.js-likes-counter');
let counterArray = [];

console.log('ID I liked: ' + counterArray)



const likeInfinite = document.getElementById('like-infinite');
let checkVerify = false;

likeInfinite.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        checkVerify = true;
    } else if (!event.currentTarget.checked) {
        checkVerify = false;
    }
});

for (let i = 0; i < posts.length; i++) {
    let postID = likeBtn[i].getAttribute('data-postid');
        
    likeBtn[i].addEventListener('click', function(event) {
        event.preventDefault();
        
        if (checkVerify == false) {
            likeBtn[i].classList.remove('like-button-infinite');

            if (!counterArray.includes(postID)) {
                counterArray.push(postID);
            
                posts[i]['likes'] = posts[i]['likes'] + 1;
                likeCounter[i].innerHTML = posts[i]['likes'];
            
                likeBtn[i].classList.add('like-button--liked');
            } else if (counterArray.includes(postID)) {
                for (let n = 0; n < counterArray.length; n++) {
                    if (counterArray[n] == postID) { 
                        counterArray.splice(n, 1); 
                    }
                }
            
                posts[i]['likes'] = posts[i]['likes'] - 1;
                likeCounter[i].innerHTML = posts[i]['likes'];
                
                likeBtn[i].classList.remove('like-button--liked');
            }

        } else if (checkVerify == true) {
            posts[i]['likes'] = posts[i]['likes'] + 1;
            likeCounter[i].innerHTML = posts[i]['likes'];
            
            likeBtn[i].classList.remove('like-button--liked');
            likeBtn[i].classList.add('like-button-infinite');
        }

        console.log('ID I liked: ' + counterArray)
    });
}