import React, { Component } from 'react'
import { ContractData, ContractForm } from 'drizzle-react-components'
import logo from '../../logo.png'

class Home extends Component {
  render() {
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1 header">
            <h1>Blockchain carrier registration</h1>
            <p>Register as a carrier and see the blockchain in action</p>

            <br/><br/>
          </div>

        
          <div className="pure-u-1-1">
            <h2>Add a contact</h2>
            <p><strong>Stored Value</strong>: <ContractData contract="Carrier" method="getContacts" /></p>
            <ContractForm contract="Carrier" method="addContact" />
            <br/><br/>
          </div>


          <div className="pure-u-1-1">
            <h2>Add DoT info</h2>
            <p><strong>Stored Value</strong>: <ContractData contract="CarrierDotInfo" method="usDotNumber" /></p>
            <ContractForm contract="CarrierDotInfo" method="setUsDotNumber" />
            <br/><br/>
          </div>

        </div>
      </main>
    )
  }
}

export default Home
