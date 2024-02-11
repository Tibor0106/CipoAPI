
function login(){
    try{
        $.ajax({
            type: "POST",
            data: {username: "valami", password: "valami"}, //mivel a jó adatok a szerver oldalon vannak ahoz a felhasználó nem fér hozzá. Ide az adatokat egy inputból vedd ki 
            url: "http://127.0.0.1:3001/adminlogin",
            success: function (response) {
                console.log(response);
            },
            error: function(){
                console.log("Sikertelen bejeletnkezés"); //itt kezelheted, hogy kiírja a hibát
                //pl document.getElemnetById("login_error").innerHTML = "Hibás felhasználónév vagy jelszó !";
                // érdemes Sütiket használni, ha ControlPanel több oldalból áll. Ha nincs Süti, hogy az admin belépett, akkor ne nyissa meg az oldalt.
            }
        });
    }catch(Err){
        console.error(Err);
        alert("Hiba lépett fel a bejelentkezés során. Próbáld újra később.")
    }
}