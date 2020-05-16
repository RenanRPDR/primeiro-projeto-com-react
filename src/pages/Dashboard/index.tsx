import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/55991676?s=460&u=5a9efc6841adfbc2efdaa55207f3b77f0700e9e0&v=4"
            alt="Renan Portugal do Rio"
          />
          <div>
            <strong>RenanRPDR/primeiro-projeto-com-react</strong>
            <p>Esse repositório é refente ao projeto Github explorer.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/55991676?s=460&u=5a9efc6841adfbc2efdaa55207f3b77f0700e9e0&v=4"
            alt="Renan Portugal do Rio"
          />
          <div>
            <strong>RenanRPDR/primeiro-projeto-com-react</strong>
            <p>Esse repositório é refente ao projeto Github explorer.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/55991676?s=460&u=5a9efc6841adfbc2efdaa55207f3b77f0700e9e0&v=4"
            alt="Renan Portugal do Rio"
          />
          <div>
            <strong>RenanRPDR/primeiro-projeto-com-react</strong>
            <p>Esse repositório é refente ao projeto Github explorer.</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
