import { colors } from '@/styles/colors';
import { View, Text, Image } from 'react-native';
import { Input } from '@/components/input';
import { MapPin, Calendar as IconCalendar } from 'lucide-react-native'
import { Button } from '@/components/button';

export default function Index() {
  return(
    <View className="flex-1 items-center justify-center px-5">
      <Image  source={require("@/assets/logo.png")} className='h-8' resizeMode='contain' />

      <Text className='text-zinc-400 font-regular text-center text-lg mt-3'>Convide seus amigos e planeje sua{"\n"}próxima viagem</Text>
      
      <View className='w-full bg-zinc-900 p-4 rounded-lg my-8 border border-zinc-800'>

        <Input>
          <MapPin color={colors.zinc[400]}/>
          <Input.Field placeholder='Para onde?' />
        </Input>

        <Input>
          <IconCalendar color={colors.zinc[400]}/>
          <Input.Field placeholder='Para onde?' />
        </Input>

        <View className='border-b py-3 border-zinc-800'>
          <Button>
            <Button.Title>Alterar local/data</Button.Title>
          </Button>
        </View>

      </View>
    </View>
  )
}