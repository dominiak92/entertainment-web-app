import React, { useState, useContext } from "react";
import playIcon from "./icon-play.svg";
import styles from "./PlayButton.module.scss";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { dataContext } from "../pages/elements/dataContext";
import { fontFamily } from "@mui/system";

const PlayButton = (props) => {
    const { data } = useContext(dataContext);
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
        {/* Komponent DialogTitle z tytułem dialogu */}
        <DialogTitle sx={{
            backgroundColor: '#161D2F',
            color: 'white',
            fontFamily: ''
            
            }}>{props.title}</DialogTitle>

        {/* Komponent DialogContent z treścią dialogu */}
        <DialogContent sx={{
            backgroundColor: '#161D2F',
            color: 'white'
            }}>
          {/* Komponent DialogContentText z tekstem w treści dialogu */}
          <div
                  style={{
                    backgroundImage: `url(${require(`../../assets${props.img}`)})`,
                  }}
                  className={styles.card}
                ></div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlayButton;