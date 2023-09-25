let p = 0;
const bannerImage = document.getElementById('bannerImg');
const bannerImg = document.getElementById('tableBanner');
const errorMessage = document.getElementById('errorMessage');
bannerImg.style.display = "none";

bannerImage.addEventListener('change', function () {
    const selectedImage = bannerImage.files[0];
    const validFormats = ["image/jpeg", "image/jpg", "image/png"];
    bannerImg.style.display = "block";
    bannerImg.style.maxWidth = "100%";
    bannerImg.style.maxHeight = "300px";
    if (selectedImage) {
        if (validFormats.includes(selectedImage.type) &&
            selectedImage.width <= 1024 &&
            selectedImage.height <= 1024) {
            const reader = new FileReader();
            reader.onload = function (e) {
                bannerImg.src = e.target.result;
                localStorage.setItem('imgData', e.target.result);
                errorMessage.textContent = ""; // Clear error message
            };
            reader.readAsDataURL(selectedImage);
        } else {
            errorMessage.textContent = "Invalid image format or size (max 1024x1024).";
            bannerImg.src = ""; // Clear the image preview
            localStorage.removeItem('imgData'); // Remove invalid data from local storage
        }
    }
});

const dataImage = localStorage.getItem('imgData');
if (dataImage) {
    bannerImg.src = dataImage;
}

function makeList() {
    for (p; p < 4; p++) {
        const target = document.getElementById("target");
        const newElement = document.createElement("li");
        newElement.id = p.toString();
        newElement.innerHTML = `
            <div class="box">
                <div class="top">
                    <p>link # ${p} </p>
                    <p onclick="removeList(${p})">remove</p>
                </div>
                <select id="platform${p}">
                    <option selected value="youtube">youtube</option>
                    <option value="github">github</option>
                    <option value="twitter">Twitter</option>
                    <option value="linkedin">Linkedin</option>
                    <option value="facebook">Facebook</option>
                    <option value="twitch">Twitch</option>
                    <option value="instagram">Instagram</option>
                </select>
                <label for="LINK">Link</label>
                <input placeholder="www.youtube.com" type="text" id="LINK${p}">
            </div>
        `;
        target.appendChild(newElement);

        $(`#platform${p}`).on("change", function () {
            const value = $(this).val();
            const input = $(`#LINK${p}`);
            const btn = document.querySelector(`.btn${p}`);
            switch (value) {
                case "youtube":
                    input.attr("placeholder", "www.youtube.com");
                    btn.style.display = "block";
                    btn.style.backgroundColor = "red";
                    btn.textContent = "Youtube";
                    break;
                case "github":
                    input.attr("placeholder", "www.github.com");
                    btn.style.display = "block";
                    btn.style.backgroundColor = "black";
                    btn.textContent = "github";
                    break;
                case "twitter":
                    input.attr("placeholder", "www.twitter.com");
                    btn.style.display = "block";
                    btn.style.backgroundColor = "blue";
                    btn.textContent = "twitter";
                    break;
                case "linkedin":
                    input.attr("placeholder", "www.linkedin.com");
                    btn.style.display = "block";
                    btn.style.backgroundColor = "rgb(73, 210, 223)";
                    btn.textContent = "Linkedin";
                    break;
                case "facebook":
                    input.attr("placeholder", "www.facebook.com");
                    btn.style.display = "block";
                    btn.style.backgroundColor = "blue";
                    btn.textContent = "facebook";
                    break;
                case "twitch":
                    input.attr("placeholder", "www.twitch.com");
                    btn.style.display = "block";
                    btn.style.backgroundColor = "purple";
                    btn.textContent = "twitch";
                    break;
                case "instagram":
                    input.attr("placeholder", "www.instagram.com");
                    btn.style.display = "block";
                    btn.style.backgroundColor = "pink";
                    btn.textContent = "Instagram";
                    break;
            }
        });
    }
    p++;
}

function removeList(o) {
    const target = document.getElementById("target");
    const li = document.getElementById(o);
    target.removeChild(li);
}

function del() {
    localStorage.removeItem("imgData");
    bannerImg.src = "";
    var place = document.getElementById("place");
    place.src = "";
}

$(".save").on("click", function () {
    const dataImg = localStorage.getItem("imgData");
    const place = document.getElementById("place");
    place.src = dataImg;
    saveLinks();
});

window.onload = function () {
    localStorage.removeItem("data");
    const place = document.getElementById("place");
    place.src = dataImg;
    saveLinks();
};

window.onload = function () {
    localStorage.removeItem("data");
    const place = document.getElementById("place");
    const dataImg = localStorage.getItem("imgData");
    if (dataImg) {
        place.src = dataImg;
    }
    saveLinks();
};

function saveLinks() {
    const links = [];
    const listItems = document.querySelectorAll("#target li");
    listItems.forEach((item) => {
        const platform = item.querySelector("select").value;
        const link = item.querySelector("input").value;
        links.push({ platform, link });
    });
    localStorage.setItem("data", JSON.stringify(links));
}

function loadLinks() {
    const data = localStorage.getItem("data");
    if (data) {
        const links = JSON.parse(data);
        links.forEach((link, index) => {
            makeList();
            const listItem = document.getElementById(index.toString());
            const select = listItem.querySelector("select");
            const input = listItem.querySelector("input");
            select.value = link.platform;
            input.value = link.link;
        });
    }
}

loadLinks();