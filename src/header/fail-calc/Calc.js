import React,{useState} from "react";

function Calc() {
    const [product,setProduct] = useState([])

    function getProduct(ing){
        setProduct((product)=> [...product, ing])
    }
    
    return (
        <><h1 className="gamburger"><span className="gamb">/</span>Gamburger<span className="gamb">\</span></h1><br/><br/>
        <div className="store">
            
             <div className="tovar"><span className="zacaz">заказть</span> <br/><br/>
                <div className="burgerTop">. .<sup>. .</sup>. . .<sup>. . .</sup>. . . .</div>
               {product.map((ings, i)=>{
                return <div key={i} className={ings}></div>
               })}
                <div className="burgerBotton"></div>
            </div>
            <div className="chet">
                    <span><img src="https://pngimg.com/uploads/cheese/cheese_PNG25292.png" onClick={()=>getProduct('cheese',10)} alt='cheese'/> 10$</span>
                    <span><img src="https://pngimg.com/uploads/steak/steak_PNG29.png" onClick={()=>getProduct('steak',20)} alt='steak'/> 20$</span>
                    <span><img src="https://www.pngmart.com/files/5/Ketchup-PNG-HD.png" onClick={()=>getProduct('ketchup',5)} alt='ketchup'/> 5$</span>
            </div>
        </div>
           
        </>
    )
}
export default Calc