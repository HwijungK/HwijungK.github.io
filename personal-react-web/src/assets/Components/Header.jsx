import "./Header.css"

function Header({}) {
    

    return(
        <div className="header">
            <h1 className="name1">Hi Im Hwi<span className="nickname">jun</span>g</h1>
                
            <p id="aboutMe">
                I'm a student at the University of California, Irvine
                🐜 Majoring in Computer Science 🐜
                🎲 I Make Game And Music on Itch.io! 🎲
                📚 Currently Learning: mySQL 📚
            </p>
        </div>
        
    )
}
export default Header;