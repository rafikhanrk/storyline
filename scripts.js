document.addEventListener('DOMContentLoaded', function() {
    const scroller = scrollama();

    scroller.setup({
        step: '.step',
        offset: 0.5,
        debug: true,
    })
    .onStepEnter(response => {
        const { element, index, direction } = response;
        element.classList.add('is-active');
        handleStepEnter(response);
    })
    .onStepExit(response => {
        const { element } = response;
        element.classList.remove('is-active');
    });

    function handleStepEnter(response) {
        if (response.index === 0) {
            generateMap1();
        } else if (response.index === 1) {
            generateChart1();
        } else if (response.index === 3) {
            generateMap2();
        }
    }

    function generateChart1() {
        const chart = c3.generate({
            bindto: '#chart1',
            data: {
                columns: [
                    ['Refugees', 30, 200, 100, 400, 150, 250],
                    ['Year', 2010, 2012, 2014, 2016, 2018, 2020]
                ]
            },
            axis: {
                x: {
                    type: 'category',
                    categories: ['2010', '2012', '2014', '2016', '2018', '2020']
                }
            }
        });
    }

    function generateMap1() {
        const map = L.map('map1').setView([47.6062, -122.3321], 10); // Seattle coordinates
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).document.addEventListener('DOMContentLoaded', function() {
    const scroller = scrollama();

    scroller.setup({
        step: '.step',
        offset: 0.5,
        debug: true,
    })
    .onStepEnter(response => {
        const { element, index, direction } = response;
        element.classList.add('is-active');
        handleStepEnter(response);
    })
    .onStepExit(response => {
        const { element } = response;
        element.classList.remove('is-active');
    });

    function handleStepEnter(response) {
        if (response.index === 0) {
            generateMap1();
        } else if (response.index === 1) {
            generateChart1();
        } else if (response.index === 3) {
            generateMap2();
        }
    }

   


