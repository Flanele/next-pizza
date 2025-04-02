import React from 'react';

interface Props {
  code: string;
}

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => {
  const baseUrl = process.env.VERCEL_URL || 'localhost:3000';  // Динамическое определение хоста
  const verificationLink = `http://${baseUrl}/api/auth/verify?code=${code}`;

  return (
    <div>
      <p>
        Код подтверждения: <h2>{code}</h2>
      </p>

      <p>
        <a href={verificationLink}>Подтвердить регистрацию</a>
      </p>
    </div>
  );
};