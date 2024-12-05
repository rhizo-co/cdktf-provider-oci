# `dataOciMysqlMysqlConfigurations` Submodule <a name="`dataOciMysqlMysqlConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlConfigurations <a name="DataOciMysqlMysqlConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations oci_mysql_mysql_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations(
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
  configuration_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlConfigurationsFilter]] = None,
  id: str = None,
  shape_name: str = None,
  state: str = None,
  type: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.configurationId">configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.type">type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}.

---

##### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.configurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#filter DataOciMysqlMysqlConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape_name`<sup>Optional</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.shapeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.Initializer.parameter.type"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetConfigurationId">reset_configuration_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetShapeName">reset_shape_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlConfigurationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>]]

---

##### `reset_configuration_id` <a name="reset_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetConfigurationId"></a>

```python
def reset_configuration_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_shape_name` <a name="reset_shape_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetShapeName"></a>

```python
def reset_shape_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMysqlMysqlConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMysqlMysqlConfigurations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMysqlMysqlConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurations">configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList">DataOciMysqlMysqlConfigurationsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList">DataOciMysqlMysqlConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationIdInput">configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeNameInput">shape_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.typeInput">type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.type">type</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurations"></a>

```python
configurations: DataOciMysqlMysqlConfigurationsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList">DataOciMysqlMysqlConfigurationsConfigurationsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filter"></a>

```python
filter: DataOciMysqlMysqlConfigurationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList">DataOciMysqlMysqlConfigurationsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `configuration_id_input`<sup>Optional</sup> <a name="configuration_id_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationIdInput"></a>

```python
configuration_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `shape_name_input`<sup>Optional</sup> <a name="shape_name_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeNameInput"></a>

```python
shape_name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.typeInput"></a>

```python
type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.type"></a>

```python
type: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlConfigurationsConfig <a name="DataOciMysqlMysqlConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  configuration_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlConfigurationsFilter]] = None,
  id: str = None,
  shape_name: str = None,
  state: str = None,
  type: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.configurationId">configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.shapeName">shape_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.type">type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#compartment_id DataOciMysqlMysqlConfigurations#compartment_id}.

---

##### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#configuration_id DataOciMysqlMysqlConfigurations#configuration_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#display_name DataOciMysqlMysqlConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#filter DataOciMysqlMysqlConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#id DataOciMysqlMysqlConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape_name`<sup>Optional</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#shape_name DataOciMysqlMysqlConfigurations#shape_name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#state DataOciMysqlMysqlConfigurations#state}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfig.property.type"></a>

```python
type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#type DataOciMysqlMysqlConfigurations#type}.

---

### DataOciMysqlMysqlConfigurationsConfigurations <a name="DataOciMysqlMysqlConfigurationsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations()
```


### DataOciMysqlMysqlConfigurationsConfigurationsInitVariables <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables()
```


### DataOciMysqlMysqlConfigurationsConfigurationsVariables <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables()
```


### DataOciMysqlMysqlConfigurationsFilter <a name="DataOciMysqlMysqlConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#name DataOciMysqlMysqlConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#values DataOciMysqlMysqlConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#regex DataOciMysqlMysqlConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#name DataOciMysqlMysqlConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#values DataOciMysqlMysqlConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configurations#regex DataOciMysqlMysqlConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.lowerCaseTableNames">lower_case_table_names</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables">DataOciMysqlMysqlConfigurationsConfigurationsInitVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lower_case_table_names`<sup>Required</sup> <a name="lower_case_table_names" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```python
lower_case_table_names: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlConfigurationsConfigurationsInitVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariables">DataOciMysqlMysqlConfigurationsConfigurationsInitVariables</a>

---


### DataOciMysqlMysqlConfigurationsConfigurationsList <a name="DataOciMysqlMysqlConfigurationsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlConfigurationsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlConfigurationsConfigurationsOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.initVariables">init_variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.parentConfigurationId">parent_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations">DataOciMysqlMysqlConfigurationsConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `init_variables`<sup>Required</sup> <a name="init_variables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.initVariables"></a>

```python
init_variables: DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsInitVariablesList</a>

---

##### `parent_configuration_id`<sup>Required</sup> <a name="parent_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.parentConfigurationId"></a>

```python
parent_configuration_id: str
```

- *Type:* str

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.variables"></a>

```python
variables: DataOciMysqlMysqlConfigurationsConfigurationsVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList">DataOciMysqlMysqlConfigurationsConfigurationsVariablesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlConfigurationsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurations">DataOciMysqlMysqlConfigurationsConfigurations</a>

---


### DataOciMysqlMysqlConfigurationsConfigurationsVariablesList <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.autocommit">autocommit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.bigTables">big_tables</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogExpireLogsSeconds">binlog_expire_logs_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowMetadata">binlog_row_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowValueOptions">binlog_row_value_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogTransactionCompression">binlog_transaction_compression</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.completionType">completion_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryChunkSize">connection_memory_chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryLimit">connection_memory_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.cteMaxRecursionDepth">cte_max_recursion_depth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.defaultAuthenticationPlugin">default_authentication_plugin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.foreignKeyChecks">foreign_key_checks</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.generatedRandomPasswordLength">generated_random_password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryLimit">global_connection_memory_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryTracking">global_connection_memory_tracking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.groupReplicationConsistency">group_replication_consistency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.informationSchemaStatsExpiry">information_schema_stats_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolDumpPct">innodb_buffer_pool_dump_pct</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolInstances">innodb_buffer_pool_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolSize">innodb_buffer_pool_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlBufferSize">innodb_ddl_buffer_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlThreads">innodb_ddl_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtEnableStopword">innodb_ft_enable_stopword</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMaxTokenSize">innodb_ft_max_token_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMinTokenSize">innodb_ft_min_token_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtNumWordOptimize">innodb_ft_num_word_optimize</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtResultCacheLimit">innodb_ft_result_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtServerStopwordTable">innodb_ft_server_stopword_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLockWaitTimeout">innodb_lock_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLogWriterThreads">innodb_log_writer_threads</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLag">innodb_max_purge_lag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLagDelay">innodb_max_purge_lag_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsPersistentSamplePages">innodb_stats_persistent_sample_pages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsTransientSamplePages">innodb_stats_transient_sample_pages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.interactiveTimeout">interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.localInfile">local_infile</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mandatoryRoles">mandatory_roles</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxAllowedPacket">max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxBinlogCacheSize">max_binlog_cache_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnectErrors">max_connect_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxExecutionTime">max_execution_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxHeapTableSize">max_heap_table_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxPreparedStmtCount">max_prepared_stmt_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlFirewallMode">mysql_firewall_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxConnectTimeout">mysqlx_connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">mysqlx_deflate_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">mysqlx_deflate_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">mysqlx_document_id_unique_prefix</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxEnableHelloNotice">mysqlx_enable_hello_notice</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">mysqlx_idle_worker_thread_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxInteractiveTimeout">mysqlx_interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">mysqlx_lz4_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">mysqlx_lz4_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMaxAllowedPacket">mysqlx_max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMinWorkerThreads">mysqlx_min_worker_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxReadTimeout">mysqlx_read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWaitTimeout">mysqlx_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWriteTimeout">mysqlx_write_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">mysqlx_zstd_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">mysqlx_zstd_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">mysql_zstd_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netReadTimeout">net_read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netWriteTimeout">net_write_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.parserMaxMemSize">parser_max_mem_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryAllocBlockSize">query_alloc_block_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryPreallocSize">query_prealloc_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.regexpTimeLimit">regexp_time_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sortBufferSize">sort_buffer_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlMode">sql_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlRequirePrimaryKey">sql_require_primary_key</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlWarnings">sql_warnings</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolDedicatedListeners">thread_pool_dedicated_listeners</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolMaxTransactionsLimit">thread_pool_max_transactions_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.tmpTableSize">tmp_table_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.transactionIsolation">transaction_isolation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables">DataOciMysqlMysqlConfigurationsConfigurationsVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.autocommit"></a>

```python
autocommit: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `big_tables`<sup>Required</sup> <a name="big_tables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.bigTables"></a>

```python
big_tables: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `binlog_expire_logs_seconds`<sup>Required</sup> <a name="binlog_expire_logs_seconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```python
binlog_expire_logs_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `binlog_row_metadata`<sup>Required</sup> <a name="binlog_row_metadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowMetadata"></a>

```python
binlog_row_metadata: str
```

- *Type:* str

---

##### `binlog_row_value_options`<sup>Required</sup> <a name="binlog_row_value_options" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogRowValueOptions"></a>

```python
binlog_row_value_options: str
```

- *Type:* str

---

##### `binlog_transaction_compression`<sup>Required</sup> <a name="binlog_transaction_compression" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.binlogTransactionCompression"></a>

```python
binlog_transaction_compression: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `completion_type`<sup>Required</sup> <a name="completion_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.completionType"></a>

```python
completion_type: str
```

- *Type:* str

---

##### `connection_memory_chunk_size`<sup>Required</sup> <a name="connection_memory_chunk_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```python
connection_memory_chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_memory_limit`<sup>Required</sup> <a name="connection_memory_limit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectionMemoryLimit"></a>

```python
connection_memory_limit: str
```

- *Type:* str

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cte_max_recursion_depth`<sup>Required</sup> <a name="cte_max_recursion_depth" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```python
cte_max_recursion_depth: str
```

- *Type:* str

---

##### `default_authentication_plugin`<sup>Required</sup> <a name="default_authentication_plugin" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```python
default_authentication_plugin: str
```

- *Type:* str

---

##### `foreign_key_checks`<sup>Required</sup> <a name="foreign_key_checks" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.foreignKeyChecks"></a>

```python
foreign_key_checks: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `generated_random_password_length`<sup>Required</sup> <a name="generated_random_password_length" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```python
generated_random_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `global_connection_memory_limit`<sup>Required</sup> <a name="global_connection_memory_limit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```python
global_connection_memory_limit: str
```

- *Type:* str

---

##### `global_connection_memory_tracking`<sup>Required</sup> <a name="global_connection_memory_tracking" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```python
global_connection_memory_tracking: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `group_replication_consistency`<sup>Required</sup> <a name="group_replication_consistency" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.groupReplicationConsistency"></a>

```python
group_replication_consistency: str
```

- *Type:* str

---

##### `information_schema_stats_expiry`<sup>Required</sup> <a name="information_schema_stats_expiry" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```python
information_schema_stats_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_dump_pct`<sup>Required</sup> <a name="innodb_buffer_pool_dump_pct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```python
innodb_buffer_pool_dump_pct: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_instances`<sup>Required</sup> <a name="innodb_buffer_pool_instances" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```python
innodb_buffer_pool_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_size`<sup>Required</sup> <a name="innodb_buffer_pool_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbBufferPoolSize"></a>

```python
innodb_buffer_pool_size: str
```

- *Type:* str

---

##### `innodb_ddl_buffer_size`<sup>Required</sup> <a name="innodb_ddl_buffer_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlBufferSize"></a>

```python
innodb_ddl_buffer_size: str
```

- *Type:* str

---

##### `innodb_ddl_threads`<sup>Required</sup> <a name="innodb_ddl_threads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbDdlThreads"></a>

```python
innodb_ddl_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_enable_stopword`<sup>Required</sup> <a name="innodb_ft_enable_stopword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtEnableStopword"></a>

```python
innodb_ft_enable_stopword: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `innodb_ft_max_token_size`<sup>Required</sup> <a name="innodb_ft_max_token_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```python
innodb_ft_max_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_min_token_size`<sup>Required</sup> <a name="innodb_ft_min_token_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```python
innodb_ft_min_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_num_word_optimize`<sup>Required</sup> <a name="innodb_ft_num_word_optimize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```python
innodb_ft_num_word_optimize: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_result_cache_limit`<sup>Required</sup> <a name="innodb_ft_result_cache_limit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```python
innodb_ft_result_cache_limit: str
```

- *Type:* str

---

##### `innodb_ft_server_stopword_table`<sup>Required</sup> <a name="innodb_ft_server_stopword_table" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```python
innodb_ft_server_stopword_table: str
```

- *Type:* str

---

##### `innodb_lock_wait_timeout`<sup>Required</sup> <a name="innodb_lock_wait_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```python
innodb_lock_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_log_writer_threads`<sup>Required</sup> <a name="innodb_log_writer_threads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbLogWriterThreads"></a>

```python
innodb_log_writer_threads: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `innodb_max_purge_lag`<sup>Required</sup> <a name="innodb_max_purge_lag" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```python
innodb_max_purge_lag: str
```

- *Type:* str

---

##### `innodb_max_purge_lag_delay`<sup>Required</sup> <a name="innodb_max_purge_lag_delay" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```python
innodb_max_purge_lag_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_stats_persistent_sample_pages`<sup>Required</sup> <a name="innodb_stats_persistent_sample_pages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```python
innodb_stats_persistent_sample_pages: str
```

- *Type:* str

---

##### `innodb_stats_transient_sample_pages`<sup>Required</sup> <a name="innodb_stats_transient_sample_pages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```python
innodb_stats_transient_sample_pages: str
```

- *Type:* str

---

##### `interactive_timeout`<sup>Required</sup> <a name="interactive_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.interactiveTimeout"></a>

```python
interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_infile`<sup>Required</sup> <a name="local_infile" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.localInfile"></a>

```python
local_infile: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mandatory_roles`<sup>Required</sup> <a name="mandatory_roles" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mandatoryRoles"></a>

```python
mandatory_roles: str
```

- *Type:* str

---

##### `max_allowed_packet`<sup>Required</sup> <a name="max_allowed_packet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxAllowedPacket"></a>

```python
max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_binlog_cache_size`<sup>Required</sup> <a name="max_binlog_cache_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxBinlogCacheSize"></a>

```python
max_binlog_cache_size: str
```

- *Type:* str

---

##### `max_connect_errors`<sup>Required</sup> <a name="max_connect_errors" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnectErrors"></a>

```python
max_connect_errors: str
```

- *Type:* str

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_execution_time`<sup>Required</sup> <a name="max_execution_time" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxExecutionTime"></a>

```python
max_execution_time: str
```

- *Type:* str

---

##### `max_heap_table_size`<sup>Required</sup> <a name="max_heap_table_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxHeapTableSize"></a>

```python
max_heap_table_size: str
```

- *Type:* str

---

##### `max_prepared_stmt_count`<sup>Required</sup> <a name="max_prepared_stmt_count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.maxPreparedStmtCount"></a>

```python
max_prepared_stmt_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysql_firewall_mode`<sup>Required</sup> <a name="mysql_firewall_mode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlFirewallMode"></a>

```python
mysql_firewall_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mysqlx_connect_timeout`<sup>Required</sup> <a name="mysqlx_connect_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```python
mysqlx_connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_deflate_default_compression_level`<sup>Required</sup> <a name="mysqlx_deflate_default_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```python
mysqlx_deflate_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_deflate_max_client_compression_level`<sup>Required</sup> <a name="mysqlx_deflate_max_client_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```python
mysqlx_deflate_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_document_id_unique_prefix`<sup>Required</sup> <a name="mysqlx_document_id_unique_prefix" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```python
mysqlx_document_id_unique_prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_enable_hello_notice`<sup>Required</sup> <a name="mysqlx_enable_hello_notice" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```python
mysqlx_enable_hello_notice: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mysqlx_idle_worker_thread_timeout`<sup>Required</sup> <a name="mysqlx_idle_worker_thread_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```python
mysqlx_idle_worker_thread_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_interactive_timeout`<sup>Required</sup> <a name="mysqlx_interactive_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```python
mysqlx_interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_lz4_default_compression_level`<sup>Required</sup> <a name="mysqlx_lz4_default_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```python
mysqlx_lz4_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_lz4_max_client_compression_level`<sup>Required</sup> <a name="mysqlx_lz4_max_client_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```python
mysqlx_lz4_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_max_allowed_packet`<sup>Required</sup> <a name="mysqlx_max_allowed_packet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```python
mysqlx_max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_min_worker_threads`<sup>Required</sup> <a name="mysqlx_min_worker_threads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```python
mysqlx_min_worker_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_read_timeout`<sup>Required</sup> <a name="mysqlx_read_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxReadTimeout"></a>

```python
mysqlx_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_wait_timeout`<sup>Required</sup> <a name="mysqlx_wait_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```python
mysqlx_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_write_timeout`<sup>Required</sup> <a name="mysqlx_write_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```python
mysqlx_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_zstd_default_compression_level`<sup>Required</sup> <a name="mysqlx_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```python
mysqlx_zstd_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_zstd_max_client_compression_level`<sup>Required</sup> <a name="mysqlx_zstd_max_client_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```python
mysqlx_zstd_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysql_zstd_default_compression_level`<sup>Required</sup> <a name="mysql_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```python
mysql_zstd_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_read_timeout`<sup>Required</sup> <a name="net_read_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netReadTimeout"></a>

```python
net_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_write_timeout`<sup>Required</sup> <a name="net_write_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.netWriteTimeout"></a>

```python
net_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parser_max_mem_size`<sup>Required</sup> <a name="parser_max_mem_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.parserMaxMemSize"></a>

```python
parser_max_mem_size: str
```

- *Type:* str

---

##### `query_alloc_block_size`<sup>Required</sup> <a name="query_alloc_block_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryAllocBlockSize"></a>

```python
query_alloc_block_size: str
```

- *Type:* str

---

##### `query_prealloc_size`<sup>Required</sup> <a name="query_prealloc_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.queryPreallocSize"></a>

```python
query_prealloc_size: str
```

- *Type:* str

---

##### `regexp_time_limit`<sup>Required</sup> <a name="regexp_time_limit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.regexpTimeLimit"></a>

```python
regexp_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sort_buffer_size`<sup>Required</sup> <a name="sort_buffer_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sortBufferSize"></a>

```python
sort_buffer_size: str
```

- *Type:* str

---

##### `sql_mode`<sup>Required</sup> <a name="sql_mode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlMode"></a>

```python
sql_mode: str
```

- *Type:* str

---

##### `sql_require_primary_key`<sup>Required</sup> <a name="sql_require_primary_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```python
sql_require_primary_key: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `sql_warnings`<sup>Required</sup> <a name="sql_warnings" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.sqlWarnings"></a>

```python
sql_warnings: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `thread_pool_dedicated_listeners`<sup>Required</sup> <a name="thread_pool_dedicated_listeners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```python
thread_pool_dedicated_listeners: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `thread_pool_max_transactions_limit`<sup>Required</sup> <a name="thread_pool_max_transactions_limit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```python
thread_pool_max_transactions_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `tmp_table_size`<sup>Required</sup> <a name="tmp_table_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.tmpTableSize"></a>

```python
tmp_table_size: str
```

- *Type:* str

---

##### `transaction_isolation`<sup>Required</sup> <a name="transaction_isolation" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.transactionIsolation"></a>

```python
transaction_isolation: str
```

- *Type:* str

---

##### `wait_timeout`<sup>Required</sup> <a name="wait_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.waitTimeout"></a>

```python
wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlConfigurationsConfigurationsVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsConfigurationsVariables">DataOciMysqlMysqlConfigurationsConfigurationsVariables</a>

---


### DataOciMysqlMysqlConfigurationsFilterList <a name="DataOciMysqlMysqlConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMysqlMysqlConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>]]

---


### DataOciMysqlMysqlConfigurationsFilterOutputReference <a name="DataOciMysqlMysqlConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configurations

dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMysqlMysqlConfigurationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfigurations.DataOciMysqlMysqlConfigurationsFilter">DataOciMysqlMysqlConfigurationsFilter</a>]

---



