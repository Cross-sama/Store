const shoppingCart = {
  items: [],
  total: 0,
  addItem(name, price, quantity) { // Add item in items and increasing total
    this.items.push(name)
    this.total += price * quantity
    return this
  },
  removeItem(name) { // Removing item from items and decreasing total
    this.items.pop(name)
    this.total -= name.price * name.quantity
    return this
  },
  updateQuantity(name, updatedQuantity) { // Updating quantity of item and changing price
    this.total -= name.price * name.quantity
    name.quantity = updatedQuantity
    this.total += name.price * name.updatedQuantity
    return this
  },
  calculateTotal() { // Calculation of total price and showing it to client
    let total = 0
    for (const item of this.items) {
      total += item.price * item.quantity
    }
    this.total = total
    console.log(this.total)
    return this
  },
  clearCart() { // Removing all items from cart and reset total price 
    this.items = []
    this.total = 0
    return this
  }
}

const tomato = { // Test object
  name: 'tomato',
  price: 2,
  quantity: 10
}
shoppingCart.addItem(tomato).addItem(tomato).calculateTotal()  .removeItem(tomato).calculateTotal()  .updateQuantity(tomato, 1).calculateTotal()  .clearCart().calculateTotal();