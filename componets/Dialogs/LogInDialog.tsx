import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { Botton } from "@/componets/foto/Button";

interface LogInDialogProps {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const LogInDialog = ({ isOpen, setOpen }: LogInDialogProps) => {
  const handleCloseDialog = () => {
    setOpen(false);
  };
  return (
    <Dialog open={isOpen} onClose={handleCloseDialog}>
      <DialogTitle className="bg-spotify-gray">
        <span className="text-white">Hola</span>
      </DialogTitle>
      <DialogContent className="bg-spotify-gray">
        <div className="flex flex-col">
          <span className="text-white ">
            Tu sueño no tiene fecha de caducidad. Respira hondo y vuelve a
            intentarlo
          </span>
          <div className="flex gap-2">
            <Botton text="Clic en cerrar =>" />
            <Botton text="CERRAR" handleClick={handleCloseDialog} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export { LogInDialog };
