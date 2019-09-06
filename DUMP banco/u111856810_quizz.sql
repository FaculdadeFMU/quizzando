-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Tempo de geração: 04/09/2019 às 22:41
-- Versão do servidor: 10.2.23-MariaDB
-- Versão do PHP: 7.2.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `u111856810_quizz`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `atividade`
--

CREATE TABLE `atividade` (
  `id_atividade` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `nomeAtividade` varchar(50) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `atividade`
--

INSERT INTO `atividade` (`id_atividade`, `usuario_id`, `nomeAtividade`) VALUES
(1, 1, 'Quizzando'),
(2, 1, 'teste'),
(3, 1, 'Rally do Conhecimento'),
(4, 1, 'Saculejo'),
(5, 1, 'Quarteto Fantastico'),
(6, 1, 'Quarteto Fantastico'),
(7, 1, 'Tete'),
(8, 1, 'Chupeta'),
(9, 1, 'Fralda'),
(10, 1, 'Mamadeira'),
(11, 1, 'Boné'),
(12, 1, 'Bone'),
(13, 1, 'MeuNaChupeta'),
(14, 3, 'Agora foi'),
(15, 3, 'Agora foi 2'),
(16, 3, 'Agora foi 2'),
(17, 3, 'Agora foi 3'),
(18, 3, 'teste'),
(19, 3, 'Quase Desistindo'),
(20, 3, 'Teste'),
(21, 3, 'Agora foi'),
(22, 3, 'Pedreira'),
(23, 3, 'Pedreira'),
(24, 3, 'Pedregulho'),
(25, 3, 'Quadro de flor'),
(26, 3, 'Pergunta'),
(27, 3, 'Teste'),
(28, 3, 'teste3'),
(29, 3, 'ultima tentativa'),
(30, 3, 'çjjhljkhlk'),
(31, 3, 'ta lhe pau'),
(32, 3, 'pedroso'),
(33, 3, 'asdasdas'),
(34, 3, 'tatu bola'),
(35, 3, 'asdasdad'),
(36, 3, 'asdasd'),
(37, 3, 'Pedroso'),
(38, 3, 'pedroso 1'),
(39, 3, 'Apresentação'),
(40, 3, 'Vai caramba'),
(41, 3, 'sdasdasd'),
(42, 3, 'sadasd'),
(43, 3, 'sadasdasd'),
(44, 3, 'pedroso'),
(45, 3, 'sadasdasd'),
(46, 3, 'sadasdsad'),
(47, 3, 'teste'),
(48, 3, 'asdasdasd'),
(49, 3, 'dsadsadasd'),
(50, 3, 'sdasdasd'),
(51, 3, 'dasdasdas'),
(52, 3, 'Teste'),
(53, 3, 'Rally do conhecimento'),
(54, 3, 'Teste'),
(55, 3, 'undefined'),
(56, 3, 'undefined'),
(57, 3, 'undefined'),
(58, 3, 'undefined'),
(60, 3, 'Tobas'),
(65, 3, 'Topperson'),
(66, 3, 'Topperson'),
(67, 3, 'Polemicos'),
(71, 3, 'Vai caray'),
(77, 3, 'Teste'),
(82, 3, 'Séra?'),
(85, 3, 'Camelos'),
(86, 3, 'Coisa boa'),
(88, 3, 'Tarefas'),
(89, 3, 'oi'),
(91, 3, 'Problemas'),
(92, 3, 'Brutus'),
(94, 3, 'oq pega'),
(95, 3, 'porra');

-- --------------------------------------------------------

--
-- Estrutura para tabela `grupoPerguntas`
--

CREATE TABLE `grupoPerguntas` (
  `id_grupoPergunta` int(10) UNSIGNED NOT NULL,
  `nomeGrupo` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `atividade_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `grupoPerguntas`
--

INSERT INTO `grupoPerguntas` (`id_grupoPergunta`, `nomeGrupo`, `atividade_id`) VALUES
(1, 'São Paulo', 1),
(2, 'Bahia', 1),
(3, 'undefined', 1),
(4, 'undefined', 1),
(5, 'undefined', 1),
(6, 'undefined', 1),
(7, 'undefined', 1),
(8, 'undefined', 1),
(9, 'Limpar', 1),
(10, 'Limpar', 1),
(11, 'Cordeiros', 1),
(12, 'testas', 1),
(13, 'budegas', 1),
(14, 'budegas', 1),
(15, 'flor', 1),
(16, 'Frutas', 1),
(17, 'Doces', 1),
(18, 'Vinagre', 1),
(19, 'Detergente', 1),
(20, 'kkkk', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `grupoPessoas`
--

CREATE TABLE `grupoPessoas` (
  `idGrupo` int(10) UNSIGNED NOT NULL,
  `nomeGrupo` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id_atividade` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `grupoPessoas`
--

INSERT INTO `grupoPessoas` (`idGrupo`, `nomeGrupo`, `id_atividade`) VALUES
(1, 'A Locuragem', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `integrante`
--

CREATE TABLE `integrante` (
  `id_integrante` int(10) UNSIGNED NOT NULL,
  `nome` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `RA` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `idGrupo` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `integrante`
--

INSERT INTO `integrante` (`id_integrante`, `nome`, `email`, `RA`, `idGrupo`) VALUES
(1, 'Leonardo Guedes', 'leonardo.guedes.rocha@gmail.com', '8054170', 1),
(2, 'Eryk Pedroso', 'eryk.pedroso@gmail.com', '8214316', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `perguntas`
--

CREATE TABLE `perguntas` (
  `idtbQuestao` int(10) UNSIGNED NOT NULL,
  `enunciado` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alternativaA` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alternativaB` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alternativaC` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `alternativaD` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `altCorreta` varchar(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  `grupoPerguntas_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `perguntas`
--

INSERT INTO `perguntas` (`idtbQuestao`, `enunciado`, `alternativaA`, `alternativaB`, `alternativaC`, `alternativaD`, `altCorreta`, `grupoPerguntas_id`) VALUES
(1, '1+1', '2', '3', '4', '5', 'A', 1),
(2, '2+2', '2', '3', '4', '5', 'C', 1),
(8, '3+3', '4', '5', '6', '7', 'C', 2),
(11, '5+5', '9', '10', '11', '12', 'B', 1),
(12, '6+6', '25', '14', '18', '12', 'D', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `reposta`
--

CREATE TABLE `reposta` (
  `id_reposta` int(10) UNSIGNED NOT NULL,
  `grupo_id` int(10) UNSIGNED NOT NULL,
  `pergunta_id` int(10) UNSIGNED NOT NULL,
  `atividade_id` int(10) UNSIGNED NOT NULL,
  `alternativaSelecionada` varchar(250) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estrutura para tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_users` int(10) UNSIGNED NOT NULL,
  `nome` varchar(500) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL,
  `senha` varchar(250) COLLATE utf8_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Despejando dados para a tabela `usuario`
--

INSERT INTO `usuario` (`id_users`, `nome`, `email`, `senha`) VALUES
(1, 'Leonardo', 'Leonardo.guedes.rocha@gmail.com', '123'),
(2, 'Leonardo', 'Leonarod.guedes.rocha@gmail.com', '123'),
(3, 'Eryk Pedroso', 'eryk.pedroso@gmail.com', '1234');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `atividade`
--
ALTER TABLE `atividade`
  ADD PRIMARY KEY (`id_atividade`),
  ADD KEY `fk_usuarios_atividade` (`usuario_id`);

--
-- Índices de tabela `grupoPerguntas`
--
ALTER TABLE `grupoPerguntas`
  ADD PRIMARY KEY (`id_grupoPergunta`),
  ADD KEY `fk_atividade_grupoPergunta` (`atividade_id`);

--
-- Índices de tabela `grupoPessoas`
--
ALTER TABLE `grupoPessoas`
  ADD PRIMARY KEY (`idGrupo`),
  ADD KEY `fk_atividade_grupoPessoa` (`id_atividade`);

--
-- Índices de tabela `integrante`
--
ALTER TABLE `integrante`
  ADD PRIMARY KEY (`id_integrante`),
  ADD KEY `fk_grupoPessoas` (`idGrupo`);

--
-- Índices de tabela `perguntas`
--
ALTER TABLE `perguntas`
  ADD PRIMARY KEY (`idtbQuestao`),
  ADD KEY `fk_grupoPerguntas_perguntas` (`grupoPerguntas_id`);

--
-- Índices de tabela `reposta`
--
ALTER TABLE `reposta`
  ADD PRIMARY KEY (`id_reposta`),
  ADD KEY `fk_grupoPessoas_resposta` (`grupo_id`),
  ADD KEY `fk_atividade_reposta` (`atividade_id`),
  ADD KEY `fk_perguntas_resposta` (`pergunta_id`);

--
-- Índices de tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_users`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `atividade`
--
ALTER TABLE `atividade`
  MODIFY `id_atividade` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT de tabela `grupoPerguntas`
--
ALTER TABLE `grupoPerguntas`
  MODIFY `id_grupoPergunta` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `grupoPessoas`
--
ALTER TABLE `grupoPessoas`
  MODIFY `idGrupo` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `integrante`
--
ALTER TABLE `integrante`
  MODIFY `id_integrante` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `perguntas`
--
ALTER TABLE `perguntas`
  MODIFY `idtbQuestao` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de tabela `reposta`
--
ALTER TABLE `reposta`
  MODIFY `id_reposta` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_users` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `atividade`
--
ALTER TABLE `atividade`
  ADD CONSTRAINT `fk_usuarios_atividade` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id_users`);

--
-- Restrições para tabelas `grupoPerguntas`
--
ALTER TABLE `grupoPerguntas`
  ADD CONSTRAINT `fk_atividade_grupoPergunta` FOREIGN KEY (`atividade_id`) REFERENCES `atividade` (`id_atividade`);

--
-- Restrições para tabelas `grupoPessoas`
--
ALTER TABLE `grupoPessoas`
  ADD CONSTRAINT `fk_atividade_grupoPessoa` FOREIGN KEY (`id_atividade`) REFERENCES `atividade` (`id_atividade`);

--
-- Restrições para tabelas `integrante`
--
ALTER TABLE `integrante`
  ADD CONSTRAINT `fk_grupoPessoas` FOREIGN KEY (`idGrupo`) REFERENCES `grupoPessoas` (`idGrupo`);

--
-- Restrições para tabelas `perguntas`
--
ALTER TABLE `perguntas`
  ADD CONSTRAINT `fk_grupoPerguntas_perguntas` FOREIGN KEY (`grupoPerguntas_id`) REFERENCES `grupoPerguntas` (`id_grupoPergunta`);

--
-- Restrições para tabelas `reposta`
--
ALTER TABLE `reposta`
  ADD CONSTRAINT `fk_atividade_reposta` FOREIGN KEY (`atividade_id`) REFERENCES `atividade` (`id_atividade`),
  ADD CONSTRAINT `fk_grupoPessoas_resposta` FOREIGN KEY (`grupo_id`) REFERENCES `grupoPessoas` (`idGrupo`),
  ADD CONSTRAINT `fk_perguntas_resposta` FOREIGN KEY (`pergunta_id`) REFERENCES `perguntas` (`idtbQuestao`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
