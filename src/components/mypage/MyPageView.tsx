import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getUserData } from 'libs/api';
import { UserDataprops } from 'types/types';

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
  const { userId } = useParams<{ userId: string }>();
  const [userData, setUserData] = useState<UserDataprops>();
  const { userName, payMoney, reviewCount, cash, likeCount, recentSeeCount } =
    (userData as UserDataprops) || {};

  const getUserDatas = async () => {
    const data = await getUserData(userId);
    setUserData(data);
  };

  useEffect(() => {
    getUserDatas();
  }, []);

  const menuItemList = [
    { img: iconOrderlist, text: '주문목록' },
    { img: iconCancellist, text: '취소·반품·교환목록' },
    { img: iconReview, text: '리뷰 관리' },
    { img: iconDeliver, text: '정기배송' },
    { img: iconCredit, text: '결제수단·쿠페이' },
    { img: iconRocketfresh, text: '로켓프레시 프레시백' },
    { img: iconGift, text: '쿠팡캐시·기프트카드' },
    { img: iconCoupon, text: '할인쿠폰' },
    { img: iconCustomercenter, text: '고객센터' },
  ];

  const addComma = (data: number) => {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <StMyPageContainer>
      <StUserContainer>
        <StUserInfoContainer>
          <StProfile>
            <img src={iconProfile} alt='profileImage' />
          </StProfile>
          <StName>
            <span>{userName}</span>
            <img src={iconArrow} alt='arrow' />
          </StName>
          <StMoneyCash>
            <StMoneyCashItem>
              <span>쿠페이 머니</span>
              <p>{addComma(payMoney)}원</p>
            </StMoneyCashItem>
            <StDivider />
            <StMoneyCashItem>
              <span>쿠팡캐시</span>
              <p>{addComma(cash)}원</p>
            </StMoneyCashItem>
          </StMoneyCash>
        </StUserInfoContainer>
        <StUserProductContainer>
          <StUserProduct>
            <p>{reviewCount}</p>
            <span>구매후기</span>
          </StUserProduct>
          <StUserProduct>
            <p>{likeCount}</p>
            <span>찜한상품</span>
          </StUserProduct>
          <StUserProduct>
            <p>{userData?.recentSeeCount}</p>
            <span>최근본상품</span>
          </StUserProduct>
        </StUserProductContainer>
      </StUserContainer>
      <StMyMenuContainer>
        {menuItemList.map((menuItem, index) => (
          <StMyMenuList key={index}>
            <StMyMenuItem>
              <img src={menuItem.img} alt='menuItem' />
              <span>{menuItem.text}</span>
            </StMyMenuItem>
            <img src={iconArrow} alt='arrow' />
          </StMyMenuList>
        ))}
      </StMyMenuContainer>
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

const StUserInfoContainer = styled.div`
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

const StUserProductContainer = styled.div`
  display: flex;
  justify-content: space-around;

  height: 7.6rem;
`;

const StUserProduct = styled.div`
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

const StMyMenuContainer = styled.section`
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
