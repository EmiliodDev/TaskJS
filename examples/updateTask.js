fetch('/tasks/task_id', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer <token>' // put your token here
    },
    body: JSON.stringify({
      "title": "Updated Task Title",
      "isCompleted": true,
      "description": "Updated Task Description",
      "time": "Updated Task Time",
      "date": "Updated Task Date",
      "isNotificationEnabled": true,
      "repeatDays": ["Monday", "Tuesday"]
    })
  })
  .then(response => {
    if (response.status === 200) {
      // Task updated successfully
      response.json().then(data => {
        console.log("Task updated:", data.task);
      });
    } else if (response.status === 404) {
      // Task not found
      console.error("Task not found");
    } else {
      // Error updating task
      console.error("Error updating task");
    }
  })
  .catch(error => {
    // Handle request errors
    console.error(error);
  });
  
