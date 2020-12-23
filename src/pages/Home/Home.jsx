import { Paper } from '@material-ui/core'
import React from 'react'
import { Message } from '../../components/Message'



import './Home.scss'

//for testing
const date1 =  new Date('Sat Dec 19 2020 16:02:15 GMT+0300');
const date2 = new Date('Sat Dec 19 2020 18:59:15 GMT+0300');


export const Home = () => {
    return (
        <div className='home'>
            <Paper className='home__content' square={true}>
                <Message 
                    avatar='https://sun9-8.userapi.com/impg/aEsU4dOWknLGQ2VAEKlbYShAlx94gkJxK9YVnA/dJ7ZGpBcceg.jpg?size=1200x1200&quality=96&proxy=1&sign=9e737989500984f0595642511c323e93&type=album'
                    text='Привет! Че как? 🌚 https://m.vk.com/mail?act=show&peer=158796696'
                    date={date1}
                    user={{name: 'Nika'}}
                    isMe={true}
                    isReaded={true}
                       attachments={[
                        {
                            name: 'image.jpg',
                            url: 'https://memepedia.ru/wp-content/uploads/2020/09/hqdefault-1.jpg'
                        },
                        {
                            name: 'image.jpg',
                            url: 'https://source.unsplash.com/800x600/?random=6&city'
                        },
                        {
                            name: 'image.jpg',
                            url: 'https://source.unsplash.com/1600x980/?random=2&city'
                        },
                        {
                            name: 'image.jpg',
                            url: 'https://source.unsplash.com/1024x768/?random=3&city'
                        }
                    ]}
                />

                <Message 
                    avatar='https://sun9-68.userapi.com/impf/apYlAwa-Ctdn0qtL0EbhimdVwhfpguyaxZO0OA/FZumFvWL0rM.jpg?size=810x1080&quality=96&sign=ee6b4246aa613f4a776027c90a2a7d76&type=album'
                    text='Норм'
                    date={date2}
                    user={{name: 'Nika'}}
                    isMe={false}
                    isReaded={false}
                    attachments={[
                        {
                            name: 'image.jpg',
                            url: 'https://memepedia.ru/wp-content/uploads/2020/09/hqdefault-1.jpg'
                        },
                        {
                            name: 'image.jpg',
                            url: 'https://source.unsplash.com/800x600/?random=6&city'
                        },
                        {
                            name: 'image.jpg',
                            url: 'https://source.unsplash.com/1600x980/?random=2&city'
                        },
                    ]}
                />
            </Paper>
        </div>
    )
}
