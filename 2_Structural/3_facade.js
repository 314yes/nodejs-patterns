class Complaints {
    constructor() {
        if (Complaints.exists) {
            console.log('New')
            return Complaints.instance;
        }
        console.log('Exists')
        this.instance = this;
        this.exists = true;
        this.complaints = [];
    }

    reply(complaint) {}

    add(complaint) {
        this.complaints.push(complaint);
        return this.reply(complaint);
    }
}

class ProductComplaints extends Complaints {
    reply({ id, customer, details }) {
        return `Product: ${id}: ${customer} (${details})`;
    }
}

class ServiceComplains extends Complaints {
    reply({ id, customer, details }) {
        return `Service: ${id}: ${customer} (${details})`;
    }
}

class ComplaintRegestry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;

        if (type === "service") {
            complaint = new ServiceComplains();
        } else {
            complaint = new ProductComplaints();
        }

        return complaint.add({ id, customer, details });
    }
}

const registry = new ComplaintRegestry();

console.log(registry.register("Mikhail", "Service", "No connection"));
console.log(registry.register("Elana", "Product", "Error mistakes"));

const complaints = new Complaints();
console.log(complaints.complaints)