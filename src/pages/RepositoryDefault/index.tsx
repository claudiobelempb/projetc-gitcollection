import { useRouteMatch } from "react-router-dom";
import { GridDefault } from "../../components/GridDefault";
import { HeadingDefault } from "../../components/HeadingDefault";
import { TextDefault } from "../../components/TextDefault";
import { LayoutHomeDefault } from "../../layouts/LayoutHomeDefault";

import { RepositoryDefaultContainer } from "./styles";

type RepositoryDefaultProps = {
  repository: string;
};
const RepositoryDefault: React.FC = () => {
  const { params } = useRouteMatch<RepositoryDefaultProps>();
  console.log(params.repository);

  return (
    <LayoutHomeDefault>
      <HeadingDefault tag={"h5"}>{params.repository}</HeadingDefault>
      <RepositoryDefaultContainer>
        <GridDefault size={2}>
          <img src={"/"} alt={"Aluizio Developer"} />
          <div>
            <HeadingDefault tag="h5">
              aluiziodeveloper/mini-curso-reactjs
            </HeadingDefault>
            <TextDefault tag="p">
              Reposítorio do mini curso gratuito de react
            </TextDefault>
          </div>
        </GridDefault>
        <GridDefault>
          <ul>
            <li>
              <TextDefault tag={"strong"}>2330</TextDefault>
              <TextDefault tag={"span"}>Stars</TextDefault>
            </li>
            <li>
              <TextDefault tag={"strong"}>218</TextDefault>
              <TextDefault tag={"span"}>Forks</TextDefault>
            </li>
            <li>
              <TextDefault tag={"strong"}>79</TextDefault>
              <TextDefault tag={"span"}>Issues abertas</TextDefault>
            </li>
          </ul>
        </GridDefault>
      </RepositoryDefaultContainer>
    </LayoutHomeDefault>
  );
};

export { RepositoryDefault };
