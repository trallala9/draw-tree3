function drawTree(h) {
    for (var i = 0; i <= h; i++) {
        var star = "";
        for (var j = 1; j <= 2 * i + 1; j++) {
            star += "*";
        }
        console.log("%c%s", "font-size: 20px; color: green",
            star);
    }
}
drawTree(0)

function drawTree(h) {
    for (var i = 0; i <= h; i++) {
        var star = "";
        for (var j = 1; j <= 1 * i + 1; j++) {
            star += "*";
        }
        console.log("%c%s", "font-size: 20px; color: green",
            star);
    }
}
drawTree(1)

function drawTree(h) {
    for (var i = 0; i <= h; i++) {
        var star = "";
        for (var j = 1; j <= 1 * i + 1; j++) {
            star += "*";
        }
        console.log("%c%s", "font-size: 20px; color: green",
            star);
    }
}
drawTree(4)
