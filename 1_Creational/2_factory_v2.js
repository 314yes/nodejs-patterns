class SimpleShip {
    constructor() {
        this.cost = 50;
    }
}

class StandardShip {
    constructor() {
        this.cost = 150;
    }
}

class PremiumShip {
    constructor() {
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleShip,
        standart: StandardShip,
        premium: PremiumShip
    }

    create(name, type = 'simple') {
        const MemberShip = MemberFactory.list[type] || MemberFactory.list.simple;
        const member = new MemberShip();
        member.name = name;
        member.type = type;
        member.define = function () {
            console.log(`${this.name}, (${this.type}), ${this.cost}`)
        }
        return member;
    }
}

const factory = new MemberFactory();

const members = [];
members.push(factory.create('Mikhail', 'simple'));
members.push(factory.create('Nastya', 'premium'));
members.push(factory.create('Katerina', 'standart'));

// console.log(members)

members.forEach(member => member.define());