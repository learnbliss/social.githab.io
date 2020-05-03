/*todo
Упаковать весь state в объект store с методами
Экспортировать store
в index.js в компоненту <App> передать весь store
далее вызывать только необходимые данные или функции
 */

let store = {
    reRenderThree: () => {
        console.log('state changed')
    },
    stateFork: {
        profilePage: {
            posts: [
                {id: 1, message: 'My post 1', likeCounts: '3'},
                {id: 2, message: 'My secondary post', likeCounts: '5'},
                {id: 3, message: 'My third post', likeCounts: '25'},
            ],
            textArea: '',
        },
        messagesPage: {
            messages: [
                {message: 'Привет как дела'},
                {message: 'У меня нормич'},
                {message: 'А у тебя?'},
                {message: 'все по феншую'},
            ],
            dialogs: [
                {
                    id: '1',
                    name: 'Andre',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLCMHxa7MfSl3vH9hQDDgUwFpORGANIRLpP2t8Pax3IqljrYHZ&usqp=CAU'
                },
                {
                    id: '2',
                    name: 'Dimka',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtYsA5m3xp8EdW0R1vT5Oein32vpgXbFZ6NkB23lbuDxjZwedh&usqp=CAU'
                },
                {id: '3', name: 'Nikolay', avatar: 'https://i.ytimg.com/vi/WJMp9NtK4io/hqdefault.jpg'},
                {
                    id: '4',
                    name: 'Arseniy',
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShIt3l2-355Sf6La3bZUy7lvRj6vDzjhWQfW1uNHWYxwRNcwzY&usqp=CAU'
                },
            ],
            textArea: '',
        },
    },

    addMessage: () => {
        let {messages, textArea} = this.stateFork.messagesPage;
        messages.push({message: textArea,});
        this.reRenderThree(this); //reRenderThree(stateFork);
        textArea = '';
    },

    pushDataToStateDialog: (textAreaValue) => {
        console.log('this: ', this);
        this.stateFork.messagesPage.textArea = textAreaValue;
        this.reRenderThree(this); //reRenderThree(stateFork);
    },

    addPost: () => {
        let newPost = {
            id: this.stateFork.profilePage.posts.length + 1,
            message: this.stateFork.profilePage.textArea,
            likeCounts: 0,
        };
        this.stateFork.profilePage.posts.push(newPost);
        this.stateFork.profilePage.textArea = '';
        this.reRenderThree(this);
    },

    pushDataToState: (textAreaValue) => {
        this.stateFork.profilePage.textArea = textAreaValue;
        this.reRenderThree(this);
    },

    subscribe: (observe) => {
        this.reRenderThree = observe;
    },
};

window.store = store;

export default store;