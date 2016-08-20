import Ember from 'ember';

export default Ember.Component.extend({
  updateForm: false,
  actions:{
    showForm(){
      this.set('updateForm', true);
      // this.set('text', "");
      // this.set('author', "");
    },
    updateAnswer(answer){
      var params = {
        text: this.get('text'),
        author: this.get('author')
      };
      this.set('updateForm', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
