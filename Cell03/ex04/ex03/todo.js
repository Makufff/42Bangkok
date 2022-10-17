let todo_cookies = document.cookie;
if (todo_cookies.length !== 0) {
  todo_cookies = todo_cookies.split(";");
  todo_cookies.forEach((text) => {
    text = text.split("=");
    insert_new_todo(text[0], text[1]);
  });
}

$(document).ready(function () {
    $("#new_todo").click(function () {
    let todo_text = prompt("พิมพ์มาเลยงับบบ");
    if (todo_text.trim() === "") return;
    let id = new Date().getTime();
    document.cookie = id + "=" + todo_text + ";";
    insert_new_todo(id, todo_text);
  });
});

function insert_new_todo(id, text) {
  let todo = $("<div></div>").text(text);
  todo.click(function () {
    let is_confirm = confirm("จะลบเค้าจริงหรอเตงงงT-T");
    if (is_confirm) {
      todo.remove();
      document.cookie = id + "=; expires=Wed, 31 Oct 2012 08:50:17 UTC;";
    }
  });
  $("#ft_list").prepend(todo);
}