import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
const db = firebase.firestore()
const postsCollection = db.collection('posts')

export const state = () => ({
  posts: []
})

export const getters = {
  posts: state => {
    return state.posts
  }
}

export const actions = {
  
  initPosts: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('posts', postsCollection)
  }),

  addPost: firestoreAction((context, data) => {
    postsCollection.add(data)
    .then((doc => {
      console.log(doc.id)
    }))
  }),

}