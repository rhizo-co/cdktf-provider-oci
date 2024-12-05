# `bdsBdsInstanceMetastoreConfig` Submodule <a name="`bdsBdsInstanceMetastoreConfig` Submodule" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsBdsInstanceMetastoreConfig <a name="BdsBdsInstanceMetastoreConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config oci_bds_bds_instance_metastore_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_metastore_config

bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_api_key_id: str,
  bds_api_key_passphrase: str,
  bds_instance_id: str,
  cluster_admin_password: str,
  metastore_id: str,
  activate_trigger: typing.Union[int, float] = None,
  display_name: str = None,
  id: str = None,
  timeouts: BdsBdsInstanceMetastoreConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsApiKeyId">bds_api_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_id BdsBdsInstanceMetastoreConfig#bds_api_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsApiKeyPassphrase">bds_api_key_passphrase</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_passphrase BdsBdsInstanceMetastoreConfig#bds_api_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_instance_id BdsBdsInstanceMetastoreConfig#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#cluster_admin_password BdsBdsInstanceMetastoreConfig#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#metastore_id BdsBdsInstanceMetastoreConfig#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.activateTrigger">activate_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#activate_trigger BdsBdsInstanceMetastoreConfig#activate_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#display_name BdsBdsInstanceMetastoreConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#id BdsBdsInstanceMetastoreConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_api_key_id`<sup>Required</sup> <a name="bds_api_key_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsApiKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_id BdsBdsInstanceMetastoreConfig#bds_api_key_id}.

---

##### `bds_api_key_passphrase`<sup>Required</sup> <a name="bds_api_key_passphrase" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsApiKeyPassphrase"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_passphrase BdsBdsInstanceMetastoreConfig#bds_api_key_passphrase}.

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.bdsInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_instance_id BdsBdsInstanceMetastoreConfig#bds_instance_id}.

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.clusterAdminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#cluster_admin_password BdsBdsInstanceMetastoreConfig#cluster_admin_password}.

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#metastore_id BdsBdsInstanceMetastoreConfig#metastore_id}.

---

##### `activate_trigger`<sup>Optional</sup> <a name="activate_trigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.activateTrigger"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#activate_trigger BdsBdsInstanceMetastoreConfig#activate_trigger}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#display_name BdsBdsInstanceMetastoreConfig#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#id BdsBdsInstanceMetastoreConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#timeouts BdsBdsInstanceMetastoreConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetActivateTrigger">reset_activate_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#create BdsBdsInstanceMetastoreConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#delete BdsBdsInstanceMetastoreConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#update BdsBdsInstanceMetastoreConfig#update}.

---

##### `reset_activate_trigger` <a name="reset_activate_trigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetActivateTrigger"></a>

```python
def reset_activate_trigger() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BdsBdsInstanceMetastoreConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_metastore_config

bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_metastore_config

bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_metastore_config

bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_metastore_config

bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BdsBdsInstanceMetastoreConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BdsBdsInstanceMetastoreConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BdsBdsInstanceMetastoreConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BdsBdsInstanceMetastoreConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreType">metastore_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference">BdsBdsInstanceMetastoreConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTriggerInput">activate_trigger_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyIdInput">bds_api_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphraseInput">bds_api_key_passphrase_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceIdInput">bds_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPasswordInput">cluster_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTrigger">activate_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyId">bds_api_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphrase">bds_api_key_passphrase</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `metastore_type`<sup>Required</sup> <a name="metastore_type" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreType"></a>

```python
metastore_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeouts"></a>

```python
timeouts: BdsBdsInstanceMetastoreConfigTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference">BdsBdsInstanceMetastoreConfigTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `activate_trigger_input`<sup>Optional</sup> <a name="activate_trigger_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTriggerInput"></a>

```python
activate_trigger_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bds_api_key_id_input`<sup>Optional</sup> <a name="bds_api_key_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyIdInput"></a>

```python
bds_api_key_id_input: str
```

- *Type:* str

---

##### `bds_api_key_passphrase_input`<sup>Optional</sup> <a name="bds_api_key_passphrase_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphraseInput"></a>

```python
bds_api_key_passphrase_input: str
```

- *Type:* str

---

##### `bds_instance_id_input`<sup>Optional</sup> <a name="bds_instance_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceIdInput"></a>

```python
bds_instance_id_input: str
```

- *Type:* str

---

##### `cluster_admin_password_input`<sup>Optional</sup> <a name="cluster_admin_password_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPasswordInput"></a>

```python
cluster_admin_password_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BdsBdsInstanceMetastoreConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>]

---

##### `activate_trigger`<sup>Required</sup> <a name="activate_trigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.activateTrigger"></a>

```python
activate_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `bds_api_key_id`<sup>Required</sup> <a name="bds_api_key_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyId"></a>

```python
bds_api_key_id: str
```

- *Type:* str

---

##### `bds_api_key_passphrase`<sup>Required</sup> <a name="bds_api_key_passphrase" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsApiKeyPassphrase"></a>

```python
bds_api_key_passphrase: str
```

- *Type:* str

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BdsBdsInstanceMetastoreConfigConfig <a name="BdsBdsInstanceMetastoreConfigConfig" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_metastore_config

bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bds_api_key_id: str,
  bds_api_key_passphrase: str,
  bds_instance_id: str,
  cluster_admin_password: str,
  metastore_id: str,
  activate_trigger: typing.Union[int, float] = None,
  display_name: str = None,
  id: str = None,
  timeouts: BdsBdsInstanceMetastoreConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyId">bds_api_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_id BdsBdsInstanceMetastoreConfig#bds_api_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyPassphrase">bds_api_key_passphrase</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_passphrase BdsBdsInstanceMetastoreConfig#bds_api_key_passphrase}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsInstanceId">bds_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_instance_id BdsBdsInstanceMetastoreConfig#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.clusterAdminPassword">cluster_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#cluster_admin_password BdsBdsInstanceMetastoreConfig#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#metastore_id BdsBdsInstanceMetastoreConfig#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.activateTrigger">activate_trigger</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#activate_trigger BdsBdsInstanceMetastoreConfig#activate_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#display_name BdsBdsInstanceMetastoreConfig#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#id BdsBdsInstanceMetastoreConfig#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bds_api_key_id`<sup>Required</sup> <a name="bds_api_key_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyId"></a>

```python
bds_api_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_id BdsBdsInstanceMetastoreConfig#bds_api_key_id}.

---

##### `bds_api_key_passphrase`<sup>Required</sup> <a name="bds_api_key_passphrase" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsApiKeyPassphrase"></a>

```python
bds_api_key_passphrase: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_api_key_passphrase BdsBdsInstanceMetastoreConfig#bds_api_key_passphrase}.

---

##### `bds_instance_id`<sup>Required</sup> <a name="bds_instance_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.bdsInstanceId"></a>

```python
bds_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#bds_instance_id BdsBdsInstanceMetastoreConfig#bds_instance_id}.

---

##### `cluster_admin_password`<sup>Required</sup> <a name="cluster_admin_password" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.clusterAdminPassword"></a>

```python
cluster_admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#cluster_admin_password BdsBdsInstanceMetastoreConfig#cluster_admin_password}.

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#metastore_id BdsBdsInstanceMetastoreConfig#metastore_id}.

---

##### `activate_trigger`<sup>Optional</sup> <a name="activate_trigger" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.activateTrigger"></a>

```python
activate_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#activate_trigger BdsBdsInstanceMetastoreConfig#activate_trigger}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#display_name BdsBdsInstanceMetastoreConfig#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#id BdsBdsInstanceMetastoreConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigConfig.property.timeouts"></a>

```python
timeouts: BdsBdsInstanceMetastoreConfigTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#timeouts BdsBdsInstanceMetastoreConfig#timeouts}

---

### BdsBdsInstanceMetastoreConfigTimeouts <a name="BdsBdsInstanceMetastoreConfigTimeouts" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_metastore_config

bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#create BdsBdsInstanceMetastoreConfig#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#delete BdsBdsInstanceMetastoreConfig#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#update BdsBdsInstanceMetastoreConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#create BdsBdsInstanceMetastoreConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#delete BdsBdsInstanceMetastoreConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_bds_instance_metastore_config#update BdsBdsInstanceMetastoreConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsBdsInstanceMetastoreConfigTimeoutsOutputReference <a name="BdsBdsInstanceMetastoreConfigTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import bds_bds_instance_metastore_config

bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BdsBdsInstanceMetastoreConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.bdsBdsInstanceMetastoreConfig.BdsBdsInstanceMetastoreConfigTimeouts">BdsBdsInstanceMetastoreConfigTimeouts</a>]

---



