import * as React from 'react';
interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
    type: 'bill' | 'provider';
    label: string;
    providerStatus: 'connected' | 'payment_active' | 'connecting' | 'error' | 'pending';
    billStatus: 'available' | 'overdue' | 'accumulated' | 'charge' | 'paid';
}
declare const Tags: React.FC<TagsProps>;
export default Tags;
