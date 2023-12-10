import React from "react";
import "./Stake.css";

export default function Stake_History() {
  return (
    <div>
      <div className="container mx-auto lg:px-10  py-5">
        <div className="flex flex-col items-center justify-center lg:py-0 py-8">
          <div className="text-center">
            <p className="text-center  text-3xl text-white font-bold">
              Your Stakes
            </p>
            {/* <hr className="line flex mx-auto " /> */}
          </div>
          <div className="MuiBox-root css-ihc79b">
            <div className="d-flex justify-content-end align-items-center mb-3">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium css-4hkj1c refershBTB"
                tabIndex={0}
                type="button"
                // onClick={() => Stake_History()}
              >
                <span className="me-2 text-white">Refresh</span>
                <span
                  role="img"
                  aria-label="sync"
                  className="anticon anticon-sync SyncOutlined text-white"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="sync"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z" />
                  </svg>
                </span>
              </button>
            </div>
            <div
              className="MuiTableContainer-root css-48ybtg"
              border="none"
              pt={2}
              pb={5}
            >
              <table
                className="MuiTable-root css-1owb465"
                aria-label="simple table"
                style={{ minWidth: 600 }}
              >
                <thead className="MuiTableHead-root css-1wbz3t9">
                  <tr className="MuiTableRow-root MuiTableRow-head css-1gqug66">
                    <th
                      className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                      scope="col"
                      style={{ fontSize: 16, color: "rgb(255, 255, 255)" }}
                    >
                      #
                    </th>
                    <th
                      className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                      scope="col"
                      style={{ fontSize: 16, color: "rgb(255, 255, 255)" }}
                    >
                      Staked Amount
                    </th>
                    <th
                      className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                      scope="col"
                      style={{ fontSize: 16, color: "rgb(255, 255, 255)" }}
                    >
                      Withdrawal Time
                    </th>
                    <th
                      className="MuiTableCell-root MuiTableCell-head MuiTableCell-alignCenter MuiTableCell-sizeMedium css-1gzy9y4"
                      scope="col"
                      style={{ fontSize: 16, color: "rgb(255, 255, 255)" }}
                    >
                      Unstake
                    </th>
                  </tr>
                </thead>
                <tbody className="MuiTableBody-root css-1xnox0e">
                  <td
                    className="MuiTableCell-root MuiTableCell-body MuiTableCell-sizeMedium css-q34dxg"
                    colSpan={5}
                    style={{ border: "none" }}
                  >
                    <div className="MuiBox-root css-ehd0rl">
                      <p className="MuiTypography-root MuiTypography-body1 css-o7q7an">
                        You have no staking data
                      </p>
                    </div>
                  </td>{" "}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
