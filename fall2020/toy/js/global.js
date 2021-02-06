window.addEventListener("load",function() {
    function change() {
        var image=document.getElementById('lightsOn')
        image.src="images/lightsOff.png"
    }

    document.getElementById("lightsOn").addEventListener("click", change);
});