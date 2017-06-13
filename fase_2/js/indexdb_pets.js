$(function () {
  $('[type=submit]').on('click', function (e) {
    html5rocks.indexedDB.addPet(
      $('input[name="nome"]').val(),
      $('input[name="raca"]').val(),
      $('input[name="tipo"]').val(),
      $('select[name="idade"]').val(),
      $('select[name="pedigree"]').val(),
      $('input[name="valor"]').val(),
      $('input[name="doenca"]').val());
    alert("Seu pet foi adicionado com sucesso!");
    return true;
  });

  $('#lista_pets').on('click', '.delete', function (e) {
    html5rocks.indexedDB.deletePet(parseInt($(this).parent().find('span').text()));
    return false;
  });

  html5rocks.indexedDB.open(); // open displays the data previously saved
});

// indexeddb
window.indexedDB = window.indexedDB || window.webkitIndexedDB || window.mozIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange;

var html5rocks = {}; // namespace (not required)
html5rocks.indexedDB = {}; // open, addPet, getAllPetItems, deletePet - are own methods
html5rocks.indexedDB.db = null; // holds the real instance of the indexedDB

// open/create
html5rocks.indexedDB.open = function() {
  // you must increment the version by +1 in order to get the 'onupgradeneeded' event called
  // ONLY there you can modify the db itself e.g create new object stores and etc.
  var request = indexedDB.open('pets', 6);
  console.log(request);
  
  request.onupgradeneeded = function(e) {
    console.log('onupgradeneeded', e);

    html5rocks.indexedDB.db = e.target.result;
    var db = html5rocks.indexedDB.db;
    console.log('db', db);

    if(!db.objectStoreNames.contains('pet')){
      db.createObjectStore('pet', {keyPath: 'timeStamp', autoIncrement: true});
      objectStore.createIndex("nome", "nome", { unique: false });
      objectStore.createIndex("raca", "raca", { unique: false });
      objectStore.createIndex("tipo", "tipo", { unique: false });
      objectStore.createIndex("idade", "idade", { unique: false });
      objectStore.createIndex("pedigree", "pedigree", { unique: false });
      objectStore.createIndex("valor", "valor", { unique: false });
      objectStore.createIndex("doenca", "doenca", { unique: false });
    }
  };

  request.onsuccess = function(e) {
    console.log('onsuccess', e);
    html5rocks.indexedDB.db = e.target.result;
    var db = html5rocks.indexedDB.db;
    console.log('db', db);

    // START chrome (obsolete - will be removed)
    if (typeof db.setVersion === 'function') {
      var versionReq = db.setVersion(3);
      versionReq.onsuccess = function (e) {
        console.log('versionReq', e);

        html5rocks.indexedDB.db = e.target.source; // instead of result
        var db = html5rocks.indexedDB.db;
        console.log('db', db);

        if(!db.objectStoreNames.contains('pet')){
          db.createObjectStore('pet', {keyPath: 'timeStamp', autoIncrement: true});
          objectStore.createIndex("nome", "nome", { unique: false });
          objectStore.createIndex("raca", "raca", { unique: false });
          objectStore.createIndex("tipo", "tipo", { unique: false });
          objectStore.createIndex("idade", "idade", { unique: false });
          objectStore.createIndex("pedigree", "pedigree", { unique: false });
          objectStore.createIndex("valor", "valor", { unique: false });
          objectStore.createIndex("doenca", "doenca", { unique: false });
        }
      }
    }
    // END chrome

    html5rocks.indexedDB.getAllPetItems();
  };
};

// add
html5rocks.indexedDB.addPet = function(nome,raca,tipo,idade,pedigree,valor,doenca) {
  var db = html5rocks.indexedDB.db;
  var trans = db.transaction(['pet'], 'readwrite');
  var store = trans.objectStore('pet');
  var request = store.put({
    'nome': nome,
    'raca': raca,
    'tipo': tipo,
    'idade': idade,
    'pedigree': pedigree,
    'valor': valor,
    'doenca': doenca,
    'timeStamp' : new Date().getTime()
  });

  request.onsuccess = function(e) {
    // Re-render all the pet's
    html5rocks.indexedDB.getAllPetItems();
  };

  request.onerror = function(e) {
    console.log(e.value);
  };
};

// read
html5rocks.indexedDB.getAllPetItems = function() {
  $('#lista_pets').html('');
  $('#lista_pets').html('<tr><th>Nome</th><th>Raça</th><th>Tipo</th><th>Idade</th><th>Pedigree?</th><th>Valor</th><th style="width:5%">Remover</th></tr>');
  
  var db = html5rocks.indexedDB.db;
  var trans = db.transaction(['pet'], 'readwrite');
  var store = trans.objectStore('pet');

  // Get everything in the store;
  var keyRange = IDBKeyRange.lowerBound(0);
  var cursorRequest = store.openCursor(keyRange);

  cursorRequest.onsuccess = function(e) {
    var result = e.target.result;
    if(!!result == false)
      return;

    renderPet(result.value);
    result.continue();
  };

  cursorRequest.onerror = html5rocks.indexedDB.onerror;
};

// delete
html5rocks.indexedDB.deletePet = function(id) {
  var db = html5rocks.indexedDB.db;
  var trans = db.transaction(['pet'], 'readwrite');
  var store = trans.objectStore('pet');

  var request = store.delete(id);

  request.onsuccess = function(e) {
    html5rocks.indexedDB.getAllPetItems();  // Refresh the screen
  };

  request.onerror = function(e) {
    console.log(e);
  };
};

// helper
function renderPet(row) {
  var tr ='<tr><td>'+row.nome+'</td><td>'+row.raca+'</td><td>'+row.tipo+'</td><td>'+row.idade+'</td><td>'+row.pedigree+'</td><td>'+row.valor+'</td><td><a href="#" class="delete">Remover</a><span style="display:none;">'+row.timeStamp+'</span></td></tr>'
  $('#lista_pets').append(tr);
}

