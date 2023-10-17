import styled from 'styled-components';
import search from '../../../assets/icons/icon-search.svg';
import cart from '../../../assets/icons/icon-cart.svg';
import cart2 from '../../../assets/icons/icon-cart2.svg';
import user from '../../../assets/icons/icon-user.svg';
import user2 from '../../../assets/icons/icon-user2.svg';
import shoppingBag from '../../../assets/icons/icon-shopping-bag.svg';

// Header 레이아웃
export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 20px auto;
  padding: 0px 30px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin: 20px auto 30px;
  }
`;

// 로고, 검색바
export const LogoSearchBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 13px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
    gap: 0px;
  }
`;

// 로고
export const LogoBox = styled.div`
  width: 300px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    width: 230px;
  }
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

// 검색창
export const SearchBox = styled.div`
  margin-top: 70px;

  label {
    position: relative;

    input {
      width: 300px;
      border: ${({ theme }) => `2px solid ${theme.colors.text}`};
      border-radius: 30px;
      padding: 12px 18px;
      box-sizing: border-box;
      font-size: 15px;

      ::placeholder {
        font-weight: bold;
      }
    }

    button {
      width: 30px;
      height: 30px;
      position: absolute;
      right: 12px;
      top: 9px;
      transform: translateY(-50%);
      background: url(${search}) center/contain no-repeat;
      cursor: pointer;
    }
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    margin-top: 0;

    label {
      input {
        width: 200px;
        font-size: 13px;
        padding: 8px 17px;
        margin-left: 14px;
      }

      button {
        width: 25px;
        height: 25px;
        right: 9px;
        top: 10px;
      }
    }
  }
`;

// 장바구니, 로그인
export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 14px;
  margin: 15px 20px 0px 0px;

  @media ${(props) => props.theme.mediaQuery.mobile} {
    gap: 10px;
    margin: 100px 15px 0px 0px;
  }
`;

export const MenuBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 5px;
  color: ${(props) =>
    props.modal === true ? props.theme.colors.secondary : props.theme.colors.footerTxt};

  button {
    width: 32px;
    height: 32px;
    :active + span {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  span {
    font-size: 15px;
    font-weight: bold;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    gap: 3px;

    button {
      width: 28px;
      height: 28px;
    }

    span {
      font-size: 13px;
    }
  }
`;

export const UserBtn = styled.button`
  background: ${(props) =>
    props.modal === true
      ? `url(${user2}) center/contain no-repeat `
      : `url(${user}) center/contain no-repeat `};
  :active {
    background: url(${user2}) center/contain no-repeat;
  }
`;

export const CartBtn = styled.button`
  background: url(${cart}) center/contain no-repeat;
  :active {
    background: url(${cart2}) center/contain no-repeat;
  }
`;

export const SellerBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  padding: 12px 0;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};

  ::before {
    content: '';
    margin-right: 8px;
    height: 32px;
    width: 32px;
    background: url(${shoppingBag}) no-repeat center / 32px 32px;
  }

  @media ${(props) => props.theme.mediaQuery.mobile} {
    flex-direction: column;
    width: 90px;
    padding: 9px 0px;
    font-size: 13px;
    gap: 5px;
    margin-bottom: 3px;

    ::before {
      margin-right: 0px;
      height: 27px;
      width: 27px;
      background: url(${shoppingBag}) no-repeat center / 27px 27px;
    }
  }
`;
