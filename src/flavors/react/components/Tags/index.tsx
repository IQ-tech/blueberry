import * as React from 'react';
import classNames from 'classnames';

interface TagsProps extends React.HTMLAttributes<HTMLDivElement> {
  /* Defining tag types */
  type: 'bill' | 'provider',
  label: string,

  /* Possible status for provider */
  providerStatus: 'connected' | 'payment_active' | 'connecting' | 'error' | 'pending',
  /* Possible status for bill */
  billStatus: 'available' | 'overdue' | 'accumulated' | 'charge' | 'paid'
}

const providerClassesConfig = {
  'connected': '--connected',
  'payment_active': '--payment-active',
  'connecting': '--connecting',
  'error': '--error',
  'pending': '--pending-action'
}

const billClassesConfig = {
  'available': '--available',
  'overdue': '--overdue',
  'accumulated': '--accumulated',
  'charge': '--charge',
  'paid': '--paid'
}

const Tags:React.FC<TagsProps> = ({ type, label, billStatus, providerStatus }) => {
  const currentProviderClass = providerClassesConfig[providerStatus]
  const currentBillClass = billClassesConfig[billStatus]
  
  const tagClasses = classNames('tag', {
    'tag--bill': type === 'bill',
    'tag--provider': type === 'provider',
    [`tag${currentProviderClass}`]: providerStatus,
    [`tag${currentBillClass}`]: billStatus
  })

  return (
    <div className={tagClasses}>
      <p className="tag__label">
        {label}
      </p>
    </div>
  )
};

export default Tags