import renderThree from "../render";

let stateFork = {
    profilePage: {
        posts: [
            {id: 1, message: 'My post 1', likeCounts: '3'},
            {id: 2, message: 'My secondary post', likeCounts: '5'},
            {id: 3, message: 'My third post', likeCounts: '25'},
        ],
    },
    messagesPage: {
        messages: [
            {message: 'Привет как дела'},
            {message: 'У меня нормич'},
            {message: 'А у тебя?'},
            {message: 'все по феншую'},
        ],
        dialogs: [
            {id: '1', name: 'Andre', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLCMHxa7MfSl3vH9hQDDgUwFpORGANIRLpP2t8Pax3IqljrYHZ&usqp=CAU'},
            {id: '2', name: 'Dimka', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtYsA5m3xp8EdW0R1vT5Oein32vpgXbFZ6NkB23lbuDxjZwedh&usqp=CAU'},
            {id: '3', name: 'Nikolay', avatar: 'https://i.ytimg.com/vi/WJMp9NtK4io/hqdefault.jpg'},
            {id: '4', name: 'Arseniy', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShIt3l2-355Sf6La3bZUy7lvRj6vDzjhWQfW1uNHWYxwRNcwzY&usqp=CAU'},
        ],
    },
};

export const addPost = (post) => {
    const arr = stateFork.profilePage.posts;
    let newPost = {
        id: arr.length + 1,
        message: post,
        likeCounts: 0,
    };
    arr.push(newPost);
    renderThree(stateFork)
};

export default stateFork;