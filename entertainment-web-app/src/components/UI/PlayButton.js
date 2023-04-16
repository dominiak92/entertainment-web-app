import React, { useState } from "react";
import playIcon from "./icon-play.svg";
import styles from "./PlayButton.module.scss";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import template from "./videoplayertemplate.png";

const PlayButton = (props) => {
  const [open, setOpen] = useState(false); // Stan, który kontroluje widoczność modala

  const handleOpen = () => {
    setOpen(true); // Ustawia stan na true, aby otworzyć modal
  };

  const handleClose = () => {
    setOpen(false); // Ustawia stan na false, aby zamknąć modal
  };

  return (
    <>
      <img
        onClick={handleOpen}
        className={styles.playButton}
        style={{
          backgroundImage: `url(${playIcon})`,
        }}
        alt=""
      ></img>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          sx={{
            backgroundColor: "#161D2F",
            color: "white",
            fontFamily: "outfit",
            padding: "15px",
          }}
        >
          {props.title} | {props.year}
        </DialogTitle>
        <DialogContent
          sx={{
            backgroundColor: "#161D2F",
            color: "white",
            padding: "0",
          }}
        >
          <div
            style={{
              backgroundImage: `url(${require(`../../assets${props.img}`)})`,
            }}
            className={styles.card}
          >
            <img className={styles.img} src={template} alt="video" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlayButton;
