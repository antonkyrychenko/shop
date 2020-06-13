interface Order {
    customerName: string,
    productId: string,
    city: string,
    deliveryMethod: "pickup" | "curier",
    paymentMethod: "card" | "cash",
    phoneNumber: string
}

export default Order;