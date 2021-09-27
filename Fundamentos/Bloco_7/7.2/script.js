const order = {
    name: ['Rafael Andrade'],
    phoneNumber: ['11-98763-1416'],
    address: {
      street: ['Rua das Flores'],
      number: ['389'],
      apartment: ['701'],
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: ['Coca-Cola Zero'],
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: ['Ana Silveira'],
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    console.log(`Olá ${Object.values(order.order.delivery.deliveryPerson)}, entrega para: ${Object.values(order.name)}, Telefone: ${Object.values(order.phoneNumber)},${Object.values(order.address.street)}, N°${Object.values(order.address.number)}, AP ${Object.values(order.address.apartment)}`);
  
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = ['Luiz Silva'];
    order.payment.total = ['R$50,00'];
    console.log(`Olá, ${Object.values(order.name)}, o total do se pedido ${Object.keys(order.order.pizza)} e ${Object.values(order.order.drinks.coke.type)} é ${Object.values(order.payment.total)}`);
  
  }
  
  orderModifier(order);
  