const Essential = () => {
    return (
        <section className="Collection">
            <div className="inner">
                <div className="flex">
                    <div className="text_box">
                        <h2>COLLECTION</h2>
                        <p>SUMMER 2023 FASHION SHOW</p>
                        <a href="" target="_blank" className='bbtn'>더 알아보기</a>
                    </div>
                    <figure><img src={process.env.PUBLIC_URL + "/assets/mens-fashion-show" + ".png"} alt="" /></figure>
                </div>

            </div>
        </section>
    )
}


export default Essential;