import features from '../assets/features.svg';

function Features(){
    return <section className="bg-background py-[100px]">
        <div className="flex flex-col items-center">
            <h1 className="text-[52px] text-white py-3">Features</h1>
            <p className="text-[20px] text-white w-[602px] text-center font-extralight">Most calendars are designed for teams. Slate is designed for freelancers who want a simple way to plan their schedule.</p>
            <div className='flex flex-row'>
                <img src={features} alt="" />
                <ul>
                    <li>
                    </li>
                </ul>
            </div>
        </div>
    </section>
}

export default Features;