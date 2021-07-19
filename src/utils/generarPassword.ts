import generator from 'generate-password';

export const generatePassword = async (): Promise<string | null> => {
  try {
    const password = generator.generate({
      length: 10,
      numbers: true,
      symbols: true,
      uppercase: true,
    });
    return await password;
  } catch (error) {
    console.log(error);
    return null;
  }
}