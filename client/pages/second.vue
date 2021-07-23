<template>
  <div class="container">
    <br />
    <h1>Главная страница</h1>
    <h3>Тут можно получить some staff</h3>
    <br />

    <form class="form mr-3" @submit.prevent="addText">
      <input
        class="form-control mr-2 mb-3"
        placeholder="Вставить текст"
        v-model="form.input"
      />
      <button type="submit" class="btn btn-dark active m-2">Добавить</button>
      <div class="btn-group">
        <input
          @click="form.changed = false"
          type="radio"
          checked
          class="btn-check"
          name="btnradio"
          id="btnradio2"
          autocomplete="off"
        />
        <label class="btn btn-outline-dark" for="btnradio2"> Белый </label>
        <input
          @click="form.changed = true"
          type="radio"
          class="btn-check"
          name="btnradio"
          id="btnradio3"
          autocomplete="off"
        />
        <label class="btn btn-outline-dark" for="btnradio3"> Красный </label>
      </div>
    </form>

    <br />

    <div v-show="contentShow">
      <form
        v-for="item in reversedContent"
        :key="item._id"
        :class="{ 'bg-danger': item.changed }"
        class="card border-2 m-2"
        @submit.prevent="deleteText(item._id)"
      >
        <div class="alert alert-dismissible mb-0">
          <h5 class="card-title mt-1">
            {{ item.text }}
          </h5>
          <button id="cls" type="submit" class="btn btn-close"></button>
        </div>
      </form>
    </div>
    <div v-show="!contentShow">
      <p>Вставить текст, плез</p>
    </div>
    <br />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'home',
  data() {
    return {
      apiURL: 'http://localhost:9000/api',
      content: [],
      alert: [],
      form: {
        input: '',
        changed: false,
      },
    }
  },
  methods: {
    async addText() {
      if (this.form.input.trim() !== '') {
        const newText = {
          text: this.form.input.trim(),
          changed: this.form.changed,
        }
        this.content.push(newText)
        await axios
          .post(this.apiURL, newText)
          .then((res) => {
            this.form.input = ''
            this.$store.commit('newAlert', [
              res.data.alert.strong,
              res.data.alert.msg,
              res.data.alert.how,
            ])
            this.content = res.data.DB
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.form = { input: 'СЮда вставить текст!' }
      }
    },
    async deleteText(id) {
      await axios
        .delete(`${this.apiURL}/delete/${id}`)
        .then((res) => {
          this.$store.commit('newAlert', [
            res.data.alert.strong,
            res.data.alert.msg,
            res.data.alert.how,
          ])
          this.content = res.data.DB
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  async mounted() {
    try {
      await axios.get(this.apiURL).then((res) => {
        this.alert.push(res.data.alert)
        this.content = res.data.DB
      })
    } catch (err) {
      console.log('Ошибка с get: ', err)
    }
  },
  computed: {
    reversedContent() {
      try {
        return this.content.slice().reverse()
      } catch (e) {
        console.log('жопа')
      }
    },
    contentShow() {
      if (Object.keys(this.content).length === 0) {
        return false
      } else {
        return true
      }
    },
  },
}
</script>

<style scoped>
[v-cloak] {
  display: none;
}
* {
  z-index: 0;
}
</style>
