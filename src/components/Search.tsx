import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getSearch } from '../api';
import { CacheLocalStorage } from '../helper';
import useDebounce from '../hooks/useDebounce';
import Icon from './Icon';
import SearchList from './SearchList';

export type SearchItemType = {
  sickCd: string;
  sickNm: any;
};

const Search = () => {
  const [isFocus, setIsFocus] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [searchList, setSearchList] = useState<SearchItemType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { debouncedValue, initDebounce } = useDebounce(keyword, 600);

  const onInputFocus = () => {
    setIsFocus(true);
  };

  const onInputBlur = () => {
    setIsFocus(false);
  };

  const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
  };

  useEffect(() => {
    if (!keyword || !debouncedValue) return;

    // setIsLoading(true);

    const cacheInstance = new CacheLocalStorage();

    const cache = cacheInstance.get(keyword);

    if (cache) {
      console.log(cache.expire < Date.now());

      if (cache.expire < Date.now()) {
        cacheInstance.remove(keyword);
      } else if (cache.expire > Date.now()) {
        setSearchList(cache.datas);
        initDebounce();
        return;
      }
    }
    (async () => {
      const res = await getSearch(keyword);

      if (res.status !== 200) return;

      // setIsLoading(false);

      const searchList = res.data.slice(0, 7).map((item: SearchItemType) => ({
        ...item,
        sickNm: item.sickNm.split(new RegExp(`(${keyword})`, 'g')),
      }));

      cacheInstance.set(keyword, searchList);

      setSearchList(searchList);
      initDebounce();
    })();
  }, [keyword, debouncedValue, initDebounce]);

  return (
    <Root>
      <InputContainer className={isFocus ? 'focused' : ''}>
        <input
          type="text"
          placeholder="질환명을 입력해 주세요."
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          onChange={onInput}
          value={keyword}
        />
        <button className="search-btn">
          <Icon name="Search" />
        </button>
      </InputContainer>
      <SearchList items={searchList} keyword={keyword} isLoading={isLoading} />
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
