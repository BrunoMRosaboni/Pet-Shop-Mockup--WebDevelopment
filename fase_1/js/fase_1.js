function valida_login(form) {
  var filtro_mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filtro_mail.test(form.email.value) || form.email.value=="") {
      alert("Preencha o e-mail corretamente.");
      form.email.focus();
      return false;
    }
  if (form.password.value=="") {
      alert("O campo \"Senha\" nao pode ficar em branco.");
      form.password.focus();
      return false;
    }
  return true;
}

function valida_cadastro_usuario(form) {
  if (form.nome.value=="") {
      alert("O campo \"Nome completo\" nao pode ficar em branco.");
      form.nome.focus();
      return false;
    }
  if (form.cidade.value=="") {
      alert("O campo \"Cidade\" nao pode ficar em branco.");
      form.cidade.focus();
      return false;
    }
  if (form.estado.value=="") {
      alert("O campo \"Estado\" nao pode ficar em branco.");
      form.estado.focus();
      return false;
    }
  if (form.telefone.value=="") {
      alert("O campo \"Telefone\" nao pode ficar em branco.");
      form.telefone.focus();
      return false;
    }
  if (form.telefone.value.length < 14 ) {
      alert("O campo \"Telefone\" deve ser preenchido corretamente.");
      form.telefone.focus();
      return false;
    }
  var filtro_mail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (!filtro_mail.test(form.email.value) || form.email.value=="") {
      alert("Preencha o e-mail corretamente.");
      form.email.focus();
      return false;
    }
  if (form.password.value=="") {
      alert("O campo \"Senha\" nao pode ficar em branco.");
      form.password.focus();
      return false;
  }
  var filtro_mi = /[a-z]+/;
  var filtro_ma = /[A-Z]+/;
  var filtro_dig = /[0-9]+/;
  var filtro_especial = /\W+/;
  if (!filtro_mi.test(form.password.value) ||
      !filtro_ma.test(form.password.value) ||
      !filtro_dig.test(form.password.value) ||
      !filtro_especial.test(form.password.value) ) {
      alert("O campo \"Senha\" deve conter pelo menos uma letra maiuscula, uma letra minuscula, um digito e um caracter especial.");
      form.password.focus();
      return false;
  }
  if (form.retry_password.value=="") {
      alert("O campo \"Confirmar Senha\" nao pode ficar em branco.");
      form.retry_password.focus();
      return false;
  }
  if (form.password.value !== form.retry_password.value) {
      alert("As senha digitadas nao conferem.");
      form.password.focus();
      return false;
  }
  return true;
}

function valida_cadastro_pet(form) {
  if (form.nome.value=="") {
      alert("O campo \"Nome\" nao pode ficar em branco.");
      form.nome.focus();
      return false;
    }
  if (form.raca.value=="") {
      alert("O campo \"Raça\" nao pode ficar em branco.");
      form.raca.focus();
      return false;
    }
  if (form.tipo.value=="") {
      alert("O campo \"Tipo\" nao pode ficar em branco.");
      form.tipo.focus();
      return false;
    }
  if (form.idade.value=="") {
      alert("O campo \"Idade\" nao pode ficar em branco.");
      form.idade.focus();
      return false;
    }
  if (form.pedigree.value=="") {
      alert("O campo \"Pedigree\" nao pode ficar em branco.");
      form.pedigree.focus();
      return false;
  }
  if (form.valor.value=="") {
      alert("O campo \"Valor\" nao pode ficar em branco.");
      form.valor.focus();
      return false;
  }
  if (form.stats.value=="") {
      alert("O campo \"Status\" nao pode ficar em branco.");
      form.stats.focus();
      return false;
  }
  return true;
}

function valida_solicitar_servico(form) {
  if (form.nome.value=="") {
      alert("O campo \"Nome\" nao pode ficar em branco.");
      form.nome.focus();
      return false;
    }
  if (form.raca.value=="") {
      alert("O campo \"Raça\" nao pode ficar em branco.");
      form.raca.focus();
      return false;
    }
  if (form.tipo.value=="") {
      alert("O campo \"Tipo\" nao pode ficar em branco.");
      form.tipo.focus();
      return false;
    }
  if (form.idade.value=="") {
      alert("O campo \"Idade\" nao pode ficar em branco.");
      form.idade.focus();
      return false;
    }
  if (form.pedigree.value=="") {
      alert("O campo \"Pedigree\" nao pode ficar em branco.");
      form.pedigree.focus();
      return false;
  }
  if (form.valor.value=="") {
      alert("O campo \"Valor\" nao pode ficar em branco.");
      form.valor.focus();
      return false;
  }
  if (form.stats.value=="") {
      alert("O campo \"Status\" nao pode ficar em branco.");
      form.stats.focus();
      return false;
  }
  if (form.theDate.value=="") {
      alert("O campo \"Data\" nao pode ficar em branco.");
      form.theDate.focus();
      return false;
  }
  if (form.hora.value=="") {
      alert("O campo \"Hora\" nao pode ficar em branco.");
      form.hora.focus();
      return false;
  }
  return true;
}