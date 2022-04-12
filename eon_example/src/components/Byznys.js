import React from 'react'
import YellowBanner from './YellowBanner'

export default function Byznys() {
    return (
        <div className='p-box'>
            <div className='p-box-img'>
                <picture className='image'>
                    {/* the img below is for devices with more 1000px width
                    and it chooses one depend on Pixel density*/}
                    <source media="(min-width: 1000px)" srcset="https://saeceweb01runblobcorewindowsnet-endpoint.azureedge.net/eonmedialibcontainer/e.on/media/general/byznys%20a%20energie/2022/__variants/cover$938-480-1x$.webp?last-modified=637836494177243928, https://saeceweb01runblobcorewindowsnet-endpoint.azureedge.net/eonmedialibcontainer/e.on/media/general/byznys%20a%20energie/2022/__variants/cover$938-480-2x$.webp?last-modified=637836494177243928 2x" type="image/webp" />
                    <source srcset="https://saeceweb01runblobcorewindowsnet-endpoint.azureedge.net/eonmedialibcontainer/e.on/media/general/byznys%20a%20energie/2022/__variants/cover$480-252-1x$.webp?last-modified=637836494177243928, https://saeceweb01runblobcorewindowsnet-endpoint.azureedge.net/eonmedialibcontainer/e.on/media/general/byznys%20a%20energie/2022/__variants/cover$480-252-2x$.webp?last-modified=637836494177243928 2x" type="image/webp" />
                    <img alt="" className="box--image" height="252" loading="lazy" src="https://saeceweb01runblobcorewindowsnet-endpoint.azureedge.net/eonmedialibcontainer/e.on/media/general/byznys%20a%20energie/2022/__variants/cover$480-252-1x$.webp?last-modified=637836494177243928" width="480" />
                </picture>
            </div>
            {/*for what so many divs */}
            <div className='p-box-text'>
                <div class="p-box__text-wrap">
                    <div class="p-box__text-body">
                        <div class="p-box__text-inner">
                            <div class="p-box__annot">
                                <p>Jihomoravské město Pohořelice realizuje ve spolupráci se společností E.ON velký projekt celkové modernizace veřejného osvětlení, který městu přinese lepší vzhled i energetické a finanční úspory. Patrik Pařil, místostarosta Pohořelic, a Jaromír Uhde, senior manažer obchodu v E.ONu, vysvětlují, jak takový projekt probíhá i proč je důležité nehledět jen na cenu a dobře si pohlídat kvalitu.</p>
                            </div>
                            <p class="p-box__buttons"></p>
                        </div>
                        <div class="p-box__ico">
                            {/*thsi part wasnt working. it supposed to be some icon?  */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <YellowBanner />
            </div>
        </div>
    )
}