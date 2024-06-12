import React from 'react'
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { FaTasks } from "react-icons/fa";

function Cards() {
  return (
    <div className="row">
    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-primary shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                Earnings (Monthly)
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                Rs 40,000
              </div>
            </div>
            <div className="col-auto">
            <RiMoneyDollarCircleLine size={25}/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-success shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                Earnings (Annual)
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                $215,000
              </div>
            </div>
            <div className="col-auto">
              <RiMoneyDollarCircleLine size={25}/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-info shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                Customer
              </div>
              <div className="row no-gutters align-items-center">
                <div className="col-auto">
                  <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                    50
                  </div>
                </div>
                
              </div>
            </div>
            <div className="col-auto">
              <FaTasks/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="col-xl-3 col-md-6 mb-4">
      <div className="card border-left-warning shadow h-100 py-2">
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                Pending Requests
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                18
              </div>
            </div>
            <div className="col-auto">
              <i className="fas fa-comments fa-2x text-gray-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards