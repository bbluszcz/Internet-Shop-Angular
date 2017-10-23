import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalPrice;
  products = [
    {
      id: 1,
      name: 'Buty Bokserskie',
      image: 'https://sportmasters.pl/en/images/mini/c0399697111337da9986d7ca13461e86.jpg',
      sizes: [
        {
          size: 'XS',
          price: 110,
          quantity: 0
        },
        {
          size: 'S',
          price: 120,
          quantity: 0
        },
        {
          size: 'M',
          price: 130,
          quantity: 0
        },
        {
          size: 'L',
          price: 140,
          quantity: 0
        },
        {
          size: 'XL',
          price: 150,
          quantity: 0
        }
      ]
    },
    {
      id: 2,
      name: 'Rękawice Bokserskie',
      image: 'http://blog.budo-shop.pl/wp-content/uploads/2014/06/Nowy-1.jpg',
      sizes: [
        {
          size: 'XS',
          price: 110,
          quantity: 0
        },
        {
          size: 'S',
          price: 120,
          quantity: 0
        },
        {
          size: 'M',
          price: 130,
          quantity: 0
        },
        {
          size: 'L',
          price: 140,
          quantity: 0
        },
        {
          size: 'XL',
          price: 150,
          quantity: 0
        }
      ]
    },
    {
      id: 3,
      name: 'Rękawice do MMA',
      image: 'https://www.dobrekimona.pl/userdata/gfx/4fd0440ac70444948e17fcea7c0675f0.jpg',
      sizes: [
        {
          size: 'XS',
          price: 110,
          quantity: 0
        },
        {
          size: 'S',
          price: 120,
          quantity: 0
        },
        {
          size: 'M',
          price: 130,
          quantity: 0
        },
        {
          size: 'L',
          price: 140,
          quantity: 0
        },
        {
          size: 'XL',
          price: 150,
          quantity: 0
        }
      ]
    },
    {
      id: 4,
      name: 'Ochraniacz na Głowę',
      image: 'http://www.samuraj.net.pl/images/mini/f599bec834f446add08ba816fe99554d.jpg',
      sizes: [
        {
          size: 'XS',
          price: 110,
          quantity: 0
        },
        {
          size: 'S',
          price: 120,
          quantity: 0
        },
        {
          size: 'M',
          price: 130,
          quantity: 0
        },
        {
          size: 'L',
          price: 140,
          quantity: 0
        },
        {
          size: 'XL',
          price: 150,
          quantity: 0
        }
      ]
    },
    {
      id: 5,
      name: 'Owijki Bokserskie',
      image: 'http://ultrafight.pl/263-thickbox_default/bandaze-bokserskie-everlast-45m-clima-cool.jpg',
      sizes: [
        {
          size: 'XS',
          price: 110,
          quantity: 0
        },
        {
          size: 'S',
          price: 120,
          quantity: 0
        },
        {
          size: 'M',
          price: 130,
          quantity: 0
        },
        {
          size: 'L',
          price: 140,
          quantity: 0
        },
        {
          size: 'XL',
          price: 150,
          quantity: 0
        }
      ]
    }
  ];
  summary(product) { // przekazany produkt
    product.summary = 0; // wirtualna suma
    product.sizes.forEach(size => { // pętla po rozmiarach, wybranie rozmiaru
      product.summary += size.price * size.quantity; // sumowanie wszystkich cen
    });
    return product.summary; // zwrócenie ceny ogólnej dla pojedyńczego produktu
  }
  summaryTotal() {
    this.totalPrice = 0; // suma łączna
    this.products.forEach(product => { // pętla po wszyskich produktach
      product.sizes.forEach(size => { // pętla po wszystkich rozmiarach dla produktu
        this.totalPrice += size.price * size.quantity; // dodawanie wyników
      });
    });
    return this.totalPrice; // zwrócenie wyniku łącznego
  }
  minMaxPrice(product) { // pobieram produkt
    let min = product.sizes[0].price, // minimalna wartość to 1 wartość dla produktu
        max = 0; // maksymalna to zero
    product.sizes.forEach(size => { // pętla po rozmiarach
      // if (size.price > max) { // jesli cena rozmiaru jest większa od aktualnego maxa
      //   max = size.price; // ustaw cenę jako aktualnego maxa
      // }
      max = size.price > max ? size.price : max; // to samo co if u góry
      // if (size.price < min ) { // jeśli cena jest mniejsza od aktualnego mina
      //   min = size.price; // ustaw cenę jako aktualnego mina
      // }
      min = size.price < min ? size.price : min; // to samo co if u góry
    });
    return { min: min, max: max }; // zwraca 2 wartości na raz jako 1 obiekt JSON
  }
  clearCart() {
    this.products.forEach(product => { // pętla po wszyskich produktach
      product.sizes.forEach(size => { // pętla po wszystkich rozmiarach dla produktu
        size.quantity = 0; // zerowanie quantity
      });
    });
  }
}