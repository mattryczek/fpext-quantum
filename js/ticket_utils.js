function get_tickets_div() {
    return document.querySelectorAll(".x-grid3-row");
}

function ticket_to_json(ticket) {
    let prefix = 'table > tbody > tr > .x-grid3-td-hpColHeading_';

    let ticket_obj = {
        number: ticket.querySelector(prefix + 'mr > div > span').innerText,
        status: ticket.querySelector(prefix + 'status > div').innerText,
        priority: ticket.querySelector(prefix + 'priority > div > span').innerText,
        last_edit: ticket.querySelector(prefix + 'datetimeago > div').innerText,
        closed_by: ticket.querySelector(prefix + 'closedby > div').innerText,
        dept: ticket.querySelector(prefix + 'Departmental__bSupport > div').innerText,
        title: ticket.querySelector(prefix + 'title > div > a').innerText,
        desc: ticket.querySelector(prefix + 'title > div > a').nextSibling.data
    };

    return ticket_obj;

}

function tickets_to_json() {
    let tickets_div = document.querySelectorAll(".x-grid3-row");
    let ticket_array = {
        tickets: []
    }

    for (row of tickets_div) {
        ticket_array.tickets.push(ticket_to_json(row));
    }

    console.log(JSON.stringify(ticket_array));
}