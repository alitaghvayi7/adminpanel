import './productInfoDetails.css';

export default function ProductInfoDetails() {
  return (
    <div className='ProductInfoDetailsContainer'>
        <div className="ProductInfoDetailsHeader">
            <img src="assets/pexels-photo-7156886.jpeg" alt="" className="ProductInfoDetailsImage" />
            <span className="ProductInfoDetailsTitle">Apple AirPad</span>
        </div>
        <div className="ProductInfoDetailsItem">
            <span className="ProductInfoDetailsKey">id : </span>
            <span className="ProductInfoDetailsValue"> 1</span>
        </div>
        <div className="ProductInfoDetailsItem">
            <span className="ProductInfoDetailsKey">sales : </span>
            <span className="ProductInfoDetailsValue"> 1123</span>
        </div>
        <div className="ProductInfoDetailsItem">
            <span className="ProductInfoDetailsKey">active : </span>
            <span className="ProductInfoDetailsValue"> true</span>
        </div>
        <div className="ProductInfoDetailsItem">
            <span className="ProductInfoDetailsKey">inStock : </span>
            <span className="ProductInfoDetailsValue"> no</span>
        </div>
    </div>
  )
}
