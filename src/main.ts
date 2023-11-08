interface Vehicle {
    name: string;
    licensePlate: string;
    checkInTime: Date;
}
(function () {
    const $ = (query: string): HTMLInputElement | null =>
        document.querySelector(query);

    function parkingArea() {
        function read() {}

        function add(vehicle: Vehicle) {
            const row = document.createElement('tr');

            row.innerHTML = `
            <td>${vehicle.name}</td>
            <td>${vehicle.licensePlate}</td>
            <td>${vehicle.checkInTime}</td>
            <td>
            <button class="delete" date-licensePlate="${vehicle.licensePlate}">X</button>
            </td>
            `;

            $('#parking-area')?.appendChild(row);
        }

        function remove() {}
        function save() {}
        function render() {}

        return { read, add, remove, save, render };
    }

    $('form')?.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = $('#owner-name')?.value;
        const licensePlate = $('#license-plate')?.value;

        if (!name || !licensePlate) {
            alert('f, deu n');
            return;
        }
        parkingArea().add({
            name,
            licensePlate,
            checkInTime: new Date(),
        });
    });
})();
