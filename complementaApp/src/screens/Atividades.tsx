import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, ScrollView, Modal, TouchableWithoutFeedback } from 'react-native';

// Função para se inscrever na atividade
function handleSubscribe() {
}

// Função para finalizar a atividade se o status for Em andamento
function handleFinish() {

}


function Atividades() {
  const [activities, setActivities] = useState([]);
  const [selectedActivity, setSelectedActivity] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  // substituir pelo ip da sua máquina
  const url = 'http://192.168.1.3:3000/activities';

  async function fetchData() {
    const response = await fetch(url).then((response) => response.json()).catch((error) => console.error(error));
    setActivities(response);
  }

  function getStatusColor(status: number) {
    switch (status) {
      case 1: // verde
        return '#00cc00';
      case 2: // azul
        return '#44bbff';
      case 3: // amarelo
        return '#ffee00';
      default: // cinza
        return '#cccccc';
    }
  }
  function handleClose() {
    setModalVisible(false);
  }

  function getStatusDescription(status: number) {
    switch (status) {
      case 1:
        return 'Concluído';
      case 2:
        return 'Em andamento';
      case 3:
        return 'Pendente';
      default:
        return 'Desconhecido';
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function openModal(activity: React.SetStateAction<null>) {
    setSelectedActivity(activity);
    setModalVisible(true);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {activities.map((activity) => (
        <View key={activity["id"]} style={styles.card}>
          <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(activity["status"]) }]}></View>
          <View style={styles.buttonContainer}>
            <Text style={styles.cardTitle}>{activity["name"]}</Text>
            <Button
              title="Detalhes"
              color="#44bbff"
              onPress={() => openModal(activity)}
            />
          </View>
        </View>
      ))}
      {selectedActivity && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={styles.modalBackground}>
              <View style={styles.modalView}>
                <View style={[styles.statusIndicatorModal, { backgroundColor: getStatusColor(selectedActivity["status"]) }]}></View>
                <Text style={styles.modalTitle}>{selectedActivity["name"]}</Text>
                <Text style={styles.description}>Descrição:</Text>
                <Text>{selectedActivity["description"]}</Text>
                <Text style={styles.executor}>Executor: {selectedActivity["executor"]}</Text>
                {selectedActivity["status"] === 3 && ( // Se o status for Pendente
                  <TouchableWithoutFeedback onPress={handleSubscribe}>
                    <View style={[styles.button, { backgroundColor: getStatusColor(selectedActivity["status"]) }]}>
                      <Text style={[styles.buttonText, { color: '#000' }]}>Inscrever</Text>
                    </View>
                  </TouchableWithoutFeedback>
                )}
                {selectedActivity["status"] === 2 && ( // Se o status for Em andamento
                  <TouchableWithoutFeedback onPress={handleFinish}>
                    <View style={[styles.button, { backgroundColor: getStatusColor(selectedActivity["status"]) }]}>
                      <Text style={styles.buttonText}>Finalizar</Text>
                    </View>
                  </TouchableWithoutFeedback>
                )}
                {selectedActivity["status"] === 1 && ( // Se o status for Concluído
                  <TouchableWithoutFeedback onPress={handleClose}>
                    <View style={[styles.button, { backgroundColor: getStatusColor(selectedActivity["status"]) }]}>
                      <Text style={styles.buttonText}>Fechar</Text>
                    </View>
                  </TouchableWithoutFeedback>
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  description:{
    fontWeight: 'bold',
  },
  executor: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    justifyContent: 'flex-start', // Alinhar à esquerda
    flexDirection: 'row',
  },
  statusIndicator: {
    width: 5,
    alignItems: 'stretch',
    borderRadius: 5,
    marginRight: 10,
  },
  statusIndicatorModal: {
    alignSelf: 'stretch',
    height: 2,
    borderRadius: 5,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    textAlign: 'left',
    alignItems: 'flex-start',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    justifyContent: 'flex-start',
  },
  button: {
    backgroundColor: '#44bbff', // Cor de fundo do botão
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Cor do texto dentro do botão
    fontWeight: 'bold', // Texto em negrito
  },
});

export default Atividades;
