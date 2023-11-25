
import logo from '../assets/logo.svg';

function NavBar(){
    const items = ['Home', 'Product', 'About', 'Contact'].map(item=><NavBarItem title={item} />);
    return (
        <div className=' bg-neutral-800 flex flex-row justify-evenly items-center h-[119px]'>
            <div>
                <img src={logo} alt="" />
            </div>
            <nav>
                <ul className="flex flex-row gap-[31px]">
                {items}
                </ul>
            </nav>
            <a className='py-3 px-10 text-slate-50 border-white border-2' href='blank'>Login</a>
        </div>
    );
}

type NavBarItemType = {
    title: string
}

function NavBarItem({title}:NavBarItemType){
    return <li><a className=' text-slate-50' href="#{title}">{title}</a></li>;
}

export default NavBar;