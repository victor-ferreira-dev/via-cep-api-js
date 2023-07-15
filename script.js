async function buscaEndereco(cep) {
	var mensagemErro = document.getElementById("erro");
	mensagemErro.innerHTML = "";
	try {
		var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
		var consultaCEPConvertida = await consultaCEP.json();
		if (consultaCEPConvertida.erro) {
			throw Error("CEP inexistente!");
		}

		var bairro = document.getElementById("bairro");
		var cidade = document.getElementById("cidade");
		var logradrouro = document.getElementById("endereco");
		var estado = document.getElementById("estado");

		bairro.value = consultaCEPConvertida.bairro;
		cidade.value = consultaCEPConvertida.localidade;
		logradrouro.value = consultaCEPConvertida.logradouro;
		estado.value = consultaCEPConvertida.uf;

		console.log(consultaCEPConvertida);
		return consultaCEPConvertida;
	} catch (erro) {
		mensagemErro.innerHTML = `<p style="margin: .5rem; color: red;">CEP Inválido! Tente novamente.</p>`;
		console.log(erro);
	}
}

var cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

// let ceps = ["01001000", "01001001", "09403100", "13574210"];
// let conjuntoCeps = ceps.map((valores) => buscaEndereco(valores));
// console.log(conjuntoCeps);
// Promise.all(conjuntoCeps).then((respostas) => console.log(respostas));

// buscaEndereco();

// var consultaCEP = fetch("https://viacep.com.br/ws/09403100/json/")
// 	.then((resposta) => resposta.json())
// 	.then((r) => {
// 		if (r.erro) {
// 			throw Error("CEP inexistente!");
// 		} else console.log(r);
// 	})
// 	.catch((erro) => {
// 		console.error("Ocorreu um erro: " + erro);
// 	})
// 	.finally((mensagem) => console.log("Consulta finalizada!"));

// console.log(consultaCEP);
