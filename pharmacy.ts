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

class Fervex extends Drug {
  updateBenefit(): void {
    if (this.expiresIn <= 0) {
      this.benefit = 0;
    } else if (this.expiresIn <= 5) {
      this.benefit += 3;
    } else if (this.expiresIn <= 10) {
      this.benefit += 2;
    } else {
      this.benefit += 1;
    }
    this.checkBenefit();
    this.expiresIn -= 1;
  }
}

class MagicPill extends Drug {
  updateBenefit(): void {}
}

class Dafalgan extends Drug {
  updateBenefit(): void {
    this.benefit -= this.expiresIn <= 0 ? 4 : 2;
    this.checkBenefit();
    this.expiresIn -= 1;
  }
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

export { Drug, Pharmacy, HerbalTea, Fervex, Dafalgan, MagicPill };