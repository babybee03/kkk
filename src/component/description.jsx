import React from 'react';
import styled from 'styled-components'


const Box = styled.div`
    width: 300px;
    height: 600px;
    background-color: orange;
    color: white;
    font-size: 15pt;
`
const Title =styled.div`
    font-size: 20pt;
    `


export default () => (
    <div className="all" style={{display: "flex"}}>
        <Box>
            <img src="a_1.jpg" alt="" />
            <div>
                <p>Container Transportation</p>
                <Title>컨테이너 운송</Title>
                <div style={{fontSize: "13pt"}}>
                    최적의 컨테이너 운송 플래닝을 통해<br/>
                    수요와 공급을 조절하여 Waste를<br/>
                    최소화할 수 있는 컨테이너 운송<br/>
                    Solution을 제공합니다.<br/>

                </div>
            </div>
        </Box>
        <Box>
            <img src="a_2.jpg" alt="" />
            <div>
                <p>Warehouse & Distribution</p>
                <h1 style={{fontSize: "20pt"}}>W&D</h1>
                <div style={{fontSize: "13pt"}}>
                    다양한 산업의 운영경험과 확장성을<br/>
                    갖춘 예형물류센터를 활용하여<br/>
                    B2B - B2C 고객에게 Total W&D<br/>
                    Solution을 제공합니다.<br/>
                </div>
            </div>
        </Box>
    </div>

)