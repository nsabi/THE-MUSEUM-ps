import { Hamburger } from "../components/Hamburger";

export const Header = () => {
    return (
        <div className="ps-header">
            <div className="ps-header--box">
                <div className="ps-header__nav">
                    <div className="ps-header__nav__logo"><span>THE</span><span>MUSEUM</span></div>
                    <div className="ps-header__nav__page">
                        <a href="#nolink">Visita</a>
                    </div>
                    <div className="ps-header__nav__page">
                        <a href="#nolink">Cosa vedere</a>
                    </div>
                    <div className="ps-header__nav__page">
                        <a href="#nolink" className="ps-header__nav__page--active">chi siamo</a>
                    </div>
                    <div className="ps-header__nav__page">
                        <a href="#nolink">attività</a>
                    </div>
                    <div className="ps-header__nav__page">
                        <a href="#nolink">Agenda</a>
                    </div>
                    <div className="ps-header__nav__extra">
                        <a href="#nolink" className="ps-header__nav__extra__language">eng</a>
                        <a href="#nolink" className="ps-header__nav__extra__social ps-header__nav__extra__social--facebook"><span className="ps-hide">Facebook</span></a>
                        <a href="#nolink" className="ps-header__nav__extra__social ps-header__nav__extra__social--instagram"><span className="ps-hide">Instagram</span></a>
                        <a href="#nolink" className="ps-header__nav__extra__social ps-header__nav__extra__social--twitter"><span className="ps-hide">Twitter</span></a>
                        <Hamburger />
                    </div>
                </div>
                <h1 className="ps-header__nav__title">ARCHIVIO STORICO</h1>
                <h2 className="ps-header__nav__subtitle">Una raccolta di tutti i momenti più importanti nella storia del museo e dei suoi curatori.</h2>
            </div>
        </div>
    );
}