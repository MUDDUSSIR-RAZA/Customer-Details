const faker = require("faker");

export const data = [];

function generateClients() {
  faker.locale = "en";

  const generatedClients = [];
  for (let i = 1; i <= 100; i++) {
    const client = {
      clientName: faker.name.findName(),
      billingInfo: {
        billingAddress: faker.address.streetAddress(),
        paymentMethod: faker.finance.transactionType(),
      },
      orderTime: faker.date.past().toLocaleDateString(),
      id: faker.datatype.uuid(),
      contactInfo: {
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
      },
      amount: faker.finance.amount(100, 8000, 2),
      projects: [],
      projectStatus: "In Progress",
      attachments: faker.system.fileName(),
      image: "https://picsum.photos/200/100",
    };

    for (let j = 1; j <= 5; j++) {
      const project = {
        name: faker.company.bs(),
        details: faker.lorem.sentence(),
      };
      client.projects.push(project);
    }

    generatedClients.push(client);
  }
  data.push(...generatedClients);

  return generatedClients;
}

const generatedClients = generateClients();

export const jsonData = JSON.stringify(generatedClients, null, 2);
