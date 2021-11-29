import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  infoView: {
    width: width - 32,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: '#F27B13',
  },
  text: {
    color: '#F27B13',
    fontSize: 15,
    lineHeight: 20,
    marginTop: 30,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  infoInputView: {
    width: width - 32,
    paddingHorizontal: 10,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#F27B13',
    marginVertical: 1,
  },
  ViewButton: {
    height: 100,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchAdd: {
    height: 50,
    width: width - 32,
    backgroundColor: '#F27B13',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TxtAdd: {
    fontSize: 18,
    color: 'white',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    width: width - 40,
    // height: 250,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    paddingBottom: 3,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    backgroundColor: '#F27B13',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  textStyle: {
    color: 'white',
    // fontWeight: "bold",
    textAlign: 'center',
    fontSize: 16,
  },
  modalText: {
    marginBottom: 15,
    // textAlign: 'flex-start',
    fontSize: 16,
    color: 'black',
  },
  TouchSort: {
    height: 40,
    width: width - 80 - 60,
    alignSelf: 'center',
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});