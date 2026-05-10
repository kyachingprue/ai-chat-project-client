import useTheme from "@/hooks/useTheme"


const ThemeSwitcher = () => {
  const { setTheme } = useTheme()

  return (
    <div className="flex gap-3">
      <button
        onClick={() => setTheme('black')}
        className="w-6 h-6 rounded-md border border-gray-200 bg-black"
      />

      <button
        onClick={() => setTheme('blue')}
        className="w-6 h-6 rounded-md bg-blue-500"
      />

      <button
        onClick={() => setTheme('white')}
        className="w-6 h-6 rounded-md bg-white border"
      />

      <button
        onClick={() => setTheme('green')}
        className="w-6 h-6 rounded-md bg-green-500"
      />
    </div>
  )
}

export default ThemeSwitcher
