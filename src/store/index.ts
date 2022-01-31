import { createStore } from 'vuex'

export default createStore({
  state: {
    formData: [
      {
        type: 'text',
        name: 'firstName',
        label: 'First name',
        value: ''
      },
      {
        type: 'text',
        name: 'lastName',
        label: 'Last name',
        value: ''
      },
      {
        type: 'email',
        name: 'eMail',
        label: 'E-mail',
        value: ''
      },
      {
        type: 'phone',
        name: 'eMail',
        label: 'E-mail',
        value: [{ type: '', value: '' }]
      },
      {
        type: 'membership',
        name: 'membership',
        label: 'Membership',
        value: ''
      }
    ]
  },

  mutations: {
    setFormData (state, payload) {
      state.formData = payload
    }
  },

  getters: {
    getFormData: (state) => state.formData
  },

  actions: {
  },

  modules: {
  }
})
