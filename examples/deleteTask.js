fetch('/tasks/task_id', {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer <token>' // your token here
    }
  })
  .then(response => {
    if (response.status === 200) {
      // Task deleted successfully
      console.log("Task deleted successfully");
    } else if (response.status === 400) {
      // Task not found
      console.error("Task not found");
    } else {
      // Error deleting task
      console.error("Error deleting task");
    }
  })
  .catch(error => {
    // Handle request errors
    console.error(error);
  });
  
