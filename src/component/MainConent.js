import { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";


const ITEM = [
    { id: 1, content: "코트 둘러보기", link: "/" },
    { id: 2, content: "오버셔츠 둘러보기", link: "/" },
    { id: 3, content: "니트웨어 둘러보기", link: "/" },
    { id: 4, content: "조거 둘러보기", link: "/" },
    { id: 5, content: "스니커즈 둘러보기", link: "/" },
    { id: 6, content: "가방 둘러보기", link: "/" },
]

const MainContent = () => {
    const [IDX, setIDX] = useState();
    useEffect(() => {
        setIDX(0)
    }, []);
    const Slideitm = useRef(null);

    const setting = {
        arrows: false,
        slidesToScroll: 1,
        vertical: false,
        infinite: false,
        draggable: true,
        //dots: true,
        afterChange: index => setIDX(index),
        //autoplay: true,
        autoplaySpeed: 5000,
        // fade: true,
    }

    return (
        <section className='MainContent'>
            <div className="inner">
                <h2>EXPLORE THE ZEGNA</h2>
                <Slider className="category" {...setting} ref={Slideitm}>
                    {
                        ITEM.map((itm) => {
                            return (
                                <figure>
                                    <div className="box">
                                        <img src={process.env.PUBLIC_URL + "/assets/main_itm0" + itm.id + ".webp"} alt="" />
                                        <p className='tit'>{itm.content}</p>
                                        <a href={itm.link} target="_blank" className='bbtn'>더 알아보기</a>
                                    </div>
                                </figure>
                            )
                        })
                    }
                </Slider>
            </div>



            <div className="slideArrows">
                <button onClick={() => Slideitm.current.slickPrev()}><i className='xi-angle-left'></i></button>
                <button onClick={() => Slideitm.current.slickNext()}><i className='xi-angle-right'></i></button>
            </div>
        </section>
    )
}

export default MainContent;