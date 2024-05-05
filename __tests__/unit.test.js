// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// test isPhoneNumber
// return true
test('a valid phone number returns true', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('a valid phone number returns true', () => {
    expect(isPhoneNumber('980-576-8475')).toBe(true);
});

// return false
test('an invalid phone number returns false', () => {
    expect(isPhoneNumber('123(456)-7890')).toBe(false);
});

test('an invalid phone number returns false', () => {
    expect(isPhoneNumber('4549758319')).toBe(false);
});

// test isEmail
// return true
test('a valid Email returns true', () => {
    expect(isEmail('sample@test.com')).toBe(true);
});

test('a valid Email returns true', () => {
    expect(isEmail('a@b.net')).toBe(true);
});
// return false
test('an invalid Email returns false', () => {
    expect(isEmail('sample@a.b')).toBe(false);
});

test('an invalid Email returns false', () => {
    expect(isEmail('sample.a.com')).toBe(false);
});

// test isStrongPassword
// return true
test('a Strong Password returns true', () => {
    expect(isStrongPassword('password23423')).toBe(true);
});

test('a Strong Password returns true', () => {
    expect(isStrongPassword('abcd')).toBe(true);
});
// return false
test('an Weak Password returns false', () => {
    expect(isStrongPassword('1234')).toBe(false);
});

test('an Weak Password returns false', () => {
    expect(isStrongPassword('a7df7f34yf738gr84')).toBe(false);
});

// test isDate
// return true
test('a valid date returns true', () => {
    expect(isDate('99/23/8475')).toBe(true);
});

test('a valid date returns true', () => {
    expect(isDate('12/12/2012')).toBe(true);
});
// return false
test('an invalid date returns false', () => {
    expect(isDate('4534/9473')).toBe(false);
});

test('an invalid date returns false', () => {
    expect(isDate('y7/84/3rh7')).toBe(false);
});

// test isHexColor
// return true
test('a valid hex color returns true', () => {
    expect(isHexColor('#78a9cb')).toBe(true);
});

test('a valid hex color returns true', () => {
    expect(isHexColor('37f')).toBe(true);
});
// return false
test('an invalid hex color returns false', () => {
    expect(isHexColor('#79acc8abc')).toBe(false);
});

test('an invalid hex color returns false', () => {
    expect(isHexColor('#xyzxyy')).toBe(false);
});

