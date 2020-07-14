import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/48635052?s=460&u=875a22f5badeb1b2af8ed7e38df29a050b61ec79&v=4"
            alt="Lucas Davi"
          />

          <div>
            <strong>lucasdavisan/gostack11-level3</strong>
            <p>
              This repository shows my studies in ReactJS and React Native -
              Gostack 11.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/48635052?s=460&u=875a22f5badeb1b2af8ed7e38df29a050b61ec79&v=4"
            alt="Lucas Davi"
          />

          <div>
            <strong>lucasdavisan/gostack11-level3</strong>
            <p>
              This repository shows my studies in ReactJS and React Native -
              Gostack 11.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/48635052?s=460&u=875a22f5badeb1b2af8ed7e38df29a050b61ec79&v=4"
            alt="Lucas Davi"
          />

          <div>
            <strong>lucasdavisan/gostack11-level3</strong>
            <p>
              This repository shows my studies in ReactJS and React Native -
              Gostack 11.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
