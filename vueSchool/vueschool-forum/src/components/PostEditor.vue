<template>
    <form @submit.prevent="save">
        <div class="form-group">
                <textarea name="" id="" cols="30" rows="10" class="form-input"
                          v-model="text"
                ></textarea>
        </div>
        <div class="form-actions">
            <button v-if="isUpdate" @click.prevent="cancel" class="btn btn-ghost">Cancel</button>
            <button class="btn-blue">{{isUpdate ? 'Update' : 'Submit post'}}</button>
        </div>
    </form>
</template>

<script>
    export default {
      props: {
        threadId: {
          required: false
        },
        post: {
          type: Object,
          validator: obj => {
            const keyIsValid = typeof obj['.key'] === 'string'
            const textIsValid = typeof obj.text === 'string'
            const valid = keyIsValid && textIsValid
            if (!keyIsValid) {
              console.error('The post prop object mus include a .key attribute')
            }
            if (!textIsValid) {
              console.error('The post prop object mus include a text attribute')
            }
            return valid
          }
        }
      },
      data () {
        return {
          text: this.post ? this.post.text : ''
        }
      },
      computed: {
        // Here we convert a variable into boolean using the double exclamation mark
        isUpdate () {
          return !!this.post
        }
      },
      methods: {
        save () {
          this.persist()
            .then(post => {
              this.$emit('save', {post})
            })
        },
        cancel () {
          this.$emit('cancel')
        },
        create () {
          const post = {
            text: this.text,
            threadId: this.threadId
          }
          this.text = ''
          this.$emit('save', {post})
          return this.$store.dispatch('createPost', post)
            /* .then(post => {
              this.$emit('save', {post})
            }) */
        },
        update () {
          const payload = {
            id: this.post['.key'],
            text: this.text
          }
          return this.$store.dispatch('updatePost', payload)
            /* .then(post => {
              this.$emit('save', {post})
            }) */
        },
        persist () {
          return this.update ? this.update() : this.create()
        }
      }
    }
</script>