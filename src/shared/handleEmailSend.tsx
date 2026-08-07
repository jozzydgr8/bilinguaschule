export const handleEmailSend = (
  subject: string,
  body: string
) => {
  const email = "bilinguaschule@yahoo.com";

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};