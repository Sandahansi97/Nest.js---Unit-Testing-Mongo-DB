import { Test, TestingModule } from '@nestjs/testing';
import { CalculationsController } from './calculations.controller';
import { CalculationsService } from './calculations.service';

// Describe the test suite for CalculationsController
describe('CalculationsController', () => {
  let calculationsController: CalculationsController;

  // Before each test, set up the TestingModule
  beforeEach(async () => {
    // Create a testing module with the controller and service
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CalculationsController], // Specify the controller being tested
      providers: [CalculationsService], // Specify any services the controller depends on
    }).compile(); // Compile the module

    // Get an instance of CalculationsController from the testing module
    calculationsController = app.get<CalculationsController>(CalculationsController);
  });

  // Describe the test cases for the controller's methods
  describe('root', () => {

    // Test for the addition method
    it('should return correct addition', () => {
      // Check if the addition of 10 and 20 returns 30
      expect(calculationsController.getAddition({ num1: 10, num2: 20 })).toBe(30);
    });

    // Test for the subtraction method
    it('should return correct subtraction', () => {
      // Check if the subtraction of 10 from 20 returns 10
      expect(calculationsController.getSubstraction({ num1: 20, num2: 10 })).toBe(10);
    });

    // Test for the multiplication method
    it('should return correct multiplication', () => {
      // Check if the multiplication of 20 and 10 returns 200
      expect(calculationsController.getMutiplication({ num1: 20, num2: 10 })).toBe(200);
    });

    // Test for the division method
    it('should return correct division', () => {
      // Check if the division of 20 by 10 returns 2
      expect(calculationsController.getDivision({ num1: 20, num2: 10 })).toBe(2);
    });

    /* This test is commented out because it expects a division by zero to return 20,
       which is incorrect logic. The code should handle this case with an error. */
    /*
    it('should return correct division1', () => {
      expect(calculationsController.getDivision1({ num1: 20, num2: 0 })).toBe(20);
    });
    */

    // Test for the division by zero case in getDivision1 method
    it('should throw an error when dividing by zero', () => {
      // Expect an error to be thrown when dividing 10 by 0
      expect(() => {
        calculationsController.getDivision1({ num1: 10, num2: 0 });
      }).toThrow('Division by zero is not allowed'); // Check if the correct error message is thrown
    });

    // Test case to verify the modulus function
    it('should return correct remaining value', () => {
      // Expect the result of 40 % 3 to be 1
      expect(calculationsController.getModulus({ num1: 40, num2: 3 })).toBe(1);
    });

    // Test case to verify the square function
    it('should return correct square value', () => {
      // Expect the result of 2 * 2 to be 4
      expect(calculationsController.getSquare({ num1: 2 })).toBe(4);
    });
  });
});
