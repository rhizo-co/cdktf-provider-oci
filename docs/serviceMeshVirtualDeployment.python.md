# `serviceMeshVirtualDeployment` Submodule <a name="`serviceMeshVirtualDeployment` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshVirtualDeployment <a name="ServiceMeshVirtualDeployment" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment oci_service_mesh_virtual_deployment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  name: str,
  virtual_service_id: str,
  access_logging: ServiceMeshVirtualDeploymentAccessLogging = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  listeners: typing.Union[IResolvable, typing.List[ServiceMeshVirtualDeploymentListeners]] = None,
  service_discovery: ServiceMeshVirtualDeploymentServiceDiscovery = None,
  timeouts: ServiceMeshVirtualDeploymentTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#compartment_id ServiceMeshVirtualDeployment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#name ServiceMeshVirtualDeployment#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#virtual_service_id ServiceMeshVirtualDeployment#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.accessLogging">access_logging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a></code> | access_logging block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#defined_tags ServiceMeshVirtualDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#description ServiceMeshVirtualDeployment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#freeform_tags ServiceMeshVirtualDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#id ServiceMeshVirtualDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.listeners">listeners</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>]]</code> | listeners block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.serviceDiscovery">service_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a></code> | service_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#compartment_id ServiceMeshVirtualDeployment#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#name ServiceMeshVirtualDeployment#name}.

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.virtualServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#virtual_service_id ServiceMeshVirtualDeployment#virtual_service_id}.

---

##### `access_logging`<sup>Optional</sup> <a name="access_logging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.accessLogging"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

access_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#access_logging ServiceMeshVirtualDeployment#access_logging}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#defined_tags ServiceMeshVirtualDeployment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#description ServiceMeshVirtualDeployment#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#freeform_tags ServiceMeshVirtualDeployment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#id ServiceMeshVirtualDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listeners`<sup>Optional</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.listeners"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>]]

listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#listeners ServiceMeshVirtualDeployment#listeners}

---

##### `service_discovery`<sup>Optional</sup> <a name="service_discovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.serviceDiscovery"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

service_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#service_discovery ServiceMeshVirtualDeployment#service_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#timeouts ServiceMeshVirtualDeployment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putAccessLogging">put_access_logging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putListeners">put_listeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putServiceDiscovery">put_service_discovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetAccessLogging">reset_access_logging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetListeners">reset_listeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetServiceDiscovery">reset_service_discovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_logging` <a name="put_access_logging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putAccessLogging"></a>

```python
def put_access_logging(
  is_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putAccessLogging.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#is_enabled ServiceMeshVirtualDeployment#is_enabled}.

---

##### `put_listeners` <a name="put_listeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putListeners"></a>

```python
def put_listeners(
  value: typing.Union[IResolvable, typing.List[ServiceMeshVirtualDeploymentListeners]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putListeners.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>]]

---

##### `put_service_discovery` <a name="put_service_discovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putServiceDiscovery"></a>

```python
def put_service_discovery(
  type: str,
  hostname: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putServiceDiscovery.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#type ServiceMeshVirtualDeployment#type}.

---

###### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putServiceDiscovery.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#hostname ServiceMeshVirtualDeployment#hostname}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#create ServiceMeshVirtualDeployment#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#delete ServiceMeshVirtualDeployment#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#update ServiceMeshVirtualDeployment#update}.

---

##### `reset_access_logging` <a name="reset_access_logging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetAccessLogging"></a>

```python
def reset_access_logging() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_listeners` <a name="reset_listeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetListeners"></a>

```python
def reset_listeners() -> None
```

##### `reset_service_discovery` <a name="reset_service_discovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetServiceDiscovery"></a>

```python
def reset_service_discovery() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceMeshVirtualDeployment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceMeshVirtualDeployment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceMeshVirtualDeployment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceMeshVirtualDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshVirtualDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLogging">access_logging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference">ServiceMeshVirtualDeploymentAccessLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listeners">listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList">ServiceMeshVirtualDeploymentListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscovery">service_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference">ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference">ServiceMeshVirtualDeploymentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLoggingInput">access_logging_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listenersInput">listeners_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscoveryInput">service_discovery_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceIdInput">virtual_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logging`<sup>Required</sup> <a name="access_logging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLogging"></a>

```python
access_logging: ServiceMeshVirtualDeploymentAccessLoggingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference">ServiceMeshVirtualDeploymentAccessLoggingOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listeners"></a>

```python
listeners: ServiceMeshVirtualDeploymentListenersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList">ServiceMeshVirtualDeploymentListenersList</a>

---

##### `service_discovery`<sup>Required</sup> <a name="service_discovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscovery"></a>

```python
service_discovery: ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference">ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeouts"></a>

```python
timeouts: ServiceMeshVirtualDeploymentTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference">ServiceMeshVirtualDeploymentTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `access_logging_input`<sup>Optional</sup> <a name="access_logging_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.accessLoggingInput"></a>

```python
access_logging_input: ServiceMeshVirtualDeploymentAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listeners_input`<sup>Optional</sup> <a name="listeners_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.listenersInput"></a>

```python
listeners_input: typing.Union[IResolvable, typing.List[ServiceMeshVirtualDeploymentListeners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `service_discovery_input`<sup>Optional</sup> <a name="service_discovery_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.serviceDiscoveryInput"></a>

```python
service_discovery_input: ServiceMeshVirtualDeploymentServiceDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceMeshVirtualDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>]

---

##### `virtual_service_id_input`<sup>Optional</sup> <a name="virtual_service_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceIdInput"></a>

```python
virtual_service_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeployment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshVirtualDeploymentAccessLogging <a name="ServiceMeshVirtualDeploymentAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging(
  is_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#is_enabled ServiceMeshVirtualDeployment#is_enabled}. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#is_enabled ServiceMeshVirtualDeployment#is_enabled}.

---

### ServiceMeshVirtualDeploymentConfig <a name="ServiceMeshVirtualDeploymentConfig" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  name: str,
  virtual_service_id: str,
  access_logging: ServiceMeshVirtualDeploymentAccessLogging = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  listeners: typing.Union[IResolvable, typing.List[ServiceMeshVirtualDeploymentListeners]] = None,
  service_discovery: ServiceMeshVirtualDeploymentServiceDiscovery = None,
  timeouts: ServiceMeshVirtualDeploymentTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#compartment_id ServiceMeshVirtualDeployment#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#name ServiceMeshVirtualDeployment#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#virtual_service_id ServiceMeshVirtualDeployment#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.accessLogging">access_logging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a></code> | access_logging block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#defined_tags ServiceMeshVirtualDeployment#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#description ServiceMeshVirtualDeployment#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#freeform_tags ServiceMeshVirtualDeployment#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#id ServiceMeshVirtualDeployment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.listeners">listeners</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>]]</code> | listeners block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.serviceDiscovery">service_discovery</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a></code> | service_discovery block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#compartment_id ServiceMeshVirtualDeployment#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#name ServiceMeshVirtualDeployment#name}.

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#virtual_service_id ServiceMeshVirtualDeployment#virtual_service_id}.

---

##### `access_logging`<sup>Optional</sup> <a name="access_logging" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.accessLogging"></a>

```python
access_logging: ServiceMeshVirtualDeploymentAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

access_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#access_logging ServiceMeshVirtualDeployment#access_logging}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#defined_tags ServiceMeshVirtualDeployment#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#description ServiceMeshVirtualDeployment#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#freeform_tags ServiceMeshVirtualDeployment#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#id ServiceMeshVirtualDeployment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `listeners`<sup>Optional</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.listeners"></a>

```python
listeners: typing.Union[IResolvable, typing.List[ServiceMeshVirtualDeploymentListeners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>]]

listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#listeners ServiceMeshVirtualDeployment#listeners}

---

##### `service_discovery`<sup>Optional</sup> <a name="service_discovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.serviceDiscovery"></a>

```python
service_discovery: ServiceMeshVirtualDeploymentServiceDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

service_discovery block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#service_discovery ServiceMeshVirtualDeployment#service_discovery}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentConfig.property.timeouts"></a>

```python
timeouts: ServiceMeshVirtualDeploymentTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#timeouts ServiceMeshVirtualDeployment#timeouts}

---

### ServiceMeshVirtualDeploymentListeners <a name="ServiceMeshVirtualDeploymentListeners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners(
  port: typing.Union[int, float],
  protocol: str,
  idle_timeout_in_ms: str = None,
  request_timeout_in_ms: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#port ServiceMeshVirtualDeployment#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#protocol ServiceMeshVirtualDeployment#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.idleTimeoutInMs">idle_timeout_in_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#idle_timeout_in_ms ServiceMeshVirtualDeployment#idle_timeout_in_ms}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.requestTimeoutInMs">request_timeout_in_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#request_timeout_in_ms ServiceMeshVirtualDeployment#request_timeout_in_ms}. |

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#port ServiceMeshVirtualDeployment#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#protocol ServiceMeshVirtualDeployment#protocol}.

---

##### `idle_timeout_in_ms`<sup>Optional</sup> <a name="idle_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.idleTimeoutInMs"></a>

```python
idle_timeout_in_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#idle_timeout_in_ms ServiceMeshVirtualDeployment#idle_timeout_in_ms}.

---

##### `request_timeout_in_ms`<sup>Optional</sup> <a name="request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners.property.requestTimeoutInMs"></a>

```python
request_timeout_in_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#request_timeout_in_ms ServiceMeshVirtualDeployment#request_timeout_in_ms}.

---

### ServiceMeshVirtualDeploymentServiceDiscovery <a name="ServiceMeshVirtualDeploymentServiceDiscovery" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery(
  type: str,
  hostname: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#type ServiceMeshVirtualDeployment#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#hostname ServiceMeshVirtualDeployment#hostname}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#type ServiceMeshVirtualDeployment#type}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#hostname ServiceMeshVirtualDeployment#hostname}.

---

### ServiceMeshVirtualDeploymentTimeouts <a name="ServiceMeshVirtualDeploymentTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#create ServiceMeshVirtualDeployment#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#delete ServiceMeshVirtualDeployment#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#update ServiceMeshVirtualDeployment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#create ServiceMeshVirtualDeployment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#delete ServiceMeshVirtualDeployment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_deployment#update ServiceMeshVirtualDeployment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshVirtualDeploymentAccessLoggingOutputReference <a name="ServiceMeshVirtualDeploymentAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLoggingOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshVirtualDeploymentAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentAccessLogging">ServiceMeshVirtualDeploymentAccessLogging</a>

---


### ServiceMeshVirtualDeploymentListenersList <a name="ServiceMeshVirtualDeploymentListenersList" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceMeshVirtualDeploymentListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceMeshVirtualDeploymentListeners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>]]

---


### ServiceMeshVirtualDeploymentListenersOutputReference <a name="ServiceMeshVirtualDeploymentListenersOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetIdleTimeoutInMs">reset_idle_timeout_in_ms</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetRequestTimeoutInMs">reset_request_timeout_in_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_idle_timeout_in_ms` <a name="reset_idle_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetIdleTimeoutInMs"></a>

```python
def reset_idle_timeout_in_ms() -> None
```

##### `reset_request_timeout_in_ms` <a name="reset_request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.resetRequestTimeoutInMs"></a>

```python
def reset_request_timeout_in_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMsInput">idle_timeout_in_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMsInput">request_timeout_in_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMs">idle_timeout_in_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMs">request_timeout_in_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `idle_timeout_in_ms_input`<sup>Optional</sup> <a name="idle_timeout_in_ms_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMsInput"></a>

```python
idle_timeout_in_ms_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `request_timeout_in_ms_input`<sup>Optional</sup> <a name="request_timeout_in_ms_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMsInput"></a>

```python
request_timeout_in_ms_input: str
```

- *Type:* str

---

##### `idle_timeout_in_ms`<sup>Required</sup> <a name="idle_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.idleTimeoutInMs"></a>

```python
idle_timeout_in_ms: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `request_timeout_in_ms`<sup>Required</sup> <a name="request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.requestTimeoutInMs"></a>

```python
request_timeout_in_ms: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListenersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshVirtualDeploymentListeners]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentListeners">ServiceMeshVirtualDeploymentListeners</a>]

---


### ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference <a name="ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hostname` <a name="reset_hostname" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscoveryOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshVirtualDeploymentServiceDiscovery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentServiceDiscovery">ServiceMeshVirtualDeploymentServiceDiscovery</a>

---


### ServiceMeshVirtualDeploymentTimeoutsOutputReference <a name="ServiceMeshVirtualDeploymentTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_deployment

serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshVirtualDeploymentTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualDeployment.ServiceMeshVirtualDeploymentTimeouts">ServiceMeshVirtualDeploymentTimeouts</a>]

---



