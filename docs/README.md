# 미션 - 크리스마스 프로모션

## 기능 요구 사항

- [ ] 12월 중 방문할 날짜를 받는다. #Output-getOrder
  - [ ] 1-31 사이의 정수가 아닐시에 예외 처리 #Month -> #December
  - [ ] 이벤트 기간은 12월까지이다. #December
- [x] 주문가능한 메뉴를 정의
- [ ] 주문할 메뉴와 개수를 받는다. #Input, #Order-placeOrder
  - [x] 메뉴판에 없는 메뉴를 주문시, 예외 처리
  - [x] 중복 메뉴를 입력했을 시, 예외 처리
  - [x] 메뉴의 개수가 1 미만일 시, 예외 처리
  - [x] 전체 주문 메뉴가 20개 초과일 시, 예외 처리
  - [x] 음료만 주문시, 예외 처리
- [ ] 주문한 메뉴를 출력한다. #Output-printOrders
- [ ] 총 주문 금액을 구한다. #Order-getTotalPrice
- [ ] 할인 전 총 주문 금액을 출력한다. #Output-printTotalOrderPrice
- [ ] 총 주문 금액 10,000원 미만시 이벤트 적용 불가 #Discount
- [ ] 선택한 날에 맞는 할인을 적용한다. #Dicount-getPossibleDiscounts
  - [ ] 크리스마스 디데이 할인 getXmasDiscount
  - [ ] 평일 할인 getWeekdayDiscount
  - [ ] 주말 할인 getWeekendDiscount
  - [ ] 특별 할인 getSpecialDsicount
  - [ ] 증정 이벤트 할인 getComplimentaryDiscount
  - [ ] 혜택이 없을 시, <없음>으로 출력
  - [ ] 적용된 할인 내역을 출력한다. Output-printDiscount
- [ ] 총 혜택 금액을 구한다. #Discount-getTotalBenefits
- [ ] 총 혜택 금액을 출력한다. #Output-printTotalBenefits
- [ ] 할인 후, 예상 결제 금액을 구한다. #Discount-getDiscountedAppliedPrice
- [ ] 할인 후, 예상 결제 금액을 출력한다. #Output-printDiscountAppliedPrice
- [ ] 혜택 금액에 따른 배지를 부여한다. #Badge-getBadge
