<template>
  <div>
    <p>ポストID: {{ postId }}</p>
    <p>タイトル: {{ postTitle }}</p>
    <p>ユーザー: {{ userName }}</p>
    <p>内容: {{ postText }}</p>
    <audio controls :src="audioUrl"></audio>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'

const db = firebase.firestore()
const postsCollection = db.collection('posts')

export default {
  async asyncData({ params }) {
    const id = params.id
    const { postId, postTitle, userName, postText, audioUrl } = 
    await postsCollection.doc(id).get().then(doc => doc.data())
      return { postId, postTitle, userName, postText, audioUrl }
  }
}
</script>

<style>

</style>
