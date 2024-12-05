# `mysqlHeatWaveCluster` Submodule <a name="`mysqlHeatWaveCluster` Submodule" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlHeatWaveCluster <a name="MysqlHeatWaveCluster" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster oci_mysql_heat_wave_cluster}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_heat_wave_cluster

mysqlHeatWaveCluster.MysqlHeatWaveCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_size: typing.Union[int, float],
  db_system_id: str,
  shape_name: str,
  id: str = None,
  is_lakehouse_enabled: typing.Union[bool, IResolvable] = None,
  state: str = None,
  timeouts: MysqlHeatWaveClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.clusterSize">cluster_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#cluster_size MysqlHeatWaveCluster#cluster_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#db_system_id MysqlHeatWaveCluster#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#shape_name MysqlHeatWaveCluster#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#id MysqlHeatWaveCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.isLakehouseEnabled">is_lakehouse_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#is_lakehouse_enabled MysqlHeatWaveCluster#is_lakehouse_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#state MysqlHeatWaveCluster#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts">MysqlHeatWaveClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_size`<sup>Required</sup> <a name="cluster_size" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.clusterSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#cluster_size MysqlHeatWaveCluster#cluster_size}.

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.dbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#db_system_id MysqlHeatWaveCluster#db_system_id}.

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.shapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#shape_name MysqlHeatWaveCluster#shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#id MysqlHeatWaveCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lakehouse_enabled`<sup>Optional</sup> <a name="is_lakehouse_enabled" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.isLakehouseEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#is_lakehouse_enabled MysqlHeatWaveCluster#is_lakehouse_enabled}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#state MysqlHeatWaveCluster#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts">MysqlHeatWaveClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#timeouts MysqlHeatWaveCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.resetIsLakehouseEnabled">reset_is_lakehouse_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#create MysqlHeatWaveCluster#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#delete MysqlHeatWaveCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#update MysqlHeatWaveCluster#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_lakehouse_enabled` <a name="reset_is_lakehouse_enabled" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.resetIsLakehouseEnabled"></a>

```python
def reset_is_lakehouse_enabled() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MysqlHeatWaveCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_heat_wave_cluster

mysqlHeatWaveCluster.MysqlHeatWaveCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_heat_wave_cluster

mysqlHeatWaveCluster.MysqlHeatWaveCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_heat_wave_cluster

mysqlHeatWaveCluster.MysqlHeatWaveCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_heat_wave_cluster

mysqlHeatWaveCluster.MysqlHeatWaveCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MysqlHeatWaveCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MysqlHeatWaveCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MysqlHeatWaveCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MysqlHeatWaveCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.clusterNodes">cluster_nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList">MysqlHeatWaveClusterClusterNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference">MysqlHeatWaveClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.clusterSizeInput">cluster_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.isLakehouseEnabledInput">is_lakehouse_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.shapeNameInput">shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts">MysqlHeatWaveClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.clusterSize">cluster_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.isLakehouseEnabled">is_lakehouse_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_nodes`<sup>Required</sup> <a name="cluster_nodes" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.clusterNodes"></a>

```python
cluster_nodes: MysqlHeatWaveClusterClusterNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList">MysqlHeatWaveClusterClusterNodesList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.timeouts"></a>

```python
timeouts: MysqlHeatWaveClusterTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference">MysqlHeatWaveClusterTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `cluster_size_input`<sup>Optional</sup> <a name="cluster_size_input" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.clusterSizeInput"></a>

```python
cluster_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_lakehouse_enabled_input`<sup>Optional</sup> <a name="is_lakehouse_enabled_input" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.isLakehouseEnabledInput"></a>

```python
is_lakehouse_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shape_name_input`<sup>Optional</sup> <a name="shape_name_input" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.shapeNameInput"></a>

```python
shape_name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MysqlHeatWaveClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts">MysqlHeatWaveClusterTimeouts</a>]

---

##### `cluster_size`<sup>Required</sup> <a name="cluster_size" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.clusterSize"></a>

```python
cluster_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lakehouse_enabled`<sup>Required</sup> <a name="is_lakehouse_enabled" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.isLakehouseEnabled"></a>

```python
is_lakehouse_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlHeatWaveClusterClusterNodes <a name="MysqlHeatWaveClusterClusterNodes" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_heat_wave_cluster

mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodes()
```


### MysqlHeatWaveClusterConfig <a name="MysqlHeatWaveClusterConfig" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_heat_wave_cluster

mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cluster_size: typing.Union[int, float],
  db_system_id: str,
  shape_name: str,
  id: str = None,
  is_lakehouse_enabled: typing.Union[bool, IResolvable] = None,
  state: str = None,
  timeouts: MysqlHeatWaveClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.clusterSize">cluster_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#cluster_size MysqlHeatWaveCluster#cluster_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#db_system_id MysqlHeatWaveCluster#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#shape_name MysqlHeatWaveCluster#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#id MysqlHeatWaveCluster#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.isLakehouseEnabled">is_lakehouse_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#is_lakehouse_enabled MysqlHeatWaveCluster#is_lakehouse_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#state MysqlHeatWaveCluster#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts">MysqlHeatWaveClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cluster_size`<sup>Required</sup> <a name="cluster_size" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.clusterSize"></a>

```python
cluster_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#cluster_size MysqlHeatWaveCluster#cluster_size}.

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#db_system_id MysqlHeatWaveCluster#db_system_id}.

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#shape_name MysqlHeatWaveCluster#shape_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#id MysqlHeatWaveCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lakehouse_enabled`<sup>Optional</sup> <a name="is_lakehouse_enabled" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.isLakehouseEnabled"></a>

```python
is_lakehouse_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#is_lakehouse_enabled MysqlHeatWaveCluster#is_lakehouse_enabled}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#state MysqlHeatWaveCluster#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterConfig.property.timeouts"></a>

```python
timeouts: MysqlHeatWaveClusterTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts">MysqlHeatWaveClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#timeouts MysqlHeatWaveCluster#timeouts}

---

### MysqlHeatWaveClusterTimeouts <a name="MysqlHeatWaveClusterTimeouts" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_heat_wave_cluster

mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#create MysqlHeatWaveCluster#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#delete MysqlHeatWaveCluster#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#update MysqlHeatWaveCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#create MysqlHeatWaveCluster#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#delete MysqlHeatWaveCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_heat_wave_cluster#update MysqlHeatWaveCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlHeatWaveClusterClusterNodesList <a name="MysqlHeatWaveClusterClusterNodesList" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_heat_wave_cluster

mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlHeatWaveClusterClusterNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlHeatWaveClusterClusterNodesOutputReference <a name="MysqlHeatWaveClusterClusterNodesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_heat_wave_cluster

mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.nodeId">node_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodes">MysqlHeatWaveClusterClusterNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `node_id`<sup>Required</sup> <a name="node_id" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.nodeId"></a>

```python
node_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodesOutputReference.property.internalValue"></a>

```python
internal_value: MysqlHeatWaveClusterClusterNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterClusterNodes">MysqlHeatWaveClusterClusterNodes</a>

---


### MysqlHeatWaveClusterTimeoutsOutputReference <a name="MysqlHeatWaveClusterTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_heat_wave_cluster

mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts">MysqlHeatWaveClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MysqlHeatWaveClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlHeatWaveCluster.MysqlHeatWaveClusterTimeouts">MysqlHeatWaveClusterTimeouts</a>]

---



