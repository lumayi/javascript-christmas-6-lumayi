import December from '../src/December';

describe('기능 테스트', () => {
  let december;
  const date = 25;
  beforeEach(() => {
    december = new December(date);
  });
  test('25일은 평일이다.', () => {
    // when
    const isWeekend = december.checkIsWeekend();

    //then
    expect(isWeekend).toBe(false);
  });
  test('25일은 크리스마스 할인이 가능한 날이다.', () => {
    // when
    const isXMasDays = december.checkXMasDays();

    //then
    expect(isXMasDays).toBe(date);
  });
  test('25일은 특별 할인이 가능한 날이다.', () => {
    // when
    const isSpecial = december.checkIsSpecialDay();

    //then
    expect(isSpecial).toBe(true);
  });
});

describe('기능 테스트', () => {
  let december;
  const date = 30;
  beforeEach(() => {
    december = new December(date);
  });
  test('30일은 주말이다.', () => {
    // when
    const isWeekend = december.checkIsWeekend();

    //then
    expect(isWeekend).toBe(true);
  });
  test('30일은 크리스마스 할인이 불가능한 날이다.', () => {
    // when
    const isXMasDays = december.checkXMasDays();

    //then
    expect(isXMasDays).toBe(0);
  });
  test('25일은 특별 할인이 불가능한 날이다.', () => {
    // when
    const isSpecial = december.checkIsSpecialDay();

    //then
    expect(isSpecial).toBe(false);
  });
});

describe('예외 테스트', () => {
  const cases = [[32], ['1o']];
  test.each(cases)(
    '1-31일 사이의 정수 값이 아닐 시, 예외 발생',
    (wrongDate) => {
      expect(() => {
        new December(wrongDate);
      }).toThrow('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    },
  );
});
