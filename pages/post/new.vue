<template>
  <div class="container">
    <p>新規登録</p>
    <div class="input__container">
<<<<<<< HEAD
=======
      {{ formData }}
>>>>>>> master
      <div class="input__box">
        <p>タイトル</p>
        <p>
          <input
            class=input_item
            v-model="formData.inputTitle"
            type="text"
          >
        </p>
      </div>
      <div class="input__box">
        <p>ユーザー名</p>
        <p>
          <input
            class=input_item
            v-model="formData.inputUserName"
            type="text"
          >
        </p>
      </div>
      <div class="input__box">
        <p>内容</p>
        <textarea
          class="textarea_item"
          v-model="formData.inputText" />
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
  </div>
</template>

<script>
import record from '~/utils/record'
import { mapActions } from 'vuex'

export default {
  layout: 'body',
  data: () => ({
    formData: {
      inputText: "",
      inputTitle: "",
      inputUserName: "",
    },
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
    addPost() {
      this.addPostToFB(this.formData)
      this.formData = {
        inputText: "",
        inputTitle: "",
        inputUserName: "",
      }
      this.previewAudioData = null
    },
    startRecording() {
      record.recStart()
    },
    async stopRecording() {
      const res = await record.stopRecording()
      // 送信するファイルは変換前のデータ
      // TODO- firestorage に送信準備できたら戻す
      // this.formData.audioData = res
      // プレビュー用に blob データを DOMString に変換
      const url = URL.createObjectURL(res)
      this.previewAudioData = url
    }
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
