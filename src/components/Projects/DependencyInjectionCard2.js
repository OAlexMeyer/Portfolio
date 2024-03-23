import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function DependencyInjectionCard2() {

  const baseDataSo = `
  public class BaseDataSO<T> : ScriptableObject
  {
      // The value the data so should contain initially
      [Header("Static content")]
      [SerializeField] private T _initial;

      // the value which is set and get at runtime
      [Header("DYNAMIC VALUE")]
      [SerializeField] private T _current;

      // The accessor of the value 
      public virtual T Content
      {
          get => _current;
          set
          {
              _current = value;
              // every time the value changes listeners are informed
              ValueChanged?.Invoke(_current);
          }
      }

      // This one is protected to prevent wild registering
      protected Action<T> ValueChanged;

      // The execution of OnEnable is a mystery for ScriptableObjects
      // But indeed it is being executed in editor mode once and
      // Every time at runtime starts and the object is accessed the first time
      protected virtual void OnEnable()
      {
          // set the initial value one time
          _current = _initial;
      }

      // if at runtime a reset is needed...
      public void Reset()
      {
          Content = _initial;
      }

      // This one is the only way to register at the data so
      // It unsubscribes the delegate in case it is already registered
      // parameters:
      // valueChanged: the action which is executed if value changes
      // register: true: subscribe, false: unsubscribe
      // This implementation prevents multiple registration of the same delegate
      public void RegisterListener(Action<T> valueChanged, bool register)
      {
          ValueChanged -= valueChanged;

          if (!register)
          {
              return;
          }

          ValueChanged += valueChanged;
      }
  }
`;

const intDataSo = `
  [CreateAssetMenu(fileName = "New IntDataSO", menuName = "Data/DataSO/IntDataSO", order = 0)]
  public class IntDataSO : BaseDataSO<int> { }`;

const playerManagerDataSo = `
  [CreateAssetMenu(fileName = "New PlayerManagerDataSO", menuName = "Data/DataSO/PlayerManagerDataSO", order = 0)]
  public class PlayerManagerDataSO : BaseDataSO<PlayerManager>
  {
      public string LocalPlayerId => Content != null ? Content.LocalPlayerId : null;
  }
`;

const injectCamera = `
  public class InjectCameraToDataSOController : MonoBehaviour
  {
      // A reference to a DataSO already instantiated at editor time
      [SerializeField] private CameraDataSO cameraDataSO;

      // the reference to the Camera Component on this game object
      [SerializeField] private Camera thisCamera;

      private void Awake()
      {
          ValidateReferences();
      }

      private void OnDestroy()
      {
          cameraDataSO.Content = null;
      }

      private void ValidateReferences()
      {
          // if the camera is not assigned, try to fetch it on this game object
          if (thisCamera == null)
          {
              thisCamera = GetComponent<Camera>();
          }

          Debug.Assert(cameraDataSO != null, "cameraDataSO != null");
          Debug.Assert(thisCamera != null, "thisCamera != null");

          // Here the magic happens, the camera is being injected to the world...
          cameraDataSO.Content = thisCamera;
      }
  }
`;

const inNeedClass = `
public class ClassInNeedOfTheCamera : MonoBehaviour
{
    [SerializeField] private CameraDataSO mainCameraDataSo;

    private void Awake()
    {
        ValidateReferences();
    }

    private void OnEnable()
    {
        RegisterListeners(true);
        SomeInitLogic();
    }

    private void OnDisable()
    {
        RegisterListeners(false);
    }

    private void SomeInitLogic()
    {
        if (mainCameraDataSo.Content == null)
        {
            return;
        }

        // Do something with the camera...
        Debug.Log($"[CAM] depth at init: {mainCameraDataSo.Content.depth}");
    }

    private void Update()
    {
        PerFrameLogic();
    }

    private void PerFrameLogic()
    {
        if (mainCameraDataSo.Content == null)
        {
            return;
        }

        // Do something frequently with the camera...
        Debug.Log($"[CAM] camera depth: {mainCameraDataSo.Content.depth}");
    }

    private void RegisterListeners(bool register)
    {
        mainCameraDataSo.RegisterListener(CameraChanged, register);
    }

    private void CameraChanged(Camera cam)
    {
        // if camera changed init again
        SomeInitLogic();
    }

    private void ValidateReferences()
    {
        Debug.Assert(mainCameraDataSo != null, "mainCameraDataSo != null");
    }
}
`;

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            First of all... I completely agree with the author of zenject. It is highly recommended to split up 
            your project into independent self responsible components, to be able to change systems and logics without
            the need of huge error prone refactors in the code base. 
          </p>  
          <p style={{ textAlign: "justify" }}> 
            Frameworks like zenject are organized in 2 different parts if you only look to the dependency injection part.
          </p>  
          <p style={{ textAlign: "justify" }}> 
            Most of the times they also implement an observer pattern to communicate between components, which is
            also a good approach in every game project. The observer pattern and my solution in Unity game projects 
            is part of another block post of mine.
          </p>  
          <p style={{ textAlign: "justify" }}> 
            The first part of DI:<br/> The whole magic lies in the interface pattern. You provide for every class an interface which will 
            be assigned to the Constructor as a parameter. In this way every class in need of a dependency receives it
            in the moment the object of the class id being created. Normally it stores the reference in a private 
            field to provide it for internal use. There are several ways to handle references for the same interface 
            internally which I don't explain in particular here. You can read about in the git repository of zenject.
          </p>  
          <p style={{ textAlign: "justify" }}> 
            The second part of DI:<br/> But who is injecting the dependencies at least? There is the need for a component in every scene which is 
            responsible to provide the necessary references of the interface objects and inject them via a binding to 
            its interface. Every time a class related to DI is being instantiated the binding causes the injection of
            the provided reference.
          </p>  
          <p style={{ textAlign: "justify" }}> 
            I am a very practically thinking and implementing developer. This fact is also related to the fact
            that I learned to program by myself in learning by doing back in the 80s. I spent a lot of
            time by re-engineering code of other people. So I have a very practically way to see code and architecture
            in game code bases. Every time I try to keep component classes as small and easy as possible. 
            Micromanagement is a good word for my classes. You can imagine that I have a natural antipathy for
            over headed framework implementations and their strict signatures and needs. Additionally I am Unity
            user since the very early version 3 and later version 5.6. Every time I tried to limit the patterns
            and their implementation to the engines features. Why write a new state machine if Unity provides 
            a very reliable and even visually working one?
          </p>  
          <p style={{ textAlign: "justify" }}> 
            The biggest downside of zenject and similar frameworks is the need of a constructor getting the 
            references injected. It is never a good idea to use the constructor of a MonoBehaviour class.
            Tis is related to the internal handling of the GameObjects and their assigned Components. While working
            with zenject I had very often the case that a constructor and destructor if present is being called
            multiple times. Another downside is that the static approach of the injection of references causes
            a really long delay in a scene initialization phase. Sometimes the game freezes for seconds while
            the scene graph is solving all dependencies. All the resolving is happening in immediately and
            is not split over multiple frames. Also if objects get instantiated dynamically there could be 
            a glitch happening if dependency hierarchies are implemented in an unlucky way.
          </p>  
          <p style={{ textAlign: "justify" }}> 
            There is a relatively new feature in Unity regarding the life time of the engine. In the mean time
            they are present for years and even underestimated in their practical use cases. The first time I
            watched the Unite talks with Scriptable Objects topics i was remembered the time back in the 8-Bit 
            and 16-Bit era and how the game architectures were build up in that time.
          </p>  
          <p style={{ textAlign: "justify" }}> 
            But what can Scriptable Objects do regarding a dependency injection approach? As I said before I am 
            a very practically engineer. So I thought while implementing a game prototype with the restriction
            to use zenject (a contradiction in itself, because of the needs of zenject it has a lot of overhead,
            which is breaking down the implementation speed) how could I reach the same goal just by using Unity
            features? Very easy at least.
          </p>  
          <p style={{ textAlign: "justify" }}> 
            As I already mentioned has Unity a very comfortable way to inject dependencies into MonoBehaviour
            class components in the scene hierarchy and even in prefab hierarchies. You can assign all available
            object references in the inspector to even private class properties which are populated to the inspector.
            All experienced game developers will now shout out loud: 
            "No! These references are weak and getting easily corrupt!".
          </p>  
          <p style={{ textAlign: "justify" }}> 
            Correct!
          </p>  
          <p style={{ textAlign: "justify" }}> 
            You should only "hard wire" references in closed components which work as a black box and never get 
            split into parts. This means if you create prefabs, no matter of UI or world objects, you can internally
            hard wire the objects without doubts. The Unity eco system (meta files) keep the references in place, 
            even if game objects are being renamed. Only in case of a refactoring of course you have to be very
            carefully to keep all references in place. It is anyway a very bad idea to rename properties just for
            beautifying purposes.
          </p>
          <p style={{ textAlign: "justify" }}> 
            Prevent in any case to cross reference objects in a scene which are not encapsulated in a prefab. The
            general rule should be: Be able to delete and reinstall objects in a scene without the need of reassigning
            any reference. But how can this work?
          </p>
          <p style={{ textAlign: "justify" }}> 
            The references should be persistent in a way you don't have to care any more about it. And here the 
            genius feature of Unity comes into: Scriptable Objects.
          </p>
          <p style={{ textAlign: "justify" }}> 
            I split up the injection of dependencies again in 2 parts:<br/>
            First I put the responsibility for injecting the reference away from a top hierarchy manager class into 
            the regarding classes being self responsible for injecting themselves to who ever is interested in.
            This sounds a little like an observer pattern. Indeed it is similar. And doing this I also keep the 
            task away from the desired class to do the job. An independent component on the game object is 
            doing it for the MonoBehaviour class which is needed by other components.
          </p>
          <p style={{ textAlign: "justify" }}> 
            Before demonstrating the injection part I in first introduce the DataSO (Data Scriptable Object).
            This sounds a little bit weird, because Scriptable Objects are just this: data objects. But with 
            a little bit of nice code around we change it from a simple data carrier to mini model just for one
            piece of data.
          </p>
          <p style={{ textAlign: "justify" }}> 
            <pre>
              <code>
                {baseDataSo}
              </code>
            </pre>
          </p>
          <p style={{ textAlign: "justify" }}> 
            A derived class for integer values:
          </p>
          <p style={{ textAlign: "justify" }}> 
            <pre>
              <code>
                {intDataSo}
              </code>
            </pre>
          </p>
          <p style={{ textAlign: "justify" }}> 
            The integer implementation is nothing more than giving the base class implementation a specifically
            type.
            </p>
          <p style={{ textAlign: "justify" }}> 
            This can also be implemented for object references for example:
            </p>
          <p style={{ textAlign: "justify" }}> 
            <pre>
              <code>
                {playerManagerDataSo}
              </code>
            </pre>
          </p>
          <p style={{ textAlign: "justify" }}> 
            The above is not only providing the reference to the object itself, also a convenient accessor to 
            the most used method of the regarding PlayerManager class. Of course this implementation also includes
            some dangerous implications. For references I would put a `BaseComponentDataSO` class in between, which
            listens to the OnDestroy event of the regarding GameObject to remove it from the content if the object
            gets destroyed. But for this I plan another blog later. Let's focus now again to the DI.
            </p>
          <p style={{ textAlign: "justify" }}> 
            We have a way now to store a reference. But how it gets injected? There is an implementation for injecting:
            </p>
          <p style={{ textAlign: "justify" }}> 
            <pre>
              <code>
                {injectCamera}
              </code>
            </pre>
            </p>
          <p style={{ textAlign: "justify" }}> 
            Put the above code MonoBehaviour on the Camera's game object. The camera will be injected automatically
            when instantiated into the data so.
            </p>
          <p style={{ textAlign: "justify" }}> 
            Step one done.
            </p>
          <p style={{ textAlign: "justify" }}> 
            A class in need to access the camera has to implement the reference of the scriptable object 
            to access it. Also it needs a notifier if the camera reference is changing:
            </p>
          <p style={{ textAlign: "justify" }}> 
          <pre>
              <code>
                {inNeedClass}
              </code>
            </pre>
            </p>
          <p style={{ textAlign: "justify" }}> 
            Step two done.
            </p>
          <p style={{ textAlign: "justify" }}> 
            This is my way to handle dependency injection. I highly recommend to prevent the over head frameworks
            in a prototyping phase of a project. This way is much more flexible and very easy to implement.
          </p>
          <p style={{ textAlign: "justify" }}> 
            Because of the nature of a scriptable object and its lifetime in a project the reference (uuid) in 
            the eco system of Unity doesn't change. The references hard wired in scene hierarchies and prefabs 
            will not change, even if objects are being moved out off and into scenes. The dependency is baked
            into the scriptable object reference. The dynamically instantiated object at initialization phase
            of a Unity scene is setting the dynamic reference into the data so and injecting on this way in all
            listening already existing objects in need. Later created objects access the data so anyway at init phase.
          </p>
          <p style={{ textAlign: "justify" }}> 
            Of course has this way of dependency injection some downsides, too. 
          </p>
          <p style={{ textAlign: "justify" }}> 
            There is the problem with the lifetime of objects and the fact that the reference of an object 
            can be destroyed in the mean time by Unity (Destroy()). The C# part of the object still exists 
            while the Unity part of the object is not existent any more. As long as the reference is stored 
            in any object the C# part will have a zombie existence. It is necessary to implement a OnDestroy 
            propagator on objects which are stored in this way to null the reference in the DataSO.
          </p>
          <p style={{ textAlign: "justify" }}> 
            This will be part of a later blog of mine.
          </p>
          <footer className="blockquote-footer">Alexander</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default DependencyInjectionCard2;
