import Fifty from "../../assets/chart/50";

const Chart = ({ greenWinChance }) => {
  return (
    <div className="chart-wrapper">
      <div className="chart-holder">
        <div id="chart" className="canvas-wrapper">
          <Fifty />
          <div className="result-amount">0.00</div>
        </div>
      </div>
      <div className="chart-info">
        <div className="bet-details _green">
          <div className="bet-details__inner">
            <div className="row">
              <div className="text">Bet Details</div>
            </div>
            <div className="row">
              <div className="indicator _green" />
            </div>
            <div className="row">
              <div className="col text">Win Chance</div>
              <div className="col text _bold _roboto">
                {greenWinChance + 100}%
              </div>
            </div>
            <div className="row">
              <div className="col text">Payout</div>
              <div className="col text _bold _roboto">1.95</div>
            </div>
          </div>
        </div>
        <div className="bet-details _purple">
          <div className="bet-details__inner">
            <div className="row">
              <div className="text">Bet Details</div>
            </div>
            <div className="row">
              <div className="indicator _purple" />
            </div>
            <div className="row">
              <div className="col text">Win Chance</div>
              <div className="col text _bold _roboto">
                {Math.abs(greenWinChance)}%
              </div>
            </div>
            <div className="row">
              <div className="col text">Payout</div>
              <div className="col text _bold _roboto">1.95</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
