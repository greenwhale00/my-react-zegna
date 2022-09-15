import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


const SLIDE = [
    { id: 1, content: "OASI CASHIMERE", desc: "BORN IN OASI ZEGNA", link: "/" },
    { id: 2, content: "TRIPLE STICH 스니커즈", desc: "BORN IN OASI ZEGNA", link: "/" },
    { id: 3, content: "럭셔리 레저웨어", desc: "고객님을 위한 컨템포러리 아웃핏", link: "/" },
    { id: 4, content: "레디 투 웨어", desc: "럭셔리한 필수 아이템", link: "/" },
    { id: 5, content: "SUMMER 2023 FASHION SHOW", desc: "BORN IN OASI ZEGNA", link: "/" },
]


const MainVisual = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const mainSlide = useRef(null);

    const setting = {
        arrows: false,
        //dots: true,
        afterChange: index => setIDX(index),
        //autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
    }

    return (
        <section className='MainVisual'>
            <Slider {...setting} ref={mainSlide}>
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <figure key={slide.id} className={'number0' + slide.id + (idx === IDX ? ' on' : '')}>
                                <div className="inner">
                                    <h2 className='tit'>{slide.content}</h2>
                                    <p className='des'>{slide.desc}</p>
                                    <a href={slide.link} target="_blank" className='cbtn'>더 알아보기</a>
                                </div>
                            </figure>
                        )
                    })
                }
            </Slider>

            <div className="slideArrows">
                <button onClick={() => mainSlide.current.slickPrev()}><i className='xi-angle-left'></i></button>
                <button onClick={() => mainSlide.current.slickNext()}><i className='xi-angle-right'></i></button>
            </div>
        </section>
    )
}

export default MainVisual;