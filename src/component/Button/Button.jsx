import * as S from './styledButon'

export function Button({ text, onClick, disabled = false }) {
  return (
    <S.button onClick={onClick} disabled={disabled}>
      {text}
    </S.button>
  );
}