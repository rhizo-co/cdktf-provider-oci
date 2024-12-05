# `serviceMeshVirtualService` Submodule <a name="`serviceMeshVirtualService` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshVirtualService <a name="ServiceMeshVirtualService" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service oci_service_mesh_virtual_service}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualService(
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
  mesh_id: str,
  name: str,
  default_routing_policy: ServiceMeshVirtualServiceDefaultRoutingPolicy = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hosts: typing.List[str] = None,
  id: str = None,
  mtls: ServiceMeshVirtualServiceMtls = None,
  timeouts: ServiceMeshVirtualServiceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#compartment_id ServiceMeshVirtualService#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.meshId">mesh_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#mesh_id ServiceMeshVirtualService#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#name ServiceMeshVirtualService#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.defaultRoutingPolicy">default_routing_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy">ServiceMeshVirtualServiceDefaultRoutingPolicy</a></code> | default_routing_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#defined_tags ServiceMeshVirtualService#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#description ServiceMeshVirtualService#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#freeform_tags ServiceMeshVirtualService#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.hosts">hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#hosts ServiceMeshVirtualService#hosts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#id ServiceMeshVirtualService#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls">ServiceMeshVirtualServiceMtls</a></code> | mtls block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts">ServiceMeshVirtualServiceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#compartment_id ServiceMeshVirtualService#compartment_id}.

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.meshId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#mesh_id ServiceMeshVirtualService#mesh_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#name ServiceMeshVirtualService#name}.

---

##### `default_routing_policy`<sup>Optional</sup> <a name="default_routing_policy" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.defaultRoutingPolicy"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy">ServiceMeshVirtualServiceDefaultRoutingPolicy</a>

default_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#default_routing_policy ServiceMeshVirtualService#default_routing_policy}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#defined_tags ServiceMeshVirtualService#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#description ServiceMeshVirtualService#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#freeform_tags ServiceMeshVirtualService#freeform_tags}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.hosts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#hosts ServiceMeshVirtualService#hosts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#id ServiceMeshVirtualService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.mtls"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls">ServiceMeshVirtualServiceMtls</a>

mtls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#mtls ServiceMeshVirtualService#mtls}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts">ServiceMeshVirtualServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#timeouts ServiceMeshVirtualService#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putDefaultRoutingPolicy">put_default_routing_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putMtls">put_mtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetDefaultRoutingPolicy">reset_default_routing_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetHosts">reset_hosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetMtls">reset_mtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_default_routing_policy` <a name="put_default_routing_policy" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putDefaultRoutingPolicy"></a>

```python
def put_default_routing_policy(
  type: str
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putDefaultRoutingPolicy.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#type ServiceMeshVirtualService#type}.

---

##### `put_mtls` <a name="put_mtls" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putMtls"></a>

```python
def put_mtls(
  mode: str,
  maximum_validity: typing.Union[int, float] = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putMtls.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#mode ServiceMeshVirtualService#mode}.

---

###### `maximum_validity`<sup>Optional</sup> <a name="maximum_validity" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putMtls.parameter.maximumValidity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#maximum_validity ServiceMeshVirtualService#maximum_validity}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#create ServiceMeshVirtualService#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#delete ServiceMeshVirtualService#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#update ServiceMeshVirtualService#update}.

---

##### `reset_default_routing_policy` <a name="reset_default_routing_policy" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetDefaultRoutingPolicy"></a>

```python
def reset_default_routing_policy() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_hosts` <a name="reset_hosts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetHosts"></a>

```python
def reset_hosts() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mtls` <a name="reset_mtls" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetMtls"></a>

```python
def reset_mtls() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceMeshVirtualService resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualService.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualService.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualService.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualService.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceMeshVirtualService resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceMeshVirtualService to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceMeshVirtualService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshVirtualService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.defaultRoutingPolicy">default_routing_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference">ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference">ServiceMeshVirtualServiceMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference">ServiceMeshVirtualServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.defaultRoutingPolicyInput">default_routing_policy_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy">ServiceMeshVirtualServiceDefaultRoutingPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.hostsInput">hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.meshIdInput">mesh_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.mtlsInput">mtls_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls">ServiceMeshVirtualServiceMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts">ServiceMeshVirtualServiceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.meshId">mesh_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_routing_policy`<sup>Required</sup> <a name="default_routing_policy" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.defaultRoutingPolicy"></a>

```python
default_routing_policy: ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference">ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.mtls"></a>

```python
mtls: ServiceMeshVirtualServiceMtlsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference">ServiceMeshVirtualServiceMtlsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.timeouts"></a>

```python
timeouts: ServiceMeshVirtualServiceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference">ServiceMeshVirtualServiceTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `default_routing_policy_input`<sup>Optional</sup> <a name="default_routing_policy_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.defaultRoutingPolicyInput"></a>

```python
default_routing_policy_input: ServiceMeshVirtualServiceDefaultRoutingPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy">ServiceMeshVirtualServiceDefaultRoutingPolicy</a>

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.hostsInput"></a>

```python
hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_id_input`<sup>Optional</sup> <a name="mesh_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.meshIdInput"></a>

```python
mesh_id_input: str
```

- *Type:* str

---

##### `mtls_input`<sup>Optional</sup> <a name="mtls_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.mtlsInput"></a>

```python
mtls_input: ServiceMeshVirtualServiceMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls">ServiceMeshVirtualServiceMtls</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceMeshVirtualServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts">ServiceMeshVirtualServiceTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualService.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshVirtualServiceConfig <a name="ServiceMeshVirtualServiceConfig" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualServiceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  mesh_id: str,
  name: str,
  default_routing_policy: ServiceMeshVirtualServiceDefaultRoutingPolicy = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  hosts: typing.List[str] = None,
  id: str = None,
  mtls: ServiceMeshVirtualServiceMtls = None,
  timeouts: ServiceMeshVirtualServiceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#compartment_id ServiceMeshVirtualService#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.meshId">mesh_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#mesh_id ServiceMeshVirtualService#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#name ServiceMeshVirtualService#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.defaultRoutingPolicy">default_routing_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy">ServiceMeshVirtualServiceDefaultRoutingPolicy</a></code> | default_routing_policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#defined_tags ServiceMeshVirtualService#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#description ServiceMeshVirtualService#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#freeform_tags ServiceMeshVirtualService#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.hosts">hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#hosts ServiceMeshVirtualService#hosts}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#id ServiceMeshVirtualService#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls">ServiceMeshVirtualServiceMtls</a></code> | mtls block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts">ServiceMeshVirtualServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#compartment_id ServiceMeshVirtualService#compartment_id}.

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#mesh_id ServiceMeshVirtualService#mesh_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#name ServiceMeshVirtualService#name}.

---

##### `default_routing_policy`<sup>Optional</sup> <a name="default_routing_policy" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.defaultRoutingPolicy"></a>

```python
default_routing_policy: ServiceMeshVirtualServiceDefaultRoutingPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy">ServiceMeshVirtualServiceDefaultRoutingPolicy</a>

default_routing_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#default_routing_policy ServiceMeshVirtualService#default_routing_policy}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#defined_tags ServiceMeshVirtualService#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#description ServiceMeshVirtualService#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#freeform_tags ServiceMeshVirtualService#freeform_tags}.

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.hosts"></a>

```python
hosts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#hosts ServiceMeshVirtualService#hosts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#id ServiceMeshVirtualService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.mtls"></a>

```python
mtls: ServiceMeshVirtualServiceMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls">ServiceMeshVirtualServiceMtls</a>

mtls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#mtls ServiceMeshVirtualService#mtls}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceConfig.property.timeouts"></a>

```python
timeouts: ServiceMeshVirtualServiceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts">ServiceMeshVirtualServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#timeouts ServiceMeshVirtualService#timeouts}

---

### ServiceMeshVirtualServiceDefaultRoutingPolicy <a name="ServiceMeshVirtualServiceDefaultRoutingPolicy" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy(
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#type ServiceMeshVirtualService#type}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#type ServiceMeshVirtualService#type}.

---

### ServiceMeshVirtualServiceMtls <a name="ServiceMeshVirtualServiceMtls" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualServiceMtls(
  mode: str,
  maximum_validity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#mode ServiceMeshVirtualService#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls.property.maximumValidity">maximum_validity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#maximum_validity ServiceMeshVirtualService#maximum_validity}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#mode ServiceMeshVirtualService#mode}.

---

##### `maximum_validity`<sup>Optional</sup> <a name="maximum_validity" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls.property.maximumValidity"></a>

```python
maximum_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#maximum_validity ServiceMeshVirtualService#maximum_validity}.

---

### ServiceMeshVirtualServiceTimeouts <a name="ServiceMeshVirtualServiceTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#create ServiceMeshVirtualService#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#delete ServiceMeshVirtualService#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#update ServiceMeshVirtualService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#create ServiceMeshVirtualService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#delete ServiceMeshVirtualService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service#update ServiceMeshVirtualService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference <a name="ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy">ServiceMeshVirtualServiceDefaultRoutingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshVirtualServiceDefaultRoutingPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceDefaultRoutingPolicy">ServiceMeshVirtualServiceDefaultRoutingPolicy</a>

---


### ServiceMeshVirtualServiceMtlsOutputReference <a name="ServiceMeshVirtualServiceMtlsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.resetMaximumValidity">reset_maximum_validity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_validity` <a name="reset_maximum_validity" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.resetMaximumValidity"></a>

```python
def reset_maximum_validity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.maximumValidityInput">maximum_validity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.maximumValidity">maximum_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls">ServiceMeshVirtualServiceMtls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `maximum_validity_input`<sup>Optional</sup> <a name="maximum_validity_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.maximumValidityInput"></a>

```python
maximum_validity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `maximum_validity`<sup>Required</sup> <a name="maximum_validity" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.maximumValidity"></a>

```python
maximum_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtlsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshVirtualServiceMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceMtls">ServiceMeshVirtualServiceMtls</a>

---


### ServiceMeshVirtualServiceTimeoutsOutputReference <a name="ServiceMeshVirtualServiceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service

serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts">ServiceMeshVirtualServiceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshVirtualServiceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualService.ServiceMeshVirtualServiceTimeouts">ServiceMeshVirtualServiceTimeouts</a>]

---



