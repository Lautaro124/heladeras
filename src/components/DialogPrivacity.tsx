import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Dialog } from '@rneui/themed';
import React from 'react';

interface DialogProps {
  isVisible: boolean;
  setVisibility: (value: boolean) => void;
}

const DialogPrivacity = ({ isVisible, setVisibility }: DialogProps) => {
  return (
    <Dialog isVisible={isVisible} onBackdropPress={() => setVisibility(false)}>
      <Dialog.Title title="Política de Privacidad de Heladeras H.U.A" />
      <View style={styles.scrollView}>
        <ScrollView>
          <Text style={styles.title}>Introducción</Text>
          <Text style={styles.parragraph}>
            Bienvenido a Heladeras H.U.A {' ("la Aplicación")'}. En Lautaro
            Gonzalez, valoramos tu privacidad y nos comprometemos a proteger la
            información que compartes con nosotros. Esta Política de Privacidad
            describe cómo recopilamos, utilizamos y protegemos tus datos
            personales en relación con la utilización de la Aplicación. Al
            utilizar la Aplicación, aceptas las prácticas descritas en esta
            Política de Privacidad.
          </Text>
          <Text style={styles.title}>Información que Recopilamos</Text>
          <Text style={styles.parragraph}>
            Datos de Inicio de Sesión: Para proporcionar acceso a la Aplicación,
            recopilamos y almacenamos tu información de inicio de sesión, que
            puede incluir tu dirección de correo electrónico y contraseña.
            {'\n'}
            Información de Identificación: Además de los datos de inicio de
            sesión, podemos recopilar información de identificación, como tu
            nombre y apellido, para personalizar tu experiencia en la Aplicación
            y proporcionar un servicio más personalizado.
          </Text>
          <Text style={styles.title}>Uso de la Información</Text>
          <Text style={styles.parragraph}>
            Utilizamos la información que recopilamos para los siguientes fines:
            {'\n'}
            Autenticación: Utilizamos tus datos de inicio de sesión para
            autenticar tu identidad y proporcionar acceso seguro a la
            Aplicación.
            {'\n'}
            Personalización: Podemos utilizar tu nombre y apellido para
            personalizar tu experiencia dentro de la Aplicación.
            {'\n'}
            Mejora de la Aplicación: Utilizamos datos agregados y anónimos para
            mejorar la funcionalidad y el rendimiento de la Aplicación.
            {'\n'}
            Comunicación: Podemos enviarte comunicaciones relacionadas con el
            servicio, actualizaciones de la Aplicación o información importante
            sobre tu cuenta.
          </Text>
          <Text style={styles.title}>Seguridad de los Datos</Text>
          <Text style={styles.parragraph}>
            Tomamos medidas para proteger tus datos personales y mantener su
            confidencialidad. Sin embargo, ninguna transmisión de datos por
            Internet o almacenamiento electrónico es 100% segura, por lo que no
            podemos garantizar la seguridad absoluta de tu información.
          </Text>
          <Text style={styles.title}>Derechos de Privacidad</Text>
          <Text style={styles.parragraph}>
            Tienes derecho a acceder, rectificar o eliminar tus datos
            personales. Para ejercer estos derechos o si tienes alguna pregunta
            sobre nuestra Política de Privacidad, contáctanos a través de
            lautaro.gonzalez4949@gmail.com.
          </Text>
          <Text style={styles.title}>Cambios en esta Política</Text>
          <Text style={styles.parragraph}>
            Podemos actualizar esta Política de Privacidad ocasionalmente para
            reflejar cambios en nuestras prácticas de recopilación y uso de
            datos. Te notificaremos sobre cambios significativos en esta
            Política y obtendremos tu consentimiento si así lo requiere la ley.
          </Text>
          <Text style={styles.title}>Conclusión</Text>
          <Text style={styles.parragraph}>
            Gracias por utilizar Heladeras H.U.A . Valoramos y respetamos tu
            privacidad. Si tienes alguna pregunta o inquietud sobre esta
            Política de Privacidad o sobre la forma en que manejamos tus datos
            personales, no dudes en ponerte en contacto con nosotros.
          </Text>
        </ScrollView>
      </View>
      <Dialog.Button title="Salir" onPress={() => setVisibility(false)} />
    </Dialog>
  );
};

export default DialogPrivacity;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
    color: 'black',
  },
  parragraph: {
    fontSize: 15,
    color: 'black',
  },
  scrollView: {
    maxHeight: '82%',
  },
});
