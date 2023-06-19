let score=0;
let wicket=0;
let ballWiseRes=[];

 function add(num){
    if(wicket<10){
        ballWiseRes.push(num);
        score+=num;
        rootElement.render(<App/>);
    }
 }

function addWick(){
    if(wicket<10){
        ballWiseRes.push("w");
        wicket+=1;
        rootElement.render(<App/>);
    }
}

function ButtonClick(){
   return( 
    <div>
    <button onClick={()=>add(0)}>0</button>
    <button onClick={()=>add(1)}>1</button>
    <button onClick={()=>add(2)}>2</button>
    <button onClick={()=>add(3)}>3</button>
    <button onClick={()=>add(4)}>4</button>
    <button onClick={()=>add(5)}>5</button>
    <button onClick={()=>add(6)}>6</button>
    <button onClick={addWick}>wicket</button>
    </div>

   );
}

const Over=()=>(
    <div>
        {ballWiseRes.map((res,index)=>
        <>
        {index%6==0?<br/> : null}
        <span key={index}>{res==0?<strong>.</strong>:res}</span>&nbsp;&nbsp;&nbsp;
        </>
        )}
    </div>
    
);

const App=()=>{

    return(<>
    <h1>Score Keeper App</h1>
    <h2>Score:{score}/{wicket}</h2>
    <ButtonClick/>
    <Over/>
    </>)
}

let rootElement=ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);