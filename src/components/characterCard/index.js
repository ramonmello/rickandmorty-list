import * as S from "./styles";

const Card = ({ character }) => {
  return (
    <S.Wrapper>
      <S.Image src={character.image} />
      <S.Info>
        <h2>{character.name}</h2>
        <p>{character.status}</p>
        <p>{character.species}</p>
      </S.Info>
    </S.Wrapper>
  );
};

export default Card;
