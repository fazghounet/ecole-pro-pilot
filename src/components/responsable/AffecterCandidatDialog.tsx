
import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';

interface AffecterCandidatDialogProps {
  candidatNom: string;
  formateurs: { id: string; nom: string }[];
  onAffecter: (formateurId: string) => void;
}

export default function AffecterCandidatDialog({ candidatNom, formateurs, onAffecter }: AffecterCandidatDialogProps) {
  const [open, setOpen] = useState(false);
  const [selectedFormateur, setSelectedFormateur] = useState<string | null>(null);

  const handleAffecter = () => {
    if (selectedFormateur) {
      onAffecter(selectedFormateur);
      setOpen(false);
      setSelectedFormateur(null);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          Affecter à un formateur
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Affecter le candidat</DialogTitle>
          <DialogDescription>
            Choisissez un formateur pour <span className="font-semibold">{candidatNom}</span>.
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4 space-y-2">
          <Select value={selectedFormateur || undefined} onValueChange={setSelectedFormateur}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Sélectionner un formateur" />
            </SelectTrigger>
            <SelectContent>
              {formateurs.length === 0 ? (
                <SelectItem value="" disabled>Aucun formateur disponible</SelectItem>
              ) : (
                formateurs.map(f => (
                  <SelectItem key={f.id} value={f.id}>{f.nom}</SelectItem>
                ))
              )}
            </SelectContent>
          </Select>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" type="button">Annuler</Button>
          </DialogClose>
          <Button onClick={handleAffecter} disabled={!selectedFormateur}>Affecter</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
