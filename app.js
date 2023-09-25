let p = 0;

var bannerImage = document.getElementById('bannerImg');
var bannerImg = document.getElementById('tableBanner');
var errorMessage = document.getElementById('errorMessage');
bannerImg.setAttribute("style", "display:none");

bannerImage.addEventListener('change', function () {

    var selectedImage = bannerImage.files[0];
    var validFormats = ["image/jpeg", "image/jpg", "image/png"];
    bannerImg.setAttribute("style", "display:block; max-width: 100%; max-height: 300px;");
    if (selectedImage) {
        if (validFormats.includes(selectedImage.type) &&
            selectedImage.size <= (1024 * 1024)) {
            var reader = new FileReader();
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

var dataImage = localStorage.getItem('imgData');
if (dataImage) {
    bannerImg.src = dataImage;
}

function Makelist() {

    for (p; p < 4; p++) {
        const target = document.getElementById("target");
        const newElement = document.createElement("li");
        newElement.setAttribute("id", `${p}`);
        newElement.innerHTML = `

                                <div class="box"><div class="top">
                                    <p>link # ${p} </p>
                                    <p  onclick="removeList(${p})" >remove</p>
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
                                    <input placeholder="www.youtube.com" type="text" name="" id="LINK${p}">
                                </div>
    `
        target.appendChild(newElement);

        $("#platform0").on("change", function () {

            const value = $(this).val(); // Get the selected value of platform0
            const input = $("#LINK0");
            const btn0 = document.querySelector(".btn0");
            switch (value) {
                case "youtube":
                    input.attr("placeholder", "www.youtube.com");
                    btn0.setAttribute("style", "display:block; background-color:red;");
                    btn0.textContent = "Youtube";
                    break;
                case "github":
                    input.attr("placeholder", "www.github.com");
                    btn0.setAttribute("style", "display:block; background-color: black;");
                    btn0.textContent = "github";
                    break;
                case "twitter":
                    input.attr("placeholder", "www.twitter.com");
                    btn0.setAttribute("style", "display:block; background-color: blue;");
                    btn0.textContent = "twitter";
                    break;
                case "linkedin":
                    input.attr("placeholder", "www.linkedin.com");
                    btn0.setAttribute("style", "display:block; background-color:  rgb(73, 210, 223) ;");
                    btn0.textContent = "Linkedin";
                    break;
                case "facebook":
                    input.attr("placeholder", "www.facebook.com");
                    btn0.setAttribute("style", "display:block; background-color: blue;");
                    btn0.textContent = "facebook";
                    break;
                case "twitch":
                    input.attr("placeholder", "www.twitch.com");
                    btn0.setAttribute("style", "display:block; background-color: purple;");
                    btn0.textContent = "twitch";
                    break;
                case "instagram":
                    input.attr("placeholder", "www.instagram.com");
                    btn0.setAttribute("style", "display:block; background-color: pink;");
                    btn0.textContent = "Instagram";
                    break;
            }
        });

        $("#platform1").on("change", function () {

            const value = $(this).val(); // Get the selected value of platform0
            const input = $("#LINK1");
            const btn1 = document.querySelector(".btn1");
            switch (value) {
                case "youtube":
                    input.attr("placeholder", "www.youtube.com");
                    btn1.setAttribute("style", "display:block; background-color: red;");
                    btn1.textContent = "youtube";
                    break;
                case "github":
                    input.attr("placeholder", "www.github.com");
                    btn1.setAttribute("style", "display:block; background-color: black;");
                    btn1.textContent = "github";;
                    break;
                case "twitter":
                    input.attr("placeholder", "www.twitter.com");
                    btn1.setAttribute("style", "display:block; background-color: blue;");
                    btn1.textContent = "twitter";
                    break;
                case "linkedin":
                    input.attr("placeholder", "www.linkedin.com");
                    btn1.setAttribute("style", "display:block; background-color: rgb(73, 210, 223);");
                    btn1.textContent = "Linkedin";
                    break;
                case "facebook":
                    input.attr("placeholder", "www.facebook.com");
                    btn1.setAttribute("style", "display:block; background-color: blue;");
                    btn1.textContent = "facebook";
                    break;
                case "twitch":
                    input.attr("placeholder", "www.twitch.com");
                    btn1.setAttribute("style", "display:block; background-color: purple;");
                    btn1.textContent = "twitch";;
                    break;
                case "instagram":
                    input.attr("placeholder", "www.instagram.com");
                    btn1.setAttribute("style", "display:block; background-color: pink;");
                    btn1.textContent = "Instagram";
                    break;
            }
        });


        $("#platform2").on("change", function () {

            const value = $(this).val(); // Get the selected value of platform0
            const input = $("#LINK2");
            const btn2 = document.querySelector(".btn2");
            switch (value) {
                case "youtube":
                    input.attr("placeholder", "www.youtube.com");
                    btn2.setAttribute("style", "display:block; background-color: red;");
                    btn2.textContent = "youtube";
                    break;
                case "github":
                    input.attr("placeholder", "www.github.com");
                    btn2.setAttribute("style", "display:block; background-color: black;");
                    btn2.textContent = "github";
                    break;
                case "twitter":
                    input.attr("placeholder", "www.twitter.com");
                    btn2.setAttribute("style", "display:block; background-color: blue;");
                    btn2.textContent = "twitter";
                    break;
                case "linkedin":
                    input.attr("placeholder", "www.linkedin.com");
                    btn2.setAttribute("style", "display:block; background-color: rgb(73, 210, 223);");
                    btn2.textContent = "Linkedin";
                    break;
                case "facebook":
                    input.attr("placeholder", "www.facebook.com");
                    btn2.setAttribute("style", "display:block; background-color: blue;");
                    btn2.textContent = "facebook";
                    break;
                case "twitch":
                    input.attr("placeholder", "www.twitch.com");
                    btn2.setAttribute("style", "display:block; background-color: purple;");
                    btn2.textContent = "twitch";
                    break;
                case "instagram":
                    input.attr("placeholder", "www.instagram.com");
                    btn2.setAttribute("style", "display:block; background-color: pink;");
                    btn2.textContent = "Instagram";
                    break;
            }
        });


        $("#platform3").on("change", function () {

            const value = $(this).val(); // Get the selected value of platform0
            const input = $("#LINK3");
            const btn3 = document.querySelector(".btn3");
            switch (value) {
                case "youtube":
                    input.attr("placeholder", "www.youtube.com");
                    btn3.setAttribute("style", "display:block; background-color: red;");
                    btn3.textContent = "Youtube";

                    break;
                case "github":
                    input.attr("placeholder", "www.github.com");
                    btn3.setAttribute("style", "display:block; background-color: black;");
                    btn3.textContent = "github";
                    break;
                case "twitter":
                    input.attr("placeholder", "www.twitter.com");
                    btn3.setAttribute("style", "display:block; background-color: blue;");
                    btn3.textContent = "twitter";
                    break;
                case "linkedin":
                    input.attr("placeholder", "www.linkedin.com");
                    btn3.setAttribute("style", "display:block; background-color:  rgb(73, 210, 223);");
                    btn3.textContent = "Linkedin";
                    break;
                case "facebook":
                    input.attr("placeholder", "www.facebook.com");
                    btn3.setAttribute("style", "display:block; background-color: blue");
                    btn3.textContent = "facebook";
                    break;
                case "twitch":
                    input.attr("placeholder", "www.twitch.com");
                    btn3.setAttribute("style", "display:block; background-color: purple;");
                    btn3.textContent = "twitch";
                    break;
                case "instagram":
                    input.attr("placeholder", "www.instagram.com");
                    btn3.setAttribute("style", "display:block; background-color: pink;");
                    btn3.textContent = "Instagram";
                    break;
            }
        });

        break;
    }
    p++;

}
function removeList(o) {

    const target = document.getElementById("target");
    const li = document.getElementById(o);
    console.log(li);
    target.removeChild(li);
}
function switchh(value) {

    switch (value) {
        case "youtube":
            input.attr("placeholder", "www.youtube.com");
            break;
        case "github":
            input.attr("placeholder", "www.github.com");
            break;
        case "twitter":
            input.attr("placeholder", "www.twitter.com");
            break;
        case "linkedin":
            input.attr("placeholder", "www.linkedin.com");
            break;
        case "facebook":
            input.attr("placeholder", "www.facebook.com");
            break;
        case "twitch":
            input.attr("placeholder", "www.twitch.com");
            break;
        case "instagram":
            input.attr("placeholder", "www.instagram.com");
            break;
    }
}
function del() {
    localStorage.removeItem("imgData");
    // location.reload();
    bannerImg.src = "";
    var place = document.getElementById("place");
    place.src = "";

}
$(".save").on("click", function () {

    var dataImg = localStorage.getItem("imgData");
    var place = document.getElementById("place");
    place.src = dataImg;
    saveLinks();
    saveDetails();
})
window.onload = function abc() {
    localStorage.removeItem("data");
    var place = document.getElementById("place");
    if (dataImage) {
        place.src = dataImage;
    }
}

function saveLinks() {

    localStorage.removeItem("data");
    const link0 = document.querySelector("#LINK0") || "#";
    const link1 = document.querySelector("#LINK1") || "#";
    const link2 = document.querySelector("#LINK2") || "#";
    const link3 = document.querySelector("#LINK3") || "#";

    const link0Value = link0.value || "#";
    const link1Value = link1.value || "#";
    const link2Value = link2.value || "#";
    const link3Value = link3.value || "#";

    // Helper function to validate a URL
    function isValidURL(url) {
        // Skip validation if the length is less than 1
        if (url.length <= 2) {
            return true;
        }
        return url.length > 4 && url.includes("www.") || url.includes("#");
    }

    // Check and save link0Value
    if (isValidURL(link0Value)) {
        const data = {
            link: "https://" + link0Value,
        };
        let temp = JSON.parse(localStorage.getItem("data"));
        let Final = temp ? temp : [];
        Final.push(data);
        localStorage.setItem("data", JSON.stringify(Final));
    } else {
        alert("Invalid URL 1");
    }

    // Check and save link1Value
    if (isValidURL(link1Value)) {
        const data = {
            link: "https://" + link1Value,
        };
        let temp = JSON.parse(localStorage.getItem("data"));
        let Final = temp ? temp : [];
        Final.push(data);
        localStorage.setItem("data", JSON.stringify(Final));
    } else {
        alert("Invalid URL 2");
    }

    // Check and save link2Value
    if (isValidURL(link2Value)) {
        const data = {
            link: "https://" + link2Value,
        };
        let temp = JSON.parse(localStorage.getItem("data"));
        let Final = temp ? temp : [];
        Final.push(data);
        localStorage.setItem("data", JSON.stringify(Final));
    } else {
        alert("Invalid URL 3");
    }

    // Check and save link3Value
    if (isValidURL(link3Value)) {
        const data = {
            link: "https://" + link3Value,
        };
        let temp = JSON.parse(localStorage.getItem("data"));
        let Final = temp ? temp : [];
        Final.push(data);
        localStorage.setItem("data", JSON.stringify(Final));
    } else {
        alert("Invalid URL 4");
    }

}

function saveDetails() {
    localStorage.removeItem("details");

    const Fname = document.getElementById("fName").value;
    const lname = document.getElementById("lName").value;
    const mail = document.getElementById("email").value;

    if (Fname.length > 0) {
        let tem = JSON.parse(localStorage.getItem("details"));
        let getdetails = tem ? tem : [];
        getdetails.push(Fname);
        localStorage.setItem("details", JSON.stringify(getdetails));
    }

    if (lname.length > 0) {
        let tem = JSON.parse(localStorage.getItem("details"));
        let getdetails = tem ? tem : [];
        getdetails.push(lname);
        localStorage.setItem("details", JSON.stringify(getdetails));
    }

    if (mail.length > 0) {
        let tem = JSON.parse(localStorage.getItem("details"));
        let getdetails = tem ? tem : [];
        getdetails.push(mail);
        localStorage.setItem("details", JSON.stringify(getdetails));
    }

}

$("#pre").on("click", function () {
    //     const btnUl = document.getElementById("btn-ul");
    // btnUl.removeChild(newli);
    const head = document.querySelector(".head")
    const con = document.querySelector(".container")
    con.setAttribute("style", "display:none");
    head.setAttribute("style", "display:none");
    if (localStorage.getItem("imgData")) {
        let temp = localStorage.getItem("imgData");
        let Data = temp ? temp : [];
        const dp = document.getElementById("dp");
        dp.src = Data;
    };
    if (localStorage.getItem("details")) {

        let tem = JSON.parse(localStorage.getItem("details"));
        let getdetails = tem ? tem : [];
        const name = document.getElementById("name");
        const maill = document.getElementById("mail");
        name.innerText = getdetails[0] + getdetails[1];
        maill.innerText = getdetails[2];
    };
    let te = JSON.parse(localStorage.getItem("data"));
    let linkData = te ? te : [];

    linkData.forEach(o => {
        if (o.link.includes("www.")) {
            debugger
            const url = o.link;
            const extractedText = url.match(/www\.(.*?)\.com/);
    
            const btnUl = document.getElementById("btn-ul");
            var newli = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = extractedText[1];
            newli.appendChild(button);
    
           
            switch (extractedText[1]) {
                case "youtube":
                    button.style.backgroundColor = "red";
                    break;
                case "github":
                    button.style.backgroundColor = "black";
                    break;
                case "twitter":
                    button.style.backgroundColor = "blue";
                    break;
                case "linkedin":
                    button.style.backgroundColor = "rgb(73, 210, 223)";
                    break;
                case "facebook":
                    button.style.backgroundColor = "blue";
                    break;
                case "twitch":
                    button.style.backgroundColor = "purple";
                    break;
                case "instagram":
                    button.style.backgroundColor = "pink";
                    break;
                default:
                    button.style.backgroundColor = "gray"; // Default color for unknown cases
            }
    
            const link = document.createElement('a');
            link.href = o.link;
            link.appendChild(button);
            newli.appendChild(link);
            btnUl.appendChild(newli);
        }
    });
    
})


$("#back").on("click", function () {
    debugger
    document.getElementById("link").click();
    const head = document.querySelector(".head");
    const con = document.querySelector(".container");
    con.setAttribute("style", "display:flex");
    head.setAttribute("style", "display:flex");
    const btnUl = document.getElementById("btn-ul");
    // btnUl.removeChild("li");
    $('ul.list li').remove()
})

