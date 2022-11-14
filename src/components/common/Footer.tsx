import React from 'react';
import styled from 'styled-components';

function Footer() {
  const btnList: string[] = ['로그인', 'PC버전', 'APP설치'];

  return (
    <StFooterContainer>
      <StFooterBtnWrapper>
        {btnList.map((value: string, idx: number) => (
          <StFooterBtn key={idx}>{value}</StFooterBtn>
        ))}
      </StFooterBtnWrapper>
      <StTermsWrapper>
        <span>회사소개｜이용약관｜개인정보처리방침｜청소년보호정책</span>
        <span>사업자정보확인｜전자금융거래약관｜판매이용약관</span>
        <span>쿠팡페이 서비스 이용약관｜쿠팡페이 개인정보처리방침</span>
      </StTermsWrapper>
      <StCompanyInfoWrapper>
        <span>상호명 및 호스팅 서비스 제공 : 쿠팡(주)</span>
        <span>대표이사 : 강한승,박대준</span>
        <span>
          사업자등록번호:120-88-00767｜통신판매업신고:2017-서울송파-0680
        </span>
        <span>서울시 송파구 송파대로 570｜고객센터 : 1577-7011(유료)</span>
      </StCompanyInfoWrapper>
      <StPrecautions>
        사이버몰 내 판매되는 상품 중에는 쿠팡에 등록한 개별 판매자가
        <br /> 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
        <br />
        마켓플레이스(오픈마켓) 상품의 경우 쿠팡은 통신판매중개자이며
        <br /> 통신판매의 당사자가 아닙니다.
        <br /> 쿠팡은 마켓플레이스(오픈마켓) 상품, 거래정보 및 거래 등에 대하여
        <br />
        책임을 지지 않습니다. 쿠팡은 소비자 보호와 안전거래를 위해
        <br />
        신뢰관리센터(<strong>CM112@coupang.com</strong>)를 운영하고 있으며,
        <br /> 관련 분쟁이 발생할 경우 별도의 분쟁처리절차에 의거 분쟁이
        처리됩니다.
      </StPrecautions>
      <StCopyRright>
        Copyright © Coupang Corp. 2010-2022 All Rights Reserved.
      </StCopyRright>
    </StFooterContainer>
  );
}

export default Footer;

const StFooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 40.6rem;

  background-color: ${(props) => props.theme.color.gray100};
`;

const StFooterBtnWrapper = styled.div`
  display: flex;
  gap: 1.6rem;

  margin: 1.6rem 0;
`;

const StFooterBtn = styled.button`
  padding: 0.6rem 1.4rem;

  color: #545454;
  font-size: 1.2rem;
  font-weight: ${(props) => props.theme.fontWeight.medium};

  background-color: #f9f9f9;

  border: 0.1rem solid #d5d5d5;
  border-radius: 0.3rem;
`;

const StTermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: 1.1rem;
  line-height: 1.3rem;
  letter-spacing: -0.02em;

  color: ${(props) => props.theme.color.gray700};
`;

const StCompanyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  margin: 1.6rem 0;

  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: 1.1rem;
  line-height: 1.3rem;
  letter-spacing: -0.08em;

  color: ${(props) => props.theme.color.gray400};
`;

const StPrecautions = styled.span`
  margin: 0 4.9rem;

  font-weight: ${(props) => props.theme.fontWeight.regular};
  font-size: 1.1rem;
  line-height: 1.3rem;
  letter-spacing: -0.08em;

  color: ${(props) => props.theme.color.gray600};
`;

const StCopyRright = styled.span`
  margin-top: 0.8rem;

  font-weight: ${(props) => props.theme.fontWeight.medium};
  font-size: 1.1rem;
  line-height: 1.3rem;
  letter-spacing: -0.1em;

  color: ${(props) => props.theme.color.gray500}; ;
`;
