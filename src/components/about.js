import React, { Component } from 'react';
import Group from '../../static/assets/about.jpg';

class About extends Component {
  render() {
    return (
      <div>
        
        <img src={Group} className="group" />

        <div className="squares-wrapper">
        <div className="squares">
            <div className="square">
                <div className="img-wrapper">
                    <img src="assets/night.jpg" alt="nightfall"/>
                </div>

                <div className="square-text-wrapper">
                        <h1>Loyalty</h1>
                    <ul>
                        <li>The House of Tric is always loyal to their family </li>
                        <li>We respect our villains/vigilantes in this house</li>
                        <li>Everyone is treated as equals</li>
                        <li>We remain loyal until the very end</li>
                    </ul>
                </div>
            </div>
            <div className="square">
                <div class="square-text-wrapper">
                        <h1>Power</h1>
                    <ul>
                        <li>Many powerful and rich villains/vigilantes make up this group</li>
                        <li>Bounty hunters are among the most wealthy here</li>
                        <li>Together we are a powerful bunch</li>
                        <li>Everyone should be afraid to cross us</li>
                    </ul>
                </div>

                <div class="img-wrapper">
                    <img src="assets/vice1.jpg" alt="fries"/>
                </div>
            </div>
            <div class="square">
                <div class="img-wrapper">
                    <img src="assets/freeze.jpg" alt="fries"/>
                </div>
    
                <div class="square-text-wrapper">
                        <h1>Insanity</h1>
                    <ul>
                        <li>We here in the House of Tric come from many backgrounds</li>
                        <li>Crazy and insane are our middle names</li>
                        <li>It can get to be a lot at times, but its more lively this way</li>
                        <li>We welcome any villain/vigilante to our crazy group</li>
                    </ul>
                </div>
            </div>
            <div class="square">
                <div class="square-text-wrapper">
                        <h1>Family</h1>
                    <ul>
                        <li>We love hard our brothers and sisters</li>
                        <li>Together we are the strongest</li>
                        <li>No one here is left behind</li>
                        <li>Everyone is cared for equally here</li>
                    </ul>
                </div>
    
                <div class="img-wrapper">
                    <img src="assets/zion1.jpg" alt="fries"/>
                </div>
            </div>
        </div>
    </div>

      </div>
    );
  }
}

export default About;