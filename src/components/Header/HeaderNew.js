import React, {Component} from 'react'
import style from './Header.module.scss'
import menuLogo from '../../common/img/menuLogo.png'
import {connect} from "react-redux";
import {changeNavBarAC} from "../../reducers/reducer";

class HeaderNew extends Component {

    state = {
        styleLink: {
            color: ''
        },
        styleNav:{
            background: ''
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 1580) {
                this.setState({
                    styleLink: {
                        color: '#3d4451'
                    },
                    styleNav:{
                        // background: '#fff',
                    }
                })
            } else{
                this.setState({
                    styleLink: {
                        color: '#3d4451'
                    },
                    styleNav:{
                        // background: '#fff'
                    }
                })
            }
        })
    }

    isOpenNav = () => {
        this.props.changeNavBarAC(true)
    }

    isCloseNav = () => {
        this.props.changeNavBarAC(false)
    }


    render() {

        let sections = this.props.sectionsMenu.map((link, index) => <a className={style.link}
                                                                       style={this.state.styleLink} key={index}
                                                                       onClick={this.isCloseNav}
                                                                       href={'#' + link} title={link}><span>{link} </span></a>)
        return (
            <div className={style.wrapper}>
                {this.props.isOpenNavBar ?
                    <div className={style.container} style={this.state.styleNav}>
                        <img className={style.isOpenMenuLogo} src={menuLogo} onClick={this.isCloseNav}/>
                        <nav>
                            {sections}
                        </nav>
                    </div>
                    : <img className={style.isCloseMenuLogo} src={menuLogo} alt='menu' title='menu'
                           onClick={this.isOpenNav}/>
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => (
    {
        isOpenNavBar: state.isOpenNavBar,
        sectionsMenu: state.sectionsMenu
    }
)

export default connect(mapStateToProps, {changeNavBarAC})(HeaderNew)


