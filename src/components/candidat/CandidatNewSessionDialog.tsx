
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { format } from "date-fns";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type SessionType = "Conduite" | "Code de la route";

interface NewSessionForm {
  type: SessionType | "";
  date: Date | null;
  hour: string;
  place: string;
}

export default function CandidatNewSessionDialog() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<NewSessionForm>({
    type: "",
    date: null,
    hour: "",
    place: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChangeType = (value: string) => {
    setForm((f) => ({ ...f, type: value as SessionType }));
  };

  const handleSelectDate = (date: Date | undefined) => {
    setForm((f) => ({ ...f, date: date ?? null }));
  };

  const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, hour: e.target.value }));
  };

  const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, place: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.type || !form.date || !form.hour || !form.place) {
      setSuccess(false);
      return;
    }
    setSuccess(true);
    // Ici, lancer une requête API si besoin
    setTimeout(() => {
      setForm({ type: "", date: null, hour: "", place: "" });
      setOpen(false);
      setSuccess(false);
    }, 1200);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">
          <Plus className="w-4 h-4 mr-2" />
          Demander une séance
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Demande de séance</DialogTitle>
          <DialogDescription>
            Remplissez les informations pour demander une nouvelle séance.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="type">
              Type de séance
            </label>
            <Select value={form.type} onValueChange={handleChangeType}>
              <SelectTrigger id="type" className="w-full">
                <SelectValue placeholder="Sélectionnez un type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Conduite">Conduite</SelectItem>
                <SelectItem value="Code de la route">Code de la route</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full justify-start text-left font-normal"
                  type="button"
                >
                  <Calendar className="mr-2 h-4 w-4 opacity-50" />
                  {form.date ? format(form.date, "PPP") : <span>Choisir une date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  mode="single"
                  selected={form.date || undefined}
                  onSelect={handleSelectDate}
                  initialFocus
                  className="p-3 pointer-events-auto"
                  fromDate={new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="hour">
              Heure
            </label>
            <Input
              id="hour"
              type="time"
              value={form.hour}
              onChange={handleHourChange}
              required
            />
          </div>
          {/* Champ Lieu - uniquement une entrée texte */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="place">
              Lieu de la séance
            </label>
            <Input
              id="place"
              type="text"
              placeholder="Adresse ou lieu"
              className="w-full"
              value={form.place}
              onChange={handlePlaceChange}
              required
            />
          </div>
          {success && (
            <div className="text-green-600 text-sm">
              Votre demande a été envoyée !
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Annuler
              </Button>
            </DialogClose>
            <Button type="submit">Envoyer la demande</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
