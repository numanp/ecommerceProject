import React from 'react'

export default () => {
    return (
        <div className="content-cellphone nopadding">
        <div className="container">
            <div className="row">
            <span className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></span>
            <span className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                <h2 className="text-cellphone" style={{fontSize: "1vw"}}><strong>comprá productos de oferta!</strong></h2>
                <h4 className="text-cellphone" style={{fontSize: "0.8vw"}}>Usá nuestra app para comprar desde donde estes</h4>
            </span>
            <span className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></span>
            <span className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><a href="https://play.google.com/store/apps?hl=en" target="_blank"><img className="button-cellphone" src="http://dungeonhunter5.com/public/images/badges/googleplay_ES.png" /> </a></span>

            <span className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><a href="https://www.apple.com/lae/ios/app-store/" target="_blank"><img className="button-cellphone" src="https://tiphq36682.i.lithium.com/t5/image/serverpage/image-id/601i9279142277D544E8/image-size/original/download/true?v=1.0&px=-1" /></a></span>

            <span className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><a href="https://www.microsoft.com/es-ar/store/apps?rtc=1" target="_blank"><img className="button-cellphone" src="http://www.newell-fonda.k12.ia.us/wp-content/uploads/2016/05/Download-on-Windows-Phone.png" /></a></span>
            </div>
        </div>
        </div>
    )
}