import featImage from '../assets/features/features.svg';
import feature1 from '../assets/features/feature-1.svg';
import feature2 from '../assets/features/feature-2.svg';
import feature3 from '../assets/features/feature-3.svg';

const features: FeaturesType[] = [
    {
        title: "A single source of truth",
        desc: "When you add work to your Slate calendar we automatically calculate useful insights",
        icon: feature1
    },
    {
        title: "Intuitive interface",
        desc: "When you add work to your Slate calendar we automatically calculate useful insights",
        icon: feature2
    },
    {
        title: "Or with rules",
        desc: "When you add work to your Slate calendar we automatically calculate useful insights",
        icon: feature3
    }
]

function Features() {
   let listOfFeatures = features.map((feature: FeaturesType) =>
        <FeatureItem key={feature.title} feature={feature} />
    )
    return <section className="bg-background py-[100px]">
        <div className="flex flex-col items-center">
            <h1 className="text-[52px] text-white py-3">Features</h1>
            <p className="text-[20px] text-white w-[602px] text-center font-extralight">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
            <div className='flex flex-col lg:flex-row py-8 items-center justify-center max-w-5xl'>
                <img src={featImage} alt="" />
                <ul>
                    {listOfFeatures}
                </ul>
            </div>
        </div>
    </section>
}

type FeaturesType = {
    title: string,
    icon: string,
    desc: string
};

function FeatureItem({ feature }: { feature: FeaturesType }) {
    return (
        <li className='py-8'>
            <div className='flex flex-row gap-3'>

            <img src={feature.icon} alt={feature.title} />
            <h1 className='text-white font-bold text-[20px]'>{feature.title}</h1>
            </div>
            <p className='text-white text-[16px] py-3'>{feature.desc}</p>
        </li>
    )
}

export default Features;