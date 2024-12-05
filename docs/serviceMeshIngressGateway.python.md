# `serviceMeshIngressGateway` Submodule <a name="`serviceMeshIngressGateway` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshIngressGateway <a name="ServiceMeshIngressGateway" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway oci_service_mesh_ingress_gateway}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGateway(
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
  hosts: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayHosts]],
  mesh_id: str,
  name: str,
  access_logging: ServiceMeshIngressGatewayAccessLogging = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  mtls: ServiceMeshIngressGatewayMtls = None,
  timeouts: ServiceMeshIngressGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.hosts">hosts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>]]</code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.meshId">mesh_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.accessLogging">access_logging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | access_logging block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | mtls block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}.

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.hosts"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>]]

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hosts ServiceMeshIngressGateway#hosts}

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.meshId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}.

---

##### `access_logging`<sup>Optional</sup> <a name="access_logging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.accessLogging"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

access_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#access_logging ServiceMeshIngressGateway#access_logging}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.mtls"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

mtls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mtls ServiceMeshIngressGateway#mtls}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#timeouts ServiceMeshIngressGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging">put_access_logging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts">put_hosts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls">put_mtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetAccessLogging">reset_access_logging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetMtls">reset_mtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_access_logging` <a name="put_access_logging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging"></a>

```python
def put_access_logging(
  is_enabled: typing.Union[bool, IResolvable] = None
) -> None
```

###### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putAccessLogging.parameter.isEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#is_enabled ServiceMeshIngressGateway#is_enabled}.

---

##### `put_hosts` <a name="put_hosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts"></a>

```python
def put_hosts(
  value: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayHosts]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putHosts.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>]]

---

##### `put_mtls` <a name="put_mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls"></a>

```python
def put_mtls(
  maximum_validity: typing.Union[int, float] = None
) -> None
```

###### `maximum_validity`<sup>Optional</sup> <a name="maximum_validity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putMtls.parameter.maximumValidity"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#maximum_validity ServiceMeshIngressGateway#maximum_validity}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#create ServiceMeshIngressGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#delete ServiceMeshIngressGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#update ServiceMeshIngressGateway#update}.

---

##### `reset_access_logging` <a name="reset_access_logging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetAccessLogging"></a>

```python
def reset_access_logging() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mtls` <a name="reset_mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetMtls"></a>

```python
def reset_mtls() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGateway.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceMeshIngressGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceMeshIngressGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceMeshIngressGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshIngressGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLogging">access_logging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference">ServiceMeshIngressGatewayAccessLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList">ServiceMeshIngressGatewayHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference">ServiceMeshIngressGatewayMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference">ServiceMeshIngressGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLoggingInput">access_logging_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hostsInput">hosts_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshIdInput">mesh_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtlsInput">mtls_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshId">mesh_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_logging`<sup>Required</sup> <a name="access_logging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLogging"></a>

```python
access_logging: ServiceMeshIngressGatewayAccessLoggingOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference">ServiceMeshIngressGatewayAccessLoggingOutputReference</a>

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hosts"></a>

```python
hosts: ServiceMeshIngressGatewayHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList">ServiceMeshIngressGatewayHostsList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtls"></a>

```python
mtls: ServiceMeshIngressGatewayMtlsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference">ServiceMeshIngressGatewayMtlsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeouts"></a>

```python
timeouts: ServiceMeshIngressGatewayTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference">ServiceMeshIngressGatewayTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `access_logging_input`<sup>Optional</sup> <a name="access_logging_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.accessLoggingInput"></a>

```python
access_logging_input: ServiceMeshIngressGatewayAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `hosts_input`<sup>Optional</sup> <a name="hosts_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.hostsInput"></a>

```python
hosts_input: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayHosts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_id_input`<sup>Optional</sup> <a name="mesh_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshIdInput"></a>

```python
mesh_id_input: str
```

- *Type:* str

---

##### `mtls_input`<sup>Optional</sup> <a name="mtls_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.mtlsInput"></a>

```python
mtls_input: ServiceMeshIngressGatewayMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceMeshIngressGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshIngressGatewayAccessLogging <a name="ServiceMeshIngressGatewayAccessLogging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging(
  is_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#is_enabled ServiceMeshIngressGateway#is_enabled}. |

---

##### `is_enabled`<sup>Optional</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#is_enabled ServiceMeshIngressGateway#is_enabled}.

---

### ServiceMeshIngressGatewayConfig <a name="ServiceMeshIngressGatewayConfig" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  hosts: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayHosts]],
  mesh_id: str,
  name: str,
  access_logging: ServiceMeshIngressGatewayAccessLogging = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  mtls: ServiceMeshIngressGatewayMtls = None,
  timeouts: ServiceMeshIngressGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.hosts">hosts</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>]]</code> | hosts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.meshId">mesh_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.accessLogging">access_logging</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | access_logging block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | mtls block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#compartment_id ServiceMeshIngressGateway#compartment_id}.

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.hosts"></a>

```python
hosts: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayHosts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>]]

hosts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hosts ServiceMeshIngressGateway#hosts}

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mesh_id ServiceMeshIngressGateway#mesh_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}.

---

##### `access_logging`<sup>Optional</sup> <a name="access_logging" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.accessLogging"></a>

```python
access_logging: ServiceMeshIngressGatewayAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

access_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#access_logging ServiceMeshIngressGateway#access_logging}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#defined_tags ServiceMeshIngressGateway#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#description ServiceMeshIngressGateway#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#freeform_tags ServiceMeshIngressGateway#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#id ServiceMeshIngressGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.mtls"></a>

```python
mtls: ServiceMeshIngressGatewayMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

mtls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mtls ServiceMeshIngressGateway#mtls}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayConfig.property.timeouts"></a>

```python
timeouts: ServiceMeshIngressGatewayTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#timeouts ServiceMeshIngressGateway#timeouts}

---

### ServiceMeshIngressGatewayHosts <a name="ServiceMeshIngressGatewayHosts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts(
  listeners: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayHostsListeners]],
  name: str,
  hostnames: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.listeners">listeners</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>]]</code> | listeners block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hostnames ServiceMeshIngressGateway#hostnames}. |

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.listeners"></a>

```python
listeners: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayHostsListeners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>]]

listeners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#listeners ServiceMeshIngressGateway#listeners}

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#name ServiceMeshIngressGateway#name}.

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#hostnames ServiceMeshIngressGateway#hostnames}.

---

### ServiceMeshIngressGatewayHostsListeners <a name="ServiceMeshIngressGatewayHostsListeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners(
  port: typing.Union[int, float],
  protocol: str,
  tls: ServiceMeshIngressGatewayHostsListenersTls = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#port ServiceMeshIngressGateway#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#protocol ServiceMeshIngressGateway#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.tls">tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | tls block. |

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#port ServiceMeshIngressGateway#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#protocol ServiceMeshIngressGateway#protocol}.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners.property.tls"></a>

```python
tls: ServiceMeshIngressGatewayHostsListenersTls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#tls ServiceMeshIngressGateway#tls}

---

### ServiceMeshIngressGatewayHostsListenersTls <a name="ServiceMeshIngressGatewayHostsListenersTls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls(
  mode: str,
  client_validation: ServiceMeshIngressGatewayHostsListenersTlsClientValidation = None,
  server_certificate: ServiceMeshIngressGatewayHostsListenersTlsServerCertificate = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.mode">mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mode ServiceMeshIngressGateway#mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.clientValidation">client_validation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | client_validation block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.serverCertificate">server_certificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | server_certificate block. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.mode"></a>

```python
mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mode ServiceMeshIngressGateway#mode}.

---

##### `client_validation`<sup>Optional</sup> <a name="client_validation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.clientValidation"></a>

```python
client_validation: ServiceMeshIngressGatewayHostsListenersTlsClientValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

client_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#client_validation ServiceMeshIngressGateway#client_validation}

---

##### `server_certificate`<sup>Optional</sup> <a name="server_certificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls.property.serverCertificate"></a>

```python
server_certificate: ServiceMeshIngressGatewayHostsListenersTlsServerCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

server_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#server_certificate ServiceMeshIngressGateway#server_certificate}

---

### ServiceMeshIngressGatewayHostsListenersTlsClientValidation <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation(
  subject_alternate_names: typing.List[str] = None,
  trusted_ca_bundle: ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.subjectAlternateNames">subject_alternate_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#subject_alternate_names ServiceMeshIngressGateway#subject_alternate_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.trustedCaBundle">trusted_ca_bundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | trusted_ca_bundle block. |

---

##### `subject_alternate_names`<sup>Optional</sup> <a name="subject_alternate_names" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.subjectAlternateNames"></a>

```python
subject_alternate_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#subject_alternate_names ServiceMeshIngressGateway#subject_alternate_names}.

---

##### `trusted_ca_bundle`<sup>Optional</sup> <a name="trusted_ca_bundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation.property.trustedCaBundle"></a>

```python
trusted_ca_bundle: ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

trusted_ca_bundle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#trusted_ca_bundle ServiceMeshIngressGateway#trusted_ca_bundle}

---

### ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle(
  type: str,
  ca_bundle_id: str = None,
  secret_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.caBundleId">ca_bundle_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#ca_bundle_id ServiceMeshIngressGateway#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}.

---

##### `ca_bundle_id`<sup>Optional</sup> <a name="ca_bundle_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.caBundleId"></a>

```python
ca_bundle_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#ca_bundle_id ServiceMeshIngressGateway#ca_bundle_id}.

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}.

---

### ServiceMeshIngressGatewayHostsListenersTlsServerCertificate <a name="ServiceMeshIngressGatewayHostsListenersTlsServerCertificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate(
  type: str,
  certificate_id: str = None,
  secret_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.certificateId">certificate_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#certificate_id ServiceMeshIngressGateway#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.secretName">secret_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}.

---

##### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#certificate_id ServiceMeshIngressGateway#certificate_id}.

---

##### `secret_name`<sup>Optional</sup> <a name="secret_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}.

---

### ServiceMeshIngressGatewayMtls <a name="ServiceMeshIngressGatewayMtls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls(
  maximum_validity: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.property.maximumValidity">maximum_validity</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#maximum_validity ServiceMeshIngressGateway#maximum_validity}. |

---

##### `maximum_validity`<sup>Optional</sup> <a name="maximum_validity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls.property.maximumValidity"></a>

```python
maximum_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#maximum_validity ServiceMeshIngressGateway#maximum_validity}.

---

### ServiceMeshIngressGatewayTimeouts <a name="ServiceMeshIngressGatewayTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#create ServiceMeshIngressGateway#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#delete ServiceMeshIngressGateway#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#update ServiceMeshIngressGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#create ServiceMeshIngressGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#delete ServiceMeshIngressGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#update ServiceMeshIngressGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshIngressGatewayAccessLoggingOutputReference <a name="ServiceMeshIngressGatewayAccessLoggingOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resetIsEnabled">reset_is_enabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_enabled` <a name="reset_is_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.resetIsEnabled"></a>

```python
def reset_is_enabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabledInput">is_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled">is_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_input`<sup>Optional</sup> <a name="is_enabled_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabledInput"></a>

```python
is_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.isEnabled"></a>

```python
is_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLoggingOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshIngressGatewayAccessLogging
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayAccessLogging">ServiceMeshIngressGatewayAccessLogging</a>

---


### ServiceMeshIngressGatewayHostsList <a name="ServiceMeshIngressGatewayHostsList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceMeshIngressGatewayHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayHosts]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>]]

---


### ServiceMeshIngressGatewayHostsListenersList <a name="ServiceMeshIngressGatewayHostsListenersList" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceMeshIngressGatewayHostsListenersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayHostsListeners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>]]

---


### ServiceMeshIngressGatewayHostsListenersOutputReference <a name="ServiceMeshIngressGatewayHostsListenersOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls">put_tls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resetTls">reset_tls</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_tls` <a name="put_tls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls"></a>

```python
def put_tls(
  mode: str,
  client_validation: ServiceMeshIngressGatewayHostsListenersTlsClientValidation = None,
  server_certificate: ServiceMeshIngressGatewayHostsListenersTlsServerCertificate = None
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls.parameter.mode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#mode ServiceMeshIngressGateway#mode}.

---

###### `client_validation`<sup>Optional</sup> <a name="client_validation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls.parameter.clientValidation"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

client_validation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#client_validation ServiceMeshIngressGateway#client_validation}

---

###### `server_certificate`<sup>Optional</sup> <a name="server_certificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.putTls.parameter.serverCertificate"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

server_certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#server_certificate ServiceMeshIngressGateway#server_certificate}

---

##### `reset_tls` <a name="reset_tls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.resetTls"></a>

```python
def reset_tls() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tls">tls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference">ServiceMeshIngressGatewayHostsListenersTlsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tlsInput">tls_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tls`<sup>Required</sup> <a name="tls" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tls"></a>

```python
tls: ServiceMeshIngressGatewayHostsListenersTlsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference">ServiceMeshIngressGatewayHostsListenersTlsOutputReference</a>

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `tls_input`<sup>Optional</sup> <a name="tls_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.tlsInput"></a>

```python
tls_input: ServiceMeshIngressGatewayHostsListenersTls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshIngressGatewayHostsListeners]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>]

---


### ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle">put_trusted_ca_bundle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetSubjectAlternateNames">reset_subject_alternate_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetTrustedCaBundle">reset_trusted_ca_bundle</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_trusted_ca_bundle` <a name="put_trusted_ca_bundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle"></a>

```python
def put_trusted_ca_bundle(
  type: str,
  ca_bundle_id: str = None,
  secret_name: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}.

---

###### `ca_bundle_id`<sup>Optional</sup> <a name="ca_bundle_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle.parameter.caBundleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#ca_bundle_id ServiceMeshIngressGateway#ca_bundle_id}.

---

###### `secret_name`<sup>Optional</sup> <a name="secret_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.putTrustedCaBundle.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}.

---

##### `reset_subject_alternate_names` <a name="reset_subject_alternate_names" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetSubjectAlternateNames"></a>

```python
def reset_subject_alternate_names() -> None
```

##### `reset_trusted_ca_bundle` <a name="reset_trusted_ca_bundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.resetTrustedCaBundle"></a>

```python
def reset_trusted_ca_bundle() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle">trusted_ca_bundle</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNamesInput">subject_alternate_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundleInput">trusted_ca_bundle_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames">subject_alternate_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trusted_ca_bundle`<sup>Required</sup> <a name="trusted_ca_bundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundle"></a>

```python
trusted_ca_bundle: ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference</a>

---

##### `subject_alternate_names_input`<sup>Optional</sup> <a name="subject_alternate_names_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNamesInput"></a>

```python
subject_alternate_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trusted_ca_bundle_input`<sup>Optional</sup> <a name="trusted_ca_bundle_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.trustedCaBundleInput"></a>

```python
trusted_ca_bundle_input: ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---

##### `subject_alternate_names`<sup>Required</sup> <a name="subject_alternate_names" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.subjectAlternateNames"></a>

```python
subject_alternate_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshIngressGatewayHostsListenersTlsClientValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetCaBundleId">reset_ca_bundle_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetSecretName">reset_secret_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ca_bundle_id` <a name="reset_ca_bundle_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetCaBundleId"></a>

```python
def reset_ca_bundle_id() -> None
```

##### `reset_secret_name` <a name="reset_secret_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.resetSecretName"></a>

```python
def reset_secret_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleIdInput">ca_bundle_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId">ca_bundle_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_bundle_id_input`<sup>Optional</sup> <a name="ca_bundle_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleIdInput"></a>

```python
ca_bundle_id_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `ca_bundle_id`<sup>Required</sup> <a name="ca_bundle_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.caBundleId"></a>

```python
ca_bundle_id: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundleOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation">put_client_validation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate">put_server_certificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetClientValidation">reset_client_validation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetServerCertificate">reset_server_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_client_validation` <a name="put_client_validation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation"></a>

```python
def put_client_validation(
  subject_alternate_names: typing.List[str] = None,
  trusted_ca_bundle: ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle = None
) -> None
```

###### `subject_alternate_names`<sup>Optional</sup> <a name="subject_alternate_names" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation.parameter.subjectAlternateNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#subject_alternate_names ServiceMeshIngressGateway#subject_alternate_names}.

---

###### `trusted_ca_bundle`<sup>Optional</sup> <a name="trusted_ca_bundle" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putClientValidation.parameter.trustedCaBundle"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle">ServiceMeshIngressGatewayHostsListenersTlsClientValidationTrustedCaBundle</a>

trusted_ca_bundle block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#trusted_ca_bundle ServiceMeshIngressGateway#trusted_ca_bundle}

---

##### `put_server_certificate` <a name="put_server_certificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate"></a>

```python
def put_server_certificate(
  type: str,
  certificate_id: str = None,
  secret_name: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#type ServiceMeshIngressGateway#type}.

---

###### `certificate_id`<sup>Optional</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate.parameter.certificateId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#certificate_id ServiceMeshIngressGateway#certificate_id}.

---

###### `secret_name`<sup>Optional</sup> <a name="secret_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.putServerCertificate.parameter.secretName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_ingress_gateway#secret_name ServiceMeshIngressGateway#secret_name}.

---

##### `reset_client_validation` <a name="reset_client_validation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetClientValidation"></a>

```python
def reset_client_validation() -> None
```

##### `reset_server_certificate` <a name="reset_server_certificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.resetServerCertificate"></a>

```python
def reset_server_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation">client_validation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate">server_certificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference">ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidationInput">client_validation_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificateInput">server_certificate_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_validation`<sup>Required</sup> <a name="client_validation" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidation"></a>

```python
client_validation: ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference">ServiceMeshIngressGatewayHostsListenersTlsClientValidationOutputReference</a>

---

##### `server_certificate`<sup>Required</sup> <a name="server_certificate" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificate"></a>

```python
server_certificate: ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference">ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference</a>

---

##### `client_validation_input`<sup>Optional</sup> <a name="client_validation_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.clientValidationInput"></a>

```python
client_validation_input: ServiceMeshIngressGatewayHostsListenersTlsClientValidation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsClientValidation">ServiceMeshIngressGatewayHostsListenersTlsClientValidation</a>

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `server_certificate_input`<sup>Optional</sup> <a name="server_certificate_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.serverCertificateInput"></a>

```python
server_certificate_input: ServiceMeshIngressGatewayHostsListenersTlsServerCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---

##### `mode`<sup>Required</sup> <a name="mode" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshIngressGatewayHostsListenersTls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTls">ServiceMeshIngressGatewayHostsListenersTls</a>

---


### ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference <a name="ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetCertificateId">reset_certificate_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetSecretName">reset_secret_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_id` <a name="reset_certificate_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetCertificateId"></a>

```python
def reset_certificate_id() -> None
```

##### `reset_secret_name` <a name="reset_secret_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.resetSecretName"></a>

```python
def reset_secret_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateIdInput">certificate_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretNameInput">secret_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName">secret_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_id_input`<sup>Optional</sup> <a name="certificate_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateIdInput"></a>

```python
certificate_id_input: str
```

- *Type:* str

---

##### `secret_name_input`<sup>Optional</sup> <a name="secret_name_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretNameInput"></a>

```python
secret_name_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `secret_name`<sup>Required</sup> <a name="secret_name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.secretName"></a>

```python
secret_name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificateOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshIngressGatewayHostsListenersTlsServerCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersTlsServerCertificate">ServiceMeshIngressGatewayHostsListenersTlsServerCertificate</a>

---


### ServiceMeshIngressGatewayHostsOutputReference <a name="ServiceMeshIngressGatewayHostsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners">put_listeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resetHostnames">reset_hostnames</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_listeners` <a name="put_listeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners"></a>

```python
def put_listeners(
  value: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayHostsListeners]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.putListeners.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>]]

---

##### `reset_hostnames` <a name="reset_hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.resetHostnames"></a>

```python
def reset_hostnames() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listeners">listeners</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList">ServiceMeshIngressGatewayHostsListenersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnamesInput">hostnames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listenersInput">listeners_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `listeners`<sup>Required</sup> <a name="listeners" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listeners"></a>

```python
listeners: ServiceMeshIngressGatewayHostsListenersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListenersList">ServiceMeshIngressGatewayHostsListenersList</a>

---

##### `hostnames_input`<sup>Optional</sup> <a name="hostnames_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnamesInput"></a>

```python
hostnames_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `listeners_input`<sup>Optional</sup> <a name="listeners_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.listenersInput"></a>

```python
listeners_input: typing.Union[IResolvable, typing.List[ServiceMeshIngressGatewayHostsListeners]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsListeners">ServiceMeshIngressGatewayHostsListeners</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHostsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshIngressGatewayHosts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayHosts">ServiceMeshIngressGatewayHosts</a>]

---


### ServiceMeshIngressGatewayMtlsOutputReference <a name="ServiceMeshIngressGatewayMtlsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resetMaximumValidity">reset_maximum_validity</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_maximum_validity` <a name="reset_maximum_validity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.resetMaximumValidity"></a>

```python
def reset_maximum_validity() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidityInput">maximum_validity_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity">maximum_validity</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `maximum_validity_input`<sup>Optional</sup> <a name="maximum_validity_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidityInput"></a>

```python
maximum_validity_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_validity`<sup>Required</sup> <a name="maximum_validity" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.maximumValidity"></a>

```python
maximum_validity: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtlsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshIngressGatewayMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayMtls">ServiceMeshIngressGatewayMtls</a>

---


### ServiceMeshIngressGatewayTimeoutsOutputReference <a name="ServiceMeshIngressGatewayTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_ingress_gateway

serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshIngressGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshIngressGateway.ServiceMeshIngressGatewayTimeouts">ServiceMeshIngressGatewayTimeouts</a>]

---



