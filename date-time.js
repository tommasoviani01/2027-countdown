function updateDateTime() {
    const now = new Date();

    // Time
    const timeSettings = { 
        hour: '2-digit', 
        minute: '2-digit'
    };
    document.getElementById('current-time').innerText = now.toLocaleTimeString('it-IT', timeSettings);

    // Date
    const dateSettings = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    document.getElementById('current-date').innerText = now.toLocaleDateString('it-IT', dateSettings);
}

updateDateTime();
setInterval(updateDateTime, 1000);