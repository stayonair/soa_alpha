<template>
  <div class="container">
    <p>新規登録</p>
    <div class="input__container">
      <div class="input__box">
        <p>タイトル</p>
        <p>
          <input
            class=input_item
            v-model="formData.postTitle"
            type="text"
          >
        </p>
      </div>
      <div class="input__box">
        <p>ユーザー名</p>
        <p>
          <input
            class=input_item
            v-model="formData.userName"
            type="text"
          >
        </p>
      </div>
      <div class="input__box">
        <p>内容</p>
        <textarea
          class="textarea_item"
          v-model="formData.postText" />
      </div>
      <button
        type="button" 
        @click="startRecording()"
      >
        start!!
      </button>
      <button @click="stopRecording()">
        stop!!
      </button>
      <audio 
        v-if="previewAudioData" 
        :src="previewAudioData"
        controls 
      />

      </div>
      <div class="submit_button__container">
      <button class="submit_button"
        @click="addPost()">
        送信
      </button>
    </div>

    <button @click="getRandomNumber()">生成</button>
  </div>
</template>

<script>
import firebase from '~/plugins/firebase'
import record from '~/utils/record'
import { mapActions } from 'vuex'

// storage のフォルダは uid で管理
// ref(uid)
const storageRef = firebase.storage().ref()

export default {
  layout: 'body',
  data: () => ({
    formData: {
      postId: "",
      postTitle: "",
      userName: "",
      postText: "",
      audioUrl: "",
    },
    rawAudioData: null,
    previewAudioData: null
  }),
  created() {
    this.initPosts()
  },
  methods: {
    ...mapActions('post', [
      'initPosts',
      'addPostToFB',
    ]),
    // ランダムの ID を生成して、postId に代入f
    createPostId() {
      const id = [...Array(2)].reduce((acc, cur) => {
        return acc + (Math.random().toString(32).slice(-6)).toString()
      }, '')
      this.formData.postId = id
    },
    async uploadAudioData(data) {
      this.createPostId()
      const audioRef = storageRef.child(this.formData.postId)

      // storageにファイルをアップ
      await audioRef.put(data).then(snapshot => {
        console.log(`added firebase storage: ${snapshot.state}!!`)
      })

      // アップしたファイルのダウンロードURLを取得 
      await audioRef.getDownloadURL().then(url => {
        this.formData.audioUrl = url
      })
    },
    async addPost() {
      await this.uploadAudioData(this.rawAudioData)
      await this.addPostToFB(this.formData)

      this.formData = {
        postId: "",
        postTitle: "",
        userName: "",
        postText: "",
        audioUrl: "",
      }
      this.rawAudioData = null
      this.previewAudioData = null

    },
    startRecording() {
      record.recStart()
    },
    async stopRecording() {
      const res = await record.stopRecording()
      this.rawAudioData = res
      
      // 送信するファイルは変換前のデータ
      // プレビュー用に blob データを DOMString に変換
      
      const url = URL.createObjectURL(res)
      this.previewAudioData = url
    },
  }
}
</script>

<style>
.container {
  width: 60vw;
  margin: 0 auto;
  padding: 1rem 0;
}

.container,
.input_item,
.textarea_item {
  font-size: 1.2rem;
}

.input__container {
  width: 100%;
  margin-bottom: 2rem;
}

.input__box {
  width: 100%;
}

.input_item {
  width: 100%;
  appearance: none;
  border-radius: 5px;
  padding: 0.5rem;
}

.textarea_item {
  border: 1px solid gray;
  width: 100%;
  height: 10rem;
}

.submit_button__container {
  display: flex;
  justify-content: flex-end;
}

.submit_button {
  background-color: #fff;
  padding: 0.5rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  appearance: none;
  border-radius: 3px;
}
</style>
