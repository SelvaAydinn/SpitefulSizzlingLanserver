import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App-header">
      <div className="App">

        {/* Hello world */}
       
       
<div className="divTable blueTable">
<div className="divTableBody">
<div className="divTableRow">
<div className="divTableCell">ADI</div>
<div class="divTableCell"><input id="name" type="text" /> </div>
   </div>
<div className="divTableRow">
<div className="divTableCell">URL</div>
<div class="divTableCell"><input id="name" type="text" /></div>
</div>
<div className="divTableRow">
    <div className="divTableCell">HTTP METODU</div>
    <div class="divTableCell"><select>
    <option value="get">get</option>
    </select></div>
</div>
<div className="divTableRow">
<div className="divTableCell">KONTROL PERİYODU</div>
<div class="divTableCell"><input id="name" type="text" /></div>
</div>
</div>
<div className="divTableFoot tableFootStyle">
<div className="divTableRow">
<div className="divTableCell"></div>
<div className="divTableCell"><button class="button1" type="button" >KAYDET</button> </div>
</div>
</div>
</div>

       
       <div className='div1'>
        <div className='div1text'>den</div>
       </div>
       </div>
<div className='grafik'>




</div>       
      
      
      
      
      
      
      </div>
    );
  }
}

export default App;

