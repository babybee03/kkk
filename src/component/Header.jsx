import React from 'react';
import './Header.css';

function Header_content() {
    return(
        <div>
            <h1 className="h2_style">
                Header.css → Header.js → App.js<br/>
                css파일을 header.js 컴포넌트로 호출한 뒤 함수로 처리하여<br/>
                다시 App.js로 import하고 태그형식 Header_contnt - 부등호는 특수문자임.<br/>
                으로 입력하여 호출하기
            </h1>
        </div>
    )
}

export default Header_content;