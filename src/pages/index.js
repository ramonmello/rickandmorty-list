import CharacterPage from "../templates/CharacterPage";
import axios from "../server/axios-server";

const Page = ({ characters }) => {
  return <CharacterPage characters={characters} />;
};

export default Page;

export const getServerSideProps = async () => {
  const characters = await axios.get(
    "https://rickandmortyapi.com/api/character/"
  );

  return {
    props: {
      characters: characters.data,
    },
  };
};
