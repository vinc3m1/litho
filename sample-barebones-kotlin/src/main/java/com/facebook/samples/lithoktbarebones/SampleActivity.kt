/*
 * This file provided by Facebook is for non-commercial testing and evaluation
 * purposes only.  Facebook reserves all rights not expressly granted.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * FACEBOOK BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
 * ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

package com.facebook.samples.lithoktbarebones

import android.app.Activity
import android.graphics.Color
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.os.Process
import android.support.v7.widget.OrientationHelper
import com.facebook.litho.ComponentContext
import com.facebook.litho.LayoutThreadPoolConfigurationImpl
import com.facebook.litho.LithoView
import com.facebook.litho.config.ComponentsConfiguration
import com.facebook.litho.widget.ComponentRenderInfo
import com.facebook.litho.widget.LinearLayoutInfo
import com.facebook.litho.widget.Recycler
import com.facebook.litho.widget.RecyclerBinder

class SampleActivity : Activity() {

    val mainHandler = Handler(Looper.getMainLooper())

    companion object {
        init {
            ComponentsConfiguration.threadPoolForBackgroundThreadsConfig =
                    LayoutThreadPoolConfigurationImpl.Builder()
                            .coreDependentPoolConfiguration(1.0, 0, 1.0, 0)
                            .threadPriority(Process.THREAD_PRIORITY_FOREGROUND)
                            .build() // Thread count == Core count.
        }
    }


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val context = ComponentContext(this)

        val recyclerBinder = RecyclerBinder.Builder()
                .layoutInfo(LinearLayoutInfo(this, OrientationHelper.VERTICAL, false))
                .build(context)

        val component = Recycler.create(context)
                .pullToRefresh(true)
                .binder(recyclerBinder)
                .build()

        addContent(recyclerBinder, context)

        setContentView(LithoView.create(context, component))

        val r = object : Runnable {
            override fun run() {
                val start = recyclerBinder.itemCount
                for (i in start until start + 5) {
                    recyclerBinder.appendItem(ListItem.create(context)
                            .index(i)
                            .color(if (i % 2 == 0) Color.WHITE else Color.LTGRAY)
                            .title("Hello, world $i!")
                            .subtitle("Litho tutorial")
                            .build())
                }
                mainHandler.postDelayed(this, 1000)
            }
        }

        mainHandler.postDelayed(r, 1000)

    }

    private fun addContent(recyclerBinder: RecyclerBinder, context: ComponentContext) {
        for (i in 0 until 11) {
            recyclerBinder.insertItemAt(
                    i,
                    ComponentRenderInfo.create()
                            .component(
                                    ListItem.create(context)
                                            .color(if (i % 2 == 0) Color.WHITE else Color.LTGRAY)
                                            .title("Hello, world $i!")
                                            .subtitle("Litho tutorial")
                                            .build())
                            .build())
        }
    }
}
