import Component from '@ember/component'

export default Component.extend({
  todos: JSON.parse(localStorage.getItem('todos')) || [],

  init () {
    this._super(...arguments)
  },
  actions: {
	  	addTodo (name) {
	  		if (!name) { return }

		    this.get('todos').pushObject(
		     	name
		    )
		    localStorage.setItem('todos', JSON.stringify(this.get('todos')))
		    this.set('todo-list', '')
	  	}
  },
  getData: function () {
	    let todos = this.get('todos')
	    return todos
  }.property('todos.@each')
})
