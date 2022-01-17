/**
 * api/public.js - Public methods
 */

/* Imports */
import fetchFromApi from "../src/fetchFromApi";

/* Methods */

/**
 * Is user logged in - Verifier si l'utilisateur est connecté
 * @returns {Boolean} La valeur de retour est un booleen
 */
export function isUserLoggedIn() {
  return !!localStorage.getItem("@social-network:token");
}

/**
 * Logout - Déconnexion
 * @returns {Promise} La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean}
 */
export async function logout() {
  localStorage.removeItem("@social-network:token");
  return new Promise((resolve) => resolve({ success: true }));
}

/**
 * Get current user profile - Récuépérer les infromation du profil de l'utilisateur connecté
 * @returns {Promise} La valeur de retour est une promesse (à récupérer avec await) contenant un objet en cas
 * succès de la forme: {firstname: String, lastname: String, email: String, age: Number, occupation: String}. En cas d'erreur, l'objet resemblera à:
 * {message: String}
 */
export async function getCurrentUserProfile() {
  return await fetchFromApi("/user", "GET", null, null, true);
}

/**
 * Get user profile - Récupérer les informations de profil d'un utilisateur
 * @param {String} userId Id de l'utilisateur
 * @returns {Promise} La valeur de retour est une promesse (à récupérer avec await) contenant un objet en cas
 * succès de la forme: {firstname: String, lastname: String, email: String, age: Number, occupation: String}. En cas d'erreur, l'objet resemblera à:
 * {message: String}
 */
export async function getUserProfile(userId) {
  return await fetchFromApi("/user/" + userId, "GET", null, null, true);
}

/**
 * Update current user profile - Modifier les informations du profil de l'utilisateur connecté
 * @param {String} firstname Prénom
 * @param {String} lastname Nom
 * @param {String} email Email
 * @param {Number} age Age
 * @param {String} occupation Poste
 * @returns {Promise} La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}.
 */
export async function updateCurrentUserProfile(
  firstname,
  lastname,
  email,
  age,
  occupation
) {
  return await fetchFromApi(
    "/user",
    "PUT",
    { firstname, lastname, email, age, occupation },
    null,
    true
  );
}
