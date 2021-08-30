        let alerta = alert("Para acessar o sistema - pressione OK");

        document.getElementById("botaoEnviar").addEventListener("click",
        function(evento){
        evento.preventDefault();
        });

        function myFunction() {
            var element = document.body;
            element.classList.toggle("dark-mode");
          }