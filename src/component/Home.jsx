import React, { useState } from 'react';

const Home = () => {
    let [count, setCount] = useState(1);

    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>Count: {count}</button>


            <h3 className="w_title">Home 화면입니다.</h3>
            <img src="/img/home_img_01.jpg" alt="" />
            <br/>
            <img src="/img/home_img_02.jpg" alt="" />
        </div>
    );
}
export default Home;