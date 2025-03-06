$(document).ready(function() {
    $('#add-task-btn').click(function() {
        let task = $('#task-input').val(); 
        if (task !== "") {
        
            $('#task-list').append('<li class="task-item">' + task + '</li>');
            $('#task-input').val(""); 
        }
    });
    
    $('#show-list-btn').click(function() {
        $('#task-list').show(); 
    });

    $('#hide-list-btn').click(function() {
        $('#task-list').hide(); 
    });
    
    $('#toggle-add-task-btn').click(function() {
        $('#add-task-section').fadeToggle(); 
    });
   
    $(document).on('click', '.task-item', function() {
        let taskDetails = $(this).text(); 
        $('#task-description p').text("Details of: " + taskDetails); 
        $('#task-description').slideDown(); 
    });

   
    $(document).on('click', '.task-item', function() {
        $(this).addClass('highlight'); 
    });
});