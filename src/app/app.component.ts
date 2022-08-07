import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  priceForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    car: ['', Validators.required],
  })

  carsData = [
    {
      image: "Lamborghini_Huracan_Spyder.png",
      name: "Lamborghini Huracan Spyder",
      transmission: "автомат",
      engine: 5.2,
      year: 2019,
    },

    {
      image: "Chevrolet_Corvette.png",
      name: "Chevrolet Corvette",
      transmission: "автомат",
      engine: 6.2,
      year: 2017,
    },

    {
      image: "Ferrari_California.png",
      name: "Ferrari California",
      transmission: "автомат",
      engine: 3.9,
      year: 2010,
    },

    {
      image: "Lamborghini_Urus.png",
      name: "Lamborghini Urus",
      transmission: "автомат",
      engine: 4.0,
      year: 2019,
    },

    {
      image: "Audi_R8.png",
      name: "Audi R8",
      transmission: "автомат",
      engine: 5.2,
      year: 2018,
    },

    {
      image: "Chevrolet_Camaro.png",
      name: "Chevrolet Camaro",
      transmission: "автомат",
      engine: 2.0,
      year: 2019,
    },

    {
      image: "Maserati_Quattroporte.png",
      name: "Maserati Quattroporte",
      transmission: "автомат",
      engine: 3.0,
      year: 2018,
    },

    {
      image: "Dodge_Challenger.png",
      name: "Dodge Challenger",
      transmission: "автомат",
      engine: 6.4,
      year: 2019,
    },

    {
      image: "Nissan_GT-R.png",
      name: "Nissan GT-R",
      transmission: "автомат",
      engine: 3.8,
      year: 2019,
    },
  ];

  constructor(private fb: FormBuilder) {
  }

  goScroll(target: HTMLElement) {
    target.scrollIntoView({behavior: "smooth"})
  }

  onSubmit() {
    if (this.priceForm.valid) {
      alert("Спасибо за заявку, мы свяжемся с вами в ближайшее время!")
      this.priceForm.reset();
    }
  }
}
