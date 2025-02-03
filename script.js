const btn = document.querySelector("button");

var imgurls = [
    "https://images.justwatch.com/poster/308638371/s332/ben-10",
    "https://www.hollywoodreporter.com/wp-content/uploads/2015/06/ben_10_art.jpg?w=1440&h=810&crop=1",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvKPSTTOWgx3bmdI47hH13DAg_BzbAhPLt58Rh7T29ym83SQc6M1uc_gkjufpfBOP87wo&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNOUzaY7EMljNYkBOZvUGyx0yheyjfrXAwTg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EwSom-Ow_1gAxnPlXvFkFWGARX9rxnfzTkgRgVcgXn89wxyr7nTz171S9j5j75Ipi_I&usqp=CAU"
];

function random() {
    var X = Math.random() * 100;
    var Y = Math.random() * 100;
    var imgIndex = Math.floor(Math.random() * imgurls.length);
    var rotated = Math.random() * 360;
    return { X, Y, imgIndex, rotated };
}

btn.addEventListener("click", () => {
    const { X, Y, imgIndex, rotated } = random();
    var img = document.createElement("img");
    img.style.position = "absolute";
    img.style.height = "100px";
    img.style.top = X + "%";
    img.style.left = Y + "%";
    img.style.transform = "rotate(" + rotated + "deg)";
    img.setAttribute("src", imgurls[imgIndex]);
    document.body.appendChild(img);
});