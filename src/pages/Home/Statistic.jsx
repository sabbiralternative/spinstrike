const Statistic = () => {
  return (
    <div className="game-statistic">
      <div className="border" />
      <ul className="tabs">
        <li data-track="tab.all_bets" className="tabs__item _active">
          <div className="tabs__item-inner">
            <div className="text">All Bets</div>
          </div>
        </li>
        <li data-track="tab.top_bets" className="tabs__item">
          <div className="tabs__item-inner">
            <div className="text">Top bets</div>
          </div>
        </li>
        <li data-track="tab.my_bets" className="tabs__item">
          <div className="tabs__item-inner">
            <div className="text">My bets</div>
          </div>
        </li>
      </ul>
      <div className="content">
        <div className="tab-content">
          <div className="titles">
            <div className="titles__item">Game</div>
            <div className="titles__item">Multiplier</div>
            <div className="titles__item">Payout</div>
          </div>
          <div className="separator" />
          <div className="rows">
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _turbomines" />
                Turbomines
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _hilo" />
                Hi-lo
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _turboplinko" />
                Turboplinko
              </div>
              <div className="cell _fw500">0.16x</div>
              <div className="cell _fw600">$0.64</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _keno" />
                Keno
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _limbo" />
                Limbo Rider
              </div>
              <div className="cell _fw500">1.50x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _mines" />
                Mines
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _dice" />
                Dice Twice
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _dice" />
                Dice Twice
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _mines" />
                Mines
              </div>
              <div className="cell _fw500">0.00x</div>
              <div className="cell _fw600">$0.00</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _crashfootball" />
                Crash X Football
              </div>
              <div className="cell _fw500">1.77x</div>
              <div className="cell _fw600">$0.42</div>
            </div>
            <div className="row">
              <div className="cell _capitalize _nowrap">
                <div className="icon folders-icon _crash" />
                Crash X
              </div>
              <div className="cell _fw500">2.04x</div>
              <div className="cell _fw600">$0.12</div>
            </div>
          </div>
        </div>
      </div>
      <div className="info">Tap on any bet to see details</div>
    </div>
  );
};

export default Statistic;
