<template>
  <div class="container">
    <p>新規登録</p>
    <div class="input_container">
      <div class="input_box">
        <p>タイトル</p>
        <p>
          <input
          v-model="formData.inputTitle"
          type="text"
          >
        </p>
      </div>
      <div class="input_box">
        <p>ユーザー名</p>
        <p>
          <input
          v-model="formData.inputUserName"
          type="text"
          >
        </p>
      </div>
      <div class="input_box">
        <p>内容</p>
        <textarea v-model="formData.inputText" />
      </div>
    </div>
    <div class="submit_button_container">
      <button class="submit_button" @click="addMemo()">送信</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    formData: {
      inputText: "",
      inputTitle: "",
      inputUserName: ""
    }
  }),
  methods: {
    addMemo() {
      console.log(this.formData);
      // this.firebaseに追加(this.formData)
      this.formData.inputText = ""
      this.formData.inputTitle = "",
      this.formData.inputUserName = ""
    }
  }
}
</script>

<style>
body {
  width: 100vw;
  margin: 0 auto;
  font-size: 62.5%;
}
.container {
  font-size: 1.2rem;
  width: 60vw;
  margin: 0 auto;
  padding: 1rem 0;
}

.input_container {
  width: 100%;
  margin-bottom: 2rem;
}

.input_box {
  width: 100%;
}

input {
  width: 100%;
  appearance: none;
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 0.5rem;
}

textarea {
  border: 1px solid gray;
  width: 100%;
  height: 10rem;
}

.submit_button_container {
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
