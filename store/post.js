import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
import { async } from 'q';
import { __await } from 'tslib';
const db = firebase.firestore()
const postsCollection = db.collection('posts')

export const state = () => ({
  posts: [],
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

   addPostToFB: firestoreAction(async (context, data) => {
    await postsCollection.doc(data.postId).set(data)
  })

}