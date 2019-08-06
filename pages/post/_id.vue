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
// import { mapActions, mapGetters } from 'vuex'

const db = firebase.firestore()
const postsCollection = db.collection('posts')

export default {
  data: () => ({
    postId: '',
    postTitle: '',
    userName: '',
    postText: '',
    audioUrl: '',
  }),
  created() {
    // URLパラメータを取得
    const id = this.$nuxt.$route.params.id

    // this.getPost(id)

    postsCollection.doc(id).get().then(doc => {
      const data = doc.data()
      this.postId = data.postId
      this.postTitle = data.postTitle
      this.userName = data.userName
      this.postText = data.postText
      this.audioUrl = data.audioUrl
    })
  },

  // 一応 vuexfire の関数も残しておきます
  // ↓↓↓↓↓
  // computed: {
  //   ...mapGetters('post', [
  //     'post'
  //   ])
  // },
  // methods: {
  //   ...mapActions('post', [
  //     'getPost'
  //   ]),
  // }
  
}
</script>

<style>

</style>
