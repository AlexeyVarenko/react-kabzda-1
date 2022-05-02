
let state = {
   
   profilePage:{
    posts: [
        { id: 1, message: 'Hi! How are you?', likeCount: 10 },
        { id: 2, message: "It's my first page", likeCount: 15 },
        { id: 3, message: "BlaBla", likeCount: 11 },
        { id: 4, message: "Yo", likeCount: 151 },
    ],
   },

   dialogsPage:{
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' },
    ],
    messages: [{ id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yo' },
    { id: 4, message: 'Yo' },
    { id: 5, message: 'Yo' },
    ],
   }  
}

export let addPost = (postMessage)=>{
    debugger
    let newPost={
        id:5,
        message: postMessage, 
        likeCount: 0,
    }
    state.profilePage.posts.push(newPost)
}

export default state