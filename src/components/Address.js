import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, Plus, Save, X } from 'lucide-react';

const AddressComponent = () => {
  // Dummy initial addresses data
  const initialAddresses = [
    {
      id: 1,
      type: 'Home',
      street: '123 Main St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94105',
      isDefault: true
    },
    {
      id: 2,
      type: 'Work',
      street: '456 Market St',
      city: 'San Francisco',
      state: 'CA',
      zipCode: '94103',
      isDefault: false
    }
  ];

  const [addresses, setAddresses] = useState(initialAddresses);
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    isDefault: false
  });

  const handleEdit = (id) => {
    setEditingId(id);
    setIsAdding(false);
  };

  const handleSave = (id) => {
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAdding(false);
    setNewAddress({
      type: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      isDefault: false
    });
  };

  const handleAdd = () => {
    setIsAdding(true);
    setEditingId(null);
  };

  const handleAddSave = () => {
    setAddresses([
      ...addresses,
      {
        ...newAddress,
        id: addresses.length + 1
      }
    ]);
    setIsAdding(false);
    setNewAddress({
      type: '',
      street: '',
      city: '',
      state: '',
      zipCode: '',
      isDefault: false
    });
  };

  const handleInputChange = (id, field, value) => {
    if (id === 'new') {
      setNewAddress({
        ...newAddress,
        [field]: value
      });
    } else {
      setAddresses(addresses.map(addr =>
        addr.id === id ? { ...addr, [field]: value } : addr
      ));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Addresses</h2>
          {!isAdding && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleAdd}
              className="flex items-center gap-2"
            >
              <Plus className="w-4 h-4" /> Add Address
            </Button>
          )}
        </div>

        <div className="space-y-6">
          {addresses.map((address) => (
            <div
              key={address.id}
              className="p-4 border rounded-lg space-y-4"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-1 w-full">
                  {editingId === address.id ? (
                    <>
                      <Input
                        value={address.type}
                        onChange={(e) => handleInputChange(address.id, 'type', e.target.value)}
                        className="mb-2"
                        placeholder="Address Type"
                      />
                      <Input
                        value={address.street}
                        onChange={(e) => handleInputChange(address.id, 'street', e.target.value)}
                        className="mb-2"
                        placeholder="Street Address"
                      />
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          value={address.city}
                          onChange={(e) => handleInputChange(address.id, 'city', e.target.value)}
                          placeholder="City"
                        />
                        <Input
                          value={address.state}
                          onChange={(e) => handleInputChange(address.id, 'state', e.target.value)}
                          placeholder="State"
                        />
                      </div>
                      <Input
                        value={address.zipCode}
                        onChange={(e) => handleInputChange(address.id, 'zipCode', e.target.value)}
                        className="mt-2"
                        placeholder="ZIP Code"
                      />
                    </>
                  ) : (
                    <>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{address.type}</span>
                        {address.isDefault && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600">{address.street}</p>
                      <p className="text-gray-600">
                        {address.city}, {address.state} {address.zipCode}
                      </p>
                    </>
                  )}
                </div>
                <div className="flex gap-2">
                  {editingId === address.id ? (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSave(address.id)}
                        className="flex items-center gap-1"
                      >
                        <Save className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleCancel}
                        className="flex items-center gap-1"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(address.id)}
                      className="flex items-center gap-1"
                    >
                      <Pencil className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isAdding && (
            <div className="p-4 border rounded-lg space-y-4">
              <div className="space-y-2">
                <Input
                  value={newAddress.type}
                  onChange={(e) => handleInputChange('new', 'type', e.target.value)}
                  placeholder="Address Type (e.g., Home, Work)"
                  className="mb-2"
                />
                <Input
                  value={newAddress.street}
                  onChange={(e) => handleInputChange('new', 'street', e.target.value)}
                  placeholder="Street Address"
                  className="mb-2"
                />
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    value={newAddress.city}
                    onChange={(e) => handleInputChange('new', 'city', e.target.value)}
                    placeholder="City"
                  />
                  <Input
                    value={newAddress.state}
                    onChange={(e) => handleInputChange('new', 'state', e.target.value)}
                    placeholder="State"
                  />
                </div>
                <Input
                  value={newAddress.zipCode}
                  onChange={(e) => handleInputChange('new', 'zipCode', e.target.value)}
                  placeholder="ZIP Code"
                  className="mt-2"
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleAddSave}
                  className="flex items-center gap-1"
                >
                  <Save className="w-4 h-4" /> Save
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleCancel}
                  className="flex items-center gap-1"
                >
                  <X className="w-4 h-4" /> Cancel
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AddressComponent;
