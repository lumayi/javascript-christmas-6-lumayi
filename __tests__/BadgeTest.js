import Badge from '../src/Badge';

describe('기능테스트', () => {
  const cases = [
    [20000, '산타'],
    [10000, '트리'],
    [5000, '별'],
    [100, '없음'],
  ];
  test.each(cases)('가격에 맞는 배지를 받는다', (totalBenefit, expected) => {
    //when
    const badge = Badge.awardBadge(totalBenefit);

    //then
    expect(badge).toBe(expected);
  });
});
