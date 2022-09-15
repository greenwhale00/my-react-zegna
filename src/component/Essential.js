const Essential = () => {
    return (
        <section className="Essential">
            <div className="inner">
                <h2>ZEGNA ESSENTIAL</h2>
                <p>
                    시간이 지나도 변하지 않는 클래식부터 아이코닉한 컨템포러리 아이템까지. 모든 옷장 속에 <br />반드시 있어야 할 세련된 의상과 액세서리 등 남성 필수 아이템 셀렉션을 만나보세요.
                </p>
                <div className="img_box">
                    <div className="left_box">
                        <figure><img src={process.env.PUBLIC_URL + "/assets/essential_left01" + ".png"} alt="" /></figure>
                        <figure><img src={process.env.PUBLIC_URL + "/assets/essential_left02" + ".png"} alt="" /></figure>

                    </div>
                    <div className="right_box">
                        <figure><img src={process.env.PUBLIC_URL + "/assets/essential_right" + ".png"} alt="" /></figure>
                    </div>

                </div>
                <a href="" target="_blank" className='bbtn'>더 알아보기</a>
            </div>

        </section >
    )

}





export default Essential;