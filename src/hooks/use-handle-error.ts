import { useToast } from "@/hooks/use-toast";

export function useHandleError() {
  const { toast } = useToast(); 

  const handleError = (error: any) => {

    if (error.message && error.message.includes('ERR_CONNECTION_REFUSED')) {
      toast({
        variant: "destructive",
        title: "Erro de conexão com a API.",
        description: "Verifique sua conexão de rede e se o backend está rodando corretamente.",
      });
      return;
    }

    if (error.name === "TypeError" && error.message.includes("NetworkError")) {
      toast({
        variant: "destructive",
        title: "Erro de conexão com a API.",
        description: "Verifique sua conexão de rede e se o backend está rodando corretamente.",
      });
      return;
    }

    if (error instanceof Error) {
      toast({
        duration: 20000,
        variant: "destructive",
        title: "Erro de conexão com a API.",
        description: "Erro de conexão com a API. O servidor pode estar desligado ou inacessível. Verifique se o backend está rodando corretamente. Para mais informações sobre o backend, consulte a documentação disponibilizada pelo candidato.",
      });
      return;
    } else {
      toast({
        variant: "destructive",
        title: "Ocorreu um erro inesperado. Por favor, tente novamente.",
      });
    }
  };

  return { handleError };
}
