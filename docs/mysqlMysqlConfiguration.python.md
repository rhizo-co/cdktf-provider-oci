# `mysqlMysqlConfiguration` Submodule <a name="`mysqlMysqlConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlConfiguration <a name="MysqlMysqlConfiguration" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration oci_mysql_mysql_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfiguration(
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
  shape_name: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  init_variables: MysqlMysqlConfigurationInitVariables = None,
  parent_configuration_id: str = None,
  timeouts: MysqlMysqlConfigurationTimeouts = None,
  variables: MysqlMysqlConfigurationVariables = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.initVariables">init_variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | init_variables block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.parentConfigurationId">parent_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | variables block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}.

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.shapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `init_variables`<sup>Optional</sup> <a name="init_variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.initVariables"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

init_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#init_variables MysqlMysqlConfiguration#init_variables}

---

##### `parent_configuration_id`<sup>Optional</sup> <a name="parent_configuration_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.parentConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#timeouts MysqlMysqlConfiguration#timeouts}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.Initializer.parameter.variables"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#variables MysqlMysqlConfiguration#variables}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables">put_init_variables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables">put_variables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetInitVariables">reset_init_variables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetParentConfigurationId">reset_parent_configuration_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetVariables">reset_variables</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_init_variables` <a name="put_init_variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables"></a>

```python
def put_init_variables(
  lower_case_table_names: str = None
) -> None
```

###### `lower_case_table_names`<sup>Optional</sup> <a name="lower_case_table_names" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putInitVariables.parameter.lowerCaseTableNames"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}.

---

##### `put_variables` <a name="put_variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables"></a>

```python
def put_variables(
  autocommit: typing.Union[bool, IResolvable] = None,
  big_tables: typing.Union[bool, IResolvable] = None,
  binlog_expire_logs_seconds: typing.Union[int, float] = None,
  binlog_row_metadata: str = None,
  binlog_row_value_options: str = None,
  binlog_transaction_compression: typing.Union[bool, IResolvable] = None,
  completion_type: str = None,
  connection_memory_chunk_size: typing.Union[int, float] = None,
  connection_memory_limit: str = None,
  connect_timeout: typing.Union[int, float] = None,
  cte_max_recursion_depth: str = None,
  default_authentication_plugin: str = None,
  foreign_key_checks: typing.Union[bool, IResolvable] = None,
  generated_random_password_length: typing.Union[int, float] = None,
  global_connection_memory_limit: str = None,
  global_connection_memory_tracking: typing.Union[bool, IResolvable] = None,
  group_replication_consistency: str = None,
  information_schema_stats_expiry: typing.Union[int, float] = None,
  innodb_buffer_pool_dump_pct: typing.Union[int, float] = None,
  innodb_buffer_pool_instances: typing.Union[int, float] = None,
  innodb_buffer_pool_size: str = None,
  innodb_ddl_buffer_size: str = None,
  innodb_ddl_threads: typing.Union[int, float] = None,
  innodb_ft_enable_stopword: typing.Union[bool, IResolvable] = None,
  innodb_ft_max_token_size: typing.Union[int, float] = None,
  innodb_ft_min_token_size: typing.Union[int, float] = None,
  innodb_ft_num_word_optimize: typing.Union[int, float] = None,
  innodb_ft_result_cache_limit: str = None,
  innodb_ft_server_stopword_table: str = None,
  innodb_lock_wait_timeout: typing.Union[int, float] = None,
  innodb_log_writer_threads: typing.Union[bool, IResolvable] = None,
  innodb_max_purge_lag: str = None,
  innodb_max_purge_lag_delay: typing.Union[int, float] = None,
  innodb_stats_persistent_sample_pages: str = None,
  innodb_stats_transient_sample_pages: str = None,
  interactive_timeout: typing.Union[int, float] = None,
  local_infile: typing.Union[bool, IResolvable] = None,
  mandatory_roles: str = None,
  max_allowed_packet: typing.Union[int, float] = None,
  max_binlog_cache_size: str = None,
  max_connect_errors: str = None,
  max_connections: typing.Union[int, float] = None,
  max_execution_time: str = None,
  max_heap_table_size: str = None,
  max_prepared_stmt_count: typing.Union[int, float] = None,
  mysql_firewall_mode: typing.Union[bool, IResolvable] = None,
  mysqlx_connect_timeout: typing.Union[int, float] = None,
  mysqlx_deflate_default_compression_level: typing.Union[int, float] = None,
  mysqlx_deflate_max_client_compression_level: typing.Union[int, float] = None,
  mysqlx_document_id_unique_prefix: typing.Union[int, float] = None,
  mysqlx_enable_hello_notice: typing.Union[bool, IResolvable] = None,
  mysqlx_idle_worker_thread_timeout: typing.Union[int, float] = None,
  mysqlx_interactive_timeout: typing.Union[int, float] = None,
  mysqlx_lz4_default_compression_level: typing.Union[int, float] = None,
  mysqlx_lz4_max_client_compression_level: typing.Union[int, float] = None,
  mysqlx_max_allowed_packet: typing.Union[int, float] = None,
  mysqlx_min_worker_threads: typing.Union[int, float] = None,
  mysqlx_read_timeout: typing.Union[int, float] = None,
  mysqlx_wait_timeout: typing.Union[int, float] = None,
  mysqlx_write_timeout: typing.Union[int, float] = None,
  mysqlx_zstd_default_compression_level: typing.Union[int, float] = None,
  mysqlx_zstd_max_client_compression_level: typing.Union[int, float] = None,
  mysql_zstd_default_compression_level: typing.Union[int, float] = None,
  net_read_timeout: typing.Union[int, float] = None,
  net_write_timeout: typing.Union[int, float] = None,
  parser_max_mem_size: str = None,
  query_alloc_block_size: str = None,
  query_prealloc_size: str = None,
  regexp_time_limit: typing.Union[int, float] = None,
  sort_buffer_size: str = None,
  sql_mode: str = None,
  sql_require_primary_key: typing.Union[bool, IResolvable] = None,
  sql_warnings: typing.Union[bool, IResolvable] = None,
  thread_pool_dedicated_listeners: typing.Union[bool, IResolvable] = None,
  thread_pool_max_transactions_limit: typing.Union[int, float] = None,
  time_zone: str = None,
  tmp_table_size: str = None,
  transaction_isolation: str = None,
  wait_timeout: typing.Union[int, float] = None
) -> None
```

###### `autocommit`<sup>Optional</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.autocommit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}.

---

###### `big_tables`<sup>Optional</sup> <a name="big_tables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.bigTables"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}.

---

###### `binlog_expire_logs_seconds`<sup>Optional</sup> <a name="binlog_expire_logs_seconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.binlogExpireLogsSeconds"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}.

---

###### `binlog_row_metadata`<sup>Optional</sup> <a name="binlog_row_metadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.binlogRowMetadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}.

---

###### `binlog_row_value_options`<sup>Optional</sup> <a name="binlog_row_value_options" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.binlogRowValueOptions"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}.

---

###### `binlog_transaction_compression`<sup>Optional</sup> <a name="binlog_transaction_compression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.binlogTransactionCompression"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}.

---

###### `completion_type`<sup>Optional</sup> <a name="completion_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.completionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}.

---

###### `connection_memory_chunk_size`<sup>Optional</sup> <a name="connection_memory_chunk_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.connectionMemoryChunkSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}.

---

###### `connection_memory_limit`<sup>Optional</sup> <a name="connection_memory_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.connectionMemoryLimit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}.

---

###### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.connectTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}.

---

###### `cte_max_recursion_depth`<sup>Optional</sup> <a name="cte_max_recursion_depth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.cteMaxRecursionDepth"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}.

---

###### `default_authentication_plugin`<sup>Optional</sup> <a name="default_authentication_plugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.defaultAuthenticationPlugin"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}.

---

###### `foreign_key_checks`<sup>Optional</sup> <a name="foreign_key_checks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.foreignKeyChecks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}.

---

###### `generated_random_password_length`<sup>Optional</sup> <a name="generated_random_password_length" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.generatedRandomPasswordLength"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}.

---

###### `global_connection_memory_limit`<sup>Optional</sup> <a name="global_connection_memory_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.globalConnectionMemoryLimit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}.

---

###### `global_connection_memory_tracking`<sup>Optional</sup> <a name="global_connection_memory_tracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.globalConnectionMemoryTracking"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}.

---

###### `group_replication_consistency`<sup>Optional</sup> <a name="group_replication_consistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.groupReplicationConsistency"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}.

---

###### `information_schema_stats_expiry`<sup>Optional</sup> <a name="information_schema_stats_expiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.informationSchemaStatsExpiry"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}.

---

###### `innodb_buffer_pool_dump_pct`<sup>Optional</sup> <a name="innodb_buffer_pool_dump_pct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbBufferPoolDumpPct"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}.

---

###### `innodb_buffer_pool_instances`<sup>Optional</sup> <a name="innodb_buffer_pool_instances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbBufferPoolInstances"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}.

---

###### `innodb_buffer_pool_size`<sup>Optional</sup> <a name="innodb_buffer_pool_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbBufferPoolSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}.

---

###### `innodb_ddl_buffer_size`<sup>Optional</sup> <a name="innodb_ddl_buffer_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbDdlBufferSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}.

---

###### `innodb_ddl_threads`<sup>Optional</sup> <a name="innodb_ddl_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbDdlThreads"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}.

---

###### `innodb_ft_enable_stopword`<sup>Optional</sup> <a name="innodb_ft_enable_stopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbFtEnableStopword"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}.

---

###### `innodb_ft_max_token_size`<sup>Optional</sup> <a name="innodb_ft_max_token_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbFtMaxTokenSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}.

---

###### `innodb_ft_min_token_size`<sup>Optional</sup> <a name="innodb_ft_min_token_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbFtMinTokenSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}.

---

###### `innodb_ft_num_word_optimize`<sup>Optional</sup> <a name="innodb_ft_num_word_optimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbFtNumWordOptimize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}.

---

###### `innodb_ft_result_cache_limit`<sup>Optional</sup> <a name="innodb_ft_result_cache_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbFtResultCacheLimit"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}.

---

###### `innodb_ft_server_stopword_table`<sup>Optional</sup> <a name="innodb_ft_server_stopword_table" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbFtServerStopwordTable"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}.

---

###### `innodb_lock_wait_timeout`<sup>Optional</sup> <a name="innodb_lock_wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbLockWaitTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}.

---

###### `innodb_log_writer_threads`<sup>Optional</sup> <a name="innodb_log_writer_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbLogWriterThreads"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}.

---

###### `innodb_max_purge_lag`<sup>Optional</sup> <a name="innodb_max_purge_lag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbMaxPurgeLag"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}.

---

###### `innodb_max_purge_lag_delay`<sup>Optional</sup> <a name="innodb_max_purge_lag_delay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbMaxPurgeLagDelay"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}.

---

###### `innodb_stats_persistent_sample_pages`<sup>Optional</sup> <a name="innodb_stats_persistent_sample_pages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbStatsPersistentSamplePages"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}.

---

###### `innodb_stats_transient_sample_pages`<sup>Optional</sup> <a name="innodb_stats_transient_sample_pages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.innodbStatsTransientSamplePages"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}.

---

###### `interactive_timeout`<sup>Optional</sup> <a name="interactive_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.interactiveTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}.

---

###### `local_infile`<sup>Optional</sup> <a name="local_infile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.localInfile"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}.

---

###### `mandatory_roles`<sup>Optional</sup> <a name="mandatory_roles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mandatoryRoles"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}.

---

###### `max_allowed_packet`<sup>Optional</sup> <a name="max_allowed_packet" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.maxAllowedPacket"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}.

---

###### `max_binlog_cache_size`<sup>Optional</sup> <a name="max_binlog_cache_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.maxBinlogCacheSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}.

---

###### `max_connect_errors`<sup>Optional</sup> <a name="max_connect_errors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.maxConnectErrors"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}.

---

###### `max_connections`<sup>Optional</sup> <a name="max_connections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.maxConnections"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}.

---

###### `max_execution_time`<sup>Optional</sup> <a name="max_execution_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.maxExecutionTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}.

---

###### `max_heap_table_size`<sup>Optional</sup> <a name="max_heap_table_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.maxHeapTableSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}.

---

###### `max_prepared_stmt_count`<sup>Optional</sup> <a name="max_prepared_stmt_count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.maxPreparedStmtCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}.

---

###### `mysql_firewall_mode`<sup>Optional</sup> <a name="mysql_firewall_mode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlFirewallMode"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}.

---

###### `mysqlx_connect_timeout`<sup>Optional</sup> <a name="mysqlx_connect_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxConnectTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}.

---

###### `mysqlx_deflate_default_compression_level`<sup>Optional</sup> <a name="mysqlx_deflate_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxDeflateDefaultCompressionLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}.

---

###### `mysqlx_deflate_max_client_compression_level`<sup>Optional</sup> <a name="mysqlx_deflate_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxDeflateMaxClientCompressionLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}.

---

###### `mysqlx_document_id_unique_prefix`<sup>Optional</sup> <a name="mysqlx_document_id_unique_prefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxDocumentIdUniquePrefix"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}.

---

###### `mysqlx_enable_hello_notice`<sup>Optional</sup> <a name="mysqlx_enable_hello_notice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxEnableHelloNotice"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}.

---

###### `mysqlx_idle_worker_thread_timeout`<sup>Optional</sup> <a name="mysqlx_idle_worker_thread_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxIdleWorkerThreadTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}.

---

###### `mysqlx_interactive_timeout`<sup>Optional</sup> <a name="mysqlx_interactive_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxInteractiveTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}.

---

###### `mysqlx_lz4_default_compression_level`<sup>Optional</sup> <a name="mysqlx_lz4_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxLz4DefaultCompressionLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}.

---

###### `mysqlx_lz4_max_client_compression_level`<sup>Optional</sup> <a name="mysqlx_lz4_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxLz4MaxClientCompressionLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}.

---

###### `mysqlx_max_allowed_packet`<sup>Optional</sup> <a name="mysqlx_max_allowed_packet" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxMaxAllowedPacket"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}.

---

###### `mysqlx_min_worker_threads`<sup>Optional</sup> <a name="mysqlx_min_worker_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxMinWorkerThreads"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}.

---

###### `mysqlx_read_timeout`<sup>Optional</sup> <a name="mysqlx_read_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxReadTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}.

---

###### `mysqlx_wait_timeout`<sup>Optional</sup> <a name="mysqlx_wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxWaitTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}.

---

###### `mysqlx_write_timeout`<sup>Optional</sup> <a name="mysqlx_write_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxWriteTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}.

---

###### `mysqlx_zstd_default_compression_level`<sup>Optional</sup> <a name="mysqlx_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxZstdDefaultCompressionLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}.

---

###### `mysqlx_zstd_max_client_compression_level`<sup>Optional</sup> <a name="mysqlx_zstd_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlxZstdMaxClientCompressionLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}.

---

###### `mysql_zstd_default_compression_level`<sup>Optional</sup> <a name="mysql_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.mysqlZstdDefaultCompressionLevel"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}.

---

###### `net_read_timeout`<sup>Optional</sup> <a name="net_read_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.netReadTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}.

---

###### `net_write_timeout`<sup>Optional</sup> <a name="net_write_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.netWriteTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}.

---

###### `parser_max_mem_size`<sup>Optional</sup> <a name="parser_max_mem_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.parserMaxMemSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}.

---

###### `query_alloc_block_size`<sup>Optional</sup> <a name="query_alloc_block_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.queryAllocBlockSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}.

---

###### `query_prealloc_size`<sup>Optional</sup> <a name="query_prealloc_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.queryPreallocSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}.

---

###### `regexp_time_limit`<sup>Optional</sup> <a name="regexp_time_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.regexpTimeLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}.

---

###### `sort_buffer_size`<sup>Optional</sup> <a name="sort_buffer_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.sortBufferSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}.

---

###### `sql_mode`<sup>Optional</sup> <a name="sql_mode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.sqlMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}.

---

###### `sql_require_primary_key`<sup>Optional</sup> <a name="sql_require_primary_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.sqlRequirePrimaryKey"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}.

---

###### `sql_warnings`<sup>Optional</sup> <a name="sql_warnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.sqlWarnings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}.

---

###### `thread_pool_dedicated_listeners`<sup>Optional</sup> <a name="thread_pool_dedicated_listeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.threadPoolDedicatedListeners"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}.

---

###### `thread_pool_max_transactions_limit`<sup>Optional</sup> <a name="thread_pool_max_transactions_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.threadPoolMaxTransactionsLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}.

---

###### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}.

---

###### `tmp_table_size`<sup>Optional</sup> <a name="tmp_table_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.tmpTableSize"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}.

---

###### `transaction_isolation`<sup>Optional</sup> <a name="transaction_isolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.transactionIsolation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}.

---

###### `wait_timeout`<sup>Optional</sup> <a name="wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.putVariables.parameter.waitTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_init_variables` <a name="reset_init_variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetInitVariables"></a>

```python
def reset_init_variables() -> None
```

##### `reset_parent_configuration_id` <a name="reset_parent_configuration_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetParentConfigurationId"></a>

```python
def reset_parent_configuration_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_variables` <a name="reset_variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.resetVariables"></a>

```python
def reset_variables() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfiguration.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MysqlMysqlConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MysqlMysqlConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariables">init_variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference">MysqlMysqlConfigurationInitVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference">MysqlMysqlConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference">MysqlMysqlConfigurationVariablesOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariablesInput">init_variables_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationIdInput">parent_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeNameInput">shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variablesInput">variables_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationId">parent_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `init_variables`<sup>Required</sup> <a name="init_variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariables"></a>

```python
init_variables: MysqlMysqlConfigurationInitVariablesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference">MysqlMysqlConfigurationInitVariablesOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeouts"></a>

```python
timeouts: MysqlMysqlConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference">MysqlMysqlConfigurationTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variables"></a>

```python
variables: MysqlMysqlConfigurationVariablesOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference">MysqlMysqlConfigurationVariablesOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `init_variables_input`<sup>Optional</sup> <a name="init_variables_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.initVariablesInput"></a>

```python
init_variables_input: MysqlMysqlConfigurationInitVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---

##### `parent_configuration_id_input`<sup>Optional</sup> <a name="parent_configuration_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationIdInput"></a>

```python
parent_configuration_id_input: str
```

- *Type:* str

---

##### `shape_name_input`<sup>Optional</sup> <a name="shape_name_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeNameInput"></a>

```python
shape_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MysqlMysqlConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>]

---

##### `variables_input`<sup>Optional</sup> <a name="variables_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.variablesInput"></a>

```python
variables_input: MysqlMysqlConfigurationVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `parent_configuration_id`<sup>Required</sup> <a name="parent_configuration_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.parentConfigurationId"></a>

```python
parent_configuration_id: str
```

- *Type:* str

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlConfigurationConfig <a name="MysqlMysqlConfigurationConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  shape_name: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  init_variables: MysqlMysqlConfigurationInitVariables = None,
  parent_configuration_id: str = None,
  timeouts: MysqlMysqlConfigurationTimeouts = None,
  variables: MysqlMysqlConfigurationVariables = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.initVariables">init_variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | init_variables block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.parentConfigurationId">parent_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | variables block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#compartment_id MysqlMysqlConfiguration#compartment_id}.

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#shape_name MysqlMysqlConfiguration#shape_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#defined_tags MysqlMysqlConfiguration#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#description MysqlMysqlConfiguration#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#display_name MysqlMysqlConfiguration#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#freeform_tags MysqlMysqlConfiguration#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#id MysqlMysqlConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `init_variables`<sup>Optional</sup> <a name="init_variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.initVariables"></a>

```python
init_variables: MysqlMysqlConfigurationInitVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

init_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#init_variables MysqlMysqlConfiguration#init_variables}

---

##### `parent_configuration_id`<sup>Optional</sup> <a name="parent_configuration_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.parentConfigurationId"></a>

```python
parent_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parent_configuration_id MysqlMysqlConfiguration#parent_configuration_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.timeouts"></a>

```python
timeouts: MysqlMysqlConfigurationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#timeouts MysqlMysqlConfiguration#timeouts}

---

##### `variables`<sup>Optional</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationConfig.property.variables"></a>

```python
variables: MysqlMysqlConfigurationVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#variables MysqlMysqlConfiguration#variables}

---

### MysqlMysqlConfigurationInitVariables <a name="MysqlMysqlConfigurationInitVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables(
  lower_case_table_names: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.property.lowerCaseTableNames">lower_case_table_names</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}. |

---

##### `lower_case_table_names`<sup>Optional</sup> <a name="lower_case_table_names" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables.property.lowerCaseTableNames"></a>

```python
lower_case_table_names: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#lower_case_table_names MysqlMysqlConfiguration#lower_case_table_names}.

---

### MysqlMysqlConfigurationTimeouts <a name="MysqlMysqlConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#create MysqlMysqlConfiguration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#delete MysqlMysqlConfiguration#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#update MysqlMysqlConfiguration#update}.

---

### MysqlMysqlConfigurationVariables <a name="MysqlMysqlConfigurationVariables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables(
  autocommit: typing.Union[bool, IResolvable] = None,
  big_tables: typing.Union[bool, IResolvable] = None,
  binlog_expire_logs_seconds: typing.Union[int, float] = None,
  binlog_row_metadata: str = None,
  binlog_row_value_options: str = None,
  binlog_transaction_compression: typing.Union[bool, IResolvable] = None,
  completion_type: str = None,
  connection_memory_chunk_size: typing.Union[int, float] = None,
  connection_memory_limit: str = None,
  connect_timeout: typing.Union[int, float] = None,
  cte_max_recursion_depth: str = None,
  default_authentication_plugin: str = None,
  foreign_key_checks: typing.Union[bool, IResolvable] = None,
  generated_random_password_length: typing.Union[int, float] = None,
  global_connection_memory_limit: str = None,
  global_connection_memory_tracking: typing.Union[bool, IResolvable] = None,
  group_replication_consistency: str = None,
  information_schema_stats_expiry: typing.Union[int, float] = None,
  innodb_buffer_pool_dump_pct: typing.Union[int, float] = None,
  innodb_buffer_pool_instances: typing.Union[int, float] = None,
  innodb_buffer_pool_size: str = None,
  innodb_ddl_buffer_size: str = None,
  innodb_ddl_threads: typing.Union[int, float] = None,
  innodb_ft_enable_stopword: typing.Union[bool, IResolvable] = None,
  innodb_ft_max_token_size: typing.Union[int, float] = None,
  innodb_ft_min_token_size: typing.Union[int, float] = None,
  innodb_ft_num_word_optimize: typing.Union[int, float] = None,
  innodb_ft_result_cache_limit: str = None,
  innodb_ft_server_stopword_table: str = None,
  innodb_lock_wait_timeout: typing.Union[int, float] = None,
  innodb_log_writer_threads: typing.Union[bool, IResolvable] = None,
  innodb_max_purge_lag: str = None,
  innodb_max_purge_lag_delay: typing.Union[int, float] = None,
  innodb_stats_persistent_sample_pages: str = None,
  innodb_stats_transient_sample_pages: str = None,
  interactive_timeout: typing.Union[int, float] = None,
  local_infile: typing.Union[bool, IResolvable] = None,
  mandatory_roles: str = None,
  max_allowed_packet: typing.Union[int, float] = None,
  max_binlog_cache_size: str = None,
  max_connect_errors: str = None,
  max_connections: typing.Union[int, float] = None,
  max_execution_time: str = None,
  max_heap_table_size: str = None,
  max_prepared_stmt_count: typing.Union[int, float] = None,
  mysql_firewall_mode: typing.Union[bool, IResolvable] = None,
  mysqlx_connect_timeout: typing.Union[int, float] = None,
  mysqlx_deflate_default_compression_level: typing.Union[int, float] = None,
  mysqlx_deflate_max_client_compression_level: typing.Union[int, float] = None,
  mysqlx_document_id_unique_prefix: typing.Union[int, float] = None,
  mysqlx_enable_hello_notice: typing.Union[bool, IResolvable] = None,
  mysqlx_idle_worker_thread_timeout: typing.Union[int, float] = None,
  mysqlx_interactive_timeout: typing.Union[int, float] = None,
  mysqlx_lz4_default_compression_level: typing.Union[int, float] = None,
  mysqlx_lz4_max_client_compression_level: typing.Union[int, float] = None,
  mysqlx_max_allowed_packet: typing.Union[int, float] = None,
  mysqlx_min_worker_threads: typing.Union[int, float] = None,
  mysqlx_read_timeout: typing.Union[int, float] = None,
  mysqlx_wait_timeout: typing.Union[int, float] = None,
  mysqlx_write_timeout: typing.Union[int, float] = None,
  mysqlx_zstd_default_compression_level: typing.Union[int, float] = None,
  mysqlx_zstd_max_client_compression_level: typing.Union[int, float] = None,
  mysql_zstd_default_compression_level: typing.Union[int, float] = None,
  net_read_timeout: typing.Union[int, float] = None,
  net_write_timeout: typing.Union[int, float] = None,
  parser_max_mem_size: str = None,
  query_alloc_block_size: str = None,
  query_prealloc_size: str = None,
  regexp_time_limit: typing.Union[int, float] = None,
  sort_buffer_size: str = None,
  sql_mode: str = None,
  sql_require_primary_key: typing.Union[bool, IResolvable] = None,
  sql_warnings: typing.Union[bool, IResolvable] = None,
  thread_pool_dedicated_listeners: typing.Union[bool, IResolvable] = None,
  thread_pool_max_transactions_limit: typing.Union[int, float] = None,
  time_zone: str = None,
  tmp_table_size: str = None,
  transaction_isolation: str = None,
  wait_timeout: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.autocommit">autocommit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.bigTables">big_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogExpireLogsSeconds">binlog_expire_logs_seconds</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowMetadata">binlog_row_metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowValueOptions">binlog_row_value_options</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogTransactionCompression">binlog_transaction_compression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.completionType">completion_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryChunkSize">connection_memory_chunk_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryLimit">connection_memory_limit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.cteMaxRecursionDepth">cte_max_recursion_depth</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.defaultAuthenticationPlugin">default_authentication_plugin</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.foreignKeyChecks">foreign_key_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.generatedRandomPasswordLength">generated_random_password_length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryLimit">global_connection_memory_limit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryTracking">global_connection_memory_tracking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.groupReplicationConsistency">group_replication_consistency</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.informationSchemaStatsExpiry">information_schema_stats_expiry</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolDumpPct">innodb_buffer_pool_dump_pct</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolInstances">innodb_buffer_pool_instances</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolSize">innodb_buffer_pool_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlBufferSize">innodb_ddl_buffer_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlThreads">innodb_ddl_threads</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtEnableStopword">innodb_ft_enable_stopword</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMaxTokenSize">innodb_ft_max_token_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMinTokenSize">innodb_ft_min_token_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtNumWordOptimize">innodb_ft_num_word_optimize</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtResultCacheLimit">innodb_ft_result_cache_limit</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtServerStopwordTable">innodb_ft_server_stopword_table</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLockWaitTimeout">innodb_lock_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLogWriterThreads">innodb_log_writer_threads</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLag">innodb_max_purge_lag</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLagDelay">innodb_max_purge_lag_delay</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsPersistentSamplePages">innodb_stats_persistent_sample_pages</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsTransientSamplePages">innodb_stats_transient_sample_pages</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.interactiveTimeout">interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.localInfile">local_infile</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mandatoryRoles">mandatory_roles</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxAllowedPacket">max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxBinlogCacheSize">max_binlog_cache_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnectErrors">max_connect_errors</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxExecutionTime">max_execution_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxHeapTableSize">max_heap_table_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxPreparedStmtCount">max_prepared_stmt_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlFirewallMode">mysql_firewall_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxConnectTimeout">mysqlx_connect_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateDefaultCompressionLevel">mysqlx_deflate_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateMaxClientCompressionLevel">mysqlx_deflate_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDocumentIdUniquePrefix">mysqlx_document_id_unique_prefix</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxEnableHelloNotice">mysqlx_enable_hello_notice</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxIdleWorkerThreadTimeout">mysqlx_idle_worker_thread_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxInteractiveTimeout">mysqlx_interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4DefaultCompressionLevel">mysqlx_lz4_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4MaxClientCompressionLevel">mysqlx_lz4_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMaxAllowedPacket">mysqlx_max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMinWorkerThreads">mysqlx_min_worker_threads</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxReadTimeout">mysqlx_read_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWaitTimeout">mysqlx_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWriteTimeout">mysqlx_write_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdDefaultCompressionLevel">mysqlx_zstd_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdMaxClientCompressionLevel">mysqlx_zstd_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlZstdDefaultCompressionLevel">mysql_zstd_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netReadTimeout">net_read_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netWriteTimeout">net_write_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.parserMaxMemSize">parser_max_mem_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryAllocBlockSize">query_alloc_block_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryPreallocSize">query_prealloc_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.regexpTimeLimit">regexp_time_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sortBufferSize">sort_buffer_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlMode">sql_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlRequirePrimaryKey">sql_require_primary_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlWarnings">sql_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolDedicatedListeners">thread_pool_dedicated_listeners</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolMaxTransactionsLimit">thread_pool_max_transactions_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.tmpTableSize">tmp_table_size</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.transactionIsolation">transaction_isolation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}. |

---

##### `autocommit`<sup>Optional</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.autocommit"></a>

```python
autocommit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#autocommit MysqlMysqlConfiguration#autocommit}.

---

##### `big_tables`<sup>Optional</sup> <a name="big_tables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.bigTables"></a>

```python
big_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#big_tables MysqlMysqlConfiguration#big_tables}.

---

##### `binlog_expire_logs_seconds`<sup>Optional</sup> <a name="binlog_expire_logs_seconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogExpireLogsSeconds"></a>

```python
binlog_expire_logs_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_expire_logs_seconds MysqlMysqlConfiguration#binlog_expire_logs_seconds}.

---

##### `binlog_row_metadata`<sup>Optional</sup> <a name="binlog_row_metadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowMetadata"></a>

```python
binlog_row_metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_metadata MysqlMysqlConfiguration#binlog_row_metadata}.

---

##### `binlog_row_value_options`<sup>Optional</sup> <a name="binlog_row_value_options" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogRowValueOptions"></a>

```python
binlog_row_value_options: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_row_value_options MysqlMysqlConfiguration#binlog_row_value_options}.

---

##### `binlog_transaction_compression`<sup>Optional</sup> <a name="binlog_transaction_compression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.binlogTransactionCompression"></a>

```python
binlog_transaction_compression: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#binlog_transaction_compression MysqlMysqlConfiguration#binlog_transaction_compression}.

---

##### `completion_type`<sup>Optional</sup> <a name="completion_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.completionType"></a>

```python
completion_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#completion_type MysqlMysqlConfiguration#completion_type}.

---

##### `connection_memory_chunk_size`<sup>Optional</sup> <a name="connection_memory_chunk_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryChunkSize"></a>

```python
connection_memory_chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_chunk_size MysqlMysqlConfiguration#connection_memory_chunk_size}.

---

##### `connection_memory_limit`<sup>Optional</sup> <a name="connection_memory_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectionMemoryLimit"></a>

```python
connection_memory_limit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connection_memory_limit MysqlMysqlConfiguration#connection_memory_limit}.

---

##### `connect_timeout`<sup>Optional</sup> <a name="connect_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#connect_timeout MysqlMysqlConfiguration#connect_timeout}.

---

##### `cte_max_recursion_depth`<sup>Optional</sup> <a name="cte_max_recursion_depth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.cteMaxRecursionDepth"></a>

```python
cte_max_recursion_depth: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#cte_max_recursion_depth MysqlMysqlConfiguration#cte_max_recursion_depth}.

---

##### `default_authentication_plugin`<sup>Optional</sup> <a name="default_authentication_plugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.defaultAuthenticationPlugin"></a>

```python
default_authentication_plugin: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#default_authentication_plugin MysqlMysqlConfiguration#default_authentication_plugin}.

---

##### `foreign_key_checks`<sup>Optional</sup> <a name="foreign_key_checks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.foreignKeyChecks"></a>

```python
foreign_key_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#foreign_key_checks MysqlMysqlConfiguration#foreign_key_checks}.

---

##### `generated_random_password_length`<sup>Optional</sup> <a name="generated_random_password_length" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.generatedRandomPasswordLength"></a>

```python
generated_random_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#generated_random_password_length MysqlMysqlConfiguration#generated_random_password_length}.

---

##### `global_connection_memory_limit`<sup>Optional</sup> <a name="global_connection_memory_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryLimit"></a>

```python
global_connection_memory_limit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_limit MysqlMysqlConfiguration#global_connection_memory_limit}.

---

##### `global_connection_memory_tracking`<sup>Optional</sup> <a name="global_connection_memory_tracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.globalConnectionMemoryTracking"></a>

```python
global_connection_memory_tracking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#global_connection_memory_tracking MysqlMysqlConfiguration#global_connection_memory_tracking}.

---

##### `group_replication_consistency`<sup>Optional</sup> <a name="group_replication_consistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.groupReplicationConsistency"></a>

```python
group_replication_consistency: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#group_replication_consistency MysqlMysqlConfiguration#group_replication_consistency}.

---

##### `information_schema_stats_expiry`<sup>Optional</sup> <a name="information_schema_stats_expiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.informationSchemaStatsExpiry"></a>

```python
information_schema_stats_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#information_schema_stats_expiry MysqlMysqlConfiguration#information_schema_stats_expiry}.

---

##### `innodb_buffer_pool_dump_pct`<sup>Optional</sup> <a name="innodb_buffer_pool_dump_pct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolDumpPct"></a>

```python
innodb_buffer_pool_dump_pct: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_dump_pct MysqlMysqlConfiguration#innodb_buffer_pool_dump_pct}.

---

##### `innodb_buffer_pool_instances`<sup>Optional</sup> <a name="innodb_buffer_pool_instances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolInstances"></a>

```python
innodb_buffer_pool_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_instances MysqlMysqlConfiguration#innodb_buffer_pool_instances}.

---

##### `innodb_buffer_pool_size`<sup>Optional</sup> <a name="innodb_buffer_pool_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbBufferPoolSize"></a>

```python
innodb_buffer_pool_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_buffer_pool_size MysqlMysqlConfiguration#innodb_buffer_pool_size}.

---

##### `innodb_ddl_buffer_size`<sup>Optional</sup> <a name="innodb_ddl_buffer_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlBufferSize"></a>

```python
innodb_ddl_buffer_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_buffer_size MysqlMysqlConfiguration#innodb_ddl_buffer_size}.

---

##### `innodb_ddl_threads`<sup>Optional</sup> <a name="innodb_ddl_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbDdlThreads"></a>

```python
innodb_ddl_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ddl_threads MysqlMysqlConfiguration#innodb_ddl_threads}.

---

##### `innodb_ft_enable_stopword`<sup>Optional</sup> <a name="innodb_ft_enable_stopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtEnableStopword"></a>

```python
innodb_ft_enable_stopword: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_enable_stopword MysqlMysqlConfiguration#innodb_ft_enable_stopword}.

---

##### `innodb_ft_max_token_size`<sup>Optional</sup> <a name="innodb_ft_max_token_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMaxTokenSize"></a>

```python
innodb_ft_max_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_max_token_size MysqlMysqlConfiguration#innodb_ft_max_token_size}.

---

##### `innodb_ft_min_token_size`<sup>Optional</sup> <a name="innodb_ft_min_token_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtMinTokenSize"></a>

```python
innodb_ft_min_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_min_token_size MysqlMysqlConfiguration#innodb_ft_min_token_size}.

---

##### `innodb_ft_num_word_optimize`<sup>Optional</sup> <a name="innodb_ft_num_word_optimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtNumWordOptimize"></a>

```python
innodb_ft_num_word_optimize: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_num_word_optimize MysqlMysqlConfiguration#innodb_ft_num_word_optimize}.

---

##### `innodb_ft_result_cache_limit`<sup>Optional</sup> <a name="innodb_ft_result_cache_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtResultCacheLimit"></a>

```python
innodb_ft_result_cache_limit: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_result_cache_limit MysqlMysqlConfiguration#innodb_ft_result_cache_limit}.

---

##### `innodb_ft_server_stopword_table`<sup>Optional</sup> <a name="innodb_ft_server_stopword_table" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbFtServerStopwordTable"></a>

```python
innodb_ft_server_stopword_table: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_ft_server_stopword_table MysqlMysqlConfiguration#innodb_ft_server_stopword_table}.

---

##### `innodb_lock_wait_timeout`<sup>Optional</sup> <a name="innodb_lock_wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLockWaitTimeout"></a>

```python
innodb_lock_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_lock_wait_timeout MysqlMysqlConfiguration#innodb_lock_wait_timeout}.

---

##### `innodb_log_writer_threads`<sup>Optional</sup> <a name="innodb_log_writer_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbLogWriterThreads"></a>

```python
innodb_log_writer_threads: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_log_writer_threads MysqlMysqlConfiguration#innodb_log_writer_threads}.

---

##### `innodb_max_purge_lag`<sup>Optional</sup> <a name="innodb_max_purge_lag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLag"></a>

```python
innodb_max_purge_lag: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag MysqlMysqlConfiguration#innodb_max_purge_lag}.

---

##### `innodb_max_purge_lag_delay`<sup>Optional</sup> <a name="innodb_max_purge_lag_delay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbMaxPurgeLagDelay"></a>

```python
innodb_max_purge_lag_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_max_purge_lag_delay MysqlMysqlConfiguration#innodb_max_purge_lag_delay}.

---

##### `innodb_stats_persistent_sample_pages`<sup>Optional</sup> <a name="innodb_stats_persistent_sample_pages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsPersistentSamplePages"></a>

```python
innodb_stats_persistent_sample_pages: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_persistent_sample_pages MysqlMysqlConfiguration#innodb_stats_persistent_sample_pages}.

---

##### `innodb_stats_transient_sample_pages`<sup>Optional</sup> <a name="innodb_stats_transient_sample_pages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.innodbStatsTransientSamplePages"></a>

```python
innodb_stats_transient_sample_pages: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#innodb_stats_transient_sample_pages MysqlMysqlConfiguration#innodb_stats_transient_sample_pages}.

---

##### `interactive_timeout`<sup>Optional</sup> <a name="interactive_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.interactiveTimeout"></a>

```python
interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#interactive_timeout MysqlMysqlConfiguration#interactive_timeout}.

---

##### `local_infile`<sup>Optional</sup> <a name="local_infile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.localInfile"></a>

```python
local_infile: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#local_infile MysqlMysqlConfiguration#local_infile}.

---

##### `mandatory_roles`<sup>Optional</sup> <a name="mandatory_roles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mandatoryRoles"></a>

```python
mandatory_roles: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mandatory_roles MysqlMysqlConfiguration#mandatory_roles}.

---

##### `max_allowed_packet`<sup>Optional</sup> <a name="max_allowed_packet" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxAllowedPacket"></a>

```python
max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_allowed_packet MysqlMysqlConfiguration#max_allowed_packet}.

---

##### `max_binlog_cache_size`<sup>Optional</sup> <a name="max_binlog_cache_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxBinlogCacheSize"></a>

```python
max_binlog_cache_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_binlog_cache_size MysqlMysqlConfiguration#max_binlog_cache_size}.

---

##### `max_connect_errors`<sup>Optional</sup> <a name="max_connect_errors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnectErrors"></a>

```python
max_connect_errors: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connect_errors MysqlMysqlConfiguration#max_connect_errors}.

---

##### `max_connections`<sup>Optional</sup> <a name="max_connections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_connections MysqlMysqlConfiguration#max_connections}.

---

##### `max_execution_time`<sup>Optional</sup> <a name="max_execution_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxExecutionTime"></a>

```python
max_execution_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_execution_time MysqlMysqlConfiguration#max_execution_time}.

---

##### `max_heap_table_size`<sup>Optional</sup> <a name="max_heap_table_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxHeapTableSize"></a>

```python
max_heap_table_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_heap_table_size MysqlMysqlConfiguration#max_heap_table_size}.

---

##### `max_prepared_stmt_count`<sup>Optional</sup> <a name="max_prepared_stmt_count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.maxPreparedStmtCount"></a>

```python
max_prepared_stmt_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#max_prepared_stmt_count MysqlMysqlConfiguration#max_prepared_stmt_count}.

---

##### `mysql_firewall_mode`<sup>Optional</sup> <a name="mysql_firewall_mode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlFirewallMode"></a>

```python
mysql_firewall_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_firewall_mode MysqlMysqlConfiguration#mysql_firewall_mode}.

---

##### `mysqlx_connect_timeout`<sup>Optional</sup> <a name="mysqlx_connect_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxConnectTimeout"></a>

```python
mysqlx_connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_connect_timeout MysqlMysqlConfiguration#mysqlx_connect_timeout}.

---

##### `mysqlx_deflate_default_compression_level`<sup>Optional</sup> <a name="mysqlx_deflate_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateDefaultCompressionLevel"></a>

```python
mysqlx_deflate_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_default_compression_level MysqlMysqlConfiguration#mysqlx_deflate_default_compression_level}.

---

##### `mysqlx_deflate_max_client_compression_level`<sup>Optional</sup> <a name="mysqlx_deflate_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```python
mysqlx_deflate_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_deflate_max_client_compression_level MysqlMysqlConfiguration#mysqlx_deflate_max_client_compression_level}.

---

##### `mysqlx_document_id_unique_prefix`<sup>Optional</sup> <a name="mysqlx_document_id_unique_prefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxDocumentIdUniquePrefix"></a>

```python
mysqlx_document_id_unique_prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_document_id_unique_prefix MysqlMysqlConfiguration#mysqlx_document_id_unique_prefix}.

---

##### `mysqlx_enable_hello_notice`<sup>Optional</sup> <a name="mysqlx_enable_hello_notice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxEnableHelloNotice"></a>

```python
mysqlx_enable_hello_notice: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_enable_hello_notice MysqlMysqlConfiguration#mysqlx_enable_hello_notice}.

---

##### `mysqlx_idle_worker_thread_timeout`<sup>Optional</sup> <a name="mysqlx_idle_worker_thread_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxIdleWorkerThreadTimeout"></a>

```python
mysqlx_idle_worker_thread_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_idle_worker_thread_timeout MysqlMysqlConfiguration#mysqlx_idle_worker_thread_timeout}.

---

##### `mysqlx_interactive_timeout`<sup>Optional</sup> <a name="mysqlx_interactive_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxInteractiveTimeout"></a>

```python
mysqlx_interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_interactive_timeout MysqlMysqlConfiguration#mysqlx_interactive_timeout}.

---

##### `mysqlx_lz4_default_compression_level`<sup>Optional</sup> <a name="mysqlx_lz4_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4DefaultCompressionLevel"></a>

```python
mysqlx_lz4_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4default_compression_level MysqlMysqlConfiguration#mysqlx_lz4default_compression_level}.

---

##### `mysqlx_lz4_max_client_compression_level`<sup>Optional</sup> <a name="mysqlx_lz4_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxLz4MaxClientCompressionLevel"></a>

```python
mysqlx_lz4_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_lz4max_client_compression_level MysqlMysqlConfiguration#mysqlx_lz4max_client_compression_level}.

---

##### `mysqlx_max_allowed_packet`<sup>Optional</sup> <a name="mysqlx_max_allowed_packet" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMaxAllowedPacket"></a>

```python
mysqlx_max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_max_allowed_packet MysqlMysqlConfiguration#mysqlx_max_allowed_packet}.

---

##### `mysqlx_min_worker_threads`<sup>Optional</sup> <a name="mysqlx_min_worker_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxMinWorkerThreads"></a>

```python
mysqlx_min_worker_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_min_worker_threads MysqlMysqlConfiguration#mysqlx_min_worker_threads}.

---

##### `mysqlx_read_timeout`<sup>Optional</sup> <a name="mysqlx_read_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxReadTimeout"></a>

```python
mysqlx_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_read_timeout MysqlMysqlConfiguration#mysqlx_read_timeout}.

---

##### `mysqlx_wait_timeout`<sup>Optional</sup> <a name="mysqlx_wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWaitTimeout"></a>

```python
mysqlx_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_wait_timeout MysqlMysqlConfiguration#mysqlx_wait_timeout}.

---

##### `mysqlx_write_timeout`<sup>Optional</sup> <a name="mysqlx_write_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxWriteTimeout"></a>

```python
mysqlx_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_write_timeout MysqlMysqlConfiguration#mysqlx_write_timeout}.

---

##### `mysqlx_zstd_default_compression_level`<sup>Optional</sup> <a name="mysqlx_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdDefaultCompressionLevel"></a>

```python
mysqlx_zstd_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_default_compression_level MysqlMysqlConfiguration#mysqlx_zstd_default_compression_level}.

---

##### `mysqlx_zstd_max_client_compression_level`<sup>Optional</sup> <a name="mysqlx_zstd_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlxZstdMaxClientCompressionLevel"></a>

```python
mysqlx_zstd_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysqlx_zstd_max_client_compression_level MysqlMysqlConfiguration#mysqlx_zstd_max_client_compression_level}.

---

##### `mysql_zstd_default_compression_level`<sup>Optional</sup> <a name="mysql_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.mysqlZstdDefaultCompressionLevel"></a>

```python
mysql_zstd_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#mysql_zstd_default_compression_level MysqlMysqlConfiguration#mysql_zstd_default_compression_level}.

---

##### `net_read_timeout`<sup>Optional</sup> <a name="net_read_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netReadTimeout"></a>

```python
net_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_read_timeout MysqlMysqlConfiguration#net_read_timeout}.

---

##### `net_write_timeout`<sup>Optional</sup> <a name="net_write_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.netWriteTimeout"></a>

```python
net_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#net_write_timeout MysqlMysqlConfiguration#net_write_timeout}.

---

##### `parser_max_mem_size`<sup>Optional</sup> <a name="parser_max_mem_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.parserMaxMemSize"></a>

```python
parser_max_mem_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#parser_max_mem_size MysqlMysqlConfiguration#parser_max_mem_size}.

---

##### `query_alloc_block_size`<sup>Optional</sup> <a name="query_alloc_block_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryAllocBlockSize"></a>

```python
query_alloc_block_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_alloc_block_size MysqlMysqlConfiguration#query_alloc_block_size}.

---

##### `query_prealloc_size`<sup>Optional</sup> <a name="query_prealloc_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.queryPreallocSize"></a>

```python
query_prealloc_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#query_prealloc_size MysqlMysqlConfiguration#query_prealloc_size}.

---

##### `regexp_time_limit`<sup>Optional</sup> <a name="regexp_time_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.regexpTimeLimit"></a>

```python
regexp_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#regexp_time_limit MysqlMysqlConfiguration#regexp_time_limit}.

---

##### `sort_buffer_size`<sup>Optional</sup> <a name="sort_buffer_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sortBufferSize"></a>

```python
sort_buffer_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sort_buffer_size MysqlMysqlConfiguration#sort_buffer_size}.

---

##### `sql_mode`<sup>Optional</sup> <a name="sql_mode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlMode"></a>

```python
sql_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_mode MysqlMysqlConfiguration#sql_mode}.

---

##### `sql_require_primary_key`<sup>Optional</sup> <a name="sql_require_primary_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlRequirePrimaryKey"></a>

```python
sql_require_primary_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_require_primary_key MysqlMysqlConfiguration#sql_require_primary_key}.

---

##### `sql_warnings`<sup>Optional</sup> <a name="sql_warnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.sqlWarnings"></a>

```python
sql_warnings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#sql_warnings MysqlMysqlConfiguration#sql_warnings}.

---

##### `thread_pool_dedicated_listeners`<sup>Optional</sup> <a name="thread_pool_dedicated_listeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolDedicatedListeners"></a>

```python
thread_pool_dedicated_listeners: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_dedicated_listeners MysqlMysqlConfiguration#thread_pool_dedicated_listeners}.

---

##### `thread_pool_max_transactions_limit`<sup>Optional</sup> <a name="thread_pool_max_transactions_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.threadPoolMaxTransactionsLimit"></a>

```python
thread_pool_max_transactions_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#thread_pool_max_transactions_limit MysqlMysqlConfiguration#thread_pool_max_transactions_limit}.

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#time_zone MysqlMysqlConfiguration#time_zone}.

---

##### `tmp_table_size`<sup>Optional</sup> <a name="tmp_table_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.tmpTableSize"></a>

```python
tmp_table_size: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#tmp_table_size MysqlMysqlConfiguration#tmp_table_size}.

---

##### `transaction_isolation`<sup>Optional</sup> <a name="transaction_isolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.transactionIsolation"></a>

```python
transaction_isolation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#transaction_isolation MysqlMysqlConfiguration#transaction_isolation}.

---

##### `wait_timeout`<sup>Optional</sup> <a name="wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables.property.waitTimeout"></a>

```python
wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_configuration#wait_timeout MysqlMysqlConfiguration#wait_timeout}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlConfigurationInitVariablesOutputReference <a name="MysqlMysqlConfigurationInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resetLowerCaseTableNames">reset_lower_case_table_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lower_case_table_names` <a name="reset_lower_case_table_names" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.resetLowerCaseTableNames"></a>

```python
def reset_lower_case_table_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNamesInput">lower_case_table_names_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames">lower_case_table_names</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lower_case_table_names_input`<sup>Optional</sup> <a name="lower_case_table_names_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNamesInput"></a>

```python
lower_case_table_names_input: str
```

- *Type:* str

---

##### `lower_case_table_names`<sup>Required</sup> <a name="lower_case_table_names" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```python
lower_case_table_names: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlConfigurationInitVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationInitVariables">MysqlMysqlConfigurationInitVariables</a>

---


### MysqlMysqlConfigurationTimeoutsOutputReference <a name="MysqlMysqlConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MysqlMysqlConfigurationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationTimeouts">MysqlMysqlConfigurationTimeouts</a>]

---


### MysqlMysqlConfigurationVariablesOutputReference <a name="MysqlMysqlConfigurationVariablesOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_configuration

mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetAutocommit">reset_autocommit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBigTables">reset_big_tables</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogExpireLogsSeconds">reset_binlog_expire_logs_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowMetadata">reset_binlog_row_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowValueOptions">reset_binlog_row_value_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogTransactionCompression">reset_binlog_transaction_compression</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCompletionType">reset_completion_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryChunkSize">reset_connection_memory_chunk_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryLimit">reset_connection_memory_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectTimeout">reset_connect_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCteMaxRecursionDepth">reset_cte_max_recursion_depth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetDefaultAuthenticationPlugin">reset_default_authentication_plugin</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetForeignKeyChecks">reset_foreign_key_checks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGeneratedRandomPasswordLength">reset_generated_random_password_length</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryLimit">reset_global_connection_memory_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryTracking">reset_global_connection_memory_tracking</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGroupReplicationConsistency">reset_group_replication_consistency</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInformationSchemaStatsExpiry">reset_information_schema_stats_expiry</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolDumpPct">reset_innodb_buffer_pool_dump_pct</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolInstances">reset_innodb_buffer_pool_instances</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolSize">reset_innodb_buffer_pool_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlBufferSize">reset_innodb_ddl_buffer_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlThreads">reset_innodb_ddl_threads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtEnableStopword">reset_innodb_ft_enable_stopword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMaxTokenSize">reset_innodb_ft_max_token_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMinTokenSize">reset_innodb_ft_min_token_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtNumWordOptimize">reset_innodb_ft_num_word_optimize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtResultCacheLimit">reset_innodb_ft_result_cache_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtServerStopwordTable">reset_innodb_ft_server_stopword_table</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLockWaitTimeout">reset_innodb_lock_wait_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLogWriterThreads">reset_innodb_log_writer_threads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLag">reset_innodb_max_purge_lag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLagDelay">reset_innodb_max_purge_lag_delay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsPersistentSamplePages">reset_innodb_stats_persistent_sample_pages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsTransientSamplePages">reset_innodb_stats_transient_sample_pages</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInteractiveTimeout">reset_interactive_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetLocalInfile">reset_local_infile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMandatoryRoles">reset_mandatory_roles</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxAllowedPacket">reset_max_allowed_packet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxBinlogCacheSize">reset_max_binlog_cache_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnectErrors">reset_max_connect_errors</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnections">reset_max_connections</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxExecutionTime">reset_max_execution_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxHeapTableSize">reset_max_heap_table_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxPreparedStmtCount">reset_max_prepared_stmt_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlFirewallMode">reset_mysql_firewall_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxConnectTimeout">reset_mysqlx_connect_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateDefaultCompressionLevel">reset_mysqlx_deflate_default_compression_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateMaxClientCompressionLevel">reset_mysqlx_deflate_max_client_compression_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDocumentIdUniquePrefix">reset_mysqlx_document_id_unique_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxEnableHelloNotice">reset_mysqlx_enable_hello_notice</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxIdleWorkerThreadTimeout">reset_mysqlx_idle_worker_thread_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxInteractiveTimeout">reset_mysqlx_interactive_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4DefaultCompressionLevel">reset_mysqlx_lz4_default_compression_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4MaxClientCompressionLevel">reset_mysqlx_lz4_max_client_compression_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMaxAllowedPacket">reset_mysqlx_max_allowed_packet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMinWorkerThreads">reset_mysqlx_min_worker_threads</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxReadTimeout">reset_mysqlx_read_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWaitTimeout">reset_mysqlx_wait_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWriteTimeout">reset_mysqlx_write_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdDefaultCompressionLevel">reset_mysqlx_zstd_default_compression_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdMaxClientCompressionLevel">reset_mysqlx_zstd_max_client_compression_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlZstdDefaultCompressionLevel">reset_mysql_zstd_default_compression_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetReadTimeout">reset_net_read_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetWriteTimeout">reset_net_write_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetParserMaxMemSize">reset_parser_max_mem_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryAllocBlockSize">reset_query_alloc_block_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryPreallocSize">reset_query_prealloc_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetRegexpTimeLimit">reset_regexp_time_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSortBufferSize">reset_sort_buffer_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlMode">reset_sql_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlRequirePrimaryKey">reset_sql_require_primary_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlWarnings">reset_sql_warnings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolDedicatedListeners">reset_thread_pool_dedicated_listeners</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolMaxTransactionsLimit">reset_thread_pool_max_transactions_limit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTimeZone">reset_time_zone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTmpTableSize">reset_tmp_table_size</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTransactionIsolation">reset_transaction_isolation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetWaitTimeout">reset_wait_timeout</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_autocommit` <a name="reset_autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetAutocommit"></a>

```python
def reset_autocommit() -> None
```

##### `reset_big_tables` <a name="reset_big_tables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBigTables"></a>

```python
def reset_big_tables() -> None
```

##### `reset_binlog_expire_logs_seconds` <a name="reset_binlog_expire_logs_seconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogExpireLogsSeconds"></a>

```python
def reset_binlog_expire_logs_seconds() -> None
```

##### `reset_binlog_row_metadata` <a name="reset_binlog_row_metadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowMetadata"></a>

```python
def reset_binlog_row_metadata() -> None
```

##### `reset_binlog_row_value_options` <a name="reset_binlog_row_value_options" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogRowValueOptions"></a>

```python
def reset_binlog_row_value_options() -> None
```

##### `reset_binlog_transaction_compression` <a name="reset_binlog_transaction_compression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetBinlogTransactionCompression"></a>

```python
def reset_binlog_transaction_compression() -> None
```

##### `reset_completion_type` <a name="reset_completion_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCompletionType"></a>

```python
def reset_completion_type() -> None
```

##### `reset_connection_memory_chunk_size` <a name="reset_connection_memory_chunk_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryChunkSize"></a>

```python
def reset_connection_memory_chunk_size() -> None
```

##### `reset_connection_memory_limit` <a name="reset_connection_memory_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectionMemoryLimit"></a>

```python
def reset_connection_memory_limit() -> None
```

##### `reset_connect_timeout` <a name="reset_connect_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetConnectTimeout"></a>

```python
def reset_connect_timeout() -> None
```

##### `reset_cte_max_recursion_depth` <a name="reset_cte_max_recursion_depth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetCteMaxRecursionDepth"></a>

```python
def reset_cte_max_recursion_depth() -> None
```

##### `reset_default_authentication_plugin` <a name="reset_default_authentication_plugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetDefaultAuthenticationPlugin"></a>

```python
def reset_default_authentication_plugin() -> None
```

##### `reset_foreign_key_checks` <a name="reset_foreign_key_checks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetForeignKeyChecks"></a>

```python
def reset_foreign_key_checks() -> None
```

##### `reset_generated_random_password_length` <a name="reset_generated_random_password_length" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGeneratedRandomPasswordLength"></a>

```python
def reset_generated_random_password_length() -> None
```

##### `reset_global_connection_memory_limit` <a name="reset_global_connection_memory_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryLimit"></a>

```python
def reset_global_connection_memory_limit() -> None
```

##### `reset_global_connection_memory_tracking` <a name="reset_global_connection_memory_tracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGlobalConnectionMemoryTracking"></a>

```python
def reset_global_connection_memory_tracking() -> None
```

##### `reset_group_replication_consistency` <a name="reset_group_replication_consistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetGroupReplicationConsistency"></a>

```python
def reset_group_replication_consistency() -> None
```

##### `reset_information_schema_stats_expiry` <a name="reset_information_schema_stats_expiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInformationSchemaStatsExpiry"></a>

```python
def reset_information_schema_stats_expiry() -> None
```

##### `reset_innodb_buffer_pool_dump_pct` <a name="reset_innodb_buffer_pool_dump_pct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolDumpPct"></a>

```python
def reset_innodb_buffer_pool_dump_pct() -> None
```

##### `reset_innodb_buffer_pool_instances` <a name="reset_innodb_buffer_pool_instances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolInstances"></a>

```python
def reset_innodb_buffer_pool_instances() -> None
```

##### `reset_innodb_buffer_pool_size` <a name="reset_innodb_buffer_pool_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbBufferPoolSize"></a>

```python
def reset_innodb_buffer_pool_size() -> None
```

##### `reset_innodb_ddl_buffer_size` <a name="reset_innodb_ddl_buffer_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlBufferSize"></a>

```python
def reset_innodb_ddl_buffer_size() -> None
```

##### `reset_innodb_ddl_threads` <a name="reset_innodb_ddl_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbDdlThreads"></a>

```python
def reset_innodb_ddl_threads() -> None
```

##### `reset_innodb_ft_enable_stopword` <a name="reset_innodb_ft_enable_stopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtEnableStopword"></a>

```python
def reset_innodb_ft_enable_stopword() -> None
```

##### `reset_innodb_ft_max_token_size` <a name="reset_innodb_ft_max_token_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMaxTokenSize"></a>

```python
def reset_innodb_ft_max_token_size() -> None
```

##### `reset_innodb_ft_min_token_size` <a name="reset_innodb_ft_min_token_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtMinTokenSize"></a>

```python
def reset_innodb_ft_min_token_size() -> None
```

##### `reset_innodb_ft_num_word_optimize` <a name="reset_innodb_ft_num_word_optimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtNumWordOptimize"></a>

```python
def reset_innodb_ft_num_word_optimize() -> None
```

##### `reset_innodb_ft_result_cache_limit` <a name="reset_innodb_ft_result_cache_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtResultCacheLimit"></a>

```python
def reset_innodb_ft_result_cache_limit() -> None
```

##### `reset_innodb_ft_server_stopword_table` <a name="reset_innodb_ft_server_stopword_table" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbFtServerStopwordTable"></a>

```python
def reset_innodb_ft_server_stopword_table() -> None
```

##### `reset_innodb_lock_wait_timeout` <a name="reset_innodb_lock_wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLockWaitTimeout"></a>

```python
def reset_innodb_lock_wait_timeout() -> None
```

##### `reset_innodb_log_writer_threads` <a name="reset_innodb_log_writer_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbLogWriterThreads"></a>

```python
def reset_innodb_log_writer_threads() -> None
```

##### `reset_innodb_max_purge_lag` <a name="reset_innodb_max_purge_lag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLag"></a>

```python
def reset_innodb_max_purge_lag() -> None
```

##### `reset_innodb_max_purge_lag_delay` <a name="reset_innodb_max_purge_lag_delay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbMaxPurgeLagDelay"></a>

```python
def reset_innodb_max_purge_lag_delay() -> None
```

##### `reset_innodb_stats_persistent_sample_pages` <a name="reset_innodb_stats_persistent_sample_pages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsPersistentSamplePages"></a>

```python
def reset_innodb_stats_persistent_sample_pages() -> None
```

##### `reset_innodb_stats_transient_sample_pages` <a name="reset_innodb_stats_transient_sample_pages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInnodbStatsTransientSamplePages"></a>

```python
def reset_innodb_stats_transient_sample_pages() -> None
```

##### `reset_interactive_timeout` <a name="reset_interactive_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetInteractiveTimeout"></a>

```python
def reset_interactive_timeout() -> None
```

##### `reset_local_infile` <a name="reset_local_infile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetLocalInfile"></a>

```python
def reset_local_infile() -> None
```

##### `reset_mandatory_roles` <a name="reset_mandatory_roles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMandatoryRoles"></a>

```python
def reset_mandatory_roles() -> None
```

##### `reset_max_allowed_packet` <a name="reset_max_allowed_packet" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxAllowedPacket"></a>

```python
def reset_max_allowed_packet() -> None
```

##### `reset_max_binlog_cache_size` <a name="reset_max_binlog_cache_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxBinlogCacheSize"></a>

```python
def reset_max_binlog_cache_size() -> None
```

##### `reset_max_connect_errors` <a name="reset_max_connect_errors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnectErrors"></a>

```python
def reset_max_connect_errors() -> None
```

##### `reset_max_connections` <a name="reset_max_connections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxConnections"></a>

```python
def reset_max_connections() -> None
```

##### `reset_max_execution_time` <a name="reset_max_execution_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxExecutionTime"></a>

```python
def reset_max_execution_time() -> None
```

##### `reset_max_heap_table_size` <a name="reset_max_heap_table_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxHeapTableSize"></a>

```python
def reset_max_heap_table_size() -> None
```

##### `reset_max_prepared_stmt_count` <a name="reset_max_prepared_stmt_count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMaxPreparedStmtCount"></a>

```python
def reset_max_prepared_stmt_count() -> None
```

##### `reset_mysql_firewall_mode` <a name="reset_mysql_firewall_mode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlFirewallMode"></a>

```python
def reset_mysql_firewall_mode() -> None
```

##### `reset_mysqlx_connect_timeout` <a name="reset_mysqlx_connect_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxConnectTimeout"></a>

```python
def reset_mysqlx_connect_timeout() -> None
```

##### `reset_mysqlx_deflate_default_compression_level` <a name="reset_mysqlx_deflate_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateDefaultCompressionLevel"></a>

```python
def reset_mysqlx_deflate_default_compression_level() -> None
```

##### `reset_mysqlx_deflate_max_client_compression_level` <a name="reset_mysqlx_deflate_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDeflateMaxClientCompressionLevel"></a>

```python
def reset_mysqlx_deflate_max_client_compression_level() -> None
```

##### `reset_mysqlx_document_id_unique_prefix` <a name="reset_mysqlx_document_id_unique_prefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxDocumentIdUniquePrefix"></a>

```python
def reset_mysqlx_document_id_unique_prefix() -> None
```

##### `reset_mysqlx_enable_hello_notice` <a name="reset_mysqlx_enable_hello_notice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxEnableHelloNotice"></a>

```python
def reset_mysqlx_enable_hello_notice() -> None
```

##### `reset_mysqlx_idle_worker_thread_timeout` <a name="reset_mysqlx_idle_worker_thread_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxIdleWorkerThreadTimeout"></a>

```python
def reset_mysqlx_idle_worker_thread_timeout() -> None
```

##### `reset_mysqlx_interactive_timeout` <a name="reset_mysqlx_interactive_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxInteractiveTimeout"></a>

```python
def reset_mysqlx_interactive_timeout() -> None
```

##### `reset_mysqlx_lz4_default_compression_level` <a name="reset_mysqlx_lz4_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4DefaultCompressionLevel"></a>

```python
def reset_mysqlx_lz4_default_compression_level() -> None
```

##### `reset_mysqlx_lz4_max_client_compression_level` <a name="reset_mysqlx_lz4_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxLz4MaxClientCompressionLevel"></a>

```python
def reset_mysqlx_lz4_max_client_compression_level() -> None
```

##### `reset_mysqlx_max_allowed_packet` <a name="reset_mysqlx_max_allowed_packet" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMaxAllowedPacket"></a>

```python
def reset_mysqlx_max_allowed_packet() -> None
```

##### `reset_mysqlx_min_worker_threads` <a name="reset_mysqlx_min_worker_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxMinWorkerThreads"></a>

```python
def reset_mysqlx_min_worker_threads() -> None
```

##### `reset_mysqlx_read_timeout` <a name="reset_mysqlx_read_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxReadTimeout"></a>

```python
def reset_mysqlx_read_timeout() -> None
```

##### `reset_mysqlx_wait_timeout` <a name="reset_mysqlx_wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWaitTimeout"></a>

```python
def reset_mysqlx_wait_timeout() -> None
```

##### `reset_mysqlx_write_timeout` <a name="reset_mysqlx_write_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxWriteTimeout"></a>

```python
def reset_mysqlx_write_timeout() -> None
```

##### `reset_mysqlx_zstd_default_compression_level` <a name="reset_mysqlx_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdDefaultCompressionLevel"></a>

```python
def reset_mysqlx_zstd_default_compression_level() -> None
```

##### `reset_mysqlx_zstd_max_client_compression_level` <a name="reset_mysqlx_zstd_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlxZstdMaxClientCompressionLevel"></a>

```python
def reset_mysqlx_zstd_max_client_compression_level() -> None
```

##### `reset_mysql_zstd_default_compression_level` <a name="reset_mysql_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetMysqlZstdDefaultCompressionLevel"></a>

```python
def reset_mysql_zstd_default_compression_level() -> None
```

##### `reset_net_read_timeout` <a name="reset_net_read_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetReadTimeout"></a>

```python
def reset_net_read_timeout() -> None
```

##### `reset_net_write_timeout` <a name="reset_net_write_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetNetWriteTimeout"></a>

```python
def reset_net_write_timeout() -> None
```

##### `reset_parser_max_mem_size` <a name="reset_parser_max_mem_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetParserMaxMemSize"></a>

```python
def reset_parser_max_mem_size() -> None
```

##### `reset_query_alloc_block_size` <a name="reset_query_alloc_block_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryAllocBlockSize"></a>

```python
def reset_query_alloc_block_size() -> None
```

##### `reset_query_prealloc_size` <a name="reset_query_prealloc_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetQueryPreallocSize"></a>

```python
def reset_query_prealloc_size() -> None
```

##### `reset_regexp_time_limit` <a name="reset_regexp_time_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetRegexpTimeLimit"></a>

```python
def reset_regexp_time_limit() -> None
```

##### `reset_sort_buffer_size` <a name="reset_sort_buffer_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSortBufferSize"></a>

```python
def reset_sort_buffer_size() -> None
```

##### `reset_sql_mode` <a name="reset_sql_mode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlMode"></a>

```python
def reset_sql_mode() -> None
```

##### `reset_sql_require_primary_key` <a name="reset_sql_require_primary_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlRequirePrimaryKey"></a>

```python
def reset_sql_require_primary_key() -> None
```

##### `reset_sql_warnings` <a name="reset_sql_warnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetSqlWarnings"></a>

```python
def reset_sql_warnings() -> None
```

##### `reset_thread_pool_dedicated_listeners` <a name="reset_thread_pool_dedicated_listeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolDedicatedListeners"></a>

```python
def reset_thread_pool_dedicated_listeners() -> None
```

##### `reset_thread_pool_max_transactions_limit` <a name="reset_thread_pool_max_transactions_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetThreadPoolMaxTransactionsLimit"></a>

```python
def reset_thread_pool_max_transactions_limit() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

##### `reset_tmp_table_size` <a name="reset_tmp_table_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTmpTableSize"></a>

```python
def reset_tmp_table_size() -> None
```

##### `reset_transaction_isolation` <a name="reset_transaction_isolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetTransactionIsolation"></a>

```python
def reset_transaction_isolation() -> None
```

##### `reset_wait_timeout` <a name="reset_wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.resetWaitTimeout"></a>

```python
def reset_wait_timeout() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommitInput">autocommit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTablesInput">big_tables_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSecondsInput">binlog_expire_logs_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadataInput">binlog_row_metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptionsInput">binlog_row_value_options_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompressionInput">binlog_transaction_compression_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionTypeInput">completion_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSizeInput">connection_memory_chunk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimitInput">connection_memory_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeoutInput">connect_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepthInput">cte_max_recursion_depth_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPluginInput">default_authentication_plugin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecksInput">foreign_key_checks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLengthInput">generated_random_password_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimitInput">global_connection_memory_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTrackingInput">global_connection_memory_tracking_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistencyInput">group_replication_consistency_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiryInput">information_schema_stats_expiry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPctInput">innodb_buffer_pool_dump_pct_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstancesInput">innodb_buffer_pool_instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSizeInput">innodb_buffer_pool_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSizeInput">innodb_ddl_buffer_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreadsInput">innodb_ddl_threads_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopwordInput">innodb_ft_enable_stopword_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSizeInput">innodb_ft_max_token_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSizeInput">innodb_ft_min_token_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimizeInput">innodb_ft_num_word_optimize_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimitInput">innodb_ft_result_cache_limit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTableInput">innodb_ft_server_stopword_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeoutInput">innodb_lock_wait_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreadsInput">innodb_log_writer_threads_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelayInput">innodb_max_purge_lag_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagInput">innodb_max_purge_lag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePagesInput">innodb_stats_persistent_sample_pages_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePagesInput">innodb_stats_transient_sample_pages_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeoutInput">interactive_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfileInput">local_infile_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRolesInput">mandatory_roles_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacketInput">max_allowed_packet_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSizeInput">max_binlog_cache_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrorsInput">max_connect_errors_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectionsInput">max_connections_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTimeInput">max_execution_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSizeInput">max_heap_table_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCountInput">max_prepared_stmt_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallModeInput">mysql_firewall_mode_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeoutInput">mysqlx_connect_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevelInput">mysqlx_deflate_default_compression_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevelInput">mysqlx_deflate_max_client_compression_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefixInput">mysqlx_document_id_unique_prefix_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNoticeInput">mysqlx_enable_hello_notice_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeoutInput">mysqlx_idle_worker_thread_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeoutInput">mysqlx_interactive_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevelInput">mysqlx_lz4_default_compression_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevelInput">mysqlx_lz4_max_client_compression_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacketInput">mysqlx_max_allowed_packet_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreadsInput">mysqlx_min_worker_threads_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeoutInput">mysqlx_read_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeoutInput">mysqlx_wait_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeoutInput">mysqlx_write_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevelInput">mysqlx_zstd_default_compression_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevelInput">mysqlx_zstd_max_client_compression_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevelInput">mysql_zstd_default_compression_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeoutInput">net_read_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeoutInput">net_write_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSizeInput">parser_max_mem_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSizeInput">query_alloc_block_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSizeInput">query_prealloc_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimitInput">regexp_time_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSizeInput">sort_buffer_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlModeInput">sql_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKeyInput">sql_require_primary_key_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarningsInput">sql_warnings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListenersInput">thread_pool_dedicated_listeners_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimitInput">thread_pool_max_transactions_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSizeInput">tmp_table_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolationInput">transaction_isolation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeoutInput">wait_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommit">autocommit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTables">big_tables</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds">binlog_expire_logs_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata">binlog_row_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions">binlog_row_value_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression">binlog_transaction_compression</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionType">completion_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize">connection_memory_chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit">connection_memory_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth">cte_max_recursion_depth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin">default_authentication_plugin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks">foreign_key_checks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength">generated_random_password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit">global_connection_memory_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking">global_connection_memory_tracking</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency">group_replication_consistency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry">information_schema_stats_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct">innodb_buffer_pool_dump_pct</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances">innodb_buffer_pool_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize">innodb_buffer_pool_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize">innodb_ddl_buffer_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads">innodb_ddl_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword">innodb_ft_enable_stopword</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize">innodb_ft_max_token_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize">innodb_ft_min_token_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize">innodb_ft_num_word_optimize</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit">innodb_ft_result_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable">innodb_ft_server_stopword_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout">innodb_lock_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads">innodb_log_writer_threads</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag">innodb_max_purge_lag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay">innodb_max_purge_lag_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages">innodb_stats_persistent_sample_pages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages">innodb_stats_transient_sample_pages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout">interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfile">local_infile</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles">mandatory_roles</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket">max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize">max_binlog_cache_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors">max_connect_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime">max_execution_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize">max_heap_table_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount">max_prepared_stmt_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode">mysql_firewall_mode</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout">mysqlx_connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">mysqlx_deflate_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">mysqlx_deflate_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">mysqlx_document_id_unique_prefix</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice">mysqlx_enable_hello_notice</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">mysqlx_idle_worker_thread_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout">mysqlx_interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">mysqlx_lz4_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">mysqlx_lz4_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket">mysqlx_max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads">mysqlx_min_worker_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout">mysqlx_read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout">mysqlx_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout">mysqlx_write_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">mysqlx_zstd_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">mysqlx_zstd_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">mysql_zstd_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout">net_read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout">net_write_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize">parser_max_mem_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize">query_alloc_block_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize">query_prealloc_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit">regexp_time_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize">sort_buffer_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlMode">sql_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey">sql_require_primary_key</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings">sql_warnings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners">thread_pool_dedicated_listeners</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit">thread_pool_max_transactions_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize">tmp_table_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation">transaction_isolation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autocommit_input`<sup>Optional</sup> <a name="autocommit_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommitInput"></a>

```python
autocommit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `big_tables_input`<sup>Optional</sup> <a name="big_tables_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTablesInput"></a>

```python
big_tables_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `binlog_expire_logs_seconds_input`<sup>Optional</sup> <a name="binlog_expire_logs_seconds_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSecondsInput"></a>

```python
binlog_expire_logs_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `binlog_row_metadata_input`<sup>Optional</sup> <a name="binlog_row_metadata_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadataInput"></a>

```python
binlog_row_metadata_input: str
```

- *Type:* str

---

##### `binlog_row_value_options_input`<sup>Optional</sup> <a name="binlog_row_value_options_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptionsInput"></a>

```python
binlog_row_value_options_input: str
```

- *Type:* str

---

##### `binlog_transaction_compression_input`<sup>Optional</sup> <a name="binlog_transaction_compression_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompressionInput"></a>

```python
binlog_transaction_compression_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `completion_type_input`<sup>Optional</sup> <a name="completion_type_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionTypeInput"></a>

```python
completion_type_input: str
```

- *Type:* str

---

##### `connection_memory_chunk_size_input`<sup>Optional</sup> <a name="connection_memory_chunk_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSizeInput"></a>

```python
connection_memory_chunk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_memory_limit_input`<sup>Optional</sup> <a name="connection_memory_limit_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimitInput"></a>

```python
connection_memory_limit_input: str
```

- *Type:* str

---

##### `connect_timeout_input`<sup>Optional</sup> <a name="connect_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeoutInput"></a>

```python
connect_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cte_max_recursion_depth_input`<sup>Optional</sup> <a name="cte_max_recursion_depth_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepthInput"></a>

```python
cte_max_recursion_depth_input: str
```

- *Type:* str

---

##### `default_authentication_plugin_input`<sup>Optional</sup> <a name="default_authentication_plugin_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPluginInput"></a>

```python
default_authentication_plugin_input: str
```

- *Type:* str

---

##### `foreign_key_checks_input`<sup>Optional</sup> <a name="foreign_key_checks_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecksInput"></a>

```python
foreign_key_checks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `generated_random_password_length_input`<sup>Optional</sup> <a name="generated_random_password_length_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLengthInput"></a>

```python
generated_random_password_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `global_connection_memory_limit_input`<sup>Optional</sup> <a name="global_connection_memory_limit_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimitInput"></a>

```python
global_connection_memory_limit_input: str
```

- *Type:* str

---

##### `global_connection_memory_tracking_input`<sup>Optional</sup> <a name="global_connection_memory_tracking_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTrackingInput"></a>

```python
global_connection_memory_tracking_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_replication_consistency_input`<sup>Optional</sup> <a name="group_replication_consistency_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistencyInput"></a>

```python
group_replication_consistency_input: str
```

- *Type:* str

---

##### `information_schema_stats_expiry_input`<sup>Optional</sup> <a name="information_schema_stats_expiry_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiryInput"></a>

```python
information_schema_stats_expiry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_dump_pct_input`<sup>Optional</sup> <a name="innodb_buffer_pool_dump_pct_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPctInput"></a>

```python
innodb_buffer_pool_dump_pct_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_instances_input`<sup>Optional</sup> <a name="innodb_buffer_pool_instances_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstancesInput"></a>

```python
innodb_buffer_pool_instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_size_input`<sup>Optional</sup> <a name="innodb_buffer_pool_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSizeInput"></a>

```python
innodb_buffer_pool_size_input: str
```

- *Type:* str

---

##### `innodb_ddl_buffer_size_input`<sup>Optional</sup> <a name="innodb_ddl_buffer_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSizeInput"></a>

```python
innodb_ddl_buffer_size_input: str
```

- *Type:* str

---

##### `innodb_ddl_threads_input`<sup>Optional</sup> <a name="innodb_ddl_threads_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreadsInput"></a>

```python
innodb_ddl_threads_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_enable_stopword_input`<sup>Optional</sup> <a name="innodb_ft_enable_stopword_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopwordInput"></a>

```python
innodb_ft_enable_stopword_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `innodb_ft_max_token_size_input`<sup>Optional</sup> <a name="innodb_ft_max_token_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSizeInput"></a>

```python
innodb_ft_max_token_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_min_token_size_input`<sup>Optional</sup> <a name="innodb_ft_min_token_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSizeInput"></a>

```python
innodb_ft_min_token_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_num_word_optimize_input`<sup>Optional</sup> <a name="innodb_ft_num_word_optimize_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimizeInput"></a>

```python
innodb_ft_num_word_optimize_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_result_cache_limit_input`<sup>Optional</sup> <a name="innodb_ft_result_cache_limit_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimitInput"></a>

```python
innodb_ft_result_cache_limit_input: str
```

- *Type:* str

---

##### `innodb_ft_server_stopword_table_input`<sup>Optional</sup> <a name="innodb_ft_server_stopword_table_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTableInput"></a>

```python
innodb_ft_server_stopword_table_input: str
```

- *Type:* str

---

##### `innodb_lock_wait_timeout_input`<sup>Optional</sup> <a name="innodb_lock_wait_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeoutInput"></a>

```python
innodb_lock_wait_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_log_writer_threads_input`<sup>Optional</sup> <a name="innodb_log_writer_threads_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreadsInput"></a>

```python
innodb_log_writer_threads_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `innodb_max_purge_lag_delay_input`<sup>Optional</sup> <a name="innodb_max_purge_lag_delay_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelayInput"></a>

```python
innodb_max_purge_lag_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_max_purge_lag_input`<sup>Optional</sup> <a name="innodb_max_purge_lag_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagInput"></a>

```python
innodb_max_purge_lag_input: str
```

- *Type:* str

---

##### `innodb_stats_persistent_sample_pages_input`<sup>Optional</sup> <a name="innodb_stats_persistent_sample_pages_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePagesInput"></a>

```python
innodb_stats_persistent_sample_pages_input: str
```

- *Type:* str

---

##### `innodb_stats_transient_sample_pages_input`<sup>Optional</sup> <a name="innodb_stats_transient_sample_pages_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePagesInput"></a>

```python
innodb_stats_transient_sample_pages_input: str
```

- *Type:* str

---

##### `interactive_timeout_input`<sup>Optional</sup> <a name="interactive_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeoutInput"></a>

```python
interactive_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_infile_input`<sup>Optional</sup> <a name="local_infile_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfileInput"></a>

```python
local_infile_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mandatory_roles_input`<sup>Optional</sup> <a name="mandatory_roles_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRolesInput"></a>

```python
mandatory_roles_input: str
```

- *Type:* str

---

##### `max_allowed_packet_input`<sup>Optional</sup> <a name="max_allowed_packet_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacketInput"></a>

```python
max_allowed_packet_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_binlog_cache_size_input`<sup>Optional</sup> <a name="max_binlog_cache_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSizeInput"></a>

```python
max_binlog_cache_size_input: str
```

- *Type:* str

---

##### `max_connect_errors_input`<sup>Optional</sup> <a name="max_connect_errors_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrorsInput"></a>

```python
max_connect_errors_input: str
```

- *Type:* str

---

##### `max_connections_input`<sup>Optional</sup> <a name="max_connections_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectionsInput"></a>

```python
max_connections_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_execution_time_input`<sup>Optional</sup> <a name="max_execution_time_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTimeInput"></a>

```python
max_execution_time_input: str
```

- *Type:* str

---

##### `max_heap_table_size_input`<sup>Optional</sup> <a name="max_heap_table_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSizeInput"></a>

```python
max_heap_table_size_input: str
```

- *Type:* str

---

##### `max_prepared_stmt_count_input`<sup>Optional</sup> <a name="max_prepared_stmt_count_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCountInput"></a>

```python
max_prepared_stmt_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysql_firewall_mode_input`<sup>Optional</sup> <a name="mysql_firewall_mode_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallModeInput"></a>

```python
mysql_firewall_mode_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mysqlx_connect_timeout_input`<sup>Optional</sup> <a name="mysqlx_connect_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeoutInput"></a>

```python
mysqlx_connect_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_deflate_default_compression_level_input`<sup>Optional</sup> <a name="mysqlx_deflate_default_compression_level_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevelInput"></a>

```python
mysqlx_deflate_default_compression_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_deflate_max_client_compression_level_input`<sup>Optional</sup> <a name="mysqlx_deflate_max_client_compression_level_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevelInput"></a>

```python
mysqlx_deflate_max_client_compression_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_document_id_unique_prefix_input`<sup>Optional</sup> <a name="mysqlx_document_id_unique_prefix_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefixInput"></a>

```python
mysqlx_document_id_unique_prefix_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_enable_hello_notice_input`<sup>Optional</sup> <a name="mysqlx_enable_hello_notice_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNoticeInput"></a>

```python
mysqlx_enable_hello_notice_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mysqlx_idle_worker_thread_timeout_input`<sup>Optional</sup> <a name="mysqlx_idle_worker_thread_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeoutInput"></a>

```python
mysqlx_idle_worker_thread_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_interactive_timeout_input`<sup>Optional</sup> <a name="mysqlx_interactive_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeoutInput"></a>

```python
mysqlx_interactive_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_lz4_default_compression_level_input`<sup>Optional</sup> <a name="mysqlx_lz4_default_compression_level_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevelInput"></a>

```python
mysqlx_lz4_default_compression_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_lz4_max_client_compression_level_input`<sup>Optional</sup> <a name="mysqlx_lz4_max_client_compression_level_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevelInput"></a>

```python
mysqlx_lz4_max_client_compression_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_max_allowed_packet_input`<sup>Optional</sup> <a name="mysqlx_max_allowed_packet_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacketInput"></a>

```python
mysqlx_max_allowed_packet_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_min_worker_threads_input`<sup>Optional</sup> <a name="mysqlx_min_worker_threads_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreadsInput"></a>

```python
mysqlx_min_worker_threads_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_read_timeout_input`<sup>Optional</sup> <a name="mysqlx_read_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeoutInput"></a>

```python
mysqlx_read_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_wait_timeout_input`<sup>Optional</sup> <a name="mysqlx_wait_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeoutInput"></a>

```python
mysqlx_wait_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_write_timeout_input`<sup>Optional</sup> <a name="mysqlx_write_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeoutInput"></a>

```python
mysqlx_write_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_zstd_default_compression_level_input`<sup>Optional</sup> <a name="mysqlx_zstd_default_compression_level_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevelInput"></a>

```python
mysqlx_zstd_default_compression_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_zstd_max_client_compression_level_input`<sup>Optional</sup> <a name="mysqlx_zstd_max_client_compression_level_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevelInput"></a>

```python
mysqlx_zstd_max_client_compression_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysql_zstd_default_compression_level_input`<sup>Optional</sup> <a name="mysql_zstd_default_compression_level_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevelInput"></a>

```python
mysql_zstd_default_compression_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_read_timeout_input`<sup>Optional</sup> <a name="net_read_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeoutInput"></a>

```python
net_read_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_write_timeout_input`<sup>Optional</sup> <a name="net_write_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeoutInput"></a>

```python
net_write_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parser_max_mem_size_input`<sup>Optional</sup> <a name="parser_max_mem_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSizeInput"></a>

```python
parser_max_mem_size_input: str
```

- *Type:* str

---

##### `query_alloc_block_size_input`<sup>Optional</sup> <a name="query_alloc_block_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSizeInput"></a>

```python
query_alloc_block_size_input: str
```

- *Type:* str

---

##### `query_prealloc_size_input`<sup>Optional</sup> <a name="query_prealloc_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSizeInput"></a>

```python
query_prealloc_size_input: str
```

- *Type:* str

---

##### `regexp_time_limit_input`<sup>Optional</sup> <a name="regexp_time_limit_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimitInput"></a>

```python
regexp_time_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sort_buffer_size_input`<sup>Optional</sup> <a name="sort_buffer_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSizeInput"></a>

```python
sort_buffer_size_input: str
```

- *Type:* str

---

##### `sql_mode_input`<sup>Optional</sup> <a name="sql_mode_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlModeInput"></a>

```python
sql_mode_input: str
```

- *Type:* str

---

##### `sql_require_primary_key_input`<sup>Optional</sup> <a name="sql_require_primary_key_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKeyInput"></a>

```python
sql_require_primary_key_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sql_warnings_input`<sup>Optional</sup> <a name="sql_warnings_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarningsInput"></a>

```python
sql_warnings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `thread_pool_dedicated_listeners_input`<sup>Optional</sup> <a name="thread_pool_dedicated_listeners_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListenersInput"></a>

```python
thread_pool_dedicated_listeners_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `thread_pool_max_transactions_limit_input`<sup>Optional</sup> <a name="thread_pool_max_transactions_limit_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimitInput"></a>

```python
thread_pool_max_transactions_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `tmp_table_size_input`<sup>Optional</sup> <a name="tmp_table_size_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSizeInput"></a>

```python
tmp_table_size_input: str
```

- *Type:* str

---

##### `transaction_isolation_input`<sup>Optional</sup> <a name="transaction_isolation_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolationInput"></a>

```python
transaction_isolation_input: str
```

- *Type:* str

---

##### `wait_timeout_input`<sup>Optional</sup> <a name="wait_timeout_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeoutInput"></a>

```python
wait_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.autocommit"></a>

```python
autocommit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `big_tables`<sup>Required</sup> <a name="big_tables" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.bigTables"></a>

```python
big_tables: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `binlog_expire_logs_seconds`<sup>Required</sup> <a name="binlog_expire_logs_seconds" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```python
binlog_expire_logs_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `binlog_row_metadata`<sup>Required</sup> <a name="binlog_row_metadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata"></a>

```python
binlog_row_metadata: str
```

- *Type:* str

---

##### `binlog_row_value_options`<sup>Required</sup> <a name="binlog_row_value_options" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions"></a>

```python
binlog_row_value_options: str
```

- *Type:* str

---

##### `binlog_transaction_compression`<sup>Required</sup> <a name="binlog_transaction_compression" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression"></a>

```python
binlog_transaction_compression: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `completion_type`<sup>Required</sup> <a name="completion_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.completionType"></a>

```python
completion_type: str
```

- *Type:* str

---

##### `connection_memory_chunk_size`<sup>Required</sup> <a name="connection_memory_chunk_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```python
connection_memory_chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_memory_limit`<sup>Required</sup> <a name="connection_memory_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit"></a>

```python
connection_memory_limit: str
```

- *Type:* str

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cte_max_recursion_depth`<sup>Required</sup> <a name="cte_max_recursion_depth" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```python
cte_max_recursion_depth: str
```

- *Type:* str

---

##### `default_authentication_plugin`<sup>Required</sup> <a name="default_authentication_plugin" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```python
default_authentication_plugin: str
```

- *Type:* str

---

##### `foreign_key_checks`<sup>Required</sup> <a name="foreign_key_checks" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks"></a>

```python
foreign_key_checks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `generated_random_password_length`<sup>Required</sup> <a name="generated_random_password_length" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```python
generated_random_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `global_connection_memory_limit`<sup>Required</sup> <a name="global_connection_memory_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```python
global_connection_memory_limit: str
```

- *Type:* str

---

##### `global_connection_memory_tracking`<sup>Required</sup> <a name="global_connection_memory_tracking" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```python
global_connection_memory_tracking: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `group_replication_consistency`<sup>Required</sup> <a name="group_replication_consistency" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency"></a>

```python
group_replication_consistency: str
```

- *Type:* str

---

##### `information_schema_stats_expiry`<sup>Required</sup> <a name="information_schema_stats_expiry" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```python
information_schema_stats_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_dump_pct`<sup>Required</sup> <a name="innodb_buffer_pool_dump_pct" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```python
innodb_buffer_pool_dump_pct: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_instances`<sup>Required</sup> <a name="innodb_buffer_pool_instances" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```python
innodb_buffer_pool_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_size`<sup>Required</sup> <a name="innodb_buffer_pool_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize"></a>

```python
innodb_buffer_pool_size: str
```

- *Type:* str

---

##### `innodb_ddl_buffer_size`<sup>Required</sup> <a name="innodb_ddl_buffer_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize"></a>

```python
innodb_ddl_buffer_size: str
```

- *Type:* str

---

##### `innodb_ddl_threads`<sup>Required</sup> <a name="innodb_ddl_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads"></a>

```python
innodb_ddl_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_enable_stopword`<sup>Required</sup> <a name="innodb_ft_enable_stopword" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword"></a>

```python
innodb_ft_enable_stopword: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `innodb_ft_max_token_size`<sup>Required</sup> <a name="innodb_ft_max_token_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```python
innodb_ft_max_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_min_token_size`<sup>Required</sup> <a name="innodb_ft_min_token_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```python
innodb_ft_min_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_num_word_optimize`<sup>Required</sup> <a name="innodb_ft_num_word_optimize" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```python
innodb_ft_num_word_optimize: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_result_cache_limit`<sup>Required</sup> <a name="innodb_ft_result_cache_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```python
innodb_ft_result_cache_limit: str
```

- *Type:* str

---

##### `innodb_ft_server_stopword_table`<sup>Required</sup> <a name="innodb_ft_server_stopword_table" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```python
innodb_ft_server_stopword_table: str
```

- *Type:* str

---

##### `innodb_lock_wait_timeout`<sup>Required</sup> <a name="innodb_lock_wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```python
innodb_lock_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_log_writer_threads`<sup>Required</sup> <a name="innodb_log_writer_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads"></a>

```python
innodb_log_writer_threads: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `innodb_max_purge_lag`<sup>Required</sup> <a name="innodb_max_purge_lag" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```python
innodb_max_purge_lag: str
```

- *Type:* str

---

##### `innodb_max_purge_lag_delay`<sup>Required</sup> <a name="innodb_max_purge_lag_delay" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```python
innodb_max_purge_lag_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_stats_persistent_sample_pages`<sup>Required</sup> <a name="innodb_stats_persistent_sample_pages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```python
innodb_stats_persistent_sample_pages: str
```

- *Type:* str

---

##### `innodb_stats_transient_sample_pages`<sup>Required</sup> <a name="innodb_stats_transient_sample_pages" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```python
innodb_stats_transient_sample_pages: str
```

- *Type:* str

---

##### `interactive_timeout`<sup>Required</sup> <a name="interactive_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout"></a>

```python
interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_infile`<sup>Required</sup> <a name="local_infile" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.localInfile"></a>

```python
local_infile: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mandatory_roles`<sup>Required</sup> <a name="mandatory_roles" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles"></a>

```python
mandatory_roles: str
```

- *Type:* str

---

##### `max_allowed_packet`<sup>Required</sup> <a name="max_allowed_packet" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket"></a>

```python
max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_binlog_cache_size`<sup>Required</sup> <a name="max_binlog_cache_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize"></a>

```python
max_binlog_cache_size: str
```

- *Type:* str

---

##### `max_connect_errors`<sup>Required</sup> <a name="max_connect_errors" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors"></a>

```python
max_connect_errors: str
```

- *Type:* str

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_execution_time`<sup>Required</sup> <a name="max_execution_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime"></a>

```python
max_execution_time: str
```

- *Type:* str

---

##### `max_heap_table_size`<sup>Required</sup> <a name="max_heap_table_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize"></a>

```python
max_heap_table_size: str
```

- *Type:* str

---

##### `max_prepared_stmt_count`<sup>Required</sup> <a name="max_prepared_stmt_count" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount"></a>

```python
max_prepared_stmt_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysql_firewall_mode`<sup>Required</sup> <a name="mysql_firewall_mode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode"></a>

```python
mysql_firewall_mode: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mysqlx_connect_timeout`<sup>Required</sup> <a name="mysqlx_connect_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```python
mysqlx_connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_deflate_default_compression_level`<sup>Required</sup> <a name="mysqlx_deflate_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```python
mysqlx_deflate_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_deflate_max_client_compression_level`<sup>Required</sup> <a name="mysqlx_deflate_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```python
mysqlx_deflate_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_document_id_unique_prefix`<sup>Required</sup> <a name="mysqlx_document_id_unique_prefix" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```python
mysqlx_document_id_unique_prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_enable_hello_notice`<sup>Required</sup> <a name="mysqlx_enable_hello_notice" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```python
mysqlx_enable_hello_notice: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mysqlx_idle_worker_thread_timeout`<sup>Required</sup> <a name="mysqlx_idle_worker_thread_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```python
mysqlx_idle_worker_thread_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_interactive_timeout`<sup>Required</sup> <a name="mysqlx_interactive_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```python
mysqlx_interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_lz4_default_compression_level`<sup>Required</sup> <a name="mysqlx_lz4_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```python
mysqlx_lz4_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_lz4_max_client_compression_level`<sup>Required</sup> <a name="mysqlx_lz4_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```python
mysqlx_lz4_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_max_allowed_packet`<sup>Required</sup> <a name="mysqlx_max_allowed_packet" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```python
mysqlx_max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_min_worker_threads`<sup>Required</sup> <a name="mysqlx_min_worker_threads" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```python
mysqlx_min_worker_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_read_timeout`<sup>Required</sup> <a name="mysqlx_read_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout"></a>

```python
mysqlx_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_wait_timeout`<sup>Required</sup> <a name="mysqlx_wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```python
mysqlx_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_write_timeout`<sup>Required</sup> <a name="mysqlx_write_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```python
mysqlx_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_zstd_default_compression_level`<sup>Required</sup> <a name="mysqlx_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```python
mysqlx_zstd_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_zstd_max_client_compression_level`<sup>Required</sup> <a name="mysqlx_zstd_max_client_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```python
mysqlx_zstd_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysql_zstd_default_compression_level`<sup>Required</sup> <a name="mysql_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```python
mysql_zstd_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_read_timeout`<sup>Required</sup> <a name="net_read_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout"></a>

```python
net_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_write_timeout`<sup>Required</sup> <a name="net_write_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout"></a>

```python
net_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parser_max_mem_size`<sup>Required</sup> <a name="parser_max_mem_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize"></a>

```python
parser_max_mem_size: str
```

- *Type:* str

---

##### `query_alloc_block_size`<sup>Required</sup> <a name="query_alloc_block_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize"></a>

```python
query_alloc_block_size: str
```

- *Type:* str

---

##### `query_prealloc_size`<sup>Required</sup> <a name="query_prealloc_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize"></a>

```python
query_prealloc_size: str
```

- *Type:* str

---

##### `regexp_time_limit`<sup>Required</sup> <a name="regexp_time_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit"></a>

```python
regexp_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sort_buffer_size`<sup>Required</sup> <a name="sort_buffer_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize"></a>

```python
sort_buffer_size: str
```

- *Type:* str

---

##### `sql_mode`<sup>Required</sup> <a name="sql_mode" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlMode"></a>

```python
sql_mode: str
```

- *Type:* str

---

##### `sql_require_primary_key`<sup>Required</sup> <a name="sql_require_primary_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```python
sql_require_primary_key: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `sql_warnings`<sup>Required</sup> <a name="sql_warnings" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings"></a>

```python
sql_warnings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `thread_pool_dedicated_listeners`<sup>Required</sup> <a name="thread_pool_dedicated_listeners" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```python
thread_pool_dedicated_listeners: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `thread_pool_max_transactions_limit`<sup>Required</sup> <a name="thread_pool_max_transactions_limit" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```python
thread_pool_max_transactions_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `tmp_table_size`<sup>Required</sup> <a name="tmp_table_size" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize"></a>

```python
tmp_table_size: str
```

- *Type:* str

---

##### `transaction_isolation`<sup>Required</sup> <a name="transaction_isolation" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation"></a>

```python
transaction_isolation: str
```

- *Type:* str

---

##### `wait_timeout`<sup>Required</sup> <a name="wait_timeout" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout"></a>

```python
wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariablesOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlConfigurationVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlConfiguration.MysqlMysqlConfigurationVariables">MysqlMysqlConfigurationVariables</a>

---



