"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
var extractTodoFields = function (todo) {
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    return { id: id, title: title, completed: completed };
};
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var _a = extractTodoFields(todo), id = _a.id, title = _a.title, completed = _a.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n\t\tThe Todo with ID: ".concat(id, "\n\t\tHas a title of: ").concat(title, "\n\t\tIs it finished? ").concat(completed, "\n\t"));
};
