export type NewsItem = {
  date: string;
  content: string;
};

export type Publication = {
  venue: string;
  title: string;
  authors: string;
  venueDetail: string;
  links?: { label: string; url: string }[];
  teaserImage?: string;
  award?: string;
};

export const news: NewsItem[] = [
  {
    date: "[Feb. 2026]",
    content:
      "I will collaborate to organize the workshop \"Beyond Cognitive Offloading: Conversational AI for Personal Growth\" in AHs 2026.",
  },
  {
    date: "[Jan. 2026]",
    content:
      "I presented \"Designing An LLM-based Interactive System to Support Critical Paper Reading\" at the domestic conference HCI研究会 216.",
  },
  {
    date: "[Dec. 2025]",
    content:
      "Honored to receive the JSPS DC2 Research Fellowship (Japan Society for the Promotion of Science Research Fellowship for Young Scientists)!",
  },
  {
    date: "[Dec. 2025]",
    content: "One first-authored paper has been conditionally accepted to ACM IUI 2026.",
  },
  {
    date: "[Apr. 2025]",
    content:
      "First time attending CHI in person, had a great time co-hosting the Meta-HCI workshop. The After Party was a blast!",
  },
  {
    date: "[Feb. 2025]",
    content: "One first-authored paper is accepted to CHI Late Breaking Work 2025.",
  },
  {
    date: "[Jan. 2025]",
    content:
      "I will collaborate to organize the Meta-HCI: First Workshop on Meta-Research in HCI in CHI 2025.",
  },
  {
    date: "[Nov. 2024]",
    content:
      "I visited and gave talks at Computational Behavior Lab at Aalto University; Multimodality Research Group at Helsinki University; and Ubiquitous Computing Center at Oulu University. Appreciate the warm welcomes!",
  },
  {
    date: "[Apr. 2024]",
    content: "Joined IIS Lab, UTokyo to start my PhD life.",
  },
  {
    date: "[Mar. 2024]",
    content: "Selected for the SPRING GX Research Fellowship.",
  },
  {
    date: "[Mar. 2024]",
    content: "I will join the UTokyo for my PhD study since April.",
  },
  {
    date: "[Aug. 2022]",
    content: '"Volearn" is accepted to Ubicomp IMWUT 2022.',
  },
  {
    date: "[Apr. 2022]",
    content: "Joined Rakuten Group Inc as an application engineer.",
  },
  {
    date: "[Mar. 2022]",
    content: "Received my master degree from the Keio University.",
  },
  {
    date: "[Feb. 2022]",
    content: '"Knock Knock" is accepted to Augmented Humans 2022.',
  },
  {
    date: "[Dec. 2021]",
    content: '"Knock Knock" won 2nd place of SONY Sensing Solution Hackathon.',
  },
  {
    date: "[Oct. 2021]",
    content: '"Volearn" is presented to UIST 2021 Demo session.',
  },
  {
    date: "[Oct. 2021]",
    content: "Served as the student volunteer for UIST 2021 and ASSETS 2021.",
  },
  {
    date: "[Apr. 2021]",
    content: '"FacialPen" is accepted to Asian CHI Symposium 2021.',
  },
];

export const publications: Publication[] = [
  {
    venue: "IUI 2026",
    title: "LLM-based In-situ Thought Exchanges for Critical Paper Reading",
    authors:
      "Xinrui Fang, Anran Xu, Chi-Lan Yang, Ya-Fang Lin, Sylvain Malacria, Koji Yatani",
    venueDetail: "To appear in ACM Conference on Intelligent User Interfaces (ACM IUI) 2026.",
    teaserImage: "/teaser-iui26.png",
    links: [
      { label: "PDF", url: "https://arxiv.org/abs/2510.15234" },
      { label: "Code", url: "https://github.com/Xinrui-Fang/InSituCPR" },
      { label: "Project Page", url: "https://xinrui.design/InSituCPR/" },
      { label: "Live Demo", url: "https://insitucpr.org/" },
    ],
  },
  {
    venue: "CHI 2025",
    title:
      "Exploring Practices, Challenges, and Design Implications for Citation Foraging, Management, and Synthesis",
    authors: "Xinrui Fang, Anran Xu, Sylvain Malacria, Koji Yatani",
    venueDetail:
      "In Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA '25), 2025.",
    links: [{ label: "PDF", url: "https://doi.org/10.1145/3706599.3719883" }],
  },
  {
    venue: "CHI 2025",
    title: "Meta-HCI: First Workshop on Meta-Research in HCI",
    authors:
      "Jonas Oppenlaender, Sylvain Malacria, Xinrui Fang, Niels van Berkel, Fanny Chevalier, Koji Yatani, Simo Hosio",
    venueDetail:
      "In Extended Abstracts of the CHI Conference on Human Factors in Computing Systems (CHI EA '25), 2025.",
    links: [{ label: "PDF", url: "#" }],
  },
  {
    venue: "CPHS 2022",
    title:
      "Light Guidance Control of Human Drivers: Driver Modeling, Control System Design, and VR Experiment",
    authors: "M Takeda, M Inoue, Xinrui Fang, Y Minami, JM Maestre",
    venueDetail: "4th IFAC Workshop on Cyber-Physical and Human Systems CPHS, 2022.",
    links: [{ label: "PDF", url: "#" }],
  },
  {
    venue: "IMWUT 2022",
    title:
      "VoLearn: A Cross-Modal Operable Motion-Learning System Combined with Virtual Avatar and Auditory Feedback",
    authors: "Chengshuo Xia, Xinrui Fang, Riku Arakawa, Yuta Sugiura",
    venueDetail:
      "Proceedings of the ACM on Interactive, Mobile, Wearable and Ubiquitous Technologies (IMWUT), 2022.",
    links: [
      { label: "PDF", url: "#" },
      { label: "Video", url: "#" },
    ],
  },
  {
    venue: "AHs 2022",
    title:
      "Knock Knock: A Children-oriented Vocabulary Learning Tangible User Interaction System",
    authors: "Xinrui Fang, Takuro Watanabe, Chengshuo Xia, Arthur Torck",
    venueDetail: "Proceedings of the Augmented Humans International Conference (AHs), 2022.",
    links: [{ label: "PDF", url: "#" }],
    award: "Sony Sensing Solution Hackathon: Outstanding Award",
  },
  {
    venue: "Asian CHI 2021",
    title: "FacialPen: Using Facial Detection to Augment Pen-Based Interaction",
    authors: "Xinrui Fang, Chengshuo Xia, Yuta Sugiura",
    venueDetail: "Proceedings of the Asian CHI Symposium 2021 (Asian CHI), 2021.",
    links: [{ label: "PDF", url: "#" }],
  },
  {
    venue: "UIST 2021",
    title: "VoLearn: An Operable Motor Learning System with Auditory Feedback",
    authors: "Chengshuo Xia, Xinrui Fang, Yuta Sugiura",
    venueDetail:
      "Adjunct Proceedings of the 34th Annual ACM Symposium on User Interface Software and Technology (UIST Demo), 2022.",
    links: [{ label: "PDF", url: "#" }],
  },
];
