import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Tenho um grande conhecimento sobre Html e sei desenvolver varios 
  tipos diferentes de site.`,
  "Estudante de Programação",
  "Html",
  "Nov 2021 - Atual (Quase 1 ano)"
);

hoverChangeExperience(
  ".css",
  `Tenho um breve conhecimento sobre CSS, estou sempre aprendendo coisas novas
  como esse portifólio fiz para entender mais sobre a linguagem.`,
  "Estudante de Programação",
  "CSS",
  "Jan 2022 - Abril 2022 (4 meses)"
);

hoverChangeExperience(
  ".js",
  `Tenho um conhecimento grande sobre essa linguagem, sem fazer diversas integrações 
  de API ou criação de REST API.`,
  "Estudante de Programação",
  "JavaScript",
  "Jun 2021 - Jan 2022 (8 meses)"
);

hoverChangeExperience(
  ".node",
  `Tenho um grande conhecimento sobre essa linguagem e sempre estou em busca
  de buscar novas funcionalidade para eu aprender e sempre ficar informado por novos Framework`,
  "Estudante de Programação",
  "Node.js",
  "Set 2021 - Nov 2021 (3 meses)"
);

hoverChangeDescription(
  ".html",
  "HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir."
);
hoverChangeDescription(
  ".css",
  "CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML."
);
hoverChangeDescription(
  ".js",
  "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
);
hoverChangeDescription(
  ".sass",
  "Sass (pré-processador css) é uma linguagem de folhas de estilo. É uma simples linguagem de script usada em arquivos Sass."
);
hoverChangeDescription(
  ".react",
  "ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web."
);
hoverChangeDescription(
  ".next",
  "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React."
);
hoverChangeDescription(
  ".styled",
  "Styled Components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS é um framework desenvolvido para maximizar o potencial do bom e velho CSS e levá-lo ainda mais longe."
);

