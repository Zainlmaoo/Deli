document.getElementById("open-btn").addEventListener("click", function() {
    document.querySelector(".envelope").classList.toggle("open");
    document.getElementById("love-message").innerHTML = 
        "Hi Delisha! <br> This is to let you know that you're super special to me and I would give you the whole entire world just to see that precious smile of yours! You mean a lot to me and I love talking to you and spending time with you.You are just amazing in everyway possible meri jaan!! I really hope you like this and it brings a smile on your face. <br> Z <br> ❤️";
});

setTimeout(() => {
    confetti({
        particleCount: 1000,
        spread: 1000,
        colors: ['#ff0000', '#ff69b4', '#ffb6c1'],
        shapes: ['circle'], // Hearts aren't natively supported, but you can use images for that.
        origin: { y: 0.6 }
    });
}, 12000); // Delay confetti for a smooth effect
;
