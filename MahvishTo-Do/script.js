let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks()
{
    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );
}


function displayTasks()
{
    const taskList =
        document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach((task,index)=>{

        const li =
            document.createElement("li");

        li.innerHTML = `

        <span class="${
            task.completed ? "completed" : ""
        }">

            ${task.text}

        </span>

        <div class="actions">

            <button onclick="toggleTask(${index})">

                <i class="fa-solid fa-check"></i>

            </button>

            <button onclick="deleteTask(${index})">

                <i class="fa-solid fa-trash"></i>

            </button>

        </div>
        `;

        taskList.appendChild(li);
    });
}

function addTask()
{
    const input =
        document.getElementById("taskInput");

    const taskText =
        input.value.trim();

    if(taskText === "")
    {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text:taskText,
        completed:false
    });

    saveTasks();
    displayTasks();

    input.value="";
}

function deleteTask(index)
{
    tasks.splice(index,1);

    saveTasks();
    displayTasks();
}


function toggleTask(index)
{
    tasks[index].completed =
    !tasks[index].completed;

    saveTasks();
    displayTasks();
}
taskInput.addEventListener("keypress", function(e)
{
    if(e.key==="Enter")
    {
        addTask();
    }
});

displayTasks();