import styled from 'styled-components';
import {
  iconProfile,
  iconArrow,
  iconCancellist,
  iconCoupon,
  iconCredit,
  iconCustomercenter,
  iconDeliver,
  iconOrderlist,
  iconReview,
  iconRocketfresh,
  iconGift,
} from 'assets/icons';

function MyPageView() {
  return (
    <StMyPageContainer>
      <StUserContainer>
        <StUserInfoWrapper>
          <StProfile>
            <img src={iconProfile} />
          </StProfile>
          <StName>
            웹3조짱
            <img src={iconArrow} />
          </StName>
          <StMoneyCash>
            <StMoneyCashItem>
              쿠페이 머니
              <p>1000원</p>
            </StMoneyCashItem>
            <StDivider />
            <StMoneyCashItem>
              쿠팡캐시
              <p>2000원</p>
            </StMoneyCashItem>
          </StMoneyCash>
        </StUserInfoWrapper>
        <StUserProductWrapper>
          <StUserProductItem>
            <p>23</p>
            구매후기
          </StUserProductItem>
          <StUserProductItem>
            <p>25</p>
            찜한상품
          </StUserProductItem>
          <StUserProductItem>
            <p>47</p>
            최근본상품
          </StUserProductItem>
        </StUserProductWrapper>
      </StUserContainer>
      <StMyMenuWrapper>
        <StMyMenuList>
          <StMyMenuItem>
            <img src={iconOrderlist} />
            주문목록
          </StMyMenuItem>
          <img src={iconArrow} />
        </StMyMenuList>
        <StMyMenuList>
          <StMyMenuItem>
            <img src={iconCancellist} />
            취소·반품·교환목록
          </StMyMenuItem>
          <img src={iconArrow} />
        </StMyMenuList>
        <StMyMenuList>
          <StMyMenuItem>
            <img src={iconReview} />
            리뷰 관리
          </StMyMenuItem>
          <img src={iconArrow} />
        </StMyMenuList>
        <StMyMenuList>
          <StMyMenuItem>
            <img src={iconDeliver} />
            정기배송
          </StMyMenuItem>
          <img src={iconArrow} />
        </StMyMenuList>
        <StMyMenuList>
          <StMyMenuItem>
            <img src={iconCredit} />
            결제수단·쿠페이
          </StMyMenuItem>
          <img src={iconArrow} />
        </StMyMenuList>
        <StMyMenuList>
          <StMyMenuItem>
            <img src={iconRocketfresh} />
            로켓프레시 프레시백
          </StMyMenuItem>
          <img src={iconArrow} />
        </StMyMenuList>
        <StMyMenuList>
          <StMyMenuItem>
            <img src={iconGift} />
            쿠팡캐시·기프트카드
          </StMyMenuItem>
          <img src={iconArrow} />
        </StMyMenuList>
        <StMyMenuList>
          <StMyMenuItem>
            <img src={iconCoupon} />
            할인쿠폰
          </StMyMenuItem>
          <img src={iconArrow} />
        </StMyMenuList>
        <StMyMenuList>
          <StMyMenuItem>
            <img src={iconCustomercenter} />
            고객센터
          </StMyMenuItem>
          <img src={iconArrow} />
        </StMyMenuList>
      </StMyMenuWrapper>
    </StMyPageContainer>
  );
}

export default MyPageView;

const StMyPageContainer = styled.main`
  background-color: #f5f5f5;
`;

const StUserContainer = styled.section`
  height: 17.6rem;

  background-color: ${(props) => props.theme.color.white};
`;

const StUserInfoWrapper = styled.div`
  display: flex;
  align-items: center;

  height: 10rem;
  padding: 2.2rem 2.4rem 0.7rem 2rem;

  background: linear-gradient(180deg, #d9e2ff 0%, rgba(217, 217, 217, 0) 100%);
`;

const StProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 7.1rem;
  height: 7.1rem;

  border: 0.15rem solid ${(props) => props.theme.color.gray100};
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.white};
`;

const StName = styled.div`
  display: flex;
  align-items: center;

  width: 9.8rem;
  height: 2.7rem;
  margin: 0rem 1.7rem;

  font-size: 2.3rem;
  font-weight: ${(props) => props.theme.fontWeight.regular};

  & > img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const StMoneyCash = styled.div`
  display: flex;
  justify-content: space-around;

  & > :not(:last-child) {
    margin-right: 1.5rem;
  }
`;

const StMoneyCashItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fontWeight.semiBold};

  & > p {
    padding-top: 0.3rem;
    color: ${(props) => props.theme.color.gray800};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }
`;

const StDivider = styled.div`
  height: 3.2rem;

  border-right: 0.1rem solid ${(props) => props.theme.color.gray300};
`;

const StUserProductWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  height: 7.6rem;
`;

const StUserProductItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  padding-top: 1.1rem;

  font-size: 1.4rem;
  font-weight: ${(props) => props.theme.fontWeight.medium};

  & > p {
    padding-top: 0.3rem;

    color: ${(props) => props.theme.color.gray800};
    font-size: 2.08rem;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};
  }
`;

const StMyMenuWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 1.2rem;

  border-top: 0.1rem solid ${(props) => props.theme.color.gray100};
  border-bottom: 0.1rem solid #dedede;
  background-color: ${(props) => props.theme.color.white};
  font-size: 1.6rem;
  font-weight: ${(props) => props.theme.fontWeight.medium};

  & > :not(:last-child) {
    border-bottom: 0.1rem solid ${(props) => props.theme.color.gray100};
  }
`;

const StMyMenuList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 34.5rem;
  height: 5.6rem;
`;

const StMyMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.8rem;
`;
