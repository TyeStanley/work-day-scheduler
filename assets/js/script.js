let saveBtn = $('.saveBtn');

// Functions
$('#currentDay').text(moment().format('dddd MMMM Do YYYY'));

// Update each block to match the correct color for past, present, and future
function blockColor() {
    let hour = moment().hours();

    $('.time-block').each(function() {
        let currentHour = parseInt($(this).attr('id'));

        if (currentHour > hour) {
            $(this).addClass('future');
        } else if (currentHour === hour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('past');
        }
    })
};

// Click save button to save the class of time-block to local storage
saveBtn.on('click', function() {
    let time = $(this).siblings('.hour').text();
    let info = $(this).siblings('.description').val();

    localStorage.setItem(time, info);
});

// Gets content from the local save
function localSave() {
    $('.hour').each(function() {
        let currentHour = $(this).text();
        let textArea = localStorage.getItem(currentHour);

        if (textArea !== null) {
            $(this).siblings('.description').val(textArea);
        }
    });
};

// Calls our function
blockColor();
localSave();