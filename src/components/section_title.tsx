
type SectionTitleType = {
    title: string,
    subtitle: string
}

function SectionTitle({title, subtitle}: SectionTitleType) {
    return <div className="flex flex-col items-center px-3">
        <h1 className="text-[52px] text-white py-3">{title}</h1>
        <p className="text-[20px] text-white max-w-[602px] text-center font-extralight">{subtitle}</p>
    </div>
}

export default SectionTitle;