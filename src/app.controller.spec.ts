import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    // Set up the testing module with AppController and AppService
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    // Retrieve an instance of AppController from the testing module
    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    // Test the 'getHello' method of AppController
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');   // toBe is the expected reuslt 
      // Check if the response is 'Hello World!'
    });

    // Test the 'getName' method with a specific name
    it('should return "My name is Sandahansi!"', () => {
      expect(appController.getName({ name: 'Sandahansi!' })).toBe('My name is Sandahansi!');
      // Verify if the response matches the expected greeting
    });

    // Test 'getConcatenation' with empty strings
    it('should return an empty string if both inputs are empty', () => {
      expect(appController.getConcatenation({ str1: '', str2: '' })).toBe('');
      // Confirm that concatenation of two empty strings returns an empty string
    });

    // Test 'getStringLength' with a non-empty string
    it('should return the correct length of the string', () => {
      expect(appController.getStringLength({ str: 'Hello' })).toBe(5);
      // Verify if the length of 'Hello' is correctly calculated as 5
    });

    // Test 'getStringLength' with an empty string
    it('should return zero for an empty string', () => {
      expect(appController.getStringLength({ str: '' })).toBe(0);
      // Check if the length of an empty string is correctly returned as 0
    });

    // Test 'getStringLength' with a string that includes spaces
    it('should return the correct length for a string with spaces', () => {
      expect(appController.getStringLength({ str: 'Hello World' })).toBe(11);
      // Confirm that the length of 'Hello World' including the space is correctly returned as 11
    });

    // Test 'containsSubstring' to check for substring presence
    it('should return true if the string contains the substring', () => {
      expect(appController.containsSubstring({ str: 'Hello World', substring: 'World' })).toBe(true);
      // Verify if the method correctly identifies 'World' in 'Hello World'
    });

    // Test 'reverseString' to check if it reverses the string correctly
    it('should return the reverse of the string', () => {
      expect(appController.reverseString({ str: 'Hello' })).toBe('olleH');
      // Confirm that 'Hello' is correctly reversed to 'olleH'
    });
  });
});
