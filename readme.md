# Social Network Library

## Utilisation

1. Copier le dossier de cette librairie dans un dossier lib (à créer si besoin) situé dans le dossier src de votre projet.
2. Dans le fichier config.json, ajouter l'adresse de l'API de réseau social qui vous a été communiquée par l'intervenant.
3. Importer et utiliser les fonctions dans vos composant, par exemple:

```
import { login } from "./lib/social-network-library"; // Import de la fonction login

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        let result = await login(email, password); // Utilisation de la fonction login
    }


    ...
}
```

## Liste des fonctions

**Attention:** Toutes les fonctions retournant une promesse (Promise) sont asynchrones. Elle doivent donc être appelées dans une fonction async et avec le mot clef await.

<dl>
<dt><a href="#register">register(firstname, lastname, email, password)</a> ⇒ <code>Promise</code></dt>
<dd><p>Resgiter / Inscription - Cette fonction sert à créer un compte utilisateur</p>
</dd>
<dt><a href="#login">login(email, password)</a> ⇒ <code>Promise</code></dt>
<dd><p>Login / Connexion - Cette fonction sert à connecter un utilisateur</p>
</dd>
<dt><a href="#getPosts">getPosts(page, limit)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get Posts / Récupérer les posts de tous les utilisateurs</p>
</dd>
</dl>
<dl>
<dt><a href="#createPost">createPost(title, content)</a> ⇒ <code>Promise</code></dt>
<dd><p>Create post - Créer un post avec le compte utilisateur actuellement connecté</p>
</dd>
<dt><a href="#addComment">addComment(postId, content)</a> ⇒ <code>Promise</code></dt>
<dd><p>Add comment - Ajouter un commentaire à un post avec le compte utilisateur actuellement connecté</p>
</dd>
<dt><a href="#addLike">addLike(postId)</a> ⇒ <code>Promise</code></dt>
<dd><p>Add like - Ajouter un like à un post avec le compte utilisateur actuellement connecté</p>
</dd>
</dl>
<dl>
<dt><a href="#isUserLoggedIn">isUserLoggedIn()</a> ⇒ <code>Boolean</code></dt>
<dd><p>Is user logged in - Verifier si l&#39;utilisateur est connecté</p>
</dd>
<dt><a href="#logout">logout()</a> ⇒ <code>Object</code></dt>
<dd><p>Logout - Déconnexion</p>
</dd>
<dt><a href="#getCurrentUserProfile">getCurrentUserProfile()</a> ⇒ <code>Promise</code></dt>
<dd><p>Get current user profile - Récuépérer les infromation du profil de l&#39;utilisateur connecté</p>
</dd>
<dt><a href="#getUserProfile">getUserProfile(userId)</a> ⇒ <code>Promise</code></dt>
<dd><p>Get user profile - Récupérer les informations de profil d&#39;un utilisateur</p>
</dd>
<dt><a href="#updateCurrentUserProfile">updateCurrentUserProfile(firstname, lastname, email, age, occupation)</a> ⇒ <code>Promise</code></dt>
<dd><p>Update current user profile - Modifier les informations du profil de l&#39;utilisateur connecté</p>
</dd>
</dl>

<a name="register"></a>

## register(firstname, lastname, email, password) ⇒ <code>Promise</code>

Resgiter / Inscription - Cette fonction sert à créer un compte utilisateur

**Valeur de retour**: <code>Promise</code> - La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}.

| Param     | Type                | Description   |
| --------- | ------------------- | ------------- |
| firstname | <code>String</code> | Prénom        |
| lastname  | <code>String</code> | Nom           |
| email     | <code>String</code> | Adresse email |
| password  | <code>String</code> | Mot de passe  |

<a name="login"></a>

## login(email, password) ⇒ <code>Promise</code>

Login / Connexion - Cette fonction sert à connecter un utilisateur

**Valeur de retour**: <code>Promise</code> - La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}

| Param    | Type                | Description   |
| -------- | ------------------- | ------------- |
| email    | <code>String</code> | Adresse email |
| password | <code>String</code> | Mot de passe  |

<a name="getPosts"></a>

## getPosts(page, limit) ⇒ <code>Promise</code>

Get Posts / Récupérer les posts de tous les utilisateurs

**Valeur de retour**: <code>Promise</code> - La valeur de retour est une promesse (à récupérer avec await) contenant un objet en cas
succès de la forme: {posts: [Posts], page: Number, totalPages: Number}. En cas d'erreur, l'objet resemblera à:
{message: String}

| Param | Type                | Description                                  |
| ----- | ------------------- | -------------------------------------------- |
| page  | <code>Number</code> | Numéro de la page à récupérer (par défaut 0) |
| limit | <code>Number</code> | Limite de posts par page (par défaut 20)     |

<a name="createPost"></a>

## createPost(title, content) ⇒ <code>Promise</code>

Create post - Créer un post avec le compte utilisateur actuellement connecté

**Valeur de retour**: <code>Promise</code> - La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}

| Param   | Type                | Description |
| ------- | ------------------- | ----------- |
| title   | <code>String</code> | Titre       |
| content | <code>String</code> | Contenu     |

<a name="addComment"></a>

## addComment(postId, content) ⇒ <code>Promise</code>

Add comment - Ajouter un commentaire à un post avec le compte utilisateur actuellement connecté

**Valeur de retour**: <code>Promise</code> - La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}

| Param   | Type                | Description                              |
| ------- | ------------------- | ---------------------------------------- |
| postId  | <code>String</code> | Id du post auquel ajouter le commentaire |
| content | <code>String</code> | Contenu du commentaire                   |

<a name="addLike"></a>

## addLike(postId) ⇒ <code>Promise</code>

Add like - Ajouter un like à un post avec le compte utilisateur actuellement connecté

**Valeur de retour**: <code>Promise</code> - La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}

| Param  | Type                | Description                       |
| ------ | ------------------- | --------------------------------- |
| postId | <code>String</code> | Id du post auquel ajouter le like |

<a name="isUserLoggedIn"></a>

## isUserLoggedIn() ⇒ <code>Boolean</code>

Is user logged in - Verifier si l'utilisateur est connecté

**Valeur de retour**: <code>Boolean</code> - La valeur de retour est un booleen  
<a name="logout"></a>

## logout() ⇒ <code>Promise</code>

Logout - Déconnexion

**Valeur de retour**: <code>Promise</code> - La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean}
<a name="getCurrentUserProfile"></a>

## getCurrentUserProfile() ⇒ <code>Promise</code>

Get current user profile - Récuépérer les infromation du profil de l'utilisateur connecté

**Valeur de retour**: <code>Promise</code> - La valeur de retour est une promesse (à récupérer avec await) contenant un objet en cas
succès de la forme: {firstname: String, lastname: String, email: String, age: Number, occupation: String}. En cas d'erreur, l'objet resemblera à:
{message: String}  
<a name="getUserProfile"></a>

## getUserProfile(userId) ⇒ <code>Promise</code>

Get user profile - Récupérer les informations de profil d'un utilisateur

**Valeur de retour**: <code>Promise</code> - La valeur de retour est une promesse (à récupérer avec await) contenant un objet en cas
succès de la forme: {firstname: String, lastname: String, email: String, age: Number, occupation: String}. En cas d'erreur, l'objet resemblera à:
{message: String}

| Param  | Type                | Description         |
| ------ | ------------------- | ------------------- |
| userId | <code>String</code> | Id de l'utilisateur |

<a name="updateCurrentUserProfile"></a>

## updateCurrentUserProfile(firstname, lastname, email, age, occupation) ⇒ <code>Promise</code>

Update current user profile - Modifier les informations du profil de l'utilisateur connecté

**Valeur de retour**: <code>Promise</code> - La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}.

| Param      | Type                | Description |
| ---------- | ------------------- | ----------- |
| firstname  | <code>String</code> | Prénom      |
| lastname   | <code>String</code> | Nom         |
| email      | <code>String</code> | Email       |
| age        | <code>Number</code> | Age         |
| occupation | <code>String</code> | Poste       |
