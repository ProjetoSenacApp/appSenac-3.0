rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
  
  	// Lista de itens para 'select dinâmico'
		match /select01/{select} {
      // Só pode ser lido se um usuário está logado
    	allow read: if request.auth.uid != null;
    	
      // Não pode ser alterado
      allow write: if false;
    }

		// Perfil de usuário
		match /users/{userId} {
    	// Somente o proprietário pode ler e editar
      allow read, update, delete: if request.auth.uid == userId;
      
      // Somente um usuário logado pode se cadastrar
      allow create: if request.auth.uid != null;
    }
    
    // Mensagens
    match /messages/{userMessages} {
    	allow read: if true;
    }
    
  	// Quaisquer outros documentos estão bloqueados
		match /{document} {
			allow read: if false;
			allow write: if false;
		}
  }
}