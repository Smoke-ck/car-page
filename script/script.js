const geAll = s => document.querySelectorAll(s);
const ge = s => document.querySelector(s);

const tabPanes = geAll(".accordion__card");
const allDescription = geAll(".accordion-collapse");
const eventDiv = ge(".questions__container");

eventDiv.addEventListener('click', (e) => {
    tabPanes.forEach((el) => {
        if (el.getAttribute("data-tab-content") === e.target.getAttribute("data-tab")) {
            el.classList.toggle('active');
            e.target.classList.toggle('active');
        } else if (el.getAttribute("data-tab-content") != e.target.getAttribute("data-tab")) {
            el.classList.remove('active');
            allDescription.forEach(el => el.classList.remove('show'));
            el.children[0].children[0].classList.remove('active');
        }
    });
});

const selectsTitle = geAll(".list-choice-title");
const eventSelect = ge(".choiceForm");

eventSelect.addEventListener('click', (e) => {
    selectsTitle.forEach((el) => {
        if (el.getAttribute('data-open') === e.target.getAttribute('data-open')) {
            el.classList.add('select');
        }
    });
});