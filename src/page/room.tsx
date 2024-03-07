import { FormInput } from '../components/FormImput';
import { HistoryTable } from '../components/HistoryTable';
import { ModalComponent } from '../components/Modal';
import { SelectBox } from '../components/SelectBox';
const Room = () => {
  return (
    <main>
        <h1 className="text-5xl font-bold mx-3 mt-3">
            旅行名
        </h1>
        <form className="flex flex-col justify-center items-center mt-5">
            {/* <input name="text" className="border-2 border-black mb-5 mx-20"/>
            <input name="money"className="border-2 border-black mb-5" /> */}
            <FormInput label={'目的'} placeHolder={'ご飯'}/>
            <FormInput label={'金額'} placeHolder={'8000'}/>
            <SelectBox value={["hoge", "huga", "piyo"]} className="flex justify-center items-center"/>
            <button type="submit" className="pt-10">追加</button>
        </form>
        <HistoryTable />
        <ModalComponent />
    </main>
  )
}

export default Room
