// Données mockées
const mockEvents = [
    {
        id: 1,
        title: "Visite du Louvre",
        date: "2025-05-15",
        time: "14:00",
        location: "Musée du Louvre",
        category: "culture",
        places: 5,
        registered: true,
        organizer: "Marie"
    },
    {
        id: 2,
        title: "Atelier peinture",
        date: "2025-05-20",
        time: "15:00",
        location: "Centre culturel",
        category: "loisirs",
        places: 4,
        registered: false,
        organizer: "Marie"
    },
    {
        id: 3,
        title: "Marche dans Paris",
        date: "2025-05-25",
        time: "10:00",
        location: "Jardin des Tuileries",
        category: "sport",
        places: 6,
        registered: false,
        organizer: "Marie"
    },
    {
        id: 4,
        title: "Visite Musée d'Orsay",
        date: "2025-06-01",
        time: "14:30",
        location: "Musée d'Orsay",
        category: "culture",
        places: 5,
        registered: false,
        organizer: "Pierre"
    },
    {
        id: 5,
        title: "Atelier Tricot",
        date: "2025-06-03",
        time: "15:00",
        location: "Maison des Associations",
        category: "loisirs",
        places: 4,
        registered: false,
        organizer: "Sophie"
    },
    {
        id: 5,
        title: "Visite Musée d'Orsay",
        date: "2025-06-01",
        time: "14:30",
        location: "Musée d'Orsay",
        category: "culture",
        places: 5,
        registered: false,
        organizer: "Pierre"
    },
    {
        id: 6,
        title: "Atelier Tricot",
        date: "2025-06-03",
        time: "15:00",
        location: "Maison des Associations",
        category: "loisirs",
        places: 4,
        registered: false,
        organizer: "Sophie"
    },
    {
        id: 7,
        title: "Yoga Adapté",
        date: "2025-06-05",
        time: "10:30",
        location: "Parc Montsouris",
        category: "sport",
        places: 6,
        registered: false,
        organizer: "Thomas"
    },
    {
        id: 8,
        title: "Concert Classique",
        date: "2025-06-07",
        time: "19:00",
        location: "Église Saint-Eustache",
        category: "culture",
        places: 8,
        registered: false,
        organizer: "Claire"
    },
    {
        id: 9,
        title: "Jardin Partagé",
        date: "2025-06-10",
        time: "14:00",
        location: "Jardin des Plantes",
        category: "loisirs",
        places: 5,
        registered: false,
        organizer: "Lucas"
    },
    {
        id: 10,
        title: "Visite Château de Versailles",
        date: "2025-06-12",
        time: "13:30",
        location: "Château de Versailles",
        category: "culture",
        places: 6,
        registered: false,
        organizer: "Anne"
    },
    {
        id: 11,
        title: "Pétanque Conviviale",
        date: "2025-06-15",
        time: "16:00",
        location: "Square du Temple",
        category: "sport",
        places: 8,
        registered: false,
        organizer: "Paul"
    },
    {
        id: 12,
        title: "Atelier Cuisine",
        date: "2025-06-17",
        time: "11:00",
        location: "Centre Social",
        category: "loisirs",
        places: 4,
        registered: false,
        organizer: "Julie"
    },
    {
        id: 13,
        title: "Visite Musée Carnavalet",
        date: "2025-06-20",
        time: "14:00",
        location: "Musée Carnavalet",
        category: "culture",
        places: 5,
        registered: false,
        organizer: "Marc"
    },
    {
        id: 14,
        title: "Marche Nordique",
        date: "2025-06-22",
        time: "09:30",
        location: "Bois de Vincennes",
        category: "sport",
        places: 6,
        registered: false,
        organizer: "Sarah"
    },
    {
        id: 15,
        title: "Jeux de Société",
        date: "2025-06-25",
        time: "15:00",
        location: "Ludothèque Municipale",
        category: "loisirs",
        places: 5,
        registered: false,
        organizer: "Nicolas"
    },
    {
        id: 16,
        title: "Visite Opéra Garnier",
        date: "2025-06-28",
        time: "14:30",
        location: "Opéra Garnier",
        category: "culture",
        places: 6,
        registered: false,
        organizer: "Émilie"
    },
    {
        id: 17,
        title: "Aquagym Seniors",
        date: "2025-06-30",
        time: "10:00",
        location: "Piscine Municipale",
        category: "sport",
        places: 8,
        registered: false,
        organizer: "David"
    },
    {
        id: 18,
        title: "Ciné-débat",
        date: "2025-07-02",
        time: "14:00",
        location: "Cinéma Le Champo",
        category: "culture",
        places: 7,
        registered: false,
        organizer: "Christine"
    },
    {
        id: 19,
        title: "Atelier Photo",
        date: "2025-07-05",
        time: "15:30",
        location: "MJC",
        category: "loisirs",
        places: 4,
        registered: false,
        organizer: "Stéphane"
    }
];

const mockMessages = {
    senior: {
        conversations: {
            "Marie (Bénévole)": [
                { from: "Marie (Bénévole)", text: "Bonjour! N'oubliez pas la visite du Louvre demain à 14h!", time: "10:30", date: "2025-05-14" },
                { from: "Vous", text: "Merci pour le rappel! Je serai là.", time: "10:35", date: "2025-05-14" },
                { from: "Marie (Bénévole)", text: "Super! Le point de rendez-vous est devant la pyramide.", time: "10:36", date: "2025-05-14" }
            ],
            "Pierre (Bénévole)": [
                { from: "Pierre (Bénévole)", text: "Comment s'est passé l'atelier peinture?", time: "14:15", date: "2025-05-13" },
                { from: "Vous", text: "C'était très enrichissant!", time: "14:20", date: "2025-05-13" }
            ],
            "Sophie (Bénévole)": [
                { from: "Sophie (Bénévole)", text: "Il reste des places pour la marche de dimanche, ça vous tente?", time: "16:45", date: "2025-05-12" }
            ]
        }
    },
    benevole: {
        conversations: {
            "Jean (Senior)": [
                { from: "Jean (Senior)", text: "Merci pour l'activité d'hier!", time: "09:00", date: "2025-05-14" },
                { from: "Vous", text: "C'était un plaisir! À bientôt j'espère.", time: "09:15", date: "2025-05-14" }
            ],
            "Suzanne (Senior)": [
                { from: "Suzanne (Senior)", text: "Je serai présente demain pour le Louvre.", time: "16:45", date: "2025-05-13" },
                { from: "Vous", text: "Parfait! N'oubliez pas de prendre une bouteille d'eau.", time: "16:50", date: "2025-05-13" }
            ],
            "Michel (Senior)": [
                { from: "Michel (Senior)", text: "Est-ce possible de reporter la marche?", time: "11:20", date: "2025-05-14" },
                { from: "Vous", text: "Malheureusement non, mais il y en aura une autre la semaine prochaine!", time: "11:25", date: "2025-05-14" }
            ],
            "Groupe Visite du Louvre": [
                { from: "Vous", text: "Bonjour à tous! Rappel pour demain: RDV 14h devant la pyramide", time: "18:00", date: "2025-05-14" },
                { from: "Claire (Senior)", text: "Claire : Merci pour l'info!", time: "18:05", date: "2025-05-14" },
                { from: "Robert (Senior)", text: "Robert : À demain!", time: "18:10", date: "2025-05-14" }
            ]
        }
    }
};

function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
}

function renderEditForm(event) {
    return `
        <form id="editEventForm" class="event-form">
            <div class="form-group">
                <label for="editEventTitle">Titre</label>
                <input type="text" id="editEventTitle" value="${event.title}" required>
            </div>
            <div class="form-group">
                <label for="editEventDate">Date</label>
                <input type="date" id="editEventDate" value="${event.date}" required>
            </div>
            <div class="form-group">
                <label for="editEventTime">Heure</label>
                <input type="time" id="editEventTime" value="${event.time}" required>
            </div>
            <div class="form-group">
                <label for="editEventCategory">Catégorie</label>
                <select id="editEventCategory" required>
                    <option value="culture" ${event.category === 'culture' ? 'selected' : ''}>Culture</option>
                    <option value="sport" ${event.category === 'sport' ? 'selected' : ''}>Sport</option>
                    <option value="loisirs" ${event.category === 'loisirs' ? 'selected' : ''}>Loisirs</option>
                </select>
            </div>
            <div class="form-group">
                <label for="editEventPlaces">Nombre de places</label>
                <input type="number" id="editEventPlaces" value="${event.places}" required min="1" max="8">
            </div>
            <div class="form-group">
                <label for="editEventLocation">Lieu</label>
                <input type="text" id="editEventLocation" value="${event.location}" required>
            </div>
            <div class="edit-buttons">
                <button type="submit" class="btn btn-primary">Enregistrer</button>
                <button type="button" class="btn btn-danger" id="cancelEdit">Annuler</button>
            </div>
        </form>
    `;
}

function handleEditEvent(eventId) {
    const event = mockEvents.find(e => e.id === parseInt(eventId));
    if (event) {
        const eventCard = document.querySelector(`.event-card[data-id="${eventId}"]`);
        const originalContent = eventCard.innerHTML;
        eventCard.innerHTML = renderEditForm(event);

        const editForm = document.getElementById('editEventForm');
        const cancelButton = document.getElementById('cancelEdit');

        cancelButton.addEventListener('click', () => {
            eventCard.innerHTML = originalContent;
            attachEventListeners();
        });

        editForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Mettre à jour l'événement
            event.title = document.getElementById('editEventTitle').value;
            event.date = document.getElementById('editEventDate').value;
            event.time = document.getElementById('editEventTime').value;
            event.category = document.getElementById('editEventCategory').value;
            event.places = parseInt(document.getElementById('editEventPlaces').value);
            event.location = document.getElementById('editEventLocation').value;

            // Mettre à jour la carte de l'événement avec le nouveau contenu
            eventCard.innerHTML = `
                <h3>${event.title}</h3>
                <p>📅 ${formatDate(event.date)} à ${event.time}</p>
                <p>👥 Inscrits: ${countRegistered(event)}/${event.places}</p>
                <div class="event-actions">
                    <button class="btn btn-secondary edit-btn" data-id="${event.id}">
                        ✏️ Modifier
                    </button>
                    <button class="contact-btn" data-id="${event.id}">
                        📧 Contacter les participants
                    </button>
                </div>
            `;

            // Réattacher les événements pour cette carte
            attachEventListeners();

            showNotification(`L'activité "${event.title}" a été modifiée avec succès`);
        });
    }
}

function renderSeniorDashboard() {
    return `
        <div class="dashboard">
            <div class="main-content">
                <section class="upcoming-events">
                    <h2>Mes prochaines activités</h2>
                    <div class="events-list">
                        ${mockEvents.filter(e => e.registered).map(event => `
                            <div class="event-card">
                                <h3>${event.title}</h3>
                                <p>📅 ${formatDate(event.date)} à ${event.time}</p>
                                <p>📍 ${event.location}</p>
                                <div class="event-status">Confirmé ✓</div>
                                <div class="event-actions">
                                    <button class="contact-btn" data-organizer="${event.organizer}">
                                        📧 Contacter ${event.organizer}
                                    </button>
                                    <button class="btn-danger unregister-btn" data-id="${event.id}">
                                        ❌ Se désinscrire
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="available-events">
                    <h2>Activités disponibles</h2>
                    <div class="filters">
                        <button class="filter-btn active" data-category="all">Toutes</button>
                        <button class="filter-btn" data-category="culture">Culture</button>
                        <button class="filter-btn" data-category="sport">Sport</button>
                        <button class="filter-btn" data-category="loisirs">Loisirs</button>
                    </div>
                    <div class="events-grid">
                        ${mockEvents.filter(e => !e.registered).map(event => `
                            <div class="event-card" data-category="${event.category}">
                                <h3>${event.title}</h3>
                                <p>📅 ${formatDate(event.date)} à ${event.time}</p>
                                <p>📍 ${event.location}</p>
                                <p>👥 Places: ${event.places}</p>
                                <button class="btn btn-primary register-btn" data-id="${event.id}">
                                    S'inscrire
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </section>
            </div>

            ${renderMessagesPanel('senior')}

        </div>
    `;
}

function renderBenevoleDashboard() {
    return `
        <div class="dashboard">
            <div class="main-content">
                <section class="my-events">
                    <h2>Mes activités</h2>
                    <div class="events-list">
                        ${mockEvents.filter(e => e.organizer === "Marie").map(event => `
                            <div class="event-card" data-id="${event.id}">
                                <h3>${event.title}</h3>
                                <p>📅 ${formatDate(event.date)} à ${event.time}</p>
                                <p>👥 Inscrits: ${countRegistered(event)}/${event.places}</p>
                                <div class="event-actions">
                                    <button class="btn btn-secondary edit-btn" data-id="${event.id}">
                                        ✏️ Modifier
                                    </button>
                                    <button class="contact-btn" data-id="${event.id}">
                                        📧 Contacter les participants
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <section class="event-creation">
                    <h2>Créer une activité</h2>
                    <div class="templates">
                        <h3>Templates d'activités</h3>
                        <button class="template-btn" data-template="museum">Visite de musée</button>
                        <button class="template-btn" data-template="walk">Promenade</button>
                        <button class="template-btn" data-template="cafe">Café-discussion</button>
                    </div>

                    <form id="createEventForm" class="event-form">
                        <div class="form-group">
                            <label for="eventTitle">Titre</label>
                            <input type="text" id="eventTitle" required>
                        </div>
                        <div class="form-group">
                            <label for="eventDate">Date</label>
                            <input type="date" id="eventDate" required>
                        </div>
                        <div class="form-group">
                            <label for="eventTime">Heure</label>
                            <input type="time" id="eventTime" required>
                        </div>
                        <div class="form-group">
                            <label for="eventCategory">Catégorie</label>
                            <select id="eventCategory" required>
                                <option value="culture">Culture</option>
                                <option value="sport">Sport</option>
                                <option value="loisirs">Loisirs</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="eventPlaces">Nombre de places</label>
                            <input type="number" id="eventPlaces" required min="1" max="8">
                        </div>
                        <button type="submit" class="btn btn-primary">Créer l'activité</button>
                    </form>
                </section>
            </div>

            ${renderMessagesPanel('benevole')}
        </div>
    `;
}

function attachEventListeners() {
    // Attacher les événements existants...
    
    // Ajouter les gestionnaires pour les boutons d'inscription
    const registerButtons = document.querySelectorAll('.register-btn');
    registerButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            handleRegistration(btn.dataset.id);
        });
    });

    // Ajouter les gestionnaires pour les boutons de contact
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const organizer = btn.dataset.organizer;
            const eventId = btn.dataset.id;
            
            if (organizer) {
                // Pour les seniors qui contactent un bénévole
                const contactName = organizer + " (Bénévole)";
                initializeChat(contactName);
            } else if (eventId) {
                // Pour les bénévoles qui contactent les participants d'un événement
                const event = mockEvents.find(e => e.id === parseInt(eventId));
                if (event) {
                    const groupName = `Groupe ${event.title}`;
                    initializeChat(groupName);
                }
            }
        });
    });

    const unregisterButtons = document.querySelectorAll('.unregister-btn');
    unregisterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (confirm('Êtes-vous sûr de vouloir vous désinscrire de cette activité ?')) {
                handleUnregistration(btn.dataset.id);
            }
        });
    });

    const editButtons = document.querySelectorAll('.edit-btn');
    editButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            handleEditEvent(btn.dataset.id);
        });
    });

    attachMessageEvents(localStorage.getItem('userType'));
}

function attachFilterEvents() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const availableEvents = document.querySelectorAll('.events-grid .event-card');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Mettre à jour les boutons actifs
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filtrer uniquement les événements disponibles
            availableEvents.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

const eventTemplates = {
    museum: {
        title: "Visite de musée",
        category: "culture",
        time: "14:00",
        places: 5
    },
    walk: {
        title: "Promenade guidée",
        category: "sport",
        time: "10:00",
        places: 6
    },
    cafe: {
        title: "Café-discussion",
        category: "loisirs",
        time: "15:00",
        places: 4
    }
};

function attachTemplateEvents() {
    const templateButtons = document.querySelectorAll('.template-btn');
    templateButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const template = eventTemplates[btn.dataset.template];
            if (template) {
                fillTemplateForm(template);
            }
        });
    });
}

function attachCreateEventFormEvents() {
    const createEventForm = document.getElementById('createEventForm');
    if (createEventForm) {
        createEventForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Récupérer les valeurs du formulaire
            const newEvent = {
                id: Math.max(...mockEvents.map(e => e.id)) + 1,
                title: document.getElementById('eventTitle').value,
                date: document.getElementById('eventDate').value,
                time: document.getElementById('eventTime').value,
                category: document.getElementById('eventCategory').value,
                places: parseInt(document.getElementById('eventPlaces').value),
                organizer: "Marie",
                registered: false,
                location: "À définir" // Pour le prototype
            };

            // Ajouter le nouvel événement à la liste
            mockEvents.push(newEvent);

            // Rafraîchir l'affichage
            document.getElementById('content').innerHTML = renderBenevoleDashboard();
            
            // Réattacher tous les événements
            attachTemplateEvents();
            attachEventListeners();
            attachCreateEventFormEvents();

            // Notification de confirmation
            showNotification(`L'activité "${newEvent.title}" a été créée avec succès`);

            // Réinitialiser le formulaire
            createEventForm.reset();
        });
    }
}

function filterEvents(category) {
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function fillTemplateForm(template) {
    document.getElementById('eventTitle').value = template.title;
    document.getElementById('eventCategory').value = template.category;
    document.getElementById('eventTime').value = template.time;
    document.getElementById('eventPlaces').value = template.places;
}

function handleRegistration(eventId) {
    const event = mockEvents.find(e => e.id === parseInt(eventId));
    if (event) {
        event.registered = true;
        showNotification(`Inscription confirmée pour "${event.title}". Vous recevrez bientôt un message avec les informations pratiques.`);
        // Recharger le dashboard
        document.getElementById('content').innerHTML = renderSeniorDashboard();
        attachEventListeners();
        attachFilterEvents();
    }
}

function handleUnregistration(eventId) {
    const event = mockEvents.find(e => e.id === parseInt(eventId));
    if (event) {
        event.registered = false;
        showNotification(`Désinscription confirmée de "${event.title}"`);
        document.getElementById('content').innerHTML = renderSeniorDashboard();
        attachEventListeners();
        attachFilterEvents();
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, 8000);
}

function renderMessagesPanel(userType) {
    const conversations = mockMessages[userType].conversations;
    const currentChat = localStorage.getItem('currentChat');
    
    return `
        <aside class="messages-panel">
            ${currentChat ? renderChat(userType, currentChat) : renderConversationsList(userType, conversations)}
        </aside>
    `;
}

function renderConversationsList(userType, conversations) {
    return `
        <h2>Messages</h2>
        <div class="conversations-list">
            ${Object.entries(conversations).map(([contact, messages]) => `
                <div class="conversation-item" data-contact="${contact}">
                    <div class="conversation-preview">
                        <strong>${contact}</strong>
                        <small>${messages[messages.length - 1].time}</small>
                    </div>
                    <p class="last-message">${messages[messages.length - 1].text}</p>
                </div>
            `).join('')}
        </div>
    `;
}

function renderChat(userType, contact) {
    const messages = mockMessages[userType].conversations[contact] || [];
    
    return `
        <div class="chat">
            <div class="chat-header">
                <button class="back-btn">←</button>
                <h2>${contact}</h2>
            </div>
            <div class="messages-container" id="messagesContainer">
                ${messages.length > 0 ? messages.map(msg => `
                    <div class="message ${msg.from === 'Vous' ? 'sent' : 'received'}">
                        <div class="message-content">
                            <p class="message-text">${msg.text}</p>
                            <small class="message-time">${msg.time}</small>
                        </div>
                    </div>
                `).join('') : '<p class="empty-chat">Commencez la conversation...</p>'}
            </div>
            <form class="message-form">
                <input type="text" placeholder="Votre message..." required>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    `;
}

function attachMessageEvents(userType) {
    // Scroll to bottom on initial load
    const messagesContainer = document.getElementById('messagesContainer');
    if (messagesContainer) {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // Gérer le clic sur une conversation
    const conversations = document.querySelectorAll('.conversation-item');
    conversations.forEach(conv => {
        conv.addEventListener('click', () => {
            const contact = conv.dataset.contact;
            localStorage.setItem('currentChat', contact);
            document.querySelector('.messages-panel').outerHTML = renderMessagesPanel(userType);
            attachMessageEvents(userType);
        });
    });

    // Gérer le bouton retour
    const backBtn = document.querySelector('.back-btn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // Forcer la réinitialisation complète du panel de messages
            localStorage.removeItem('currentChat');
            const messagesPanel = document.querySelector('.messages-panel');
            if (messagesPanel) {
                messagesPanel.outerHTML = renderMessagesPanel(userType);
                attachMessageEvents(userType);
                attachEventListeners();
                if (userType === 'senior') {
                    attachFilterEvents();
                }
            }
        });
    }

    // Gérer l'envoi de message
    const messageForm = document.querySelector('.message-form');
    if (messageForm) {
        messageForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = messageForm.querySelector('input');
            const text = input.value.trim();
            
            if (text) {
                const contact = localStorage.getItem('currentChat');
                const now = new Date();
                const time = now.getHours().toString().padStart(2, '0') + ':' + 
                           now.getMinutes().toString().padStart(2, '0');
                
                // Créer le tableau s'il n'existe pas
                if (!mockMessages[userType].conversations[contact]) {
                    mockMessages[userType].conversations[contact] = [];
                }
                
                mockMessages[userType].conversations[contact].push({
                    from: 'Vous',
                    text: text,
                    time: time,
                    date: now.toISOString().split('T')[0]
                });
                
                document.querySelector('.messages-panel').outerHTML = renderMessagesPanel(userType);
                attachMessageEvents(userType);
                
                input.value = '';
                
                // Scroll to bottom after sending message
                const messagesContainer = document.getElementById('messagesContainer');
                if (messagesContainer) {
                    messagesContainer.scrollTop = messagesContainer.scrollHeight;
                }
            }
        });
    }
}

function initializeChat(contactName) {
    const userType = localStorage.getItem('userType');
    
    // Créer la conversation avec un message système si elle n'existe pas
    if (!mockMessages[userType].conversations[contactName]) {
        mockMessages[userType].conversations[contactName] = [{
            from: 'Système',
            text: 'Conversation créée. Envoyez votre premier message !',
            time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }),
            date: new Date().toISOString().split('T')[0]
        }];
    }
    
    localStorage.setItem('currentChat', contactName);
    const messagesPanel = document.querySelector('.messages-panel');
    if (messagesPanel) {
        messagesPanel.outerHTML = renderMessagesPanel(userType);
        attachMessageEvents(userType);
    }
}

function countRegistered(event) {
    // Pour le prototype, on génère un nombre aléatoire d'inscrits
    // entre 1 et le nombre de places disponibles
    if (!event._registeredCount) {
        event._registeredCount = Math.floor(Math.random() * (event.places - 1)) + 1;
    }
    return event._registeredCount;
}

document.addEventListener("DOMContentLoaded", () => {
    // Vérification de la connexion
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userType = localStorage.getItem("userType");

    if (!isLoggedIn) {
        window.location.href = "login.html";
        return;
    }

    // Configuration de la navigation
    const nav = document.getElementById("mainNav");
    nav.innerHTML = `
        <button id="logout" class="btn btn-secondary">Déconnexion</button>
    `;

    document.getElementById("logout").addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userType");
        window.location.href = "login.html";
    });
    
    // Rendu du dashboard selon le type d'utilisateur
    const main = document.getElementById("content");
    main.innerHTML = userType === "senior" ? renderSeniorDashboard() : renderBenevoleDashboard();
    
    // Attacher les événements après le rendu
    if (userType === "senior") {
        attachFilterEvents();
    } else {
        attachTemplateEvents();
        attachCreateEventFormEvents();
    }
    attachEventListeners();
});