# `bdsBdsInstancePatchAction` Submodule <a name="`bdsBdsInstancePatchAction` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstancePatchAction <a name="BdsBdsInstancePatchAction" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action oci_bds_bds_instance_patch_action}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_patch_action

bdsBdsInstancePatchAction.BdsBdsInstancePatchAction(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  cluster_admin_password: str,
  version: str,
  id: str = None,
  patching_config: BdsBdsInstancePatchActionPatchingConfig = None,
  timeouts: BdsBdsInstancePatchActionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.patchingConfig">patching_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | patching_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}.

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.clusterAdminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.version"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patching_config`<sup>Optional</sup> <a name="patching_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.patchingConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

patching_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config BdsBdsInstancePatchAction#patching_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#timeouts BdsBdsInstancePatchAction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig">put_patching_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetPatchingConfig">reset_patching_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_patching_config` <a name="put_patching_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig"></a>

```python
def put_patching_config(
  patching_config_strategy: str,
  batch_size: typing.Union[int, float] = None,
  wait_time_between_batch_in_seconds: typing.Union[int, float] = None,
  wait_time_between_domain_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `patching_config_strategy`<sup>Required</sup> <a name="patching_config_strategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig.parameter.patchingConfigStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config_strategy BdsBdsInstancePatchAction#patching_config_strategy}.

---

###### `batch_size`<sup>Optional</sup> <a name="batch_size" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig.parameter.batchSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#batch_size BdsBdsInstancePatchAction#batch_size}.

---

###### `wait_time_between_batch_in_seconds`<sup>Optional</sup> <a name="wait_time_between_batch_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig.parameter.waitTimeBetweenBatchInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_batch_in_seconds BdsBdsInstancePatchAction#wait_time_between_batch_in_seconds}.

---

###### `wait_time_between_domain_in_seconds`<sup>Optional</sup> <a name="wait_time_between_domain_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putPatchingConfig.parameter.waitTimeBetweenDomainInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_domain_in_seconds BdsBdsInstancePatchAction#wait_time_between_domain_in_seconds}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#create BdsBdsInstancePatchAction#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#delete BdsBdsInstancePatchAction#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#update BdsBdsInstancePatchAction#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_patching_config` <a name="reset_patching_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetPatchingConfig"></a>

```python
def reset_patching_config() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BdsBdsInstancePatchAction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_patch_action

bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_patch_action

bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_patch_action

bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_patch_action

bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BdsBdsInstancePatchAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BdsBdsInstancePatchAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BdsBdsInstancePatchAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstancePatchAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfig">patching_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference">BdsBdsInstancePatchActionPatchingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference">BdsBdsInstancePatchActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPasswordInput">cluster_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfigInput">patching_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.versionInput">version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.version">version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `patching_config`<sup>Required</sup> <a name="patching_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfig"></a>

```python
patching_config: BdsBdsInstancePatchActionPatchingConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference">BdsBdsInstancePatchActionPatchingConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeouts"></a>

```python
timeouts: BdsBdsInstancePatchActionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference">BdsBdsInstancePatchActionTimeoutsOutputReference</a>

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `cluster_admin_password_input`<sup>Optional</sup> <a name="cluster_admin_password_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPasswordInput"></a>

```python
cluster_admin_password_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `patching_config_input`<sup>Optional</sup> <a name="patching_config_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.patchingConfigInput"></a>

```python
patching_config_input: BdsBdsInstancePatchActionPatchingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BdsBdsInstancePatchActionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>]

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.versionInput"></a>

```python
version_input: str
```

- *Type:* str

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.version"></a>

```python
version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstancePatchActionConfig <a name="BdsBdsInstancePatchActionConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_patch_action

bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  cluster_admin_password: str,
  version: str,
  id: str = None,
  patching_config: BdsBdsInstancePatchActionPatchingConfig = None,
  timeouts: BdsBdsInstancePatchActionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.version">version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.patchingConfig">patching_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | patching_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#bds_instance_id BdsBdsInstancePatchAction#bds_instance_id}.

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#cluster_admin_password BdsBdsInstancePatchAction#cluster_admin_password}.

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.version"></a>

```python
version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#version BdsBdsInstancePatchAction#version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#id BdsBdsInstancePatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patching_config`<sup>Optional</sup> <a name="patching_config" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.patchingConfig"></a>

```python
patching_config: BdsBdsInstancePatchActionPatchingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

patching_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config BdsBdsInstancePatchAction#patching_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionConfig.property.timeouts"></a>

```python
timeouts: BdsBdsInstancePatchActionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#timeouts BdsBdsInstancePatchAction#timeouts}

---

### BdsBdsInstancePatchActionPatchingConfig <a name="BdsBdsInstancePatchActionPatchingConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_patch_action

bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig(
  patching_config_strategy: str,
  batch_size: typing.Union[int, float] = None,
  wait_time_between_batch_in_seconds: typing.Union[int, float] = None,
  wait_time_between_domain_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.patchingConfigStrategy">patching_config_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config_strategy BdsBdsInstancePatchAction#patching_config_strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#batch_size BdsBdsInstancePatchAction#batch_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenBatchInSeconds">wait_time_between_batch_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_batch_in_seconds BdsBdsInstancePatchAction#wait_time_between_batch_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenDomainInSeconds">wait_time_between_domain_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_domain_in_seconds BdsBdsInstancePatchAction#wait_time_between_domain_in_seconds}. |

---

##### `patching_config_strategy`<sup>Required</sup> <a name="patching_config_strategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.patchingConfigStrategy"></a>

```python
patching_config_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#patching_config_strategy BdsBdsInstancePatchAction#patching_config_strategy}.

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#batch_size BdsBdsInstancePatchAction#batch_size}.

---

##### `wait_time_between_batch_in_seconds`<sup>Optional</sup> <a name="wait_time_between_batch_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenBatchInSeconds"></a>

```python
wait_time_between_batch_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_batch_in_seconds BdsBdsInstancePatchAction#wait_time_between_batch_in_seconds}.

---

##### `wait_time_between_domain_in_seconds`<sup>Optional</sup> <a name="wait_time_between_domain_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig.property.waitTimeBetweenDomainInSeconds"></a>

```python
wait_time_between_domain_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#wait_time_between_domain_in_seconds BdsBdsInstancePatchAction#wait_time_between_domain_in_seconds}.

---

### BdsBdsInstancePatchActionTimeouts <a name="BdsBdsInstancePatchActionTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_patch_action

bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#create BdsBdsInstancePatchAction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#delete BdsBdsInstancePatchAction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#update BdsBdsInstancePatchAction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#create BdsBdsInstancePatchAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#delete BdsBdsInstancePatchAction#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_patch_action#update BdsBdsInstancePatchAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstancePatchActionPatchingConfigOutputReference <a name="BdsBdsInstancePatchActionPatchingConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_patch_action

bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenBatchInSeconds">reset_wait_time_between_batch_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenDomainInSeconds">reset_wait_time_between_domain_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_size` <a name="reset_batch_size" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_wait_time_between_batch_in_seconds` <a name="reset_wait_time_between_batch_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenBatchInSeconds"></a>

```python
def reset_wait_time_between_batch_in_seconds() -> None
```

##### `reset_wait_time_between_domain_in_seconds` <a name="reset_wait_time_between_domain_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.resetWaitTimeBetweenDomainInSeconds"></a>

```python
def reset_wait_time_between_domain_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategyInput">patching_config_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSecondsInput">wait_time_between_batch_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSecondsInput">wait_time_between_domain_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategy">patching_config_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSeconds">wait_time_between_batch_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSeconds">wait_time_between_domain_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patching_config_strategy_input`<sup>Optional</sup> <a name="patching_config_strategy_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategyInput"></a>

```python
patching_config_strategy_input: str
```

- *Type:* str

---

##### `wait_time_between_batch_in_seconds_input`<sup>Optional</sup> <a name="wait_time_between_batch_in_seconds_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSecondsInput"></a>

```python
wait_time_between_batch_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time_between_domain_in_seconds_input`<sup>Optional</sup> <a name="wait_time_between_domain_in_seconds_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSecondsInput"></a>

```python
wait_time_between_domain_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patching_config_strategy`<sup>Required</sup> <a name="patching_config_strategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.patchingConfigStrategy"></a>

```python
patching_config_strategy: str
```

- *Type:* str

---

##### `wait_time_between_batch_in_seconds`<sup>Required</sup> <a name="wait_time_between_batch_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenBatchInSeconds"></a>

```python
wait_time_between_batch_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time_between_domain_in_seconds`<sup>Required</sup> <a name="wait_time_between_domain_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.waitTimeBetweenDomainInSeconds"></a>

```python
wait_time_between_domain_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfigOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstancePatchActionPatchingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionPatchingConfig">BdsBdsInstancePatchActionPatchingConfig</a>

---


### BdsBdsInstancePatchActionTimeoutsOutputReference <a name="BdsBdsInstancePatchActionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_patch_action

bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsBdsInstancePatchActionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstancePatchAction.BdsBdsInstancePatchActionTimeouts">BdsBdsInstancePatchActionTimeouts</a>]

---



