describe('TODO', function(){
  describe('#generateItemBy()', function(){
    var todoItem = TODO.generateItemBy('this is a todo');

    it('should return todo item with given todo content', function(){
      var expectedTodo = '<label><input type="checkbox">this is a todo</label><span class="destroy pull-right">✕</span>';
      expect(todoItem.html()).toBe(expectedTodo);
    });

    it('should return todo item which could be marked as done/not done', function(){
      var itemCheckbox = todoItem.find('input');
      expect(itemCheckbox).not.toBeChecked();

      itemCheckbox.click();
      expect(itemCheckbox).toBeChecked();
    });

    it('should return todo item which could be removed', function(){
      spyOn(todoItem, "remove");

      todoItem.find(".destroy").click();

      expect(todoItem.remove).toHaveBeenCalled();
    });
  });
});
