export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefit(): void {
    this.benefit -= this.expiresIn <= 0 ? 2 : 1;
    this.benefit = this.benefit < 0 ? 0 : this.benefit > 50 ? 50 : this.benefit;
    this.expiresIn -= 1;
  }
}

export class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue(): Drug[] {
    this.drugs[0].updateBenefit()
    return this.drugs;
  }
}

// export class Pharmacy {
//   constructor(drugs = []) {
//     this.drugs = drugs;
//   }
//   updateBenefitValue() {
//     for (var i = 0; i < this.drugs.length; i++) {
//       if (
//         this.drugs[i].name != "Herbal Tea" &&
//         this.drugs[i].name != "Fervex"
//       ) {
//         if (this.drugs[i].benefit > 0) {
//           if (this.drugs[i].name != "Magic Pill") {
//             this.drugs[i].benefit = this.drugs[i].benefit - 1;
//           }
//         }
//       } else {
//         if (this.drugs[i].benefit < 50) {
//           this.drugs[i].benefit = this.drugs[i].benefit + 1;
//           if (this.drugs[i].name == "Fervex") {
//             if (this.drugs[i].expiresIn < 11) {
//               if (this.drugs[i].benefit < 50) {
//                 this.drugs[i].benefit = this.drugs[i].benefit + 1;
//               }
//             }
//             if (this.drugs[i].expiresIn < 6) {
//               if (this.drugs[i].benefit < 50) {
//                 this.drugs[i].benefit = this.drugs[i].benefit + 1;
//               }
//             }
//           }
//         }
//       }
//       if (this.drugs[i].name != "Magic Pill") {
//         this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
//       }
//       if (this.drugs[i].expiresIn < 0) {
//         if (this.drugs[i].name != "Herbal Tea") {
//           if (this.drugs[i].name != "Fervex") {
//             if (this.drugs[i].benefit > 0) {
//               if (this.drugs[i].name != "Magic Pill") {
//                 this.drugs[i].benefit = this.drugs[i].benefit - 1;
//               }
//             }
//           } else {
//             this.drugs[i].benefit =
//               this.drugs[i].benefit - this.drugs[i].benefit;
//           }
//         } else {
//           if (this.drugs[i].benefit < 50) {
//             this.drugs[i].benefit = this.drugs[i].benefit + 1;
//           }
//         }
//       }
//     }

//     return this.drugs;
//   }
// }
