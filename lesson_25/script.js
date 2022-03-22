function changeC(Obj) {
    Obj.toggleClass("hidden visible")
    let changeTimeout = setTimeout( ()  => {
         if (Obj.css("background-image") == hex){
            Obj.css("background-image",  "url(" + AnswGrid[Obj.attr("row") * 4 + Number(Obj.attr("col"))] + ")")
         }else {
            Obj.css("background-image", hex)
         }
    }, 300)
}

let AnswGrid = [], B = [], bank = ["/images/1.jpg", "/images/1.jpg", "/images/2.jpg", "/images/2.jpg", "/images/3.jpg", "/images/3.jpg", "/images/4.jpg", "/images/4.jpg", "/images/5.jpg", 
"/images/5.jpg", "/images/6.jpg", "/images/6.jpg", "/images/7.jpg", "/images/7.jpg", "/images/8.jpg", "/images/8.jpg", "/images/9.jpg", "/images/9.jpg", "/images/10.jpg", "/images/10.jpg"],
k = false, hex = 'url("http://127.0.0.1:5500/images/hex.jpg")';
for (let i = 0; i < 20; i++) {
    let a = Math.floor(Math.random() * bank.length)
    AnswGrid.push(bank[a])
    bank.splice(a, 1)
}

for (let i = 0; i < 5; i++) {
    $("#grid").append($("<li>"))
}

$("li").each( function (index) {
    for (let i = 0; i < 4; i++){
        $(this).append($("<div>").attr("row", index).attr("col", i).css("background-image", "url(" + AnswGrid[index * 4 + i] + ")"))
    }
});

let startTimeout = setTimeout( () => {
    $("ul div").each( function () {
        $(this).toggleClass("visible")
        changeC($(this))
    })
}, 2000)

$("ul div").click( function () {
    if ($(this).attr("class") == "hidden") {
        console.log(B);
        changeC($(this))
        if (k){
            let a = B[0]
            if (AnswGrid[$(this).attr("row") * 4 + Number($(this).attr("col"))] != AnswGrid[a.attr("row") * 4 + Number(a.attr("col"))]){
                let hideDelay = setTimeout( () => {
                    changeC($(this))
                    changeC(a)
                }, 800)
            }
            B.splice(0, 1)
            k  = false
        }else{
            B.push($(this))
            k = true
        }
    }
});