export default class TableView {
    static addRow(customer) {
        const tableBody = document.getElementById('parking-area');
        if (tableBody) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${customer.name}</td>
                <td>${customer.cpf}</td>
                <td>${customer.vehicle.model}</td>
                <td>${customer.vehicle.type}</td>
                <td>${customer.vehicle.licensePlate}</td>
                <td>${customer.checkInTime.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', })}</td>
                <td>
                <button class="delete" data-license-plate="${customer.vehicle.licensePlate}">X</button>
                </td>
                `;
            tableBody.appendChild(row);
        }
    }
}
