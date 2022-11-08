export class configuredProduct {
    constructor(brand, image, id, name, prices, attributes, quantity, category) {
      this.brand = brand;
      this.image = image;
      this.id = id;
      this.name = name;
      this.prices = prices;
      this.attributes = attributes;
      this.quantity = quantity;
      this.category = category;
    }
}

export class attributes {
    constructor(size, capacity, color, usb, touchid) {
        this.size = size;
        this.capacity = capacity;
        this.color = color;
        this.usb = usb;
        this.touchid = touchid;
    }
}

