window.addEventListener('load', solve);

function solve() {
    const formRef = document.querySelector("form");
    formRef.addEventListener("submit", onSubmit);
    const firstNameRef = document.getElementById("first-name");
    const lastNameRef = document.getElementById("last-name");
    const peopleCountRef = document.getElementById("people-count");
    const fromDateRef = document.getElementById("from-date");
    const daysCountRef = document.getElementById("days-count");
    const ticketInfoRef = document.querySelector('.ticket-info-list');
    const confirmTicketRef = document.querySelector('.confirm-ticket');
    const nextBtnRef = document.getElementById('next-btn')
    let main;
    const body = document.getElementById("body")

    function onSubmit(e) {
        e.preventDefault();
        const firstName = firstNameRef.value;
        const lastName = lastNameRef.value;
        const peopleCount = peopleCountRef.value;
        const fromDate = fromDateRef.value;
        const daysCount = daysCountRef.value;

        if(!firstName || !lastName || !peopleCount || !fromDate || !daysCount) {
            return;
        }

        const ticket = createTicket(firstName, lastName, peopleCount, fromDate, daysCount)
        ticketInfoRef.appendChild(ticket);
        toggleButtonNext();
        formRef.reset();

    }

    function createTicket(firstName, lastName, peopleCount, fromDate, daysCount) {
        let li = document.createElement('li');
        li.classList.add('ticket');
        let innerHtmContent = "<article>"
        innerHtmContent += `<h3>Name: ${firstName} ${lastName}</h3>`;
        innerHtmContent += `<p>From date: ${fromDate}</p>`;
        innerHtmContent += `<p>For ${daysCount} days</p>`;
        innerHtmContent += `<p>For ${peopleCount} people</p>`;
        innerHtmContent += `</article>`;

        li.innerHTML = innerHtmContent;

        //TODO add btn
        const editBtn = createBtn("edit-btn", "Edit");
        const continueBtn = createBtn("continue-btn", "Continue");
        editBtn.addEventListener('click', onEdit)
        continueBtn.addEventListener('click', onContinue)
        li.appendChild(editBtn);
        li.appendChild(continueBtn);
        

        return li;
    }

    function toggleButtonNext() {
        nextBtnRef.disabled = !nextBtnRef.disabled;
    }

    function createBtn(classes, text) {
        const btn = document.createElement('button');
        classes && btn.classList.add(classes); 
        btn.textContent = text;
        return btn;
    }

    function onEdit(e) {
        let articleChildren = e.currentTarget.parentElement.querySelector("article").children;
        let nameData = articleChildren[0].textContent.split(" ");
        let dateTokens = articleChildren[1].textContent.split(" ");
        let daysCountTokens = articleChildren[2].textContent.split(" ");
        let peopleCountTokens = articleChildren[3].textContent.split(" ");

        let firstName = nameData[1];
        let lastName = nameData[2];
        let fromDate = dateTokens[2];
        let daysCount = daysCountTokens[1];
        let peopleCount = peopleCountTokens[1];

        firstNameRef.value = firstName;
        lastNameRef.value = lastName;
        fromDateRef.value = fromDate
        daysCountRef.value = daysCount;
        peopleCountRef.value = peopleCount;
        toggleButtonNext();

        ticketInfoRef.innerHTML = "";
    }

    function onContinue(e) {
        let li = e.currentTarget.parentElement;
        let btns = li.querySelectorAll('button');
        btns[0].remove();
        btns[1].remove();
        let confirmBtn = createBtn("confirm-btn", "Confirm");
        confirmBtn.addEventListener('click', onConfirm);
        let cancelBtn = createBtn("cancel-btn", "Cancel");
        cancelBtn.addEventListener('click', onCancel)
        li.appendChild(confirmBtn);
        li.appendChild(cancelBtn);
        confirmTicketRef.appendChild(li);
        

    }

    function onCancel(e) {
        // e.target.parentElement.remove();
        onDelete(e.target.parentElement)
        toggleButtonNext();
    }

    function onConfirm(e) {
        onDelete(e.target.parentElement);
        main = document.getElementById('main')
        body.innerHTML = "";
        let h1 = document.createElement("h1");
        h1.textContent = "Thank you, have a nice day!"
        h1.id =  "thank-you";
        let btn = createBtn("", "Back");
        btn.id = "back-btn";
        btn.addEventListener('click', onBack)
        body.appendChild(h1);
        body.appendChild(btn)
    }

    function onBack() {
        body.innerHTML = "";
        body.appendChild(main)
    }

    function onDelete(elRef) {
        elRef.remove()
    }
    
}


    
    
