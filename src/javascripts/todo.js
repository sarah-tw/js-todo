TODO = (function(){
  function remove(event) {
    event.data.item.remove();
  }

  function changeStatus(event){
    item = event.data.item;
    this.checked ? item.addClass('done') : item.removeClass('done');
  }

  function generateItemBy(todo) {
    var itemTemplate = "<li class='todo-item'><label><input type='checkbox'>" +
                       "<%= todo %>" +
                       "</label><span class='destroy pull-right'>✕</span></li>";
    var newItem = $(_.template(itemTemplate)({todo: todo}));

    newItem.find('.destroy').on("click", {item: newItem}, remove);
    newItem.find('input').on('change', {item: newItem}, changeStatus);

    return newItem;
  }

  return {
    generateItemBy: generateItemBy
  }
})();
