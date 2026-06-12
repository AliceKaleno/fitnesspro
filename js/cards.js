const buttons =
document.querySelectorAll(".toggle-btn");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        const details =
        button.nextElementSibling;

        details.classList.toggle("active");

        if(details.classList.contains("active")){

            button.textContent =
            "Saiba Menos";

        }else{

            button.textContent =
            "Saiba Mais";

        }

    });

});