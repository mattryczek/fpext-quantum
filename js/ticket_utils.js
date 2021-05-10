var prefix = 'table > tbody > tr > .x-grid3-td-hpColHeading_';

function get_tickets_div() {
    return document.querySelectorAll(".x-grid3-row");
}

// Ticket number and title are always present on tickets
function get_ticket_num(ticket) {
    return ticket.querySelector(prefix + 'mr > div > span').innerText;
}

// Ticket number and title are always present on tickets
function get_title(ticket) {
    return ticket.querySelector(prefix + 'title > div > a').innerText;
}

function get_description(ticket) {
    let desc = ticket.querySelector(prefix + 'title > div > a').nextSibling.data;

    if (desc.length === 1) {
        desc = 'Enable "Collapsed Description in Title" within your prefs to show previews!';
    }

    if (typeof desc === undefined) {
        desc = 'Enable "Collapsed Description in Title" within your prefs to show previews!';
    }

    return desc;
}

function get_status(ticket) {
    let status;

    try {
        status = ticket.querySelector(prefix + 'status > div').innerText;

    } catch {
        status = "DISABLED";
    }
    return status;
}

function get_last_edit(ticket) {
    let last_edit;

    try {
        last_edit = ticket.querySelector(prefix + 'datetimeago > div').innerText;
    } catch {
        last_edit = 'DISABLED';
    }

    return last_edit;
}

function get_priority(ticket) {
    let priority;

    try {
        priority = ticket.querySelector(prefix + 'priority > div > span').innerText;
    } catch {
        priority = "DISABLED";
    }

    return priority;
}

function get_dept_support(ticket) {
    let support;

    try {
        support = ticket.querySelector(prefix + 'Departmental__bSupport > div').innerText;

        if (support === '-') {
            support = "none";
        }
    } catch {
        support = "DISABLED";
    }

    return support;
}

function get_closed_by(ticket) {
    let closer;

    try {
        closer = ticket.querySelector(prefix + 'closedby > div').innerText;
    } catch {
        closer = 'DISABLED';
    }

    return closer;
}

function ticket_to_json(ticket) {

    let ticket_obj;

    try {
        ticket_obj = {
            number: get_ticket_num(ticket),
            status: get_status(ticket),
            priority: get_priority(ticket),
            last_edit: get_last_edit(ticket),
            closed_by: get_closed_by(ticket),
            dept: get_dept_support(ticket),
            title: get_title(ticket),
            desc: get_description(ticket)
        };
    } catch {
        ticket_obj = {
            number: ticket.querySelector(prefix + 'mr > div > span').innerText,
            status: 'CATCH reached, contact(dev)',
            priority: 'CATCH reached, contact(dev)',
            last_edit: 'CATCH reached, contact(dev)',
            closed_by: 'CATCH reached, contact(dev)',
            dept: 'CATCH reached, contact(dev)',
            title: ticket.querySelector(prefix + 'title > div > a').innerText,
            desc: 'CATCH reached, contact(dev)'
        };
    }

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

    return ticket_array;
}