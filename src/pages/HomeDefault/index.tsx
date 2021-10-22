import React, { ChangeEvent, useState, FormEvent, useEffect } from "react";
import { AlertDefault } from "../../components/AlertDefault";
import { FormDefault } from "../../components/FormDefault";
import { HeadingDefault } from "../../components/HeadingDefault";
import { InputDefault } from "../../components/InputDefault";
import { ListDefault } from "../../components/ListDefault";
import { LayoutHomeDefault } from "../../layouts/LayoutHomeDefault";
import { api } from "../../services/api";

type GitHubRepositoryProps = {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
};

const HomeDefault: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepositoryProps[]>(() => {
    const storageRepos = localStorage.getItem("@GitCollection:repositories");
    if (storageRepos) {
      return JSON.parse(storageRepos);
    }
    return [];
  });
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const addRepository = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    if (!inputValue) {
      setError("Inform, username/repositorio");
      return;
    }

    const response = await api.get<GitHubRepositoryProps>(
      `/repos/${inputValue}`
    );
    const repository = response.data;
    setRepos([...repos, repository]);
    setInputValue("");
    setError("");
    console.log(repository);
  };

  const handleInputChanger = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("@GitCollection:repositories", JSON.stringify(repos));
  }, [repos]);

  return (
    <div>
      <LayoutHomeDefault>
        <HeadingDefault tag="h5">
          Catalógo de repositóries do Github
        </HeadingDefault>
        <FormDefault onSubmitProps={addRepository}>
          <InputDefault
            icon
            placeholder={"username/repository_name"}
            InputOnChange={handleInputChanger}
            type={"search"}
            hasError={Boolean(error)}
          />
        </FormDefault>

        {error ? <AlertDefault title={error} /> : ""}

        {repos.map((repo) => {
          return (
            <ListDefault
              key={repo.full_name}
              full_name={repo.full_name}
              src={repo.owner.avatar_url}
              alt={repo.owner.login}
              description={repo.description}
            />
          );
        })}
      </LayoutHomeDefault>
    </div>
  );
};

export { HomeDefault };
