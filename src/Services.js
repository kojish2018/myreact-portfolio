import React from 'react';
import './Services.css';
// import Macicon from './img/iMacアイコン.png';
// import Dataicon from './img/統計アイコン.png';
// import Docicon from './img/博士アイコン.png';


function Services(){
    return(
        <div className='services' id="services">
            <h3>仕事内容</h3>
            <h2>Works</h2>
            <div className='row'>
            <Icons myIcon={iconObj[0].icon} myTitle={iconObj[0].title} myDescription={iconObj[0].description} />
            <Icons myIcon={iconObj[1].icon} myTitle={iconObj[1].title} myDescription={iconObj[1].description} />
            <Icons myIcon={iconObj[2].icon} myTitle={iconObj[2].title} myDescription={iconObj[2].description} />
            </div>
        </div>
    );
};

const iconObj = [
    {
        icon: <ion-icon name="laptop-outline" class="ion1"></ion-icon>,
        title: 'エンジニアリング',
        description: 'フロントエンド、サーバーサイド（主にPython、Javascript）の案件に対応しております。拠点によっては常駐、フルリモートなど様々な案件に対応しています。'
    },
    {
        icon: <ion-icon name="analytics-outline" class="ion1"></ion-icon>,
        title: '統計解析',
        description: 'データハンドリングから統計解析まで対応します。機械学習アルゴリズムコーディングの実務経験もありますので、そちらも対応可能です。'
    },
    {
        icon: <ion-icon name="globe-outline" class="ion1"></ion-icon>,
        title: '英語対応',
        description: '約2年半の海外滞在経験、2年間の留学経験があり、英語から日本語への翻訳業務ができます。エンジニアリングや統計解析の英語対応も可能です。'
    }
]

function Icons(props){
    return(
        <div className="service-box">
            <span>
            {props.myIcon}
            </span>
            <h4>{props.myTitle}</h4>
            <p>{props.myDescription}</p>
        </div>
    )
}

export default Services;