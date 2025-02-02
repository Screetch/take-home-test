class Drug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  
  checkBenefit(): void {
    if (this.benefit < 0) {
      this.benefit = 0;
    } else if (this.benefit > 50) {
      this.benefit = 50;
    }
  }

  updateBenefit(): void {
    this.benefit -= this.expiresIn <= 0 ? 2 : 1;
    this.checkBenefit();
    this.expiresIn -= 1;
  }
}

class HerbalTea extends Drug {
  updateBenefit(): void {
    this.benefit += this.expiresIn <= 0 ? 2 : 1;
    this.checkBenefit();
    this.expiresIn -= 1;
  }
}

class MagicPill extends Drug {
  updateBenefit(): void {}
}

class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue(): Drug[] {
    for (const drug of this.drugs) {
      drug.updateBenefit();
    }
    return this.drugs;
  }
}

export { Drug, Pharmacy, HerbalTea, MagicPill };

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
