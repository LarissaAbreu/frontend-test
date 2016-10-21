function limpa() {

	document.getElementById("nome-id").value = "";
	document.getElementById("email-id").value = "";
	document.getElementById("telefone-id").value = "";
}

function validaNome() {

	var nome = document.getElementById('nome-id').value;

	var nomeReg = /[a-zA-Z]+/;

	if (!nomeReg.test(nome)) {

	    alert("Nome inválido");
	    document.getElementById('nome-id').focus();
	  }

}

function validaTelefone() {

	var telefone = document.getElementById('telefone-id').value;

	var telefoneReg = /[\(]\d{2}[\)]\d{4}[\-]\d{4}/;

	if (!telefoneReg.test(telefone)) {

	    alert("Telefone inválido");
	    document.getElementById('telefone-id').focus();
	  }

}

function validaEmail() {

	var email = document.getElementById('email-id');

	if (!email.validity.valid) {

	    alert("e-mail inválido");
	    document.getElementById('email-id').focus();
	  }

}

function salva() {

	var nome = document.getElementById("nome-id").value;
	var telefone = document.getElementById("telefone-id").value;
	var email = document.getElementById("email-id").value;

	var itemLista = document.getElementById("lista");
	itemLista.insertAdjacentHTML('afterbegin', '<li class="item-lista"><span class="primeira-linha">' + nome + '</span><br/><span>' + telefone + '</span> - <a href="#" class="clique-lista">' + email + '</a></li>');
}