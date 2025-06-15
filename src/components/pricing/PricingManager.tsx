
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast";
import { Euro, Car, BookOpen } from 'lucide-react';

interface PricingData {
  conduitePrice: number;
  codePrice: number;
}

interface PricingManagerProps {
  currentPricing?: PricingData;
  onSave: (pricing: PricingData) => void;
}

const PricingManager = ({ currentPricing, onSave }: PricingManagerProps) => {
  const { toast } = useToast();
  const [conduitePrice, setConduitePrice] = useState(currentPricing?.conduitePrice || 0);
  const [codePrice, setCodePrice] = useState(currentPricing?.codePrice || 0);

  const handleSave = () => {
    if (conduitePrice <= 0 || codePrice <= 0) {
      toast({
        title: "Erreur",
        description: "Les prix doivent être supérieurs à 0",
        variant: "destructive",
      });
      return;
    }

    onSave({
      conduitePrice,
      codePrice,
    });

    toast({
      title: "Prix mis à jour",
      description: "Les tarifs de votre auto-école ont été sauvegardés.",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Euro className="w-5 h-5" />
          Tarification des cours
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="conduite-price" className="flex items-center gap-2">
              <Car className="w-4 h-4" />
              Prix heure de conduite (€)
            </Label>
            <Input
              id="conduite-price"
              type="number"
              value={conduitePrice}
              onChange={(e) => setConduitePrice(Number(e.target.value))}
              min="0"
              step="0.5"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="code-price" className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Prix heure de code (€)
            </Label>
            <Input
              id="code-price"
              type="number"
              value={codePrice}
              onChange={(e) => setCodePrice(Number(e.target.value))}
              min="0"
              step="0.5"
            />
          </div>
        </div>
        <Button onClick={handleSave} className="w-full">
          Sauvegarder les tarifs
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingManager;
