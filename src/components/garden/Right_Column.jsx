import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Droppable } from "./Droppable.jsx";
import { Draggable } from "./Draggable.jsx";

import { useSelector, useDispatch } from "react-redux";

import {
  setSun,
  setSoil,
  setWater,
  setZone,
} from "../../store-slices/currentViewSlice.js";

export default function Right_Column() {
  let newCV = [];
  const cv = useSelector((state) => state.currentView);
  const pplants = useSelector((state) => state.plantsP);
  const ma = useSelector((state) => state.mainArrays);
  const grdn = useSelector((state) => state.grdn);
  const paths = grdn.paths;

  const soils = pplants?.soils;
  const suns = pplants?.suns;
  const waters = pplants?.waters;
  const zones = pplants?.zones;

  const allPlants = ma?.allPlants;

  const dispatch = useDispatch();

  const updateCurrentView = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    const newValue = e.target.options[selectedIndex].getAttribute("key2");

    const intValue = parseInt(newValue, 10);

    switch (e.target.name) {
      case "s_soil":
        dispatch(setSoil(intValue));
        break;
      case "s_sun":
        dispatch(setSun(intValue));
        break;
      case "s_water":
        dispatch(setWater(intValue));
        break;
      case "s_zone":
        dispatch(setZone(intValue));
        break;
      default:
        break;
    }
  };

  function updateCurrentList() {
    newCV = [];

    console.log(
      "cvwater " +
        cv.water +
        " cvsun " +
        cv.sun +
        " cvsoil " +
        cv.soil +
        " cvzone " +
        cv.zone
    );

    const filters = [];

    if (cv.zone != 0) {
      filters.push("zone");
    }
    if (cv.water != 0) {
      filters.push("water");
    }
    if (cv.soil != 0) {
      filters.push("soil");
    }
    if (cv.sun != 0) {
      filters.push("sun");
    }
    console.log(filters);

    switch (filters.length) {
      case 0: // 0 filters
        newCV = allPlants;
        // dispatch(setCvPlants(allPlants));
        break;

      case 1: // 1 filter
        allPlants?.forEach((plant) => {
          if (cv.zone != 0) {
            if (cv.zone == plant.zone) {
              newCV.push(plant);
            }
          }
          if (cv.sun != 0) {
            if (cv.sun == plant.sun) {
              newCV.push(plant);
            }
          }
          if (cv.water != 0) {
            if (cv.water == plant.water) {
              newCV.push(plant);
            }
          }
          if (cv.soil != 0) {
            if (cv.soil == plant.soil) {
              newCV.push(plant);
            }
          }
        });
        // dispatch(setCvPlants(newCV));
        break;

      case 2: // 2 filters
        allPlants?.forEach((plant) => {
          if (cv.zone != 0 && cv.water != 0) {
            //zone & waterq
            if (cv.zone == plant.zone && cv.water == plant.water) {
              newCV.push(plant);
            }
          }

          if (cv.zone != 0 && cv.sun != 0) {
            //zone & sun
            if (cv.zone == plant.zone && cv.sun == plant.sun) {
              newCV.push(plant);
            }
          }

          if (cv.zone != 0 && cv.soil != 0) {
            //zone & soil
            if (cv.zone == plant.zone && cv.soil == plant.soil) {
              newCV.push(plant);
            }
          }

          if (cv.water != 0 && cv.sun != 0) {
            //water & sun
            if (cv.sun == plant.sun && cv.water == plant.water) {
              newCV.push(plant);
            }
          }

          if (cv.water != 0 && cv.soil != 0) {
            //water & soil
            if (cv.soil == plant.soil && cv.water == plant.water) {
              newCV.push(plant);
            }
          }

          if (cv.sun != 0 && cv.soil != 0) {
            //sun & soil
            if (cv.soil == plant.soil && cv.sun == plant.sun) {
              newCV.push(plant);
            }
          }
        });
        // dispatch(setCvPlants(newCV));
        break;

      case 3: // 3 filters
        allPlants?.forEach((plant) => {
          if (cv.zone == 0) {
            // selected are soil, h20, sun
            if (
              cv.soil == plant.soil &&
              cv.water == plant.water &&
              cv.sun == plant.sun
            ) {
              newCV.push(plant);
            }
          }
          if (cv.sun == 0) {
            // selected are soil, water, zone
            if (
              cv.soil == plant.soil &&
              cv.water == plant.water &&
              cv.zone == plant.zone
            ) {
              newCV.push(plant);
            }
          }
          if (cv.water == 0) {
            // selected are soil, sun, zone
            if (
              cv.soil == plant.soil &&
              cv.zone == plant.zone &&
              cv.sun == plant.sun
            ) {
              newCV.push(plant);
            }
          }
          if (cv.soil == 0) {
            // selected are sun, water, zone
            if (
              cv.water == plant.water &&
              cv.zone == plant.zone &&
              cv.sun == plant.sun
            ) {
              newCV.push(plant);
            }
          }
        });
        // dispatch(setCvPlants(newCV));
        break;

      case 4:
        allPlants?.forEach((plant) => {
          if (
            cv.zone == plant.zone &&
            cv.soil == plant.soil &&
            cv.water == plant.water &&
            cv.sun == plant.sun
          ) {
            newCV.push(plant);
          }
        });
        // dispatch(setCvPlants(newCV));
        break;

      default:
        break;
    }
  }

  function Plant_List() {
    updateCurrentList();
    return (
      <Droppable id={50} key={50}>
        {" "}
        <ul className="list-group">
          {newCV?.map((plant) => {
            // const index = Number(plant.pic) - 1;
            const path = paths[Number(plant.pic)];

            return (
              <Draggable id={plant.id} key={plant.id} old_cont={50}>
                <li className="list-group-item list-group-item-dark d-flex  border border-dark-subtle plant_box mb-2 rounded w100 ">
                  <div className="center">
                    {" "}
                    <img src={path} />
                  </div>

                  <div className="pc_info ">
                    <div className="center  aife   ">
                      <h6 className="text-danger">{plant.plant_name}</h6>
                    </div>

                    <div className="">${plant.price} each</div>
                  </div>
                </li>
              </Draggable>
            );
          })}
        </ul>{" "}
      </Droppable>
    );
  }

  return (
    <>
      <div className="card  mb-4 border border-dark-subtle">
        <h5 className="card-header center bg-primary ">Plants</h5>

        <div className="card-body center fdc pb-4 bg-dark ">
          <div className="row pt-2 center ">
            <div className="col-6 center ">
              <select
                defaultValue="0"
                onChange={updateCurrentView}
                name="s_zone"
                className="form-control  cgray w-100 p-2 bg-dark  "
              >
                <option key="0" className="dropdown-item" value="0" key2="0">
                  &#x1F321; All Zones
                </option>
                {zones?.map((zone) => {
                  return (
                    <option
                      key={zone.id}
                      className="dropdown-item cgray"
                      value={zone.id}
                      key2={zone.id}
                    >
                      &#x1F321;{zone.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="col-6 center ">
              <select
                defaultValue="0"
                onChange={updateCurrentView}
                name="s_water"
                className="form-control cgray w-100 p-2 bg-dark "
              >
                <option key="0" className="dropdown-item" key2="0">
                  &#x1F4A7; Water
                </option>
                {waters?.map((h2o) => {
                  return (
                    <option key={h2o.id} key2={h2o.id} className="text-light">
                      {" "}
                      &#x1F4A7; {h2o.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="row pt-4 center ">
            <div className="col-6 center ">
              <select
                defaultValue="0"
                onChange={updateCurrentView}
                name="s_sun"
                className="form-control cgray w-100 p-2 bg-dark  "
              >
                <option key="0" className="dropdown-item" key2="0">
                  &#9728; Sun{" "}
                </option>
                {suns?.map((sun) => {
                  return (
                    <option
                      key={sun.id}
                      className="dropdown-item"
                      key2={sun.id}
                    >
                      &#9728; {sun.name}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="col-6 center ">
              <select
                defaultValue="0"
                onChange={updateCurrentView}
                name="s_soil"
                className="form-control cgray w-100 p-2 bg-dark "
              >
                <option key="0" key2="0" className="dropdown-item  ">
                  &#9968; Soil{" "}
                </option>
                {soils?.map((soil) => {
                  return (
                    <option key={soil.id} key2={soil.id}>
                      &#9968; {soil.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Plant_List />
      </div>
    </>
  );
}
