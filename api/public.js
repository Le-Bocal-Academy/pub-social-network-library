/**
 * api/public.js - Public methods
 */

/* Imports */
import fetchFromApi from "../src/fetchFromApi";

/* Methods */

/**
 * Resgiter / Inscription - Cette fonction sert à créer un compte utilisateur
 * @param {String} firstname Prénom
 * @param {String} lastname Nom
 * @param {String} email Adresse email
 * @param {String} password Mot de passe
 * @returns {Promise} La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}.
 */
export async function register(firstname, lastname, email, password) {
  return await fetchFromApi("/register", "POST", {
    firstname,
    lastname,
    email,
    password,
  });
}

/**
 * Login / Connexion - Cette fonction sert à connecter un utilisateur
 * @param {String} email Adresse email
 * @param {String} password Mot de passe
 * @returns {Promise} La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}
 */
export async function login(email, password) {
  const { success, message, token } = await fetchFromApi("/login", "POST", {
    email,
    password,
  });

  if (token) {
    localStorage.setItem("@social-network:token", token);
  }

  return {
    success,
    message,
  };
}

/**
 * Get Posts / Récupérer les posts de tous les utilisateurs
 * @param {Number} page Numéro de la page à récupérer (par défaut 0)
 * @param {Number} limit Limite de posts par page (par défaut 20)
 * @returns {Promise} La valeur de retour est une promesse (à récupérer avec await) contenant un objet en cas
 * succès de la forme: {posts: [Posts], page: Number, totalPages: Number}. En cas d'erreur, l'objet resemblera à:
 * {message: String}
 */
export async function getPosts(page, limit) {
  return await fetchFromApi("/posts", "GET", null, { page, limit });
}
