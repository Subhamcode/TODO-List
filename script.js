$(document).ready(function () {
  //Adding the task
  let addbutton = $(".add-button");
  let field = $(".add-field");
  let tasks = $(".tasks");
  addbutton.on("click", function () {
    let elem = `<li class="task">
    <div class="task-checked col-1">
      <input type="checkbox" />
    </div>
    <div class="task-text col-2">${field.val()}</div>
    <div class="task-remove col-3"></div>
  </li>`;
    tasks.append(elem);
    field.val("");
  });
  //------------End of Adding tasks-----------------

  //--------------Remove task code goes here----------

  tasks.on("click", ".task-remove", function () {
    $(this).parent().remove();
  });

  //------------------End of Remove task code-----------------

  //-------------------------Task status check starts----------------
  //let checkbox = $(".task-checked input");
  tasks.on("change", ".task-checked input", function () {
    $(this).parent().next().toggleClass("checked");
  });
});
