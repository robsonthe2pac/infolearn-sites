// Pesquisa funcional
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const courses = document.querySelectorAll('.course-card');

function filterCourses() {
    let filter = searchInput.value.toLowerCase();
    courses.forEach(course => {
        let name = course.dataset.name.toLowerCase();
        course.style.display = name.includes(filter) ? '' : 'none';
    });
}

searchInput.addEventListener('keyup', filterCourses);
searchBtn.addEventListener('click', filterCourses);

// Modal
const modal = document.getElementById('formModal');
const closeModal = document.getElementById('closeModal');
const enrollButtons = document.querySelectorAll('.enroll-btn');
const modalCourseName = document.getElementById('modalCourseName');
const priceInfo = document.getElementById('priceInfo');
const enrollForm = document.getElementById('enrollForm');

enrollButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const card = btn.closest('.course-card');
        const selectDuration = card.querySelector('.course-duration');
        const selectedOption = selectDuration.options[selectDuration.selectedIndex];
        const courseName = btn.dataset.course;
        const priceText = selectedOption.text;

        modal.style.display = 'flex';
        modalCourseName.textContent = `Inscrição no curso: ${courseName}`;
        priceInfo.textContent = `Preço selecionado: ${priceText} - Pagamento via M-Pesa: 844180213 / Emaola: 878080213`;
        enrollForm.dataset.course = courseName;
        enrollForm.dataset.price = priceText;
    });
});

closeModal.onclick = () => modal.style.display = 'none';
window.onclick = e => { if(e.target == modal) modal.style.display = 'none'; }

// Envio para WhatsApp
enrollForm.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const city = form.city.value;
    const age = form.age.value;
    const mode = form.mode.value;
    const course = form.dataset.course;
    const price = form.dataset.price;

    const message = `Olá, gostaria de me inscrever no curso: ${course}%0APreço escolhido: ${price}%0ANome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0ACidade: ${city}%0AIdade: ${age}%0AModo: ${mode}`;
    window.open(`https://wa.me/258844180213?text=${message}`, '_blank');
});

// Botão "Saber mais cursos"
const moreBtn = document.getElementById('moreCoursesBtn');
moreBtn.addEventListener('click', () => {
    alert('Entre em contacto connosco via WhatsApp ou email para saber mais cursos disponíveis!');
});
