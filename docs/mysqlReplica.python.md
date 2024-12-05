# `mysqlReplica` Submodule <a name="`mysqlReplica` Submodule" id="rhizo-co-terraform-provider-oci.mysqlReplica"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlReplica <a name="MysqlReplica" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica oci_mysql_replica}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplica(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_system_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_delete_protected: typing.Union[bool, IResolvable] = None,
  replica_overrides: MysqlReplicaReplicaOverrides = None,
  timeouts: MysqlReplicaTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#db_system_id MysqlReplica#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#defined_tags MysqlReplica#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#description MysqlReplica#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#display_name MysqlReplica#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#freeform_tags MysqlReplica#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#id MysqlReplica#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.isDeleteProtected">is_delete_protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#is_delete_protected MysqlReplica#is_delete_protected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.replicaOverrides">replica_overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides">MysqlReplicaReplicaOverrides</a></code> | replica_overrides block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts">MysqlReplicaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.dbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#db_system_id MysqlReplica#db_system_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#defined_tags MysqlReplica#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#description MysqlReplica#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#display_name MysqlReplica#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#freeform_tags MysqlReplica#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#id MysqlReplica#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_delete_protected`<sup>Optional</sup> <a name="is_delete_protected" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.isDeleteProtected"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#is_delete_protected MysqlReplica#is_delete_protected}.

---

##### `replica_overrides`<sup>Optional</sup> <a name="replica_overrides" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.replicaOverrides"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides">MysqlReplicaReplicaOverrides</a>

replica_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#replica_overrides MysqlReplica#replica_overrides}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts">MysqlReplicaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#timeouts MysqlReplica#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.putReplicaOverrides">put_replica_overrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetIsDeleteProtected">reset_is_delete_protected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetReplicaOverrides">reset_replica_overrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_replica_overrides` <a name="put_replica_overrides" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.putReplicaOverrides"></a>

```python
def put_replica_overrides(
  configuration_id: str = None,
  mysql_version: str = None,
  shape_name: str = None
) -> None
```

###### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.putReplicaOverrides.parameter.configurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#configuration_id MysqlReplica#configuration_id}.

---

###### `mysql_version`<sup>Optional</sup> <a name="mysql_version" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.putReplicaOverrides.parameter.mysqlVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#mysql_version MysqlReplica#mysql_version}.

---

###### `shape_name`<sup>Optional</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.putReplicaOverrides.parameter.shapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#shape_name MysqlReplica#shape_name}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#create MysqlReplica#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#delete MysqlReplica#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#update MysqlReplica#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_delete_protected` <a name="reset_is_delete_protected" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetIsDeleteProtected"></a>

```python
def reset_is_delete_protected() -> None
```

##### `reset_replica_overrides` <a name="reset_replica_overrides" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetReplicaOverrides"></a>

```python
def reset_replica_overrides() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MysqlReplica resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplica.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplica.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplica.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplica.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MysqlReplica resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MysqlReplica to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MysqlReplica that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MysqlReplica to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.mysqlVersion">mysql_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.portX">port_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.replicaOverrides">replica_overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference">MysqlReplicaReplicaOverridesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.secureConnections">secure_connections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList">MysqlReplicaSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference">MysqlReplicaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.isDeleteProtectedInput">is_delete_protected_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.replicaOverridesInput">replica_overrides_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides">MysqlReplicaReplicaOverrides</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts">MysqlReplicaTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.isDeleteProtected">is_delete_protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `mysql_version`<sup>Required</sup> <a name="mysql_version" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.mysqlVersion"></a>

```python
mysql_version: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_x`<sup>Required</sup> <a name="port_x" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.portX"></a>

```python
port_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `replica_overrides`<sup>Required</sup> <a name="replica_overrides" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.replicaOverrides"></a>

```python
replica_overrides: MysqlReplicaReplicaOverridesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference">MysqlReplicaReplicaOverridesOutputReference</a>

---

##### `secure_connections`<sup>Required</sup> <a name="secure_connections" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.secureConnections"></a>

```python
secure_connections: MysqlReplicaSecureConnectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList">MysqlReplicaSecureConnectionsList</a>

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.timeouts"></a>

```python
timeouts: MysqlReplicaTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference">MysqlReplicaTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_delete_protected_input`<sup>Optional</sup> <a name="is_delete_protected_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.isDeleteProtectedInput"></a>

```python
is_delete_protected_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replica_overrides_input`<sup>Optional</sup> <a name="replica_overrides_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.replicaOverridesInput"></a>

```python
replica_overrides_input: MysqlReplicaReplicaOverrides
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides">MysqlReplicaReplicaOverrides</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MysqlReplicaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts">MysqlReplicaTimeouts</a>]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_delete_protected`<sup>Required</sup> <a name="is_delete_protected" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.isDeleteProtected"></a>

```python
is_delete_protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplica.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlReplicaConfig <a name="MysqlReplicaConfig" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplicaConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  db_system_id: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_delete_protected: typing.Union[bool, IResolvable] = None,
  replica_overrides: MysqlReplicaReplicaOverrides = None,
  timeouts: MysqlReplicaTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#db_system_id MysqlReplica#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#defined_tags MysqlReplica#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#description MysqlReplica#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#display_name MysqlReplica#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#freeform_tags MysqlReplica#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#id MysqlReplica#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.isDeleteProtected">is_delete_protected</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#is_delete_protected MysqlReplica#is_delete_protected}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.replicaOverrides">replica_overrides</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides">MysqlReplicaReplicaOverrides</a></code> | replica_overrides block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts">MysqlReplicaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#db_system_id MysqlReplica#db_system_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#defined_tags MysqlReplica#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#description MysqlReplica#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#display_name MysqlReplica#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#freeform_tags MysqlReplica#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#id MysqlReplica#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_delete_protected`<sup>Optional</sup> <a name="is_delete_protected" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.isDeleteProtected"></a>

```python
is_delete_protected: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#is_delete_protected MysqlReplica#is_delete_protected}.

---

##### `replica_overrides`<sup>Optional</sup> <a name="replica_overrides" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.replicaOverrides"></a>

```python
replica_overrides: MysqlReplicaReplicaOverrides
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides">MysqlReplicaReplicaOverrides</a>

replica_overrides block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#replica_overrides MysqlReplica#replica_overrides}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaConfig.property.timeouts"></a>

```python
timeouts: MysqlReplicaTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts">MysqlReplicaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#timeouts MysqlReplica#timeouts}

---

### MysqlReplicaReplicaOverrides <a name="MysqlReplicaReplicaOverrides" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplicaReplicaOverrides(
  configuration_id: str = None,
  mysql_version: str = None,
  shape_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides.property.configurationId">configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#configuration_id MysqlReplica#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides.property.mysqlVersion">mysql_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#mysql_version MysqlReplica#mysql_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides.property.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#shape_name MysqlReplica#shape_name}. |

---

##### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#configuration_id MysqlReplica#configuration_id}.

---

##### `mysql_version`<sup>Optional</sup> <a name="mysql_version" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides.property.mysqlVersion"></a>

```python
mysql_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#mysql_version MysqlReplica#mysql_version}.

---

##### `shape_name`<sup>Optional</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#shape_name MysqlReplica#shape_name}.

---

### MysqlReplicaSecureConnections <a name="MysqlReplicaSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplicaSecureConnections()
```


### MysqlReplicaTimeouts <a name="MysqlReplicaTimeouts" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplicaTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#create MysqlReplica#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#delete MysqlReplica#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#update MysqlReplica#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#create MysqlReplica#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#delete MysqlReplica#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_replica#update MysqlReplica#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlReplicaReplicaOverridesOutputReference <a name="MysqlReplicaReplicaOverridesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplicaReplicaOverridesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.resetConfigurationId">reset_configuration_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.resetMysqlVersion">reset_mysql_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.resetShapeName">reset_shape_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_configuration_id` <a name="reset_configuration_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.resetConfigurationId"></a>

```python
def reset_configuration_id() -> None
```

##### `reset_mysql_version` <a name="reset_mysql_version" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.resetMysqlVersion"></a>

```python
def reset_mysql_version() -> None
```

##### `reset_shape_name` <a name="reset_shape_name" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.resetShapeName"></a>

```python
def reset_shape_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.configurationIdInput">configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.mysqlVersionInput">mysql_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.shapeNameInput">shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.mysqlVersion">mysql_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides">MysqlReplicaReplicaOverrides</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_id_input`<sup>Optional</sup> <a name="configuration_id_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.configurationIdInput"></a>

```python
configuration_id_input: str
```

- *Type:* str

---

##### `mysql_version_input`<sup>Optional</sup> <a name="mysql_version_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.mysqlVersionInput"></a>

```python
mysql_version_input: str
```

- *Type:* str

---

##### `shape_name_input`<sup>Optional</sup> <a name="shape_name_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.shapeNameInput"></a>

```python
shape_name_input: str
```

- *Type:* str

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

##### `mysql_version`<sup>Required</sup> <a name="mysql_version" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.mysqlVersion"></a>

```python
mysql_version: str
```

- *Type:* str

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverridesOutputReference.property.internalValue"></a>

```python
internal_value: MysqlReplicaReplicaOverrides
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaReplicaOverrides">MysqlReplicaReplicaOverrides</a>

---


### MysqlReplicaSecureConnectionsList <a name="MysqlReplicaSecureConnectionsList" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplicaSecureConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlReplicaSecureConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlReplicaSecureConnectionsOutputReference <a name="MysqlReplicaSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplicaSecureConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.property.certificateGenerationType">certificate_generation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnections">MysqlReplicaSecureConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_generation_type`<sup>Required</sup> <a name="certificate_generation_type" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```python
certificate_generation_type: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: MysqlReplicaSecureConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaSecureConnections">MysqlReplicaSecureConnections</a>

---


### MysqlReplicaTimeoutsOutputReference <a name="MysqlReplicaTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_replica

mysqlReplica.MysqlReplicaTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts">MysqlReplicaTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MysqlReplicaTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlReplica.MysqlReplicaTimeouts">MysqlReplicaTimeouts</a>]

---



