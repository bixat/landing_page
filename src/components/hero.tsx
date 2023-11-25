import screens from '../assets/screens.svg';

function Hero() {
    return <section className="bg-background">
        <div className="flex flex-col items-center">
            <h1 className="text-white text-[68px] font-medium max-w-2xl text-center ">Work at the speed of thought</h1>
            <p className="text-white text-[25px] font-light max-w-xl text-center">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
            <div className="flex flex-row gap-6 pt-28">
                <HeroButton title="Try For Free" withBorder={false} />
                <HeroButton title="Learn More" withBorder />
            </div>
            <img className='pt-14' alt="" src={screens}></img>
        </div>
    </section>
}

type HeroButtonType = {
    title: string,
    withBorder: boolean
}

function HeroButton({ title, withBorder }: HeroButtonType) {
    return <a className={`py-4 px-8 ${withBorder ? "border-[1px] border-white" : "bg-button"} text-white`} href="_blank">{title}</a>;
}

export default Hero;