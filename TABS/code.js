document.addEventListener('DOMContentLoaded', function () {
    const onglets = document.querySelectorAll('.onglet');
    const contenus = document.querySelectorAll('.contenu');

    onglets.forEach(onglet => {
        onglet.addEventListener('click', function () {
            onglets.forEach(o => o.classList.remove('onglet-actif'));
            contenus.forEach(c => c.classList.remove('actif'));
            /*document.querySelector('.contenu-first').classList.add('actif');*/

            this.classList.add('onglet-actif');

            if (this.classList.contains('info-onglet')) {
                document.querySelector('.info-contenu').classList.add('actif');
                document.querySelector('.contenu').classList.remove('contenu-first');
            } else if (this.classList.contains('prix-onglet')) {
                document.querySelector('.prix-contenu').classList.add('actif');
                document.querySelector('.contenu').classList.remove('contenu-first');
            } else if (this.classList.contains('magasins-onglet')) {
                document.querySelector('.magasins-contenu').classList.add('actif');
                document.querySelector('.contenu').classList.remove('contenu-first');
            } else if (this.classList.contains('contacts-onglet')) {
                document.querySelector('.contacts-contenu').classList.add('actif');
                document.querySelector('.contenu').classList.remove('contenu-first');
            } else if (this.classList.contains('partenaires-onglet')) {
                document.querySelector('.partenaires-contenu').classList.add('actif');
                document.querySelector('.contenu').classList.remove('contenu-first');
            }
        });
    });
});
