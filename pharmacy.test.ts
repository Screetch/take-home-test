import { Drug, Fervex, HerbalTea, MagicPill, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  describe("Doliprane", () => {
    it("should decrease benefit by 1 and expiresIn by 1 when the drug is not expired", () => {
      const drug = new Drug("Doliprane", 10, 20);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Doliprane", 9, 19),
      ]);
    });

    it("should decrease benefit by 2 when the drug is expired", () => {
      const drug = new Drug("Doliprane", 0, 20);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Doliprane", -1, 18),
      ]);
    });

    it("should verify is benefit never becomes negative", () => {
      const drug = new Drug("Doliprane", 10, 0);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Drug("Doliprane", 9, 0),
      ]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase benefit by 1 and decrease expiresIn by 1 when not expired", () => {
      const drug = new HerbalTea("Herbal Tea", 10, 5);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new HerbalTea("Herbal Tea", 9, 6),
      ]);
    });

    it("should increase benefit by 2 when the drug is expired", () => {
      const drug = new HerbalTea("Herbal Tea", 0, 20);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new HerbalTea("Herbal Tea", -1, 22),
      ]);
    });

    it("should ensure that benefit never exceeds 50", () => {
      const drug = new HerbalTea("Herbal Tea", 10, 55);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new HerbalTea("Herbal Tea", 9, 50),
      ]);
    });
  });

  describe("Magic Pill", () => {
    it("should not decrease or increase benefit and expiresIn", () => {
      const drug = new MagicPill("Magic Pill", 15, 40);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new MagicPill("Magic Pill", 15, 40),
      ]);
    });
  });

  describe("Fervex", () => {
    it("should increase benefit by 1 when expiresIn superior to 10", () => {
      const drug = new Fervex("Fervex", 15, 20);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Fervex("Fervex", 14, 21),
      ]);
    });

    it("should increase benefit by 2 when there are 10 days or less", () => {
      const drug = new Fervex("Fervex", 10, 20);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Fervex("Fervex", 9, 22),
      ]);
    });

    it("should increase benefit by 3 when there are 5 days or less", () => {
      const drug = new Fervex("Fervex", 5, 20);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Fervex("Fervex", 4, 23),
      ]);
    });

    it("should set benefit to 0 after the drug expires", () => {
      const drug = new Fervex("Fervex", 0, 20);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Fervex("Fervex", -1, 0),
      ]);
    });

    it("should ensure that benefit never exceeds 50", () => {
      const drug = new Fervex("Fervex", 10, 55);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new Fervex("Fervex", 9, 50),
      ]);
    });
  })
});