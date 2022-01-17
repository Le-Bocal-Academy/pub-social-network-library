/**
 * api/posts.js - Posts methods
 */

/* Imports */
import fetchFromApi from "../src/fetchFromApi";

/* Methods */

/**
 * Create post - Créer un post avec le compte utilisateur actuellement connecté
 * @param {String} title Titre
 * @param {String} content Contenu
 * @returns {Promise} La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}
 */
export async function createPost(title, content) {
  return await fetchFromApi("/post", "POST", { title, content }, null, true);
}

/**
 * Add comment - Ajouter un commentaire à un post avec le compte utilisateur actuellement connecté
 * @param {String} postId Id du post auquel ajouter le commentaire
 * @param {String} content Contenu du commentaire
 * @returns {Promise} La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}
 */
export async function addComment(postId, content) {
  return await fetchFromApi(
    "/post/comment",
    "POST",
    { postId, content },
    null,
    true
  );
}

/**
 * Add like - Ajouter un like à un post avec le compte utilisateur actuellement connecté
 * @param {String} postId Id du post auquel ajouter le like
 * @returns {Promise}La valeur de retour est une promesse (à récupérer avec await) contenant un objet: {success: Boolean, message: String | Undefined}
 */
export async function addLike(postId) {
  return await fetchFromApi("/post/like", "POST", { postId }, null, true);
}
