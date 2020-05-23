function Roll() {
    var num = Math.floor((Math.random() * 6) + 1);
    document.getElementById("RolledNum").innerHTML = num;
    document.getElementById("Turn").innerHTML = "Move a piece";

}
var Blue1 = 0;
var blue2

function Moveit(name) {
    var num = document.getElementById("RolledNum").innerHTML;


    switch (name) {
        case "blueStart1":
            if (Blue1 == 0) {
                if (num == 6) {
                    Blue1 = Blue1 + 1;
                    var obj = document.getElementById("whitePath" + "1");
                    var leftpx = obj.offsetLeft;
                    var toppx = obj.offsetTop;
                    var obj = document.getElementById("blueStart1");
                    obj.style.left = leftpx + "px";
                    obj.style.top = toppx + "px";

                }
            } else {
                if (parseInt(Blue1) + parseInt(num) > 64) {
                    if (num == 6) {
                        Blue1 = Blue1 + 1;
                        var obj = document.getElementById("bluePath" + (parseInt(Blue1) - 64 + ""));
                        alert
                        var leftpx = obj.offsetLeft;
                        var toppx = obj.offsetTop;
                        var obj = document.getElementById("blueStart1");
                        obj.style.left = leftpx + "px";
                        obj.style.top = toppx + "px";

                    }
                } else {
                    Blue1 = parseInt(Blue1) + parseInt(num);
                    alert(Blue1);
                    var obj = document.getElementById("whitePath" + Blue1);
                    var leftpx = obj.offsetLeft;
                    var toppx = obj.offsetTop;
                    var obj = document.getElementById("blueStart1");
                    obj.style.left = leftpx + "px";
                    obj.style.top = toppx + "px";
                }

            }
            break;
    }


}