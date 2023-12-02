/* Quando o botão é clicado, a função compararValor() é chamada.*/

    function compararValor() {
			var valorInput = document.getElementById("input").value;
			var selectOption = document.getElementById("select_farmacia").value;
      //instaciação da solicitação
      
			var xhttp = new XMLHttpRequest();

			xhttp.onreadystatechange = function() {

        //status 200>> OK - A requisição foi bem-sucedida.
        //reprentado pelo staus resposta do HTTP
				if (this.readyState == 4 && this.status == 200) {
					if (this.responseText.includes(valorInput)) {

            //resposta no span do html com id= resultado
						document.getElementById("resultado").innerHTML = "POSSUI o medicamento";
					} else {
						document.getElementById("resultado").innerHTML = "NÃO possui o medicamento";
					}
				}

        //A requisição não foi aberta devido a esse staus sera enviado uma mensagem
        else if (this.status == 0) {
          document.getElementById("resultado").innerHTML = "Estoque em atualização. Por favor, aguarde e realize a consulta em alguns minutos.";
        }


			};
//condiçoes ao ser selecionado o select e verificado
// o nome do medicamento nos doc.txt correspondentes
			if (selectOption == "farmacia1") {
				xhttp.open("GET", "farmacia1.txt", true);
			} else if (selectOption == "farmacia2") {
				xhttp.open("GET", "farmacia2.txt", true);
			}else if (selectOption == "farmacia3") {
        xhttp.open("GET", "farmacia3.txt", true);
      }
      else  {
        alert("Você precisa selecionar uma fármacia !")
      }

			xhttp.send();
		}
    

    

