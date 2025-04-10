export function Item() {
    return (
      <div className="itemContainer">
        <h1 className="itemName">Leaf</h1>
        <div className="itemImgContainer">
             <img src="https://t3.ftcdn.net/jpg/06/11/24/66/360_F_611246666_UuaYs1qQuJllipq03mHE8o3Szd8D8uCV.jpg" alt="" className="itemImg"/>
        </div>
        <p className=""></p>
        <label for="numberDropdown">quantity: </label>
        <select>
        <option value="0"></option>
        <option value="1">1</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>
      </div>
    );
  }
  
  export default Item();