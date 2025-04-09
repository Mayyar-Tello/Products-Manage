import './nav.css'
export default function NavComponent(){
    return <nav>
    <span className='productsTitle'>Products</span>
    <div className="userInfo">
        <img src="./src/assets/img/User.png" alt="user avatar" />
        <div>
            <p className='userName'>Moni Roy</p>
            <p className='admin'>Admin</p>
        </div>
    </div>
</nav>
}