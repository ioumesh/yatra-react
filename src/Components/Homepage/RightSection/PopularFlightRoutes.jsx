import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  display: flex;
  width: 100%;
  position: relative;
  text-align: left;
  // background-color: green;
  font-size: 20px;
  font-weight: 600;
  text-transform: capitalize;
  color: #333;
  margin-top: 15px;
  margin-bottom: -15px;
  letter-spacing: 0.4px;
`;

const ShowRoutes = styled.div`
  // background-color: red;
  margin: 20px 10px;
  align-items: left;
  width: 100%;
  max-width: 100%;
  overflow: scroll;
  padding-top: 20px;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    display: none;
  }
`;

const RouteItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 200px;
  max-width: 600px;
  margin-bottom: 10px;
  // backgroundColor: red !important;

  div {
    flex: 1 1 auto;
  }
`;

const RouteItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  // width: 10px;
  max-width: 26%;
  min-width: 22%;
  margin: 0 10px;
  padding: 20px 15px 5px 15px;
  background-color: white;
  // border: 1px solid black;
  border-radius: 10px;
  text-align: left;
  // box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  box-shadow: 0 1px 6px rgb(0 0 0 / 22%);
  font-size: 14px;
  color: #333333;
  font-family: rubik;
  margin-bottom: 5px;
  font-weight: 600;

  ::after {
    content: " ";
    position: absolute;
    right: -10px;
    top: 0;
    width: 20px;
    height: 1%;
    /* background: red; */
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.25);
    transform: scale(1.01);
    transition: all 0.2s;
  }

  .date {
    font-size: 12px;
    font-weight: 500;
    color: #666;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 10px;
  }

  .price-Starting {
    align-self: flex-end;
    height: 50px;
  }

  .priceStarting div:nth-child(1) {
    font-size: 12px;
    font-weight: 400;
    color: #999;
  }

  .priceStarting div:nth-child(2) {
    font-size: 18px;
    color: #f34f4f;
    text-align: left;
    font-weight: 700;
    line-height: 20px;
  }
`;

const RouteItem = ({ el }) => {
  return (
    <RouteItemStyle>
      <div>
        {el.from}
        <div className="date">{el.date}</div>
        {el.to}
      </div>

      <div className="priceStarting">
        <div>Starting From</div>
        <div>₹ {el.price}</div>
      </div>
    </RouteItemStyle>
  );
};

const domesticFlightRoutes = [
  {
    id: 1,
    from: "Delhi",
    to: "Mumbai",
    price: "4877",
    date: "Tue, 2 Jul",
  },
  {
    id: 2,
    from: "Delhi",
    to: "Banglore",
    price: "5492",
    date: "Mon, 1 Jul",
  },
  {
    id: 3,
    from: "Delhi",
    to: "Pune",
    price: "4680",
    date: "Tue, 16 Jul",
  },
  {
    id: 4,
    from: "Delhi",
    to: "Srinagar",
    price: "5867",
    date: "Tue, 9 Jul",
  },
  {
    id: 4,
    from: "Delhi",
    to: "Hyderabad",
    price: "4500",
    date: "Mon, 12 Aug",
  },
  {
    id: 5,
    from: "Delhi",
    to: "Kolkata",
    price: "4686",
    date: "Tue, 4 June",
  },
];

const internationalFlightRoutes = [
  {
    id: 1,
    from: "Delhi",
    to: "Dubai",
    price: "12913",
    date: "Tue, 25 Jun",
  },
  {
    id: 2,
    from: "Delhi",
    to: "Toronto",
    price: "61991",
    date: "Wed, 26 June",
  },
  {
    id: 3,
    from: "Delhi",
    to: "Bangkok",
    price: "10308",
    date: "Wed, 26 June",
  },
  {
    id: 4,
    from: "Delhi",
    to: "London",
    price: "25667",
    date: "Mon, 1 Jul",
  },
  {
    id: 5,
    from: "Delhi",
    to: "Singapore",
    price: "10445",
    date: "Wed, 26 June",
  },
];

function PopularFlightRoutes({ routeType }) {
  const [flightRouteArr, setFlightRouteArr] = React.useState(
    routeType === "domestic" ? domesticFlightRoutes : internationalFlightRoutes
  );
  console.log(routeType);
  return (
    <>
      <Title>Popular {routeType} Flight Routes</Title>
      <ShowRoutes>
        <RouteItems>
          {flightRouteArr.map((el) => (
            <RouteItem
              className="searchCard"
              // handleClose={handleClose}
              el={el}
              key={el.id}
            />
          ))}
        </RouteItems>
      </ShowRoutes>
    </>
  );
}

export { PopularFlightRoutes };
