import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

import { GridDefault } from "../GridDefault";
import { TextDefault } from "../TextDefault";
import { ListDefaultContainer } from "./styles";

type GitHubRepositoryProps = {
  full_name: string;
  description: string;
  src: string;
  alt: string;
};

const ListDefault: React.FC<GitHubRepositoryProps> = ({
  full_name,
  description,
  src,
  alt,
}) => {
  return (
    <ListDefaultContainer>
      <Link to={`/repositories/${full_name}`}>
        <img src={src} alt={alt} />
        <GridDefault>
          <TextDefault tag="strong">{full_name}</TextDefault>
          <TextDefault>{description}</TextDefault>
        </GridDefault>
        <FiChevronRight size={30} />
      </Link>
    </ListDefaultContainer>
  );
};

export { ListDefault };
