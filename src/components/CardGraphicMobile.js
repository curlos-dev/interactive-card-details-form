const CardGraphicMobile = ({ cardNumber, cardholderName, expirationMonth, expirationYear }) => {
    return (
        <div className="">
            <div className="bg-[url('/public/images/bg-card-front.png')] m-6 bg-no-repeat bg-cover p-6 text-[#FFFFFF] max-w-[447px] h-[245px]">
                <img src="/images/card-logo.svg" alt="Card" className="" />

                <div className="flex flex-col justify-end">
                    <div className="text-[28px]">0000 0000 0000 0000</div>

                    <div className="flex justify-between items-center mt-6">
                        <div className="">JANE APPLESEED</div>
                        
                        <div>00/00</div>
                    </div>
                </div>

            </div>
            {/* <img src="/images/bg-card-front.png" alt="Card" className="m-6" /> */}
        </div>
    )
}

export default CardGraphicMobile