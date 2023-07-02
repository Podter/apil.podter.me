import amogus from "../assets/amogus.png";
import chikibamboni from "../assets/chikibamboni.jpg";
import angli from "../assets/angli.png";
import mega from "../assets/mega.jpg";
import mishka from "../assets/mishka.jpg";
import mister from "../assets/mister.jpg";
import nebudi from "../assets/nebudi.png";
import sad from "../assets/sad.png";
import kakto from "../assets/kakto.jpg";
import troll from "../assets/troll.png";
import vjyx from "../assets/vjyx.png";

export type Meme = {
  title: string;
  description: string;
  img: string;
  alt: string;
  width: number;
};

export const memes: Meme[] = [
  {
    title: "FIRST MEME",
    description:
      "Its meme named amogus he came here from gaem amon-gus its funny meme",
    img: amogus,
    alt: "amogus",
    width: 300,
  },
  {
    title: "SECOND MEME",
    description: "Its meme chikibamboni he cool and its song",
    img: chikibamboni,
    alt: "chikibamboni",
    width: 300,
  },
  {
    title: "THIRD MEME",
    description: "Its meme where man choosing what better",
    img: angli,
    alt: "angli meme",
    width: 700,
  },
  {
    title: "FOURTH MEME",
    description: "MEAG ULTRA 123 228 999 777 SUPER DUPER GOOD",
    img: mega,
    alt: "mega xarow",
    width: 300,
  },
  {
    title: "FIFTH MEME",
    description: "MOUSE SAUSAGE TYTYTYTY MOUSE SAUSAGE TYTYTYTY",
    img: mishka,
    alt: "mishka cocicka",
    width: 300,
  },
  {
    title: "SIXTH MEME",
    description: "Mister incredible",
    img: mister,
    alt: "mister ickychitelkin",
    width: 300,
  },
  {
    title: "SEVENTH MEME",
    description: 'Nebudi its tuber that making videos "amogus from what meme?"',
    img: nebudi,
    alt: "nebudi",
    width: 300,
  },
  {
    title: "EIGHTH MEME",
    description: "Its sad pepe :(",
    img: sad,
    alt: "sad pepe",
    width: 300,
  },
  {
    title: "NINTH MEME",
    description:
      "man:You have connection with darknet?\ntom:im not just connected i control this",
    img: kakto,
    alt: "1ti kakto cvazon c darknetom",
    width: 300,
  },
  {
    title: "TENTH MEME",
    description: "You trolled\nYes we lied here 11 memes",
    img: troll,
    alt: "troll",
    width: 300,
  },
  {
    title: "ELEVENTH MEME",
    description: "Vjyx idk what this is - autor of site apl",
    img: vjyx,
    alt: "vjyx",
    width: 300,
  },
];
