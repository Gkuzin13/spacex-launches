import calcDashOffset from '../calcDashOffset';

describe('calcDashOffset', () => {
  test('should return correct value', () => {
    expect(calcDashOffset(50)).toBe(342);
  });

  test('should return correct value if number is out of range', () => {
    expect(calcDashOffset(150)).toBe(234);
    expect(calcDashOffset(-25)).toBe(450);
  });
});
