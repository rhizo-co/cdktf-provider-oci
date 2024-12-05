# `serviceMeshMesh` Submodule <a name="`serviceMeshMesh` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshMesh"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshMesh <a name="ServiceMeshMesh" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh oci_service_mesh_mesh}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMesh(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authorities: typing.Union[IResolvable, typing.List[ServiceMeshMeshCertificateAuthorities]],
  compartment_id: str,
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  mtls: ServiceMeshMeshMtls = None,
  timeouts: ServiceMeshMeshTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.certificateAuthorities">certificate_authorities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities">ServiceMeshMeshCertificateAuthorities</a>]]</code> | certificate_authorities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#compartment_id ServiceMeshMesh#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#display_name ServiceMeshMesh#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#defined_tags ServiceMeshMesh#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#description ServiceMeshMesh#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#freeform_tags ServiceMeshMesh#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#id ServiceMeshMesh#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls">ServiceMeshMeshMtls</a></code> | mtls block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts">ServiceMeshMeshTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authorities`<sup>Required</sup> <a name="certificate_authorities" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.certificateAuthorities"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities">ServiceMeshMeshCertificateAuthorities</a>]]

certificate_authorities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#certificate_authorities ServiceMeshMesh#certificate_authorities}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#compartment_id ServiceMeshMesh#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#display_name ServiceMeshMesh#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#defined_tags ServiceMeshMesh#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#description ServiceMeshMesh#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#freeform_tags ServiceMeshMesh#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#id ServiceMeshMesh#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.mtls"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls">ServiceMeshMeshMtls</a>

mtls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#mtls ServiceMeshMesh#mtls}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts">ServiceMeshMeshTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#timeouts ServiceMeshMesh#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.putCertificateAuthorities">put_certificate_authorities</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.putMtls">put_mtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetMtls">reset_mtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_certificate_authorities` <a name="put_certificate_authorities" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.putCertificateAuthorities"></a>

```python
def put_certificate_authorities(
  value: typing.Union[IResolvable, typing.List[ServiceMeshMeshCertificateAuthorities]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.putCertificateAuthorities.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities">ServiceMeshMeshCertificateAuthorities</a>]]

---

##### `put_mtls` <a name="put_mtls" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.putMtls"></a>

```python
def put_mtls(
  minimum: str
) -> None
```

###### `minimum`<sup>Required</sup> <a name="minimum" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.putMtls.parameter.minimum"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#minimum ServiceMeshMesh#minimum}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#create ServiceMeshMesh#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#delete ServiceMeshMesh#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#update ServiceMeshMesh#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_mtls` <a name="reset_mtls" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetMtls"></a>

```python
def reset_mtls() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceMeshMesh resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMesh.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMesh.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMesh.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMesh.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceMeshMesh resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceMeshMesh to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceMeshMesh that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshMesh to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.certificateAuthorities">certificate_authorities</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList">ServiceMeshMeshCertificateAuthoritiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference">ServiceMeshMeshMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference">ServiceMeshMeshTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.certificateAuthoritiesInput">certificate_authorities_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities">ServiceMeshMeshCertificateAuthorities</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.mtlsInput">mtls_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls">ServiceMeshMeshMtls</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts">ServiceMeshMeshTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authorities`<sup>Required</sup> <a name="certificate_authorities" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.certificateAuthorities"></a>

```python
certificate_authorities: ServiceMeshMeshCertificateAuthoritiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList">ServiceMeshMeshCertificateAuthoritiesList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `mtls`<sup>Required</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.mtls"></a>

```python
mtls: ServiceMeshMeshMtlsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference">ServiceMeshMeshMtlsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.timeouts"></a>

```python
timeouts: ServiceMeshMeshTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference">ServiceMeshMeshTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `certificate_authorities_input`<sup>Optional</sup> <a name="certificate_authorities_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.certificateAuthoritiesInput"></a>

```python
certificate_authorities_input: typing.Union[IResolvable, typing.List[ServiceMeshMeshCertificateAuthorities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities">ServiceMeshMeshCertificateAuthorities</a>]]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mtls_input`<sup>Optional</sup> <a name="mtls_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.mtlsInput"></a>

```python
mtls_input: ServiceMeshMeshMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls">ServiceMeshMeshMtls</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceMeshMeshTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts">ServiceMeshMeshTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMesh.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshMeshCertificateAuthorities <a name="ServiceMeshMeshCertificateAuthorities" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMeshCertificateAuthorities(
  id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#id ServiceMeshMesh#id}. |

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#id ServiceMeshMesh#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ServiceMeshMeshConfig <a name="ServiceMeshMeshConfig" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMeshConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authorities: typing.Union[IResolvable, typing.List[ServiceMeshMeshCertificateAuthorities]],
  compartment_id: str,
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  mtls: ServiceMeshMeshMtls = None,
  timeouts: ServiceMeshMeshTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.certificateAuthorities">certificate_authorities</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities">ServiceMeshMeshCertificateAuthorities</a>]]</code> | certificate_authorities block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#compartment_id ServiceMeshMesh#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#display_name ServiceMeshMesh#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#defined_tags ServiceMeshMesh#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#description ServiceMeshMesh#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#freeform_tags ServiceMeshMesh#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#id ServiceMeshMesh#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.mtls">mtls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls">ServiceMeshMeshMtls</a></code> | mtls block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts">ServiceMeshMeshTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authorities`<sup>Required</sup> <a name="certificate_authorities" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.certificateAuthorities"></a>

```python
certificate_authorities: typing.Union[IResolvable, typing.List[ServiceMeshMeshCertificateAuthorities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities">ServiceMeshMeshCertificateAuthorities</a>]]

certificate_authorities block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#certificate_authorities ServiceMeshMesh#certificate_authorities}

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#compartment_id ServiceMeshMesh#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#display_name ServiceMeshMesh#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#defined_tags ServiceMeshMesh#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#description ServiceMeshMesh#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#freeform_tags ServiceMeshMesh#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#id ServiceMeshMesh#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mtls`<sup>Optional</sup> <a name="mtls" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.mtls"></a>

```python
mtls: ServiceMeshMeshMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls">ServiceMeshMeshMtls</a>

mtls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#mtls ServiceMeshMesh#mtls}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshConfig.property.timeouts"></a>

```python
timeouts: ServiceMeshMeshTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts">ServiceMeshMeshTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#timeouts ServiceMeshMesh#timeouts}

---

### ServiceMeshMeshMtls <a name="ServiceMeshMeshMtls" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMeshMtls(
  minimum: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls.property.minimum">minimum</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#minimum ServiceMeshMesh#minimum}. |

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#minimum ServiceMeshMesh#minimum}.

---

### ServiceMeshMeshTimeouts <a name="ServiceMeshMeshTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMeshTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#create ServiceMeshMesh#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#delete ServiceMeshMesh#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#update ServiceMeshMesh#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#create ServiceMeshMesh#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#delete ServiceMeshMesh#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_mesh#update ServiceMeshMesh#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshMeshCertificateAuthoritiesList <a name="ServiceMeshMeshCertificateAuthoritiesList" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceMeshMeshCertificateAuthoritiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities">ServiceMeshMeshCertificateAuthorities</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceMeshMeshCertificateAuthorities]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities">ServiceMeshMeshCertificateAuthorities</a>]]

---


### ServiceMeshMeshCertificateAuthoritiesOutputReference <a name="ServiceMeshMeshCertificateAuthoritiesOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities">ServiceMeshMeshCertificateAuthorities</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthoritiesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshMeshCertificateAuthorities]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshCertificateAuthorities">ServiceMeshMeshCertificateAuthorities</a>]

---


### ServiceMeshMeshMtlsOutputReference <a name="ServiceMeshMeshMtlsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMeshMtlsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.property.minimumInput">minimum_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.property.minimum">minimum</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls">ServiceMeshMeshMtls</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `minimum_input`<sup>Optional</sup> <a name="minimum_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.property.minimumInput"></a>

```python
minimum_input: str
```

- *Type:* str

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.property.minimum"></a>

```python
minimum: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtlsOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshMeshMtls
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshMtls">ServiceMeshMeshMtls</a>

---


### ServiceMeshMeshTimeoutsOutputReference <a name="ServiceMeshMeshTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_mesh

serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts">ServiceMeshMeshTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshMeshTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshMesh.ServiceMeshMeshTimeouts">ServiceMeshMeshTimeouts</a>]

---



