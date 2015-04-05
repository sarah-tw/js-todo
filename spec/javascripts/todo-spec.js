var expect = chai.expect;
var should = chai.should();

describe('TODO', function(){
  describe('#generateItemBy()', function(){
    var todoItem = TODO.generateItemBy('this is a todo');

    it('should return todo item with given todo content', function(){
      var expectedTodo = '<label><input type="checkbox">this is a todo</label><span class="destroy pull-right">✕</span>';
      expect(todoItem.html()).to.equal(expectedTodo);
    });

    it('should return todo item which could be marked as done/not done', function(){
      var itemCheckbox = todoItem.find('input');
      itemCheckbox.should.not.be.checked;

      itemCheckbox.click();
      itemCheckbox.should.be.checked;
    });

    //This is failing because I don't know mock with mocha
    it('should return todo item which could be removed', function(){
      var closeButton = todoItem.find(".destroy");

      closeButton.click();

      todoItem.should.have.been.calledWith("remove");
    });
  });
});
