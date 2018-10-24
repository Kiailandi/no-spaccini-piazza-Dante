const loadCounter = () => {
    const startDay = moment('2018-10-22', 'YYYY-MM-DD');
    const now = moment();
    document.getElementById('app').innerHTML = `<h1 class="flex-item">Sono passati: <i class="em em-stopwatch"></i> <b>${now.diff(startDay, 'days')} giorni</b> ️️<i class="em em-stopwatch"></i> dalla vittoria della <span class="lega">Lega in Trentino</span></h1><h2 class="flex-item">e ci sono ancora gli <i class="em em-syringe"></i> <b>spaccini</b> <i class="em em-syringe"></i> in <i class="em em-police_car"></i> <b>piazza Dante</b> <i class="em em-police_car"></i></h2>`;
    document.getElementById('app').innerHTML += `<h3 class="flex-item-footer">Made with <span class="heart">❤</span> by <a href="http://kiailandi.github.io">Kiailandi</a> <i class="em em-male-technologist"></i></h3>`;
};

if( document.readyState === 'complete' ) {
    loadCounter();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        loadCounter();
    });
}
