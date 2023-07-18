import styled from '@emotion/styled';
import React from 'react';
import { useState } from 'react';
import Icon from './Icon';

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);

  const onInputFocus = () => {
    setIsFocus(true);
  };

  const onInputBlur = () => {
    setIsFocus(false);
  };

  return (
    <Root>
      <InputContainer className={isFocus ? 'focused' : ''}>
        <input
          type="text"
          placeholder="질환명을 입력해 주세요."
          onFocus={onInputFocus}
          onBlur={onInputBlur}
        />
        <button className="search-btn">
          <Icon name="Search" />
        </button>
      </InputContainer>
    </Root>
  );
};

const Root = styled.div`
  width: 490px;
`;

const InputContainer = styled.div`
  position: relative;
  display: flex;
  gap: 0 25px;
  justify-content: space-between;
  align-items: center;
  padding: 0 14px 0 24px;
  background: #fff;
  height: 80px;
  border-radius: 42px;

  &.focused {
    border: 2px solid rgb(0, 123, 233);
  }

  & > input {
    flex: 1;
    width: 100%;
    height: 25px;
    border: none;
    outline: none;
    font-size: 18px;
  }

  & > .search-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border: none;
    border-radius: 50%;
    background: #007be9;
    & > svg {
      width: 21px;
      height: 21px;
      color: #fff;
    }
  }
`;

export default Search;
