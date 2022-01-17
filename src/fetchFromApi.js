/**
 * src/fetchFromApi.js - Generic method to fetch from web api
 */

/* Import */
import { apiUrl } from "../config.json";

/**
 * Fetch from api
 * @param {String} path - Path
 * @param {String} method - HTTP method
 * @param {Object} body - Body content
 * @param {Object} query - Query parameters
 * @param {Boolean} authenticated - Boolean describing if request should specify token
 * @returns
 */
export default async function fetchFromApi(
  path,
  method = "GET",
  body = null,
  query = null,
  authenticated = false
) {
  try {
    /* Request options */
    let options = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      options.body = JSON.stringify(body);
    }

    if (authenticated) {
      options.headers.Authorization =
        "bearer " + localStorage.getItem("@social-network:token");
    }

    /* Query parameters */
    let queryParameters = "";
    if (query) {
      queryParameters = "?" + (Object.keys(query)
        .map(
          (property) =>
            encodeURIComponent(property) +
            "=" +
            encodeURIComponent(query[property])
        )
        .join("&"));
    }

    /* Request */
    const response = await fetch(apiUrl + path + queryParameters, options);

    /* Response codes */
    switch (response.status) {
      case 200:
        console.log(
          "%c Social Network Lib:",
          "background-color: blue; color: white; font-weight: bold;"
        );
        console.log(
          "%c | %c 200 Success - Succès",
          "color: blue; font-weight: bold;",
          "background-color: green; color: white;"
        );
        console.log("La requête a été traitée normalement.");
        break;
      case 400:
        console.log(
          "%c Social Network Lib:",
          "background-color: blue; color: white; font-weight: bold;"
        );
        console.log(
          "%c | %c 400 Bad request - Erreur dans la requête",
          "color: blue; font-weight: bold;",
          "background-color: orange; color: white;"
        );
        console.log(
          "Le serveur a refusé de traiter la requête car celle-ci est incomplète ou incorrecte."
        );
        break;
      case 401:
        console.log(
          "%c Social Network Lib:",
          "background-color: blue; color: white; font-weight: bold;"
        );
        console.log(
          "%c | %c 401 Unauthorized - Accès non autorisé",
          "color: blue; font-weight: bold;",
          "background-color: orange; color: white;"
        );
        console.log(
          "Le serveur a refusé de traiter la requête car elle les informations d'authentification sont invalides (l'utilisateur n'est pas connecté)."
        );
        break;
      case 500:
        console.log(
          "%c Social Network Lib:",
          "background-color: blue; color: white; font-weight: bold;"
        );
        console.log(
          "%c | %c 500 Internal Serveur Error - Erreur interne au serveur",
          "color: blue; font-weight: bold;",
          "background-color: red; color: white;"
        );
        console.log(
          "Le serveur a recontré une erreur lors du traitement de la requête."
        );
        break;
      default:
        console.log(
          "%c Social Network Lib:",
          "background-color: blue; color: white; font-weight: bold;"
        );
        console.log(
          `%c | %c ${response.status}`,
          "color: blue; font-weight: bold;",
          "background-color: grey; color: white;"
        );
        break;
    }

    return await response.json();
  } catch (e) {
    console.log(
      "%c Social Network Lib:",
      "background-color: blue; color: white; font-weight: bold;"
    );
    console.log(
      "%c | %c Network Error - Erreur réseau",
      "color: blue; font-weight: bold;",
      "background-color: red; color: white;"
    );
    console.error(e);
  }
}
