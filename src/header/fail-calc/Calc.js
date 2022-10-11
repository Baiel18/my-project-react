import React,{useState} from "react";

function Calc() {
    const [product,setProduct] = useState([])

    function getProduct(ing){
        setProduct((product)=> [...product, ing])
    }
    function zacaz(){
        alert('заказ отправлень')
    }
    
    return (
        <><h1 className="gamburger"><span className="gamb">/</span>Gamburger<span className="gamb">\</span></h1><br/><br/>
        <div className="store">
            
             <div className="tovar"><span  onClick={zacaz}  className="zacaz">зaказaть</span> <br/><br/>
                <div className="burgerTop">. .<sup>. .</sup>. . .<sup>. . .</sup>. . . .</div>
               {product.map((ings, i)=>{
                return <div key={i} className={ings}></div>
               })}
                <div className="burgerBotton"></div>
            </div>
            <div className="chet">
                    <span><img src="https://pngimg.com/uploads/cheese/cheese_PNG25292.png" onClick={()=>getProduct('cheese')} alt='cheese'/> </span>
                    <span><img src="https://pngimg.com/uploads/steak/steak_PNG29.png" onClick={()=>getProduct('steak')} alt='steak'/> </span>
                    <span><img src="https://www.pngmart.com/files/5/Ketchup-PNG-HD.png" onClick={()=>getProduct('ketchup')} alt='ketchup'/> </span>
                    <span><img src="https://pngimg.com/uploads/sausage/sausage_PNG98704.png" onClick={()=>getProduct('kolbasa')} alt='kolbasa'/> </span>
            </div>
        </div>
           
        </>
    )
}
export default Calc