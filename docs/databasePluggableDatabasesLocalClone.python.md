# `databasePluggableDatabasesLocalClone` Submodule <a name="`databasePluggableDatabasesLocalClone` Submodule" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePluggableDatabasesLocalClone <a name="DatabasePluggableDatabasesLocalClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone oci_database_pluggable_databases_local_clone}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloned_pdb_name: str,
  pluggable_database_id: str,
  id: str = None,
  pdb_admin_password: str = None,
  should_pdb_admin_account_be_locked: typing.Union[bool, IResolvable] = None,
  target_tde_wallet_password: str = None,
  timeouts: DatabasePluggableDatabasesLocalCloneTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.clonedPdbName">cloned_pdb_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#cloned_pdb_name DatabasePluggableDatabasesLocalClone#cloned_pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pluggable_database_id DatabasePluggableDatabasesLocalClone#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#id DatabasePluggableDatabasesLocalClone#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.pdbAdminPassword">pdb_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pdb_admin_password DatabasePluggableDatabasesLocalClone#pdb_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.shouldPdbAdminAccountBeLocked">should_pdb_admin_account_be_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesLocalClone#should_pdb_admin_account_be_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.targetTdeWalletPassword">target_tde_wallet_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#target_tde_wallet_password DatabasePluggableDatabasesLocalClone#target_tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloned_pdb_name`<sup>Required</sup> <a name="cloned_pdb_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.clonedPdbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#cloned_pdb_name DatabasePluggableDatabasesLocalClone#cloned_pdb_name}.

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.pluggableDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pluggable_database_id DatabasePluggableDatabasesLocalClone#pluggable_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#id DatabasePluggableDatabasesLocalClone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pdb_admin_password`<sup>Optional</sup> <a name="pdb_admin_password" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.pdbAdminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pdb_admin_password DatabasePluggableDatabasesLocalClone#pdb_admin_password}.

---

##### `should_pdb_admin_account_be_locked`<sup>Optional</sup> <a name="should_pdb_admin_account_be_locked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.shouldPdbAdminAccountBeLocked"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesLocalClone#should_pdb_admin_account_be_locked}.

---

##### `target_tde_wallet_password`<sup>Optional</sup> <a name="target_tde_wallet_password" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.targetTdeWalletPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#target_tde_wallet_password DatabasePluggableDatabasesLocalClone#target_tde_wallet_password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#timeouts DatabasePluggableDatabasesLocalClone#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetPdbAdminPassword">reset_pdb_admin_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetShouldPdbAdminAccountBeLocked">reset_should_pdb_admin_account_be_locked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTargetTdeWalletPassword">reset_target_tde_wallet_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#create DatabasePluggableDatabasesLocalClone#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#delete DatabasePluggableDatabasesLocalClone#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#update DatabasePluggableDatabasesLocalClone#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_pdb_admin_password` <a name="reset_pdb_admin_password" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetPdbAdminPassword"></a>

```python
def reset_pdb_admin_password() -> None
```

##### `reset_should_pdb_admin_account_be_locked` <a name="reset_should_pdb_admin_account_be_locked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetShouldPdbAdminAccountBeLocked"></a>

```python
def reset_should_pdb_admin_account_be_locked() -> None
```

##### `reset_target_tde_wallet_password` <a name="reset_target_tde_wallet_password" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTargetTdeWalletPassword"></a>

```python
def reset_target_tde_wallet_password() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabasePluggableDatabasesLocalClone resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabasePluggableDatabasesLocalClone resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabasePluggableDatabasesLocalClone to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabasePluggableDatabasesLocalClone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePluggableDatabasesLocalClone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connectionStrings">connection_strings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList">DatabasePluggableDatabasesLocalCloneConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.containerDatabaseId">container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.isRestricted">is_restricted</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbName">pdb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbNodeLevelDetails">pdb_node_level_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseManagementConfig">pluggable_database_management_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.refreshableCloneConfig">refreshable_clone_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference">DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbNameInput">cloned_pdb_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPasswordInput">pdb_admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseIdInput">pluggable_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLockedInput">should_pdb_admin_account_be_locked_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPasswordInput">target_tde_wallet_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbName">cloned_pdb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPassword">pdb_admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLocked">should_pdb_admin_account_be_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPassword">target_tde_wallet_password</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.connectionStrings"></a>

```python
connection_strings: DatabasePluggableDatabasesLocalCloneConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList">DatabasePluggableDatabasesLocalCloneConnectionStringsList</a>

---

##### `container_database_id`<sup>Required</sup> <a name="container_database_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.containerDatabaseId"></a>

```python
container_database_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_restricted`<sup>Required</sup> <a name="is_restricted" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.isRestricted"></a>

```python
is_restricted: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `pdb_name`<sup>Required</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

---

##### `pdb_node_level_details`<sup>Required</sup> <a name="pdb_node_level_details" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbNodeLevelDetails"></a>

```python
pdb_node_level_details: DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList</a>

---

##### `pluggable_database_management_config`<sup>Required</sup> <a name="pluggable_database_management_config" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseManagementConfig"></a>

```python
pluggable_database_management_config: DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList</a>

---

##### `refreshable_clone_config`<sup>Required</sup> <a name="refreshable_clone_config" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.refreshableCloneConfig"></a>

```python
refreshable_clone_config: DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeouts"></a>

```python
timeouts: DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference">DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference</a>

---

##### `cloned_pdb_name_input`<sup>Optional</sup> <a name="cloned_pdb_name_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbNameInput"></a>

```python
cloned_pdb_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `pdb_admin_password_input`<sup>Optional</sup> <a name="pdb_admin_password_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPasswordInput"></a>

```python
pdb_admin_password_input: str
```

- *Type:* str

---

##### `pluggable_database_id_input`<sup>Optional</sup> <a name="pluggable_database_id_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseIdInput"></a>

```python
pluggable_database_id_input: str
```

- *Type:* str

---

##### `should_pdb_admin_account_be_locked_input`<sup>Optional</sup> <a name="should_pdb_admin_account_be_locked_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLockedInput"></a>

```python
should_pdb_admin_account_be_locked_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_tde_wallet_password_input`<sup>Optional</sup> <a name="target_tde_wallet_password_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPasswordInput"></a>

```python
target_tde_wallet_password_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabasePluggableDatabasesLocalCloneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>]

---

##### `cloned_pdb_name`<sup>Required</sup> <a name="cloned_pdb_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.clonedPdbName"></a>

```python
cloned_pdb_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `pdb_admin_password`<sup>Required</sup> <a name="pdb_admin_password" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pdbAdminPassword"></a>

```python
pdb_admin_password: str
```

- *Type:* str

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.pluggableDatabaseId"></a>

```python
pluggable_database_id: str
```

- *Type:* str

---

##### `should_pdb_admin_account_be_locked`<sup>Required</sup> <a name="should_pdb_admin_account_be_locked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.shouldPdbAdminAccountBeLocked"></a>

```python
should_pdb_admin_account_be_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `target_tde_wallet_password`<sup>Required</sup> <a name="target_tde_wallet_password" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.targetTdeWalletPassword"></a>

```python
target_tde_wallet_password: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClone.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePluggableDatabasesLocalCloneConfig <a name="DatabasePluggableDatabasesLocalCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cloned_pdb_name: str,
  pluggable_database_id: str,
  id: str = None,
  pdb_admin_password: str = None,
  should_pdb_admin_account_be_locked: typing.Union[bool, IResolvable] = None,
  target_tde_wallet_password: str = None,
  timeouts: DatabasePluggableDatabasesLocalCloneTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.clonedPdbName">cloned_pdb_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#cloned_pdb_name DatabasePluggableDatabasesLocalClone#cloned_pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pluggable_database_id DatabasePluggableDatabasesLocalClone#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#id DatabasePluggableDatabasesLocalClone#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pdbAdminPassword">pdb_admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pdb_admin_password DatabasePluggableDatabasesLocalClone#pdb_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.shouldPdbAdminAccountBeLocked">should_pdb_admin_account_be_locked</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesLocalClone#should_pdb_admin_account_be_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.targetTdeWalletPassword">target_tde_wallet_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#target_tde_wallet_password DatabasePluggableDatabasesLocalClone#target_tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cloned_pdb_name`<sup>Required</sup> <a name="cloned_pdb_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.clonedPdbName"></a>

```python
cloned_pdb_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#cloned_pdb_name DatabasePluggableDatabasesLocalClone#cloned_pdb_name}.

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pluggableDatabaseId"></a>

```python
pluggable_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pluggable_database_id DatabasePluggableDatabasesLocalClone#pluggable_database_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#id DatabasePluggableDatabasesLocalClone#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pdb_admin_password`<sup>Optional</sup> <a name="pdb_admin_password" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.pdbAdminPassword"></a>

```python
pdb_admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#pdb_admin_password DatabasePluggableDatabasesLocalClone#pdb_admin_password}.

---

##### `should_pdb_admin_account_be_locked`<sup>Optional</sup> <a name="should_pdb_admin_account_be_locked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.shouldPdbAdminAccountBeLocked"></a>

```python
should_pdb_admin_account_be_locked: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#should_pdb_admin_account_be_locked DatabasePluggableDatabasesLocalClone#should_pdb_admin_account_be_locked}.

---

##### `target_tde_wallet_password`<sup>Optional</sup> <a name="target_tde_wallet_password" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.targetTdeWalletPassword"></a>

```python
target_tde_wallet_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#target_tde_wallet_password DatabasePluggableDatabasesLocalClone#target_tde_wallet_password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConfig.property.timeouts"></a>

```python
timeouts: DatabasePluggableDatabasesLocalCloneTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#timeouts DatabasePluggableDatabasesLocalClone#timeouts}

---

### DatabasePluggableDatabasesLocalCloneConnectionStrings <a name="DatabasePluggableDatabasesLocalCloneConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings()
```


### DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails <a name="DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails()
```


### DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig <a name="DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig()
```


### DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig <a name="DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig()
```


### DatabasePluggableDatabasesLocalCloneTimeouts <a name="DatabasePluggableDatabasesLocalCloneTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#create DatabasePluggableDatabasesLocalClone#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#delete DatabasePluggableDatabasesLocalClone#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#update DatabasePluggableDatabasesLocalClone#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#create DatabasePluggableDatabasesLocalClone#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#delete DatabasePluggableDatabasesLocalClone#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_databases_local_clone#update DatabasePluggableDatabasesLocalClone#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePluggableDatabasesLocalCloneConnectionStringsList <a name="DatabasePluggableDatabasesLocalCloneConnectionStringsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference <a name="DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.allConnectionStrings">all_connection_strings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbDefault">pdb_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbIpDefault">pdb_ip_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings">DatabasePluggableDatabasesLocalCloneConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_connection_strings`<sup>Required</sup> <a name="all_connection_strings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.allConnectionStrings"></a>

```python
all_connection_strings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `pdb_default`<sup>Required</sup> <a name="pdb_default" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbDefault"></a>

```python
pdb_default: str
```

- *Type:* str

---

##### `pdb_ip_default`<sup>Required</sup> <a name="pdb_ip_default" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.pdbIpDefault"></a>

```python
pdb_ip_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DatabasePluggableDatabasesLocalCloneConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneConnectionStrings">DatabasePluggableDatabasesLocalCloneConnectionStrings</a>

---


### DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList <a name="DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference <a name="DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.nodeName">node_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.openMode">open_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_name`<sup>Required</sup> <a name="node_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```python
node_name: str
```

- *Type:* str

---

##### `open_mode`<sup>Required</sup> <a name="open_mode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.openMode"></a>

```python
open_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails">DatabasePluggableDatabasesLocalClonePdbNodeLevelDetails</a>

---


### DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList <a name="DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference <a name="DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.managementStatus">management_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `management_status`<sup>Required</sup> <a name="management_status" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```python
management_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig">DatabasePluggableDatabasesLocalClonePluggableDatabaseManagementConfig</a>

---


### DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList <a name="DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference <a name="DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.isRefreshableClone">is_refreshable_clone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_refreshable_clone`<sup>Required</sup> <a name="is_refreshable_clone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```python
is_refreshable_clone: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig">DatabasePluggableDatabasesLocalCloneRefreshableCloneConfig</a>

---


### DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference <a name="DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_pluggable_databases_local_clone

databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabasePluggableDatabasesLocalCloneTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabasesLocalClone.DatabasePluggableDatabasesLocalCloneTimeouts">DatabasePluggableDatabasesLocalCloneTimeouts</a>]

---



