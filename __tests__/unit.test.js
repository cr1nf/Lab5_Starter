// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

//isPhoneNumber test cases
test('is (619)-123-4567 a real phone number', () => {
    expect(isPhoneNumber('(619)-123-4567')).toBe(true);
});
test('is 123-4567 a real phone number', () => {
    expect(isPhoneNumber('123-4567')).toBe(true);
});
test('is 1234567 a real phone number', () => {
    expect(isPhoneNumber('1234567')).toBe(false);
});
test('is 6191234567', () => {
    expect(isPhoneNumber('6191234567')).toBe(false);
});

// isEmail test cases
test('is user@domain.com a real email', () => {
    expect(isEmail('user@domain.com')).toBe(true);
});
test('is skibidi@ucsd.net a real email', () => {
    expect(isEmail('skibidi@ucsd.net')).toBe(true);
});
test('is userdomain.com a real email', () => {
    expect(isEmail('userdomain.com')).toBe(false);
});
test('is ______@ucsd,net a real email', () => {
    expect(isEmail('______@ucsd,net')).toBe(false);
});

// isStrongPassword test cases
test('is password a strong password', () => {
    expect(isStrongPassword('password')).toBe(true);
});
test('is Pssw0rd a strong password', () => {
    expect(isStrongPassword('Pssw0rd')).toBe(true);
});
test('is 123456 a strong password', () => {
    expect(isStrongPassword('123456')).toBe(false);
});
test('is hey a strong password', () => {
    expect(isStrongPassword('hey')).toBe(false);
});

// isDate test cases
test('is 12/25/2020 a real date', () => {
    expect(isDate('12/25/2020')).toBe(true);
});
test('is 10/04/2020 a real date', () => {
    expect(isDate('10/04/2020')).toBe(true);
});
test('is 12/31/20 a real date', () => {
    expect(isDate('12/31/20')).toBe(false);
});
test('is 12-25-2020 a real date', () => {
    expect(isDate('12-25-2020')).toBe(false);
});

// isHexColor test cases
test('is #FFF a real hex color', () => {
    expect(isHexColor('#FFF')).toBe(true);
});
test('is 000 a real hex color', () => {
    expect(isHexColor('000123')).toBe(true);
});
test('is #GHI a real hex color', () => {
    expect(isHexColor('#GHI')).toBe(false);
});
test('is FFFF a real hex color', () => {
    expect(isHexColor('FFFF')).toBe(false);
});
