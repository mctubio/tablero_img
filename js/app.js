// js/app.js
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js')
            .then(function (registration) {
                console.log('ServiceWorker registrado: ', registration.scope);
            }, function (err) {
                console.log('Error al registrar el ServiceWorker: ', err);
            });
    });
}
