const arr = [
  {
    id: "p1",
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/1c0db977-31ab-4d8e-abf3-d42e4a4b4632.jpg?ts=1706182142",
    name: "Amul Gold Full Cream Fresh MIlk",
    quantity: "500 ml",
    price: " ₹33",
  },

  {
    id: "p2",
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b388815a-65ed-47e8-8885-2ec021d75fcf.jpg?ts=1712325685",
    name: "Amul Taaza Toned  Chai MasalaFresh Milk",
    quantity: "500 ml",
    price: " ₹27",
  },
  {
    id: "p3",
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/73bcc2db-0799-4014-ab75-029bfcdb8375.jpg?ts=1726473603",
    name: "Amul Masti  Curd",
    quantity: "200 g",
    price: " ₹23",
  },
  {
    id: "p4",
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/6ae62ec2-3b13-4fff-b052-2ff3d4ef2d16.jpg?ts=1726473593",
    name: "Amul Masti Pounch  curd",
    quantity: "400 g",
    price: " ₹35",
  },

  {
    id: "p5",
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/0be0d49a-4dae-408a-8786-afae1dd05cb1.jpg?ts=1707312314",
    name: "Amul Salted Butter",
    quantity: "100 g",
    price: " ₹60",
  },
];

const arr1 = [
  {
    id: "p1",
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/b3ee7724-3b6c-475e-aa50-1714fe9199be.jpg?ts=1723100802",
    name: "Cheetors Flamin hot Crunchy Puffs",
    quantity: "28.3 g",
    price: " ₹161",
  },

  {
    id: "p2",
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/eadd1b3c-b986-4276-976d-27cdfe3e558c.jpg?ts=1723101044",
    name: "Kab's Jackpot Fire Balls Snack",
    quantity: "60 g",
    price: " ₹65",
  },
  {
    id: "p3",
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/c7221d26-16ce-4b85-802a-b4a5aaabae13.jpg",
    name: "Onion K Snack Kimchi Onion Rings",
    quantity: "70 g",
    price: " ₹56",
  },
  {
    id: "p4",
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/ca5df83c-027b-40c9-9605-38126d47575d.jpg?ts=1723098574",
    name: "Kettle Studio Sharp Jalapeons & Cream...",
    quantity: "113 g",
    price: " ₹99",
  },

  {
    id: "p5",
    img: "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/033d8394-849a-4a07-a712-79a50df9bd51.jpg?ts=1723098570",
    name: "Kettle Studio Patato Chips - Himalyan Pink...",
    quantity: "113 g",
    price: " ₹99",
  },
];

const mainBox = document.getElementsByClassName("main-box");
const mainBox1 = document.getElementsByClassName("main-box1");

arr.map((obj) => {
  const main = document.createElement("div");
  main.className = "main";

  const container = document.createElement("div");
  container.className = "container";

  const parent = document.createElement("div");
  parent.className = "parent";

  const img = document.createElement("img");
  img.src = obj.img;
  img.style.width = "120px";

  const time = document.createElement("h5");
  time.innerText = "8 MINS";

  const name = document.createElement("h4");
  name.innerText = obj.name;

  const quantity = document.createElement("p");
  quantity.innerText = obj.quantity;

  parent.appendChild(img);

  container.appendChild(parent);
  container.appendChild(time);
  container.appendChild(name);
  container.appendChild(quantity);

  main.appendChild(container);

  const last = document.createElement("div");
  last.className = "last";

  const price = document.createElement("p");
  price.innerText = obj.price;

  const button = document.createElement("button");
  button.innerText = "ADD";

  last.appendChild(price);
  last.appendChild(button);
  main.append(last);

  mainBox[0].append(main);
});

arr1.map((obj) => {
  const main = document.createElement("div");
  main.className = "main";

  const container = document.createElement("div");
  container.className = "container";

  const parent = document.createElement("div");
  parent.className = "parent";

  const img = document.createElement("img");
  img.src = obj.img;
  img.style.width = "120px";

  const time = document.createElement("h5");
  time.innerText = "8 MINS";

  const name = document.createElement("h4");
  name.innerText = obj.name;

  const quantity = document.createElement("p");
  quantity.innerText = obj.quantity;

  parent.appendChild(img);

  container.appendChild(parent);
  container.appendChild(time);
  container.appendChild(name);
  container.appendChild(quantity);

  main.appendChild(container);

  const last = document.createElement("div");
  last.className = "last";

  const price = document.createElement("p");
  price.innerText = obj.price;

  const button = document.createElement("button");
  button.innerText = "ADD";

  last.appendChild(price);
  last.appendChild(button);
  main.append(last);

  mainBox1[0].append(main);
});
