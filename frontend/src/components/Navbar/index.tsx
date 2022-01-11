import { ReactComponent as IconGit } from 'assets/img/github 1.svg'
import './styles.css'


function Navbar() {

    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/WesleyAlmeida28">
                        <div className="dsmovie-contact-container">
                            <IconGit />
                            <p className="dsmovie-contact-link">/WesleyAlmeida28</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;