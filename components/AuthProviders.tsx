
"use client"
import { useEffect, useState } from 'react'
import { getProviders, signIn } from 'next-auth/react'


type Provider = {
  id: string;
  name: string;
  type: string;
  signinUrl: string;
  callbackUrl: string;
  signinParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>

const AuthProviders = () => {

  const [providers, setProviders] = useState<Providers | null> (null);

  useEffect(()=> {
    const fetchProviders = async () =>{
      const res = await getProviders();
      console.log(res)
      setProviders(res);
    }

    fetchProviders();
  }, []);

  if(providers){
    return (
      <div className="">
        {
          Object.values(providers).map((provider: Provider, index) =>(
            <button key={index} onClick={()=> signIn(provider?.id)}>{provider.id}</button>
          ))
        }
      </div>
    )
  }
}

export default AuthProviders
AuthProviders