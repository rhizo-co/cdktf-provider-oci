# `serviceMeshAccessPolicy` Submodule <a name="`serviceMeshAccessPolicy` Submodule" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceMeshAccessPolicy <a name="ServiceMeshAccessPolicy" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy oci_service_mesh_access_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicy(
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
  rules: typing.Union[IResolvable, typing.List[ServiceMeshAccessPolicyRules]],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: ServiceMeshAccessPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#compartment_id ServiceMeshAccessPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.meshId">mesh_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#mesh_id ServiceMeshAccessPolicy#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#name ServiceMeshAccessPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>]]</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#defined_tags ServiceMeshAccessPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#description ServiceMeshAccessPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#freeform_tags ServiceMeshAccessPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#id ServiceMeshAccessPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#compartment_id ServiceMeshAccessPolicy#compartment_id}.

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.meshId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#mesh_id ServiceMeshAccessPolicy#mesh_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#name ServiceMeshAccessPolicy#name}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#rules ServiceMeshAccessPolicy#rules}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#defined_tags ServiceMeshAccessPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#description ServiceMeshAccessPolicy#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#freeform_tags ServiceMeshAccessPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#id ServiceMeshAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#timeouts ServiceMeshAccessPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[ServiceMeshAccessPolicyRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#create ServiceMeshAccessPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#delete ServiceMeshAccessPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#update ServiceMeshAccessPolicy#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ServiceMeshAccessPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ServiceMeshAccessPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ServiceMeshAccessPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ServiceMeshAccessPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ServiceMeshAccessPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList">ServiceMeshAccessPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference">ServiceMeshAccessPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.meshIdInput">mesh_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.meshId">mesh_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.rules"></a>

```python
rules: ServiceMeshAccessPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList">ServiceMeshAccessPolicyRulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeouts"></a>

```python
timeouts: ServiceMeshAccessPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference">ServiceMeshAccessPolicyTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mesh_id_input`<sup>Optional</sup> <a name="mesh_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.meshIdInput"></a>

```python
mesh_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[ServiceMeshAccessPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ServiceMeshAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceMeshAccessPolicyConfig <a name="ServiceMeshAccessPolicyConfig" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig(
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
  rules: typing.Union[IResolvable, typing.List[ServiceMeshAccessPolicyRules]],
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: ServiceMeshAccessPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#compartment_id ServiceMeshAccessPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.meshId">mesh_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#mesh_id ServiceMeshAccessPolicy#mesh_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#name ServiceMeshAccessPolicy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>]]</code> | rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#defined_tags ServiceMeshAccessPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#description ServiceMeshAccessPolicy#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#freeform_tags ServiceMeshAccessPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#id ServiceMeshAccessPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#compartment_id ServiceMeshAccessPolicy#compartment_id}.

---

##### `mesh_id`<sup>Required</sup> <a name="mesh_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.meshId"></a>

```python
mesh_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#mesh_id ServiceMeshAccessPolicy#mesh_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#name ServiceMeshAccessPolicy#name}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[ServiceMeshAccessPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#rules ServiceMeshAccessPolicy#rules}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#defined_tags ServiceMeshAccessPolicy#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#description ServiceMeshAccessPolicy#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#freeform_tags ServiceMeshAccessPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#id ServiceMeshAccessPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyConfig.property.timeouts"></a>

```python
timeouts: ServiceMeshAccessPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#timeouts ServiceMeshAccessPolicy#timeouts}

---

### ServiceMeshAccessPolicyRules <a name="ServiceMeshAccessPolicyRules" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules(
  action: str,
  destination: ServiceMeshAccessPolicyRulesDestination,
  source: ServiceMeshAccessPolicyRulesSource
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#action ServiceMeshAccessPolicy#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.destination">destination</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a></code> | destination block. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a></code> | source block. |

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#action ServiceMeshAccessPolicy#action}.

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.destination"></a>

```python
destination: ServiceMeshAccessPolicyRulesDestination
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a>

destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#destination ServiceMeshAccessPolicy#destination}

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules.property.source"></a>

```python
source: ServiceMeshAccessPolicyRulesSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#source ServiceMeshAccessPolicy#source}

---

### ServiceMeshAccessPolicyRulesDestination <a name="ServiceMeshAccessPolicyRulesDestination" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination(
  type: str,
  hostnames: typing.List[str] = None,
  ingress_gateway_id: str = None,
  ip_addresses: typing.List[str] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  protocol: str = None,
  virtual_service_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}.

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}.

---

##### `ingress_gateway_id`<sup>Optional</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}.

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}.

---

##### `virtual_service_id`<sup>Optional</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}.

---

### ServiceMeshAccessPolicyRulesSource <a name="ServiceMeshAccessPolicyRulesSource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource(
  type: str,
  hostnames: typing.List[str] = None,
  ingress_gateway_id: str = None,
  ip_addresses: typing.List[str] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  protocol: str = None,
  virtual_service_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}.

---

##### `hostnames`<sup>Optional</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}.

---

##### `ingress_gateway_id`<sup>Optional</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}.

---

##### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}.

---

##### `ports`<sup>Optional</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}.

---

##### `virtual_service_id`<sup>Optional</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}.

---

### ServiceMeshAccessPolicyTimeouts <a name="ServiceMeshAccessPolicyTimeouts" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#create ServiceMeshAccessPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#delete ServiceMeshAccessPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#update ServiceMeshAccessPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#create ServiceMeshAccessPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#delete ServiceMeshAccessPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#update ServiceMeshAccessPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceMeshAccessPolicyRulesDestinationOutputReference <a name="ServiceMeshAccessPolicyRulesDestinationOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetHostnames">reset_hostnames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetIngressGatewayId">reset_ingress_gateway_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetIpAddresses">reset_ip_addresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetVirtualServiceId">reset_virtual_service_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hostnames` <a name="reset_hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetHostnames"></a>

```python
def reset_hostnames() -> None
```

##### `reset_ingress_gateway_id` <a name="reset_ingress_gateway_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetIngressGatewayId"></a>

```python
def reset_ingress_gateway_id() -> None
```

##### `reset_ip_addresses` <a name="reset_ip_addresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetIpAddresses"></a>

```python
def reset_ip_addresses() -> None
```

##### `reset_ports` <a name="reset_ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_virtual_service_id` <a name="reset_virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.resetVirtualServiceId"></a>

```python
def reset_virtual_service_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.hostnamesInput">hostnames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ingressGatewayIdInput">ingress_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ipAddressesInput">ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.virtualServiceIdInput">virtual_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostnames_input`<sup>Optional</sup> <a name="hostnames_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.hostnamesInput"></a>

```python
hostnames_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_gateway_id_input`<sup>Optional</sup> <a name="ingress_gateway_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ingressGatewayIdInput"></a>

```python
ingress_gateway_id_input: str
```

- *Type:* str

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ipAddressesInput"></a>

```python
ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `virtual_service_id_input`<sup>Optional</sup> <a name="virtual_service_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.virtualServiceIdInput"></a>

```python
virtual_service_id_input: str
```

- *Type:* str

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshAccessPolicyRulesDestination
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a>

---


### ServiceMeshAccessPolicyRulesList <a name="ServiceMeshAccessPolicyRulesList" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ServiceMeshAccessPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ServiceMeshAccessPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>]]

---


### ServiceMeshAccessPolicyRulesOutputReference <a name="ServiceMeshAccessPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination">put_destination</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource">put_source</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_destination` <a name="put_destination" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination"></a>

```python
def put_destination(
  type: str,
  hostnames: typing.List[str] = None,
  ingress_gateway_id: str = None,
  ip_addresses: typing.List[str] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  protocol: str = None,
  virtual_service_id: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}.

---

###### `hostnames`<sup>Optional</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination.parameter.hostnames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}.

---

###### `ingress_gateway_id`<sup>Optional</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination.parameter.ingressGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}.

---

###### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination.parameter.ipAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}.

---

###### `ports`<sup>Optional</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination.parameter.ports"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}.

---

###### `virtual_service_id`<sup>Optional</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putDestination.parameter.virtualServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}.

---

##### `put_source` <a name="put_source" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource"></a>

```python
def put_source(
  type: str,
  hostnames: typing.List[str] = None,
  ingress_gateway_id: str = None,
  ip_addresses: typing.List[str] = None,
  ports: typing.List[typing.Union[int, float]] = None,
  protocol: str = None,
  virtual_service_id: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#type ServiceMeshAccessPolicy#type}.

---

###### `hostnames`<sup>Optional</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource.parameter.hostnames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#hostnames ServiceMeshAccessPolicy#hostnames}.

---

###### `ingress_gateway_id`<sup>Optional</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource.parameter.ingressGatewayId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ingress_gateway_id ServiceMeshAccessPolicy#ingress_gateway_id}.

---

###### `ip_addresses`<sup>Optional</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource.parameter.ipAddresses"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ip_addresses ServiceMeshAccessPolicy#ip_addresses}.

---

###### `ports`<sup>Optional</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource.parameter.ports"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#ports ServiceMeshAccessPolicy#ports}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#protocol ServiceMeshAccessPolicy#protocol}.

---

###### `virtual_service_id`<sup>Optional</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.putSource.parameter.virtualServiceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/service_mesh_access_policy#virtual_service_id ServiceMeshAccessPolicy#virtual_service_id}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.destination">destination</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference">ServiceMeshAccessPolicyRulesDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.source">source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference">ServiceMeshAccessPolicyRulesSourceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.destinationInput">destination_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.sourceInput">source_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.destination"></a>

```python
destination: ServiceMeshAccessPolicyRulesDestinationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestinationOutputReference">ServiceMeshAccessPolicyRulesDestinationOutputReference</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.source"></a>

```python
source: ServiceMeshAccessPolicyRulesSourceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference">ServiceMeshAccessPolicyRulesSourceOutputReference</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.destinationInput"></a>

```python
destination_input: ServiceMeshAccessPolicyRulesDestination
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesDestination">ServiceMeshAccessPolicyRulesDestination</a>

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.sourceInput"></a>

```python
source_input: ServiceMeshAccessPolicyRulesSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshAccessPolicyRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRules">ServiceMeshAccessPolicyRules</a>]

---


### ServiceMeshAccessPolicyRulesSourceOutputReference <a name="ServiceMeshAccessPolicyRulesSourceOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetHostnames">reset_hostnames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetIngressGatewayId">reset_ingress_gateway_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetIpAddresses">reset_ip_addresses</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetPorts">reset_ports</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetVirtualServiceId">reset_virtual_service_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hostnames` <a name="reset_hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetHostnames"></a>

```python
def reset_hostnames() -> None
```

##### `reset_ingress_gateway_id` <a name="reset_ingress_gateway_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetIngressGatewayId"></a>

```python
def reset_ingress_gateway_id() -> None
```

##### `reset_ip_addresses` <a name="reset_ip_addresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetIpAddresses"></a>

```python
def reset_ip_addresses() -> None
```

##### `reset_ports` <a name="reset_ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetPorts"></a>

```python
def reset_ports() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_virtual_service_id` <a name="reset_virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.resetVirtualServiceId"></a>

```python
def reset_virtual_service_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.hostnamesInput">hostnames_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ingressGatewayIdInput">ingress_gateway_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ipAddressesInput">ip_addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.virtualServiceIdInput">virtual_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.hostnames">hostnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ingressGatewayId">ingress_gateway_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ipAddresses">ip_addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.virtualServiceId">virtual_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostnames_input`<sup>Optional</sup> <a name="hostnames_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.hostnamesInput"></a>

```python
hostnames_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_gateway_id_input`<sup>Optional</sup> <a name="ingress_gateway_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ingressGatewayIdInput"></a>

```python
ingress_gateway_id_input: str
```

- *Type:* str

---

##### `ip_addresses_input`<sup>Optional</sup> <a name="ip_addresses_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ipAddressesInput"></a>

```python
ip_addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `virtual_service_id_input`<sup>Optional</sup> <a name="virtual_service_id_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.virtualServiceIdInput"></a>

```python
virtual_service_id_input: str
```

- *Type:* str

---

##### `hostnames`<sup>Required</sup> <a name="hostnames" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.hostnames"></a>

```python
hostnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ingress_gateway_id`<sup>Required</sup> <a name="ingress_gateway_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ingressGatewayId"></a>

```python
ingress_gateway_id: str
```

- *Type:* str

---

##### `ip_addresses`<sup>Required</sup> <a name="ip_addresses" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ipAddresses"></a>

```python
ip_addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ports`<sup>Required</sup> <a name="ports" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `virtual_service_id`<sup>Required</sup> <a name="virtual_service_id" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.virtualServiceId"></a>

```python
virtual_service_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSourceOutputReference.property.internalValue"></a>

```python
internal_value: ServiceMeshAccessPolicyRulesSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyRulesSource">ServiceMeshAccessPolicyRulesSource</a>

---


### ServiceMeshAccessPolicyTimeoutsOutputReference <a name="ServiceMeshAccessPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import service_mesh_access_policy

serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ServiceMeshAccessPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.serviceMeshAccessPolicy.ServiceMeshAccessPolicyTimeouts">ServiceMeshAccessPolicyTimeouts</a>]

---



