import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { Button } from "antd";
import { AuthContext } from "../../../Store/Context/AuthContext";

const Header = () => {
    const { authState, logout } = useContext(AuthContext);

    const history = useHistory();
    const logoutHan = async (e) => {
        e.preventDefault();

        try {
            const logoutData = await logout(authState.isAuthenticated);
            if (logoutData === true) {
                history.push("/login");
            } else {
                alert("Login failed");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <header className='header'>
                <div className='header__head'>
                    <div className='header__mobile-logo'>
                        <div>
                            <img
                                src='../../../../image/header/tiki__freeship.png'
                                alt=''
                                className='mobile__logo-fs'
                            />
                        </div>
                        <div>
                            {" "}
                            <img
                                src='../../../../image/header/tiki__logo.png'
                                alt=''
                                className='mobile__logo-tiki'
                            />{" "}
                        </div>
                        <div className='header__icon'>
                            <i className='far fa-bell header__icon-bell'></i>
                            <i className='fas fa-shopping-cart header__icon-cart'></i>
                        </div>
                    </div>
                    <div className='header__logo'>
                        <img
                            src='../../../../image/header/tiki__logo.png'
                            alt=''
                            width='60'
                            height='40'
                        />
                    </div>
                    <div className='header__search'>
                        <div className='form__search'>
                            <input
                                type='text'
                                id='search__input'
                                className='header__search-input'
                                placeholder='T??m s???n ph???m, danh m???c hay th????ng hi???u mong mu???n ...'
                            />
                            {/* <div className='search__content'>
                                <div className='search__historys'>
                                    <div className='search__history-head'>
                                        <a
                                            href=''
                                            className='search__history-heading'
                                        >
                                            Tiki 14.12 - X??? Kho C???c L???n
                                        </a>
                                        <a href=''>
                                            <img
                                                src='https://salt.tikicdn.com/cache/140x28/ts/banner/6a/54/58/77afd77b7362423df2b16ac4785bd132.png.webp'
                                                alt=''
                                            />
                                        </a>
                                    </div>
                                    <div className='search__history-body'>
                                        <ul className='search__history-lists'>
                                            <li className='search__history-item'>
                                                <a
                                                    href=''
                                                    className='search__history-link'
                                                >
                                                    <img
                                                        src='https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png'
                                                        alt=''
                                                        className='search__history-icon'
                                                    />
                                                    tai nghe sony
                                                    <img
                                                        src='https://salt.tikicdn.com/ts/upload/5c/a1/7e/cd8cde79e81844f2c394efdc415f5441.png'
                                                        alt=''
                                                        className='search__remove-icon'
                                                    />
                                                </a>
                                            </li>
                                            <li className='search__history-item'>
                                                <a
                                                    href=''
                                                    className='search__history-link'
                                                >
                                                    <img
                                                        src='https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png'
                                                        alt=''
                                                        className='search__history-icon'
                                                    />
                                                    iphone 13 pro max
                                                    <img
                                                        src='https://salt.tikicdn.com/ts/upload/5c/a1/7e/cd8cde79e81844f2c394efdc415f5441.png'
                                                        alt=''
                                                        className='search__remove-icon'
                                                    />
                                                </a>
                                            </li>
                                            <li className='search__history-item'>
                                                <a
                                                    href=''
                                                    className='search__history-link'
                                                >
                                                    <img
                                                        src='https://salt.tikicdn.com/ts/upload/90/fa/09/9deed3e3186254637b5ca648f3032665.png'
                                                        alt=''
                                                        className='search__history-icon'
                                                    />
                                                    macbook pro m1
                                                    <img
                                                        src='https://salt.tikicdn.com/ts/upload/5c/a1/7e/cd8cde79e81844f2c394efdc415f5441.png'
                                                        alt=''
                                                        className='search__remove-icon'
                                                    />
                                                </a>
                                            </li>
                                            <div className='search__history-footer'>
                                                <a
                                                    href=''
                                                    className='search__history-more'
                                                >
                                                    Xem th??m
                                                </a>
                                                <i className='ti-angle-down search__history-more-icon'></i>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='search__popular'>
                                    <div className='search__popular-head'>
                                        <img
                                            src='../../../../image/header/search.png'
                                            alt=''
                                        />
                                        <h3>T??m Ki???m Ph??? Bi???n</h3>
                                    </div>
                                    <div className='search__popular-body'>
                                        <a className='search__popular-item'>
                                            <img
                                                src='https://salt.tikicdn.com/cache/280x280/ts/product/85/2a/f3/7bbaa65d051ec909aeadffcfc7e2bb30.jpg'
                                                alt=''
                                                width='38px'
                                                height='38px'
                                            />
                                            <div className='search__popular-item-info'>
                                                <span>Kh???u trang n95</span>
                                            </div>
                                        </a>
                                        <a className='search__popular-item'>
                                            <img
                                                src='https://salt.tikicdn.com/cache/280x280/ts/product/81/1d/78/61624a148bc3a6eba57fdc1289c5fc3b.jpg'
                                                alt=''
                                                width='38px'
                                                height='38px'
                                            />
                                            <div className='search__popular-item-info'>
                                                <span>Ch??n v??y</span>
                                            </div>
                                        </a>
                                        <a className='search__popular-item'>
                                            <img
                                                src='https://salt.tikicdn.com/cache/280x280/ts/product/d3/f3/38/f8f149120525b295a3aa46386cf37d96.jpg'
                                                alt=''
                                                width='38px'
                                                height='38px'
                                            />
                                            <div className='search__popular-item-info'>
                                                <span>??o nam</span>
                                            </div>
                                        </a>
                                        <a className='search__popular-item'>
                                            <img
                                                src='https://salt.tikicdn.com/cache/280x280/ts/product/a1/5e/46/fccbfa71363639cda153d80f34d663fb.jpg'
                                                alt=''
                                                width='38px'
                                                height='38px'
                                            />
                                            <div className='search__popular-item-info'>
                                                <span>S???a ensua</span>
                                            </div>
                                        </a>
                                        <a className='search__popular-item'>
                                            <img
                                                src='https://salt.tikicdn.com/cache/280x280/ts/product/8f/0a/6b/ce51beae21b5899e803e6553d80e0fa1.jpg'
                                                alt=''
                                                width='38px'
                                                height='38px'
                                            />
                                            <div className='search__popular-item-info'>
                                                <span>Gi??y</span>
                                            </div>
                                        </a>
                                        <a className='search__popular-item'>
                                            <img
                                                src='https://salt.tikicdn.com/cache/280x280/ts/product/83/a6/73/5344c227762b04aaf667309e5587e6de.jpeg'
                                                alt=''
                                                width='38px'
                                                height='38px'
                                            />
                                            <div className='search__popular-item-info'>
                                                <span>Th???t heo</span>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                <div className='search__category'>
                                    <div className='search__category-head'>
                                        <h3>Danh M???c N???i B???t</h3>
                                    </div>
                                    <div className='search__category-body'>
                                        <a className='search__category-item'>
                                            <img
                                                src='https://salt.tikicdn.com/cache/280x280/ts/product/34/aa/38/f0321de429fd271bc5204d6f31af0603.jpg'
                                                alt=''
                                                width='65px'
                                                height='65px'
                                            />
                                            <span className='search__category-info'>
                                                Tai Nghe Nh??t Tai C?? D??y
                                            </span>
                                        </a>
                                        <a className='search__category-item'>
                                            <img
                                                src='https://salt.tikicdn.com/cache/280x280/ts/product/70/a5/17/4499a378a821f79703d9e28d7a1fa188.jpg'
                                                alt=''
                                                width='65px'
                                                height='65px'
                                            />
                                            <span className='search__category-info'>
                                                ??o thun nam
                                            </span>
                                        </a>
                                        <a className='search__category-item'>
                                            <img
                                                src='https://salt.tikicdn.com/ts/category/13/64/43/226301adcc7660ffcf44a61bb6df99b7.png'
                                                alt=''
                                                width='65px'
                                                height='65px'
                                            />
                                            <span className='search__category-info'>
                                                ????? Ch??i - M??? & B??
                                            </span>
                                        </a>
                                        <a className='search__category-item'>
                                            <img
                                                src='https://salt.tikicdn.com/ts/category/a6/9f/45/460fdecbbe0f81da09c7da37aa08f680.png'
                                                alt=''
                                                width='65px'
                                                height='65px'
                                            />
                                            <span className='search__category-info'>
                                                TIKINGON
                                            </span>
                                        </a>
                                        <a className='search__category-item'>
                                            <img
                                                src='https://salt.tikicdn.com/ts/category/54/c0/ff/fe98a4afa2d3e5142dc8096addc4e40b.png'
                                                alt=''
                                                width='65px'
                                                height='65px'
                                            />
                                            <span className='search__category-info'>
                                                ??i???n Tho???i M??y T??nh B???ng
                                            </span>
                                        </a>
                                        <a className='search__category-item'>
                                            <img
                                                src='https://salt.tikicdn.com/ts/category/73/0e/89/d7ca146de7198a6808580239e381a0c8.png'
                                                alt=''
                                                width='65px'
                                                height='65px'
                                            />
                                            <span className='search__category-info'>
                                                L??m ?????p - S???c Kh???e
                                            </span>
                                        </a>
                                        <a className='search__category-item'>
                                            <img
                                                src='https://salt.tikicdn.com/ts/category/61/d4/ea/e6ea3ffc1fcde3b6224d2bb691ea16a2.png'
                                                alt=''
                                                width='65px'
                                                height='65px'
                                            />
                                            <span className='search__category-info'>
                                                ??i???n Gia D???ng
                                            </span>
                                        </a>
                                        <a className='search__category-item'>
                                            <img
                                                src='https://salt.tikicdn.com/ts/category/55/5b/80/48cbaafe144c25d5065786ecace86d38.png'
                                                alt=''
                                                width='65px'
                                                height='65px'
                                            />
                                            <span className='search__category-info'>
                                                Th???i Trang N???
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                        <div className='header__seacrh-block'>
                            <i className='fas fa-search header__search-icon'></i>
                            <a href='' className='header__search-btn'>
                                T??m Ki???m
                            </a>
                        </div>
                    </div>
                    <div className='header__user'>
                        <div className='header__user-info'>
                            <div className='header__category'>
                                <div className='header__category-icon'>
                                    <img
                                        src='../../../../image/header/category.png'
                                        alt=''
                                    />
                                    <div className='category__quantily'>
                                        <span>0</span>
                                    </div>
                                </div>
                                <div className='header__category-info'>
                                    <span>
                                        <Link to='http://localhost:3000/checkout'></Link>
                                    </span>
                                </div>
                                <div className='header__category-detail-show'>
                                    <div className='Header-cart-show'></div>
                                    <div className='Body-cart-show'></div>
                                    <div className='Footer-cart-show'></div>
                                </div>
                            </div>
                            <div className='infor-user'>
                                <div className='header__user-login'>
                                    {/* --------------------------------------------- */}
                                    {authState.isAuthenticated === true ? (
                                        <span className='user__account'>
                                            <span className='user__name'>
                                                {authState.user[0].fullname}
                                            </span>
                                            <i className='fas fa-sort-down user__account-icon'></i>
                                        </span>
                                    ) : (
                                        <span className='user__login'>
                                            <a
                                                href='http://localhost:3000/login'
                                                style={{ color: "#fff" }}
                                            >
                                                ????ng nh???p / ????ng k??
                                            </a>
                                        </span>
                                    )}
                                </div>
                                <span className='header__user-img'>
                                    <img
                                        src='../../../../image/header/user__logo.png'
                                        alt=''
                                    />
                                </span>
                                <div className='Header__mode-list'>
                                    <ul>
                                        <li
                                            href=''
                                            className='Header__mode-item-link'
                                        >
                                            <Button type='text' block>
                                                ????n h??ng c???a t??i
                                            </Button>
                                        </li>
                                        <li
                                            href=''
                                            className='Header__mode-item-link'
                                        >
                                            <Button type='text' block>
                                                T??i kho???n c???a t??i
                                            </Button>
                                        </li>
                                        <li
                                            href=''
                                            className='Header__mode-item-link'
                                        >
                                            <Button type='text' block>
                                                Th??ng b??o
                                            </Button>
                                        </li>
                                        <li
                                            href=''
                                            className='Header__mode-item-link'
                                        >
                                            <Button
                                                type='text'
                                                block
                                                onClick={logoutHan}
                                            >
                                                ????ng xu???t
                                            </Button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='header__mobile-search'>
                    <input
                        type='text'
                        className='header__mobile-input'
                        placeholder='B???n t??m g?? h??m nay?'
                    />
                    <i className='fas fa-search search__logo-mobile'></i>
                </div> */}
                <div className='header__tail'>
                    <div className='header__logo-fs'>
                        <img
                            src='../../../../image/header/tiki__freeship.png'
                            alt=''
                            width='83px'
                            height='12px'
                        />
                    </div>
                    <div className='header__keyword'>
                        <a href='#' className='header__keyword-link'>
                            t???t c??? ????? ??i???n t???
                        </a>
                        <a href='#' className='header__keyword-link'>
                            gia d???ng nh?? b???p
                        </a>
                        <a href='#' className='header__keyword-link'>
                            m??y say sinh t???
                        </a>
                        <a href='#' className='header__keyword-link'>
                            b???p ??i???n
                        </a>
                        <a href='#' className='header__keyword-link'>
                            ???m ??i???n
                        </a>
                        <a href='#' className='header__keyword-link'>
                            ????n h???c
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
