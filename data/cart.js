export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    },
    {
      id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 2,
    },
  ];
}

function savetolocal() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function size() {
  let cartsize = 0;
  cart.forEach((item) => {
    cartsize += Number(item.quantity);
  });
  return cartsize;
}

export function addcart(id, quantity) {
  let flag;
  cart.forEach((item) => {
    if (item.id === id) {
      flag = item;
    }
  });

  if (flag) {
    flag.quantity += quantity;
  } else {
    cart.push({
      id: id,
      quantity: quantity,
    });
  }
  savetolocal();
}

export function removeitem(check) {
  let flag;
  cart.forEach((cartitem) => {
    if (cartitem.id === check) {
      flag = check;
    }
  });
  let newcart = [];
  cart.forEach((cartitem) => {
    if (cartitem.id !== flag) {
      newcart.push(cartitem);
    }
  });
  cart = newcart;
  savetolocal();
}
