import React from 'react';
import CoinItem from './CoinItem';
import { Link } from 'react-router-dom';
import CoinDetailPage from './CoinDetailPage';

const CoinList = ({ coins }) => {
    return (
        <div className='lg:max-w-[1268px] max-w-[85%] w-full mx-auto mt-8'>
            <div>
                <div className='text-gray-200 flex justify-between items-center shadow-lg rounded-lg mx-4 my-2 font-bold px-6 py-4 bg-primary'>
                    <p>#</p>
                    <p>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='lg:block hidden'>Volume</p>
                    <p className='lg:block hidden'>Market Cap</p>
                </div>
            </div>
            {
                coins.map((coin, idx) => {
                    return (
                        <Link to={`/coin/${coin.id}`} element={<CoinDetailPage />} key={idx}>
                            <CoinItem coins={coin} key={idx} />
                        </Link>
                    )
                })
            }
        </div >
    )
}

export default CoinList