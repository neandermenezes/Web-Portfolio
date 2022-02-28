import recipesImage from "../img/recipesapp.png";
import walletImage from "../img/walletapp.png";
import natoursImage from "../img/natoursapp.png";
import tunesImage from "../img/trybetunesapp.png";

const projects = [
  {
    title: "Recipes App",
    description: `Projeto realizado em um grupo de 5 pessoas, utilizando a metodologia ágil scrum. 
    Utiliza duas APIs, uma de comida e uma de bebidas. Opções de filtrar por nome, ingrediente e local de origem. Funcionalidade com mais destaque é a possibilidade de iniciar a receita e riscar os ingredientes e métodos já utilizados (feito com local storage).`,
    image: recipesImage,
    tools: ["React", "React Router", "RTL"],
    repository: "https://github.com/neandermenezes/Recipes-App",
  },
  {
    title: "Trybe Tunes",
    description:
      "Projeto individual, utilizando API do Itunes para pesquisar albúns, artistas, músicas. Possui a funcionalidade de escutar um preview de 30s das músicas, assim como favoritar suas músicas preferidas!",
    image: tunesImage,
    tools: ["React", "React Router", "CSS"],
    repository: "https://github.com/neandermenezes/TrybeTunes",
  },
  {
    title: "Wallet App",
    description: "Projeto indivudal utilizando REDUX, utiliza uma API para realizar a conversão de moedas. Possui as funcionalidades de criar, excluir e editar despesas.",
    image: walletImage,
    tools: ["React", "Redux"],
    repository: "https://github.com/neandermenezes/Wallet-APP",
  },
  {
    title: "Natours",
    description: "Estava muito insatisfeito com minhas habilidades em CSS e resolvi fazer um curso adicional, esse projeto foi realizado durante o curso 'Advanced CSS and SASS - Jonas Schmedtmann (udemy)'. Desenvolvido para exercitar animações mais complexas em CSS.",
    image: natoursImage,
    tools: ["React", "SASS"],
    repository:
      "https://github.com/neandermenezes/Natours-Outdoor-Travelling-Website",
  },
];

export default projects;
