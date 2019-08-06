import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'
import { async } from 'q';
import { __await } from 'tslib';
const db = firebase.firestore()
const postsCollection = db.collection('posts')

export const state = () => ({
  posts: [],
  // post: []
})

export const getters = {
  posts: state => {
    return state.posts
  },
  // post: state => {
  //   return state.post
  // }
}

export const actions = {
  
  initPosts: firestoreAction(({ bindFirestoreRef }) => {
    bindFirestoreRef('posts', postsCollection)
  }),

  // 第2引数にドキュメント名を渡せば、コレクション以降にもアクセス可能
  // 拡張性ありだから上の関数書き直しても良いかも
  // getPost: firestoreAction(({ bindFirestoreRef } , doc) => {
  //   if (!doc) {
  //     bindFirestoreRef('post', postsCollection)
  //     return
  //   }
  //   bindFirestoreRef('post', postsCollection.doc(doc))
  // }),

   addPostToFB: firestoreAction(async (context, data) => {
    await postsCollection.doc(data.postId).set(data)
  })

}