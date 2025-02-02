import { Drug, MagicPill, Pharmacy } from "./pharmacy";

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

  describe("Magic Pill", () => {
    it("should not decrease or increase benefit and expiresIn", () => {
      const drug = new MagicPill("Magic Pill", 15, 40);
      const pharmacy = new Pharmacy([drug]);
      expect(pharmacy.updateBenefitValue()).toEqual([
        new MagicPill("Magic Pill", 15, 40),
      ]);
    });
  });
});