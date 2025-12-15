import img from "next/img";






const PaynoneOne: React.FC = () => {
  return (
    <section className='z-1 bg-neutral-10 py-140 position-relative overflow-hidden'>
      <div className='container'>
        <div className='paynone-item margin-block-start-60px'>
          <div className='text-center justify-content-center align-items-center'>
            <h2
              className='paynone-title tw-text-80-px fw-normal text-dark-600 tw-mb-3 cursor-big'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              What We Support
            </h2>
            <p
              className='max-w-322 text-dark-500 tw-text-lg fw-normal mx-auto'
              data-aos='fade-up'
              data-aos-duration={1000}
            >
             We support cryptocurrencies.
            </p>
          </div>
        </div>
        <div className='row gy-4'>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-one max-w-307 payone-card tw-px-8 py-80 bg-warning-500 rounded-4 margin-block-start--120px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-212 text-center justify-content-center align-items-center mx-auto'>
                <img
                  width={80}
                  height={80}
                  src={"https://cryptologos.cc/logos/bnb-bnb-logo.png"}
                  alt='img'
                  className='tw-text-80-px tw-mb-8'
                />
                <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big'>
                  BNB (Binance Coin)
                </h4>
                <p className='fw-normal tw-text-xl text-dark-600'>
                Minimum ammount
                 0.01 BNB
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-two max-w-307 payone-card tw-ps-7 tw-pe-8 tw-pt-12 tw-pb-10 bg-base-two-600 rounded-4 margin-inline-start--45px margin-block-start-200px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-246 text-center justify-content-center align-items-center mx-auto'>
                <img
                  width={78}
                  height={78}
                  src={"https://cryptologos.cc/logos/polygon-matic-logo.png"}
                  alt='img'
                  className='tw-text-80-px tw-mb-8'
                />
                <h5 className='fw-normal text-white tw-mb-6 cursor-big'>
               Polygon (MATIC)
                </h5>
                <p className='fw-normal tw-text-xl text-white'>
              Minimum Ammount
                  0.00008 (MATIC)
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-three max-w-307 payone-card tw-ps-7 tw-pe-8 tw-pt-12 tw-pb-10 bg-base-two-600 rounded-4 margin-block-start--200px margin-inline-start-100px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-246 text-center justify-content-center align-items-center mx-auto'>
                <img
                  width={80}
                  height={80}
                  src={"https://cryptologos.cc/logos/tron-trx-logo.png"}
                  alt='img'
                  className='tw-text-80-px tw-mb-8'
                />
                <h5 className='fw-normal text-white tw-mb-6 cursor-big'>
                  Tron (TRX)
                </h5>
                <p className='fw-normal tw-text-xl text-white'>
                 Minimum Ammount
                 0.00008 TRX
                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-four max-w-307 payone-card tw-px-8 py-80 bg-warning-500 rounded-4 margin-block-start-70px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-212 text-center justify-content-center align-items-center mx-auto'>
                <img
                  width={80}
                  height={80}
                  src={"https://cryptologos.cc/logos/ethereum-eth-logo.png"}
                  alt='img'
                  className='tw-text-80-px tw-mb-8'
                />
                <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big'>
                  Ethereum (ETH)
                </h4>
                <p className='fw-normal tw-text-xl text-dark-600'>
           Minimum Ammount
               0.005 ETH
                </p>
              </div>
            </div>



          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-five max-w-307 payone-card tw-ps-7 tw-pe-8 tw-pt-12 tw-pb-10 bg rounded-4 margin-inline-start-107px margin-block-start-176px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-246 text-center justify-content-center align-items-center mx-auto'>
               
                <h5 className='fw-normal text-white tw-mb-6 cursor-big'>
            
                </h5>
                <p className='fw-normal tw-text-xl text-white line-clamp-3'>
           <br></br>


                </p>
              </div>
            </div>
          </div>
          <div className='col-xl-4 col-lg-4 col-md-6'>
            <div
              className='paynone-card-six max-w-307 payone-card tw-px-8 py-80 bg-warning-500 rounded-4 margin-inline-start-100px margin-block-start--200px'
              data-aos='fade-up'
              data-aos-duration={800}
            >
              <div className='max-w-212 text-center justify-content-center align-items-center mx-auto'>
               <img
                  width={80}
                  height={80}
                  src={"https://cryptologos.cc/logos/bitcoin-btc-logo.png"}
                  alt='img'
                  className='tw-text-80-px tw-mb-8'
                />
                <h4 className='fw-normal text-dark-600 tw-mb-6 cursor-big'>
                  Bitcoin (BTC)
                </h4>
                <p className='fw-normal tw-text-xl text-dark-600'>
                 Minimum Ammount
            0.00008 BTC
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaynoneOne;


