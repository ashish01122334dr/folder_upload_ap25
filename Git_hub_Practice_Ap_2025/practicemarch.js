<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        .container {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        ul {
            list-style: none;
            padding: 0;
        }
        li {
            padding: 10px;
            display: flex;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
        }
        .completed {
            text-decoration: line-through;
            color: gray;
        }
        button {
            margin-left: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2>To-Do List</h2>
        <input type="text" id="taskInput" placeholder="Add a new task">
        <button onclick="addTask()">Add</button>
        <ul id="taskList"></ul>
    </div>

    <script>
        function addTask() {
            let taskInput = document.getElementById("taskInput");
            let taskText = taskInput.value.trim();
            if (taskText === "") return;
            
            let li = document.createElement("li");
            li.innerHTML = `<span onclick="toggleTask(this)">${taskText}</span>
                            <button onclick="removeTask(this)">Delete</button>`;
            
            document.getElementById("taskList").appendChild(li);
            taskInput.value = "";
        }

        function removeTask(button) {
            button.parentElement.remove();
        }

        function toggleTask(task) {
            task.classList.toggle("completed");
        }
    </script>
</body>
</html>
