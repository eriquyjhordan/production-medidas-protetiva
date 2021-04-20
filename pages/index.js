import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Medidas Protetivas</title>  
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.background}>
        <div className={styles.content}>
          <Image
            src='/img/logo.svg'
            width={700}
            height={200}
          />
          <div className={styles.whatsButton}>
              <a href="https://api.whatsapp.com/send?phone=556196449431&text=Ol%C3%A1%2C%20vi%20seu%20artigo%20sobre%20medidas%20protetivas">
                <Image 
                  src="/img/button.png"
                  width={550}
                  height={80}
                />
              </a>
            </div>
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>
          AS MEDIDAS PROTETIVAS NA LEI MARIA DA PENHA <br className={styles.br}/> UM MECANISMO PARA COIBIR A 
          VIOLÊNCIA DOMÉSTICA <br className={styles.br}/> E FAMILIAR CONTRA A MULHER
        </h1>
        <div className={styles.separador}>
          <Image 
            src="/img/separador.png"
            width={89}
            height={22}
          />
        </div>
        <h2 className={styles.subtitle}>
          A LEI MARIA DA PENHA
        </h2>
        <p className={styles.description}>
          A Lei Maria da Penha (Lei nº 11.340/06), além de estabelecer medidas de 
          assistência e proteção, cria mecanismos para coibir e prevenir a 
          violência doméstica e familiar contra a mulher
        </p>
        <div className={styles.separador}>
          <Image 
            src="/img/separador.png"
            width={89}
            height={22}
          />
        </div>
        <h2 className={styles.subtitle}>
          O TRÂMITE DE CASOS DE VIOLÊNCIA DOMÉSTICA <br/> AS MEDIDAS PROTETIVAS 
          DE URGÊNCIA        
        </h2>
        <p className={styles.description}>
          A investigação de casos de violência doméstica tem início, normalmente, 
          com a realização de um Boletim de 
          Ocorrência. A ofendida (a mulher) comparece à delegacia e relata a 
          situação ocorrida à autoridade policial
        </p>
        <p className={styles.description}>
          Quase que imediatamente após o recebimento do relato, o caso é analisado
          por um  juiz, que pode impor ao suposto
          ofensor (ao homem) as chamadas medidas protetivas de urgência visando 
          à proteção da mulher
        </p>
        <p className={styles.description}>
          Elas poderão ser concedidas e aplicadas pelo juiz de imediato. 
          As medidas mais comuns são: afastamento do lar e proibição de 
          aproximação e de contato com a mulher
        </p>
        <div className={styles.separador}>
          <Image 
            src="/img/separador.png"
            width={89}
            height={22}
          />
        </div>
        <h2 className={styles.subtitle}>
          IMPORTANTE LEMBRAR
        </h2>
        <p className={styles.description}>
          É importante ter a ciência de que o descumprimento das medidas 
          protetivas impostas ao suposto ofensor (ao homem)
          poderá ocasionar a sua prisão preventiva, além de configurar crime 
          de descumprimento. Caso as partes tenham interesse em retomar o 
          relacionamento, precisam antes revogar as medidas protetivas vigentes
        </p>
        <div className={styles.separador}>
          <Image 
            src="/img/separador.png"
            width={89}
            height={22}
          />
        </div>
        <h2 className={styles.subtitle}>
          AS MEDIDAS PROTETIVAS PODEM SER RETIRADAS?
        </h2>
        <p className={styles.description}>
          Sim. A mulher pode, através de seu advogado/representante, requerer a 
          retirada das medidas protetivas, cabendo ao juiz revogá-las ou não. 
          Na maioria das vezes, o juiz ouve a ofendida em uma audiência antes de 
          decidir pela revogação, em um procedimento muito simples
        </p>
        <div className={styles.separador}>
          <Image 
            src="/img/separador.png"
            width={89}
            height={22}
          />
        </div>
        <h2 className={styles.subtitle}>
          O QUE ACONTECE NA SEQUÊNCIA? 
        </h2>
        <p className={styles.description}>
          Normalmente, são gerados dois “processos”. Em um, serão discutidas as 
          medidas protetivas, em outro, o crime próprio (ameaça, lesão corporal, 
          injúria etc) contra a mulher. Nesse segundo, o ofensor precisará 
          apresentar defesa, caso o Ministério Público ofereça denúncia. Daí, 
          o processo seguirá o curso conforme previsto no Código de Processo Penal
        </p>

        <h2 className={styles.titleProfile}>QUEM SOMOS</h2>
        <div className={styles.perfil}>
          <Image 
            src="/img/perfil.png"
            height={300}
            width={400}
          />
        </div>
        <h1 className={styles.subtitle}>Dr. Antonio Junior</h1>
        <p className={styles.profileDescription}>
          Advogado, OAB/DF nº 66.180, atuante em Direito Público. Membro da 
          Comissão de Assuntos Constitucionais da OAB/DF. Bacharelou-se em 
          Direito pelo Centro Universitário de Brasília – UniCEUB. Na graduação, 
          atuou como estagiário e assistente jurídico de renomados Escritórios de
          Advocacia, além de ter exercido relevante atuação no Núcleo de Práticas
          Jurídicas atuando especialmente em Direito Penal. Abandonou carreira 
          no direito corporativo para exercer, de forma autônoma, a advocacia 
          boutique altamente qualificada.
        </p>
      </main>
      <footer>
        <div className={styles.footerBackground}>
          <div className={styles.footer}>
            <div className={styles.whatsButton}>
              <a href="https://api.whatsapp.com/send?phone=556196449431&text=Ol%C3%A1%2C%20vi%20seu%20artigo%20sobre%20medidas%20protetivas">
                <Image 
                  src="/img/button.png"
                  width={550}
                  height={80}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}> 
          2021 - Todos os direitos reservados.
        </div>
      </footer>
    </div>
  )
}
