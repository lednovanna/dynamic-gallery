/*document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("imageForm");
    const gallery = document.getElementById("gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxDesc = document.getElementById("lightboxDesc");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let images = [];
    let currentIndex = 0;

    //  Функция добавить изображение
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const imageUrl = document.getElementById("imageUrl").value;
        const imageDesc = document.getElementById("imageDesc").value;
        addImage(imageUrl, imageDesc);
        form.reset();
    });

    function addImage(url, desc) {
        const index = images.length;
        images.push({ url, desc });

        const div = document.createElement("div");
        div.classList.add("gallery-item");

        const img = document.createElement("img");
        img.src = url;
        img.alt = desc;
        img.dataset.index = index;
        img.addEventListener("click", () => openLightbox(index));

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            images.splice(index, 1);
            updateGallery();
        });

        div.appendChild(img);
        div.appendChild(deleteBtn);
        gallery.appendChild(div);
    }

    function updateGallery() {
        gallery.innerHTML = "";
        images.forEach((img, i) => {
            const div = document.createElement("div");
        div.classList.add("gallery-item");

        const image = document.createElement("img");
        image.src = img.url;
        image.alt = img.desc;
        image.dataset.index = i;
        image.addEventListener("click", () => openLightbox(i));

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); 
            images.splice(i, 1);
            updateGallery(); 
        });

        div.appendChild(image);
        div.appendChild(deleteBtn);
        gallery.appendChild(div);
    });

         }
            

    // Открываем lightbox
    function openLightbox(index) {
        currentIndex = index;
        lightboxImg.src = images[index].url;
        lightboxDesc.textContent = images[index].desc;
        lightbox.style.display = "flex";
    }

    // Закрыть lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    //  Переключение изображений
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        openLightbox(currentIndex);
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        openLightbox(currentIndex);
    });

    //  Закрытие при клике вне изображения
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.style.display = "none";
    });
});*/

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("imageForm");
    const gallery = document.getElementById("gallery");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxDesc = document.getElementById("lightboxDesc");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let images = [];
    let currentIndex = 0;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const imageUrl = document.getElementById("imageUrl").value.trim();
        const imageDesc = document.getElementById("imageDesc").value.trim();

        if (!imageUrl) {
            return alert("Будь ласка, введіть URL зображення!");
        }

        addImage(imageUrl, imageDesc);
        form.reset();
    });

    function addImage(url, desc) {
        images.push({ url, desc });
        updateGallery();
    }

    function updateGallery() {
        gallery.innerHTML = "";
        images.forEach((img, i) => {
            const div = document.createElement("div");
            div.classList.add("gallery-item");

            const image = document.createElement("img");
            image.src = img.url;
            image.alt = img.desc;
            image.dataset.index = i;
            image.addEventListener("click", () => openLightbox(i));

            const deleteBtn = document.createElement("button");
            deleteBtn.innerText = "X";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                images.splice(i, 1);
                updateGallery();
            });

            div.appendChild(image);
            div.appendChild(deleteBtn);
            gallery.appendChild(div);
        });
    }

    function openLightbox(index) {
        if (images.length === 0) return;
        currentIndex = index;
        lightboxImg.src = images[index].url;
        lightboxDesc.textContent = images[index].desc;
        lightbox.style.display = "flex";
    }

    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    prevBtn.addEventListener("click", () => {
        if (images.length > 0) {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            openLightbox(currentIndex);
        }
    });

    nextBtn.addEventListener("click", () => {
        if (images.length > 0) {
            currentIndex = (currentIndex + 1) % images.length;
            openLightbox(currentIndex);
        }
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) lightbox.style.display = "none";
    });
});