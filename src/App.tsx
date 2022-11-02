import React, { useState } from "react";
import { Tab, Tabs } from "./components/Tabs";
import UsersTable from "./components/UsersTable";
import Chart from "./components/Chart";
import Filters from "./components/Filters";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrafficLight from "./components/TrafficLight";
import Morse from "./components/Morse";
import UnlockIos from "./components/UnlockIOs";
import Modal from "./components/Modal";
import VKAvatar from "./components/VKAvatar";
import SelectIconTab from "./components/SelectIconTab";
import ChatCards from "./components/ChatCards";
import Button from "./components/Button";
import useTheme from "./hooks/useTheme";
import useAlert from "./hooks/useAlert";
import AvatarGroup from "./components/AvatarGroup";
import Avatar from "./components/Avatar";
import MonthPicker from "./components/MonthPicker/insex";
import { IIntervalMonth } from "./components/MonthPicker/types";
import UpLoadedPictures from "./components/UpLoadedPictures";
import Notification from "./components/Notification/";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { theme, changeTheme } = useTheme();
  const { showAlert } = useAlert();
  const [openMonthPicker, setOpenMonthPicker] = useState(false);
  const getData = (data: string[]) => {
    console.log(data);
  };
  const getInterval = (interval: IIntervalMonth) => {
    console.log(interval);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={"/"}
          element={
            <>
              <Tabs>
                <Tab title={"users-table"} component={<UsersTable />} />
                <Tab title={"chart"} component={<Chart />} />
                <Tab title={"filters"} component={<Filters />} />
                <Tab title={"morse"} component={<Morse />} />
                <Tab title={"IconSelector"} component={<SelectIconTab />} />
                <Tab title={"notification"} component={<Notification />} />
                <Tab
                  title={"month-picker"}
                  component={
                    <MonthPicker
                      open={openMonthPicker}
                      setOpen={setOpenMonthPicker}
                      selectingInterval
                      onSelect={getInterval}
                    />
                  }
                />
                <Tab
                  title={"UpLoadedPictures"}
                  component={<UpLoadedPictures getData={getData} />}
                />
                <Tab
                  title={"avatar-group"}
                  component={
                    <AvatarGroup total={3}>
                      <Avatar
                        alt={"img"}
                        imageUrl={
                          "https://sun9-west.userapi.com/sun9-14/s/v1/ig2/ubN48N7tdxx0nK6FsG3QDbsXtBx3CFvTMw78M79Ix15VOJKqciekVvW43fbJEG-WnsFKatGxowckq4wP37AL-CGD.jpg?size=810x1080&quality=95&type=album"
                        }
                      />
                      <Avatar
                        alt={"img"}
                        imageUrl={
                          "https://sun9-west.userapi.com/sun9-14/s/v1/ig2/ubN48N7tdxx0nK6FsG3QDbsXtBx3CFvTMw78M79Ix15VOJKqciekVvW43fbJEG-WnsFKatGxowckq4wP37AL-CGD.jpg?size=810x1080&quality=95&type=album"
                        }
                      />
                      <Avatar
                        alt={"img"}
                        imageUrl={
                          "https://sun9-west.userapi.com/sun9-14/s/v1/ig2/ubN48N7tdxx0nK6FsG3QDbsXtBx3CFvTMw78M79Ix15VOJKqciekVvW43fbJEG-WnsFKatGxowckq4wP37AL-CGD.jpg?size=810x1080&quality=95&type=album"
                        }
                      />
                      <Avatar
                        alt={"img"}
                        imageUrl={
                          "https://sun9-west.userapi.com/sun9-14/s/v1/ig2/ubN48N7tdxx0nK6FsG3QDbsXtBx3CFvTMw78M79Ix15VOJKqciekVvW43fbJEG-WnsFKatGxowckq4wP37AL-CGD.jpg?size=810x1080&quality=95&type=album"
                        }
                      />
                      <Avatar
                        alt={"img"}
                        imageUrl={
                          "https://yablyk.com/wp-content/uploads/2018/04/shoten-links.jpg"
                        }
                      />
                    </AvatarGroup>
                  }
                />
                <Tab
                  title="Theme"
                  component={
                    <div style={{ width: "400px" }}>
                      <h1>Текущая тема: {theme.title}</h1>
                      <Button
                        onClick={() => changeTheme("Mike")}
                        variant="outlined"
                      >
                        Сменить тему на Mike
                      </Button>
                      <br />
                      <br />
                      <Button onClick={() => changeTheme("Sky")}>
                        Сменить тему на Sky
                      </Button>
                      <br />
                      <br />
                      <Button
                        onClick={() => showAlert("Предупреждение", "warning")}
                      >
                        Показать alert
                      </Button>
                    </div>
                  }
                />
                <Tab
                  title={"Chat Cards"}
                  component={
                    <ChatCards
                      list={[
                        {
                          title: "test1",
                          lastMsg: "test1",
                          avatarUrl:
                            "https://kartinkin.net/uploads/posts/2022-03/1647426651_1-kartinkin-net-p-krasivie-kartinki-dlya-vk-1.jpg",
                        },
                        {
                          title: "test2",
                          lastMsg: "test1",
                          avatarUrl:
                            "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg",
                        },
                        {
                          title: "test3",
                          lastMsg: "test1",
                          avatarUrl:
                            "https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg",
                        },
                      ]}
                    />
                  }
                />
                <Tab
                  title={"avatar"}
                  component={
                    <VKAvatar
                      src={
                        "https://sun9-west.userapi.com/sun9-14/s/v1/ig2/ubN48N7tdxx0nK6FsG3QDbsXtBx3CFvTMw78M79Ix15VOJKqciekVvW43fbJEG-WnsFKatGxowckq4wP37AL-CGD.jpg?size=810x1080&quality=95&type=album"
                      }
                    />
                  }
                />
                <Tab
                  title="Unlock iOs"
                  component={
                    <div style={{ width: "300px" }}>
                      <UnlockIos />
                    </div>
                  }
                />
                <Tab
                  title="Traffic light"
                  component={
                    <TrafficLight
                      rules={[
                        { lights: [1, 0, 0], time: 2 },
                        { lights: [1, 1, 0], time: 5 },
                        { lights: [0, 0, 1], time: 4 },
                      ]}
                    />
                  }
                />
              </Tabs>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
