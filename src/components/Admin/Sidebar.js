import "react-pro-sidebar/dist/css/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faPerson } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaTachometerAlt, FaGem } from "react-icons/fa";
import sidebarBg from "../../assets/bg2.jpg";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Sidebar(props) {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  return (
    <div>
      <ProSidebar
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
        style={{ overflow: "hidden" }}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <FontAwesomeIcon
              icon={faHouse}
              size="2x"
              color="red"
              style={{ margin: "0 10px 0 0 " }}
            />
            <span>Under</span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem icon={<FaTachometerAlt />}>
              Dashboard
              <Link to="/admins" />
            </MenuItem>
          </Menu>
          <Menu iconShape="circle">
            <SubMenu icon={<FaGem />} title="Features">
              <MenuItem>
                Manage Users
                <Link to="/admins/manage-users" />
              </MenuItem>
              <MenuItem>
                Manage Quizlet <Link to="/admins/manage-quizlet" />
              </MenuItem>
              <MenuItem>
                Manage Questions <Link to="/admins/manage-questions" />
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/Under5502/Quizlet"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                <FontAwesomeIcon icon={faGithub} /> Under
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </div>
  );
}

export default Sidebar;
