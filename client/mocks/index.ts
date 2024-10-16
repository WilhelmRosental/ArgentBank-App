async function initMocks() {
    if (typeof window === "undefined") {
        // Environnement serveur (Node.js) : MSW en mode serveur pour les tests
        const { server } = await import("./server");
        console.log("MSW server mode activated");  // Log pour vérifier l'activation côté serveur
        server.listen({
            onUnhandledRequest: 'warn',  // Ou 'warn' pour loguer les requêtes non gérées
        });
    } else {
        // Environnement client (navigateur) : MSW en mode worker pour le développement
        const { worker } = await import("./browser");
        console.log("MSW browser worker activated");  // Log pour vérifier l'activation côté client
        worker.start({
            onUnhandledRequest: 'bypass',  // Log les requêtes non interceptées (ou 'warn')
        });
    }
}

initMocks();

export { };
