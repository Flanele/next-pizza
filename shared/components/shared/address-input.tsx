'use client';

import React from 'react';
import { AddressSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="9a4fe5b9808873b398bea1d7f82ac0326cb924e2"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
