import { useState } from "react";
import * as S from "./styles";
import Card from "../../components/characterCard";
import axios from "../../server/axios-server";

const CharacterPage = ({ characters }) => {
  const [charact, setCaract] = useState(characters);
  const next = async () => {
    const response = await axios.get(charact.info.next);
    setCaract(response.data);
  };
  const prev = async () => {
    const response = await axios.get(charact.info.prev);
    setCaract(response.data);
  };
  return (
    <S.Wrapper>
      <S.List>
        {charact.results.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </S.List>

      <S.WrapperBtn>
        {charact.info.prev && (
          <button className="btn" onClick={() => prev()}>
            Anterior
          </button>
        )}
        <button className="btn" onClick={() => next()}>
          Próximo
        </button>
      </S.WrapperBtn>
    </S.Wrapper>
  );
};

export default CharacterPage;
