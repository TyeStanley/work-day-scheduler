$(document).ready(function() {
    // Set the date format
    let now = moment().format('LLLL');

    // Display the active date
    const currentDay = $('#currentDay');
    currentDay.text(now);

    let currentTime = new Date();
    let currentHour = currentTime.getHours();

    // Updates the textarea color to show past, present and future
    for (let i = 9; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
            document.getElementById(i.toString()).classList.remove('present', 'future');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
            document.getElementById(i.toString()).classList.remove('past', 'future');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
            document.getElementById(i.toString()).classList.remove('past', 'present');
        }
    }
    // ^ IS GOOD ^

    $('.target').click(function(event) {
        let event = event.target;

        let saveBtn = 'col-md-1 saveBtn';

        let lock = $('span[class-material-symbols-outline]');

        let eventTarget = event.classList.value;

        if (eventTarget === saveBtn || lock) {
            dataBtnValue = event.attributes[1].value;
            let textAText = $(`textArea[data-txArea=$(dataBtnValue)]`).val();

            if (textAText) {
                localStorage.setItem(`data-textArea=${dataBtnValue}`, JSON.stringify(textAText));
            }
            else {
                return false;
            }
        }
    });
