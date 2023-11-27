import SectionTitle from "./section_title";
import macProImg from "../assets/contents/mac_pro.svg";
import boardNotifImg from "../assets/contents/boards_notif.svg";

const contentCards: ContentCardType[] = [
    {
        title: "Work",
        subtitle: "Ever wondered if you're too reliant on a client for work? Slate helps you identify .",
        button: "Sign Up",
        image: macProImg,
    },
    {
        title: "Design with real data",
        subtitle: "Ever wondered if you're too reliant on a client for work? Slate helps you identify .",
        button: "Try For Free",
        image: boardNotifImg,
    },
];

function Contents() {
    const cards = contentCards.map(card => {
        return <ContentCard card={card} />
    });
    return <section className="bg-background py-10">
        <SectionTitle
            title='Contents'
            subtitle="We focus on ergonomics and meeting you where you work. It's only a keystroke away."
        />
        <div className="flex flex-col sm:flex-row gap-6 justify-center py-9 px-5">
            {cards}
        </div>
    </section>
}

type ContentCardType = {
    title: string,
    subtitle: string,
    button: string,
    image: string
}

function ContentCard({ card }: { card: ContentCardType }) {
    return <div className="flex flex-col w-sm gap-10 items-center bg-white rounded-lg">
        <h1 className="text-[20px] font-medium pt-5">{card.title}</h1>
        <p className="text-center text-gray-400 max-w-sm">{card.subtitle}</p>
        <a href="_blank" className="py-2 px-6 text-white bg-indigo-600">{card.button}</a>
        <img height={276} width={379} src={card.image} alt="" />
    </div>
}


export default Contents;