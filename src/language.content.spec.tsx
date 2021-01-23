import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { LanguageProvider } from './language.context';
import { useLanguage } from './language.hooks';

const Wrapper: React.FunctionComponent = (props) => {
  return <LanguageProvider>{props.children}</LanguageProvider>;
};

describe('useLanguage specs', () => {
  it('should return a message with language equals "es" when it renders the hook', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useLanguage(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.setLanguage('es');
    });

    // Assert
    expect(result.current.message).toEqual('The current language is: es');
  });
});
