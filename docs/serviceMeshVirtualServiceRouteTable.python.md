# `serviceMeshVirtualServiceRouteTable` Submodule <a name="`serviceMeshVirtualServiceRouteTable` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshVirtualServiceRouteTable <a name="ServiceMeshVirtualServiceRouteTable" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table oci_service_mesh_virtual_service_route_table}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable(
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
  route_rules: typing.Union[IResolvable, typing.List[ServiceMeshVirtualServiceRouteTableRouteRules]],
  virtual_service_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  timeouts: ServiceMeshVirtualServiceRouteTableTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#compartment_id ServiceMeshVirtualServiceRouteTable#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#name ServiceMeshVirtualServiceRouteTable#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.routeRules">route_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules">ServiceMeshVirtualServiceRouteTableRouteRules</a>]]</code> | route_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_service_id ServiceMeshVirtualServiceRouteTable#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#defined_tags ServiceMeshVirtualServiceRouteTable#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#description ServiceMeshVirtualServiceRouteTable#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#freeform_tags ServiceMeshVirtualServiceRouteTable#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#id ServiceMeshVirtualServiceRouteTable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#priority ServiceMeshVirtualServiceRouteTable#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#compartment_id ServiceMeshVirtualServiceRouteTable#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#name ServiceMeshVirtualServiceRouteTable#name}.

---

##### `route_rules`<sup>Required</sup> <a name="route_rules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.routeRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules">ServiceMeshVirtualServiceRouteTableRouteRules</a>]]

route_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#route_rules ServiceMeshVirtualServiceRouteTable#route_rules}

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.virtualServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_service_id ServiceMeshVirtualServiceRouteTable#virtual_service_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#defined_tags ServiceMeshVirtualServiceRouteTable#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#description ServiceMeshVirtualServiceRouteTable#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#freeform_tags ServiceMeshVirtualServiceRouteTable#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#id ServiceMeshVirtualServiceRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.priority"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#priority ServiceMeshVirtualServiceRouteTable#priority}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#timeouts ServiceMeshVirtualServiceRouteTable#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putRouteRules">put_route_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetPriority">reset_priority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_route_rules` <a name="put_route_rules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putRouteRules"></a>

```python
def put_route_rules(
  value: typing.Union[IResolvable, typing.List[ServiceMeshVirtualServiceRouteTableRouteRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putRouteRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules">ServiceMeshVirtualServiceRouteTableRouteRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#create ServiceMeshVirtualServiceRouteTable#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#delete ServiceMeshVirtualServiceRouteTable#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#update ServiceMeshVirtualServiceRouteTable#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_priority` <a name="reset_priority" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetPriority"></a>

```python
def reset_priority() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceMeshVirtualServiceRouteTable resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceMeshVirtualServiceRouteTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceMeshVirtualServiceRouteTable to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceMeshVirtualServiceRouteTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshVirtualServiceRouteTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRules">route_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList">ServiceMeshVirtualServiceRouteTableRouteRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference">ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRulesInput">route_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules">ServiceMeshVirtualServiceRouteTableRouteRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceIdInput">virtual_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `route_rules`<sup>Required</sup> <a name="route_rules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRules"></a>

```python
route_rules: ServiceMeshVirtualServiceRouteTableRouteRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList">ServiceMeshVirtualServiceRouteTableRouteRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeouts"></a>

```python
timeouts: ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference">ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `route_rules_input`<sup>Optional</sup> <a name="route_rules_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.routeRulesInput"></a>

```python
route_rules_input: typing.Union[IResolvable, typing.List[ServiceMeshVirtualServiceRouteTableRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules">ServiceMeshVirtualServiceRouteTableRouteRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceMeshVirtualServiceRouteTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a>]

---

##### `virtual_service_id_input`<sup>Optional</sup> <a name="virtual_service_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceIdInput"></a>

```python
virtual_service_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTable.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshVirtualServiceRouteTableConfig <a name="ServiceMeshVirtualServiceRouteTableConfig" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  name: str,
  route_rules: typing.Union[IResolvable, typing.List[ServiceMeshVirtualServiceRouteTableRouteRules]],
  virtual_service_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  priority: typing.Union[int, float] = None,
  timeouts: ServiceMeshVirtualServiceRouteTableTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#compartment_id ServiceMeshVirtualServiceRouteTable#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#name ServiceMeshVirtualServiceRouteTable#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.routeRules">route_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules">ServiceMeshVirtualServiceRouteTableRouteRules</a>]]</code> | route_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_service_id ServiceMeshVirtualServiceRouteTable#virtual_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#defined_tags ServiceMeshVirtualServiceRouteTable#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#description ServiceMeshVirtualServiceRouteTable#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#freeform_tags ServiceMeshVirtualServiceRouteTable#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#id ServiceMeshVirtualServiceRouteTable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#priority ServiceMeshVirtualServiceRouteTable#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#compartment_id ServiceMeshVirtualServiceRouteTable#compartment_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#name ServiceMeshVirtualServiceRouteTable#name}.

---

##### `route_rules`<sup>Required</sup> <a name="route_rules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.routeRules"></a>

```python
route_rules: typing.Union[IResolvable, typing.List[ServiceMeshVirtualServiceRouteTableRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules">ServiceMeshVirtualServiceRouteTableRouteRules</a>]]

route_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#route_rules ServiceMeshVirtualServiceRouteTable#route_rules}

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_service_id ServiceMeshVirtualServiceRouteTable#virtual_service_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#defined_tags ServiceMeshVirtualServiceRouteTable#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#description ServiceMeshVirtualServiceRouteTable#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#freeform_tags ServiceMeshVirtualServiceRouteTable#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#id ServiceMeshVirtualServiceRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#priority ServiceMeshVirtualServiceRouteTable#priority}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableConfig.property.timeouts"></a>

```python
timeouts: ServiceMeshVirtualServiceRouteTableTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#timeouts ServiceMeshVirtualServiceRouteTable#timeouts}

---

### ServiceMeshVirtualServiceRouteTableRouteRules <a name="ServiceMeshVirtualServiceRouteTableRouteRules" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules(
  destinations: typing.Union[IResolvable, typing.List[ServiceMeshVirtualServiceRouteTableRouteRulesDestinations]],
  type: str,
  is_grpc: typing.Union[bool, IResolvable] = None,
  path: str = None,
  path_type: str = None,
  request_timeout_in_ms: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.destinations">destinations</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations">ServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a>]]</code> | destinations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#type ServiceMeshVirtualServiceRouteTable#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.isGrpc">is_grpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#is_grpc ServiceMeshVirtualServiceRouteTable#is_grpc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path ServiceMeshVirtualServiceRouteTable#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.pathType">path_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path_type ServiceMeshVirtualServiceRouteTable#path_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.requestTimeoutInMs">request_timeout_in_ms</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#request_timeout_in_ms ServiceMeshVirtualServiceRouteTable#request_timeout_in_ms}. |

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.destinations"></a>

```python
destinations: typing.Union[IResolvable, typing.List[ServiceMeshVirtualServiceRouteTableRouteRulesDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations">ServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a>]]

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#destinations ServiceMeshVirtualServiceRouteTable#destinations}

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#type ServiceMeshVirtualServiceRouteTable#type}.

---

##### `is_grpc`<sup>Optional</sup> <a name="is_grpc" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.isGrpc"></a>

```python
is_grpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#is_grpc ServiceMeshVirtualServiceRouteTable#is_grpc}.

---

##### `path`<sup>Optional</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path ServiceMeshVirtualServiceRouteTable#path}.

---

##### `path_type`<sup>Optional</sup> <a name="path_type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.pathType"></a>

```python
path_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#path_type ServiceMeshVirtualServiceRouteTable#path_type}.

---

##### `request_timeout_in_ms`<sup>Optional</sup> <a name="request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules.property.requestTimeoutInMs"></a>

```python
request_timeout_in_ms: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#request_timeout_in_ms ServiceMeshVirtualServiceRouteTable#request_timeout_in_ms}.

---

### ServiceMeshVirtualServiceRouteTableRouteRulesDestinations <a name="ServiceMeshVirtualServiceRouteTableRouteRulesDestinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations(
  virtual_deployment_id: str,
  weight: typing.Union[int, float],
  port: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.virtualDeploymentId">virtual_deployment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_deployment_id ServiceMeshVirtualServiceRouteTable#virtual_deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#weight ServiceMeshVirtualServiceRouteTable#weight}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#port ServiceMeshVirtualServiceRouteTable#port}. |

---

##### `virtual_deployment_id`<sup>Required</sup> <a name="virtual_deployment_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.virtualDeploymentId"></a>

```python
virtual_deployment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#virtual_deployment_id ServiceMeshVirtualServiceRouteTable#virtual_deployment_id}.

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#weight ServiceMeshVirtualServiceRouteTable#weight}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#port ServiceMeshVirtualServiceRouteTable#port}.

---

### ServiceMeshVirtualServiceRouteTableTimeouts <a name="ServiceMeshVirtualServiceRouteTableTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#create ServiceMeshVirtualServiceRouteTable#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#delete ServiceMeshVirtualServiceRouteTable#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#update ServiceMeshVirtualServiceRouteTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#create ServiceMeshVirtualServiceRouteTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#delete ServiceMeshVirtualServiceRouteTable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_virtual_service_route_table#update ServiceMeshVirtualServiceRouteTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList <a name="ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations">ServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceMeshVirtualServiceRouteTableRouteRulesDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations">ServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a>]]

---


### ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference <a name="ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resetPort">reset_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.resetPort"></a>

```python
def reset_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentIdInput">virtual_deployment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weightInput">weight_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentId">virtual_deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weight">weight</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations">ServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_deployment_id_input`<sup>Optional</sup> <a name="virtual_deployment_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentIdInput"></a>

```python
virtual_deployment_id_input: str
```

- *Type:* str

---

##### `weight_input`<sup>Optional</sup> <a name="weight_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weightInput"></a>

```python
weight_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `virtual_deployment_id`<sup>Required</sup> <a name="virtual_deployment_id" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.virtualDeploymentId"></a>

```python
virtual_deployment_id: str
```

- *Type:* str

---

##### `weight`<sup>Required</sup> <a name="weight" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.weight"></a>

```python
weight: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshVirtualServiceRouteTableRouteRulesDestinations]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations">ServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a>]

---


### ServiceMeshVirtualServiceRouteTableRouteRulesList <a name="ServiceMeshVirtualServiceRouteTableRouteRulesList" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules">ServiceMeshVirtualServiceRouteTableRouteRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceMeshVirtualServiceRouteTableRouteRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules">ServiceMeshVirtualServiceRouteTableRouteRules</a>]]

---


### ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference <a name="ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.putDestinations">put_destinations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetIsGrpc">reset_is_grpc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPathType">reset_path_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs">reset_request_timeout_in_ms</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destinations` <a name="put_destinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.putDestinations"></a>

```python
def put_destinations(
  value: typing.Union[IResolvable, typing.List[ServiceMeshVirtualServiceRouteTableRouteRulesDestinations]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.putDestinations.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations">ServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a>]]

---

##### `reset_is_grpc` <a name="reset_is_grpc" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetIsGrpc"></a>

```python
def reset_is_grpc() -> None
```

##### `reset_path` <a name="reset_path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_path_type` <a name="reset_path_type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetPathType"></a>

```python
def reset_path_type() -> None
```

##### `reset_request_timeout_in_ms` <a name="reset_request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.resetRequestTimeoutInMs"></a>

```python
def reset_request_timeout_in_ms() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinations">destinations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList">ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinationsInput">destinations_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations">ServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpcInput">is_grpc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathTypeInput">path_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput">request_timeout_in_ms_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpc">is_grpc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathType">path_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMs">request_timeout_in_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules">ServiceMeshVirtualServiceRouteTableRouteRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destinations`<sup>Required</sup> <a name="destinations" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinations"></a>

```python
destinations: ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList">ServiceMeshVirtualServiceRouteTableRouteRulesDestinationsList</a>

---

##### `destinations_input`<sup>Optional</sup> <a name="destinations_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.destinationsInput"></a>

```python
destinations_input: typing.Union[IResolvable, typing.List[ServiceMeshVirtualServiceRouteTableRouteRulesDestinations]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesDestinations">ServiceMeshVirtualServiceRouteTableRouteRulesDestinations</a>]]

---

##### `is_grpc_input`<sup>Optional</sup> <a name="is_grpc_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpcInput"></a>

```python
is_grpc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `path_type_input`<sup>Optional</sup> <a name="path_type_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathTypeInput"></a>

```python
path_type_input: str
```

- *Type:* str

---

##### `request_timeout_in_ms_input`<sup>Optional</sup> <a name="request_timeout_in_ms_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMsInput"></a>

```python
request_timeout_in_ms_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `is_grpc`<sup>Required</sup> <a name="is_grpc" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.isGrpc"></a>

```python
is_grpc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `path_type`<sup>Required</sup> <a name="path_type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.pathType"></a>

```python
path_type: str
```

- *Type:* str

---

##### `request_timeout_in_ms`<sup>Required</sup> <a name="request_timeout_in_ms" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.requestTimeoutInMs"></a>

```python
request_timeout_in_ms: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshVirtualServiceRouteTableRouteRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableRouteRules">ServiceMeshVirtualServiceRouteTableRouteRules</a>]

---


### ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference <a name="ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_virtual_service_route_table

serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshVirtualServiceRouteTableTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshVirtualServiceRouteTable.ServiceMeshVirtualServiceRouteTableTimeouts">ServiceMeshVirtualServiceRouteTableTimeouts</a>]

---



