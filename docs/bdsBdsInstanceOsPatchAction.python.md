# `bdsBdsInstanceOsPatchAction` Submodule <a name="`bdsBdsInstanceOsPatchAction` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceOsPatchAction <a name="BdsBdsInstanceOsPatchAction" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action oci_bds_bds_instance_os_patch_action}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_os_patch_action

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction(
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
  os_patch_version: str,
  id: str = None,
  patching_configs: BdsBdsInstanceOsPatchActionPatchingConfigs = None,
  timeouts: BdsBdsInstanceOsPatchActionTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.osPatchVersion">os_patch_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.patchingConfigs">patching_configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | patching_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}.

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.clusterAdminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}.

---

##### `os_patch_version`<sup>Required</sup> <a name="os_patch_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.osPatchVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patching_configs`<sup>Optional</sup> <a name="patching_configs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.patchingConfigs"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

patching_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_configs BdsBdsInstanceOsPatchAction#patching_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#timeouts BdsBdsInstanceOsPatchAction#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs">put_patching_configs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetPatchingConfigs">reset_patching_configs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_patching_configs` <a name="put_patching_configs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs"></a>

```python
def put_patching_configs(
  patching_config_strategy: str,
  batch_size: typing.Union[int, float] = None,
  tolerance_threshold_per_batch: typing.Union[int, float] = None,
  tolerance_threshold_per_domain: typing.Union[int, float] = None,
  wait_time_between_batch_in_seconds: typing.Union[int, float] = None,
  wait_time_between_domain_in_seconds: typing.Union[int, float] = None
) -> None
```

###### `patching_config_strategy`<sup>Required</sup> <a name="patching_config_strategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs.parameter.patchingConfigStrategy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_config_strategy BdsBdsInstanceOsPatchAction#patching_config_strategy}.

---

###### `batch_size`<sup>Optional</sup> <a name="batch_size" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs.parameter.batchSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#batch_size BdsBdsInstanceOsPatchAction#batch_size}.

---

###### `tolerance_threshold_per_batch`<sup>Optional</sup> <a name="tolerance_threshold_per_batch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs.parameter.toleranceThresholdPerBatch"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_batch BdsBdsInstanceOsPatchAction#tolerance_threshold_per_batch}.

---

###### `tolerance_threshold_per_domain`<sup>Optional</sup> <a name="tolerance_threshold_per_domain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs.parameter.toleranceThresholdPerDomain"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_domain BdsBdsInstanceOsPatchAction#tolerance_threshold_per_domain}.

---

###### `wait_time_between_batch_in_seconds`<sup>Optional</sup> <a name="wait_time_between_batch_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs.parameter.waitTimeBetweenBatchInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_batch_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_batch_in_seconds}.

---

###### `wait_time_between_domain_in_seconds`<sup>Optional</sup> <a name="wait_time_between_domain_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putPatchingConfigs.parameter.waitTimeBetweenDomainInSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_domain_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_domain_in_seconds}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#create BdsBdsInstanceOsPatchAction#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#delete BdsBdsInstanceOsPatchAction#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#update BdsBdsInstanceOsPatchAction#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_patching_configs` <a name="reset_patching_configs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetPatchingConfigs"></a>

```python
def reset_patching_configs() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BdsBdsInstanceOsPatchAction resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_os_patch_action

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_os_patch_action

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_os_patch_action

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_os_patch_action

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BdsBdsInstanceOsPatchAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BdsBdsInstanceOsPatchAction to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BdsBdsInstanceOsPatchAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceOsPatchAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigs">patching_configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference">BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference">BdsBdsInstanceOsPatchActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPasswordInput">cluster_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersionInput">os_patch_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigsInput">patching_configs_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersion">os_patch_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `patching_configs`<sup>Required</sup> <a name="patching_configs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigs"></a>

```python
patching_configs: BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference">BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeouts"></a>

```python
timeouts: BdsBdsInstanceOsPatchActionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference">BdsBdsInstanceOsPatchActionTimeoutsOutputReference</a>

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `cluster_admin_password_input`<sup>Optional</sup> <a name="cluster_admin_password_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPasswordInput"></a>

```python
cluster_admin_password_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `os_patch_version_input`<sup>Optional</sup> <a name="os_patch_version_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersionInput"></a>

```python
os_patch_version_input: str
```

- *Type:* str

---

##### `patching_configs_input`<sup>Optional</sup> <a name="patching_configs_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.patchingConfigsInput"></a>

```python
patching_configs_input: BdsBdsInstanceOsPatchActionPatchingConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BdsBdsInstanceOsPatchActionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `os_patch_version`<sup>Required</sup> <a name="os_patch_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.osPatchVersion"></a>

```python
os_patch_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchAction.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceOsPatchActionConfig <a name="BdsBdsInstanceOsPatchActionConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_os_patch_action

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_instance_id: str,
  cluster_admin_password: str,
  os_patch_version: str,
  id: str = None,
  patching_configs: BdsBdsInstanceOsPatchActionPatchingConfigs = None,
  timeouts: BdsBdsInstanceOsPatchActionTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.osPatchVersion">os_patch_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.patchingConfigs">patching_configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | patching_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#bds_instance_id BdsBdsInstanceOsPatchAction#bds_instance_id}.

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#cluster_admin_password BdsBdsInstanceOsPatchAction#cluster_admin_password}.

---

##### `os_patch_version`<sup>Required</sup> <a name="os_patch_version" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.osPatchVersion"></a>

```python
os_patch_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#os_patch_version BdsBdsInstanceOsPatchAction#os_patch_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#id BdsBdsInstanceOsPatchAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `patching_configs`<sup>Optional</sup> <a name="patching_configs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.patchingConfigs"></a>

```python
patching_configs: BdsBdsInstanceOsPatchActionPatchingConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

patching_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_configs BdsBdsInstanceOsPatchAction#patching_configs}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionConfig.property.timeouts"></a>

```python
timeouts: BdsBdsInstanceOsPatchActionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#timeouts BdsBdsInstanceOsPatchAction#timeouts}

---

### BdsBdsInstanceOsPatchActionPatchingConfigs <a name="BdsBdsInstanceOsPatchActionPatchingConfigs" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_os_patch_action

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs(
  patching_config_strategy: str,
  batch_size: typing.Union[int, float] = None,
  tolerance_threshold_per_batch: typing.Union[int, float] = None,
  tolerance_threshold_per_domain: typing.Union[int, float] = None,
  wait_time_between_batch_in_seconds: typing.Union[int, float] = None,
  wait_time_between_domain_in_seconds: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.patchingConfigStrategy">patching_config_strategy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_config_strategy BdsBdsInstanceOsPatchAction#patching_config_strategy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#batch_size BdsBdsInstanceOsPatchAction#batch_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerBatch">tolerance_threshold_per_batch</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_batch BdsBdsInstanceOsPatchAction#tolerance_threshold_per_batch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerDomain">tolerance_threshold_per_domain</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_domain BdsBdsInstanceOsPatchAction#tolerance_threshold_per_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenBatchInSeconds">wait_time_between_batch_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_batch_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_batch_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenDomainInSeconds">wait_time_between_domain_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_domain_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_domain_in_seconds}. |

---

##### `patching_config_strategy`<sup>Required</sup> <a name="patching_config_strategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.patchingConfigStrategy"></a>

```python
patching_config_strategy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#patching_config_strategy BdsBdsInstanceOsPatchAction#patching_config_strategy}.

---

##### `batch_size`<sup>Optional</sup> <a name="batch_size" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#batch_size BdsBdsInstanceOsPatchAction#batch_size}.

---

##### `tolerance_threshold_per_batch`<sup>Optional</sup> <a name="tolerance_threshold_per_batch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerBatch"></a>

```python
tolerance_threshold_per_batch: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_batch BdsBdsInstanceOsPatchAction#tolerance_threshold_per_batch}.

---

##### `tolerance_threshold_per_domain`<sup>Optional</sup> <a name="tolerance_threshold_per_domain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.toleranceThresholdPerDomain"></a>

```python
tolerance_threshold_per_domain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#tolerance_threshold_per_domain BdsBdsInstanceOsPatchAction#tolerance_threshold_per_domain}.

---

##### `wait_time_between_batch_in_seconds`<sup>Optional</sup> <a name="wait_time_between_batch_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenBatchInSeconds"></a>

```python
wait_time_between_batch_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_batch_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_batch_in_seconds}.

---

##### `wait_time_between_domain_in_seconds`<sup>Optional</sup> <a name="wait_time_between_domain_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs.property.waitTimeBetweenDomainInSeconds"></a>

```python
wait_time_between_domain_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#wait_time_between_domain_in_seconds BdsBdsInstanceOsPatchAction#wait_time_between_domain_in_seconds}.

---

### BdsBdsInstanceOsPatchActionTimeouts <a name="BdsBdsInstanceOsPatchActionTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_os_patch_action

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#create BdsBdsInstanceOsPatchAction#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#delete BdsBdsInstanceOsPatchAction#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#update BdsBdsInstanceOsPatchAction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#create BdsBdsInstanceOsPatchAction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#delete BdsBdsInstanceOsPatchAction#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_os_patch_action#update BdsBdsInstanceOsPatchAction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference <a name="BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_os_patch_action

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetBatchSize">reset_batch_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerBatch">reset_tolerance_threshold_per_batch</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerDomain">reset_tolerance_threshold_per_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenBatchInSeconds">reset_wait_time_between_batch_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenDomainInSeconds">reset_wait_time_between_domain_in_seconds</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_batch_size` <a name="reset_batch_size" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetBatchSize"></a>

```python
def reset_batch_size() -> None
```

##### `reset_tolerance_threshold_per_batch` <a name="reset_tolerance_threshold_per_batch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerBatch"></a>

```python
def reset_tolerance_threshold_per_batch() -> None
```

##### `reset_tolerance_threshold_per_domain` <a name="reset_tolerance_threshold_per_domain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetToleranceThresholdPerDomain"></a>

```python
def reset_tolerance_threshold_per_domain() -> None
```

##### `reset_wait_time_between_batch_in_seconds` <a name="reset_wait_time_between_batch_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenBatchInSeconds"></a>

```python
def reset_wait_time_between_batch_in_seconds() -> None
```

##### `reset_wait_time_between_domain_in_seconds` <a name="reset_wait_time_between_domain_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.resetWaitTimeBetweenDomainInSeconds"></a>

```python
def reset_wait_time_between_domain_in_seconds() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSizeInput">batch_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategyInput">patching_config_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatchInput">tolerance_threshold_per_batch_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomainInput">tolerance_threshold_per_domain_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSecondsInput">wait_time_between_batch_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSecondsInput">wait_time_between_domain_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSize">batch_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategy">patching_config_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatch">tolerance_threshold_per_batch</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomain">tolerance_threshold_per_domain</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSeconds">wait_time_between_batch_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSeconds">wait_time_between_domain_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `batch_size_input`<sup>Optional</sup> <a name="batch_size_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSizeInput"></a>

```python
batch_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patching_config_strategy_input`<sup>Optional</sup> <a name="patching_config_strategy_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategyInput"></a>

```python
patching_config_strategy_input: str
```

- *Type:* str

---

##### `tolerance_threshold_per_batch_input`<sup>Optional</sup> <a name="tolerance_threshold_per_batch_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatchInput"></a>

```python
tolerance_threshold_per_batch_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tolerance_threshold_per_domain_input`<sup>Optional</sup> <a name="tolerance_threshold_per_domain_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomainInput"></a>

```python
tolerance_threshold_per_domain_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time_between_batch_in_seconds_input`<sup>Optional</sup> <a name="wait_time_between_batch_in_seconds_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSecondsInput"></a>

```python
wait_time_between_batch_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time_between_domain_in_seconds_input`<sup>Optional</sup> <a name="wait_time_between_domain_in_seconds_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSecondsInput"></a>

```python
wait_time_between_domain_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `batch_size`<sup>Required</sup> <a name="batch_size" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.batchSize"></a>

```python
batch_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patching_config_strategy`<sup>Required</sup> <a name="patching_config_strategy" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.patchingConfigStrategy"></a>

```python
patching_config_strategy: str
```

- *Type:* str

---

##### `tolerance_threshold_per_batch`<sup>Required</sup> <a name="tolerance_threshold_per_batch" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerBatch"></a>

```python
tolerance_threshold_per_batch: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `tolerance_threshold_per_domain`<sup>Required</sup> <a name="tolerance_threshold_per_domain" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.toleranceThresholdPerDomain"></a>

```python
tolerance_threshold_per_domain: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time_between_batch_in_seconds`<sup>Required</sup> <a name="wait_time_between_batch_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenBatchInSeconds"></a>

```python
wait_time_between_batch_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `wait_time_between_domain_in_seconds`<sup>Required</sup> <a name="wait_time_between_domain_in_seconds" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.waitTimeBetweenDomainInSeconds"></a>

```python
wait_time_between_domain_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigsOutputReference.property.internalValue"></a>

```python
internal_value: BdsBdsInstanceOsPatchActionPatchingConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionPatchingConfigs">BdsBdsInstanceOsPatchActionPatchingConfigs</a>

---


### BdsBdsInstanceOsPatchActionTimeoutsOutputReference <a name="BdsBdsInstanceOsPatchActionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_os_patch_action

bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsBdsInstanceOsPatchActionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceOsPatchAction.BdsBdsInstanceOsPatchActionTimeouts">BdsBdsInstanceOsPatchActionTimeouts</a>]

---



