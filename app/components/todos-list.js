import Component from '@ember/component'

export default Component.extend({

  init () {
    this._super(...arguments)
    this.set('todos', this.getTodos())
  },
  getTodos () {
  	 return JSON.parse(localStorage.getItem('todos')) || []
  },
  setTodos (todos) {
  	this.set('todos', todos)
  	localStorage.setItem('todos', JSON.stringify(todos))
  },
  actions: {
	  	addTodo (name) {
	  		if (!name) { return }

		    this.get('todos').pushObject(
		     	{name: name, checked: false}
		    )
		    localStorage.setItem('todos', JSON.stringify(this.get('todos')))
		    this.set('todo-list', '')
	  	},
	  	checkTodo (id) {
	  		let todos = this.getTodos().map(x => {
	  			if (x.name == id) { x.checked = !x.checked }
	  			return x
	  		})
	  		this.setTodos(todos)
	  	},
	  	removeTodo (id) {
	  		let todos = this.getTodos().filter(x => {
	  			return x.name != id
	  		})
	  		this.setTodos(todos)
	  	}
  },
  getData: function () {
	    let todos = this.get('todos')
	    return todos
  }.property('todos.@each')
})
