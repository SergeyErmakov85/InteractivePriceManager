export default function Recommendations() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-teal-600 mb-2">
            🍽️ Комплексные рекомендации по питанию
          </h2>
          <p className="text-gray-600">Для семьи из 5 человек</p>
        </div>

        {/* Family Composition */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">👨‍👩‍👧‍👦 Состав семьи</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">4</div>
              <div className="text-blue-800">взрослых (25-45 лет)</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">1</div>
              <div className="text-green-800">ребенок (2,5 года)</div>
            </div>
          </div>
        </div>

        {/* Current Shopping Analysis */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📊 Анализ текущего списка покупок</h3>
          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <h4 className="font-semibold text-green-800 mb-2">✅ Что уже включено (2,328₽):</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-green-700">
              <div>• Хлеб (3 буханки) - 130₽</div>
              <div>• Молоко (4 литра) - 240₽</div>
              <div>• Сметана (детская и обычная) - 340₽</div>
              <div>• Яйца (30 штук) - 240₽</div>
              <div>• Мясо (2,4 кг свинины) - 290₽</div>
              <div>• Масло растительное (2 литра) - 264₽</div>
              <div>• Мука, сахар - 232₽</div>
              <div>• Фрукты (виноград, манго) - 510₽</div>
              <div>• Овощи (лук) - 60₽</div>
              <div>• Приправы - 22₽</div>
            </div>
          </div>
        </div>

        {/* Additional Products Needed */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            ❌ Что необходимо добавить для полноценного питания
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">🥬 Дополнительные овощи (400-500₽)</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Картофель - 3 кг (90-120₽)</li>
                  <li>• Морковь - 2 кг (60-80₽)</li>
                  <li>• Капуста белокочанная - 1 кг (40-60₽)</li>
                  <li>• Помидоры - 1 кг (150-200₽)</li>
                  <li>• Огурцы - 1 кг (100-150₽)</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <h4 className="font-semibold text-orange-800 mb-2">🍎 Дополнительные фрукты (300-400₽)</h4>
                <ul className="text-sm text-orange-700 space-y-1">
                  <li>• Яблоки - 2 кг (120-160₽)</li>
                  <li>• Бананы - 2 кг (120-160₽)</li>
                  <li>• Апельсины - 1 кг (100-120₽)</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold text-yellow-800 mb-2">🍚 Крупы и макароны (300-400₽)</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Гречка - 1 кг (80-120₽)</li>
                  <li>• Рис - 1 кг (90-130₽)</li>
                  <li>• Овсянка - 1 кг (60-90₽)</li>
                  <li>• Макароны - 1 кг (80-120₽)</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">🐟 Рыба и морепродукты (400-600₽)</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Рыба замороженная - 1,5 кг (300-500₽)</li>
                  <li>• Рыбные консервы - 3 банки (150-200₽)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Budget */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📋 Итоговый бюджет на неделю</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-2 text-left font-medium text-gray-900">Категория</th>
                  <th className="px-4 py-2 text-center font-medium text-gray-900">Базовый список</th>
                  <th className="px-4 py-2 text-center font-medium text-gray-900">Дополнительно</th>
                  <th className="px-4 py-2 text-center font-medium text-gray-900">Итого</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">Минимум</td>
                  <td className="px-4 py-2 text-center">2,328₽</td>
                  <td className="px-4 py-2 text-center">1,500₽</td>
                  <td className="px-4 py-2 text-center font-bold text-green-600">3,828₽</td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 font-medium">Средний</td>
                  <td className="px-4 py-2 text-center">2,855₽</td>
                  <td className="px-4 py-2 text-center">1,750₽</td>
                  <td className="px-4 py-2 text-center font-bold text-blue-600">4,605₽</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 font-medium">Комфорт</td>
                  <td className="px-4 py-2 text-center">3,245₽</td>
                  <td className="px-4 py-2 text-center">2,000₽</td>
                  <td className="px-4 py-2 text-center font-bold text-purple-600">5,245₽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Weekly Meal Planning */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🗓️ Планирование питания на неделю</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-yellow-50 rounded-lg p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">🌅 Завтраки</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Овсянка на молоке с фруктами</li>
                <li>• Яичница с хлебом</li>
                <li>• Творог с бананом (для ребенка)</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">🌞 Обеды</h4>
              <ul className="text-sm text-orange-700 space-y-1">
                <li>• Борщ с мясом</li>
                <li>• Гречка с тушенкой</li>
                <li>• Рыба с рисом и овощами</li>
                <li>• Макароны с мясом</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">🌙 Ужины</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Картофель с мясом</li>
                <li>• Рыба с овощами</li>
                <li>• Овощное рагу</li>
                <li>• Молочные каши</li>
              </ul>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">🍎 Перекусы</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Фрукты</li>
                <li>• Печенье с молоком</li>
                <li>• Бутерброды</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Child Nutrition */}
        <div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">👶 Особенности питания ребенка 2,5 лет</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">✅ Обязательно включить:</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>• Детская сметана (уже в списке)</li>
                <li>• Творог детский - 2-3 раза в неделю</li>
                <li>• Каши на молоке - ежедневно</li>
                <li>• Фрукты - 200-300г в день</li>
                <li>• Овощи вареные - ежедневно</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">❌ Ограничить:</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Острые приправы</li>
                <li>• Жирное мясо</li>
                <li>• Газированные напитки</li>
                <li>• Сладости (минимум)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Nutritional Value */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🔍 Пищевая ценность недельного рациона</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">На всю семью:</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Белки:</span>
                  <span className="font-medium">~2,5 кг (мясо, рыба, яйца, молочные продукты)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Углеводы:</span>
                  <span className="font-medium">~3 кг (хлеб, крупы, макароны)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Жиры:</span>
                  <span className="font-medium">~500г (масло, сметана, мясо)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Клетчатка:</span>
                  <span className="font-medium">~2 кг (овощи, фрукты)</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Калорийность:</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Взрослые:</span>
                  <span className="font-medium">~2,200 ккал/день на человека</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ребенок:</span>
                  <span className="font-medium">~1,400 ккал/день</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 5 Savings Tips */}
        <div className="gradient-purple-blue rounded-2xl p-6 text-white shadow-lg">
          <h3 className="text-xl font-bold mb-4">🏆 Топ-5 советов по экономии на продуктах</h3>
          <div className="space-y-3">
            {[
              'Планируйте меню заранее - экономия до 30%',
              'Покупайте сезонные овощи и фрукты',
              'Используйте акции и скидки',
              'Готовьте дома, а не покупайте готовые блюда',
              'Покупайте крупы и консервы оптом'
            ].map((tip, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dietitian Recommendation */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📞 Рекомендации диетолога</h3>
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-blue-900 font-medium mb-2">
              Важно: Для семьи с маленьким ребенком особое внимание уделите:
            </p>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Качеству молочных продуктов</li>
              <li>• Свежести овощей и фруктов</li>
              <li>• Разнообразию рациона</li>
              <li>• Режиму питания</li>
            </ul>
          </div>
          <p className="mt-4 text-gray-700 font-medium">
            Итоговая рекомендация: Бюджет 4,000-4,500₽ в неделю обеспечит полноценное и разнообразное питание для всей семьи.
          </p>
        </div>
      </div>
    </div>
  );
}
