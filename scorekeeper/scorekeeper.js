(function() {

    "use strict";

    var plOneScore = 0;
    var plTwoScore = 0;
    var lmtToPlay = 5;

    var playerOne = document.getElementById("playerOne");
    var playerTwo = document.getElementById("playerTwo");

    document.getElementById("limit").textContent = 5;

    var txtNum = document.getElementById("limitToPlay");
    txtNum.addEventListener("change", function() {

        lmtToPlay = Number(txtNum.value);
        document.getElementById("limit").textContent = lmtToPlay;
    });

    //Player One button
    var btnPlOne = document.getElementById("btnPlayerOne");
    btnPlOne.addEventListener("click", function() {

        if (plOneScore < lmtToPlay && plTwoScore < lmtToPlay) {
            plOneScore++;
            playerOne.textContent = plOneScore;

            if (plOneScore === lmtToPlay) {
                playerOne.style.color = "green";
                playerTwo.style.color = "red";
                txtNum.disabled = true;
                btnPlOne.disabled = true;
                btnPlTwo.disabled = true;
            }
        }
    });

    //Player Two button
    var btnPlTwo = document.getElementById("btnPlayerTwo");
    btnPlTwo.addEventListener("click", function() {

        if (plOneScore < lmtToPlay && plTwoScore < lmtToPlay) {
            plTwoScore++;
            playerTwo.textContent = plTwoScore;

            if (plTwoScore === lmtToPlay) {
                playerTwo.style.color = "green";
                playerOne.style.color = "red";
                txtNum.disabled = true;
                btnPlOne.disabled = true;
                btnPlTwo.disabled = true;
            }
        }
    });

    //Reset button
    var btnReset = document.getElementById("reset");
    btnReset.addEventListener("click", function() {
        // location.reload();
        playerTwo.style.color = "black";
        playerOne.style.color = "black";
        playerOne.textContent = 0;
        playerTwo.textContent = 0;
        txtNum.disabled = false;
        btnPlOne.disabled = false;
        btnPlTwo.disabled = false;
        plTwoScore = 0;
        plOneScore = 0;
        lmtToPlay = 5;
    });


    //Count events

    // var count = 0;
    // var tables = document.querySelectorAll("table");

    // for (var i = 0; i < tables.length; i++) {
    //     var tr = tables[i].querySelectorAll("tr");

    //     for (var t = 0; t < tr.length; t++) {
    //         var a = tr[t].querySelectorAll("a");
    //         for (var lnk = 0; lnk < a.length; lnk++) {
    //             if (a[lnk].baseURI.indexOf("Events") !== -1) {
    //                 count++;
    //             }
    //         }
    //     }

    // }

    // console.log("Number of events found: " + count);

})();