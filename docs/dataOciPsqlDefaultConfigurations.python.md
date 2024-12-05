# `dataOciPsqlDefaultConfigurations` Submodule <a name="`dataOciPsqlDefaultConfigurations` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDefaultConfigurations <a name="DataOciPsqlDefaultConfigurations" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations oci_psql_default_configurations}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_id: str = None,
  db_version: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciPsqlDefaultConfigurationsFilter]] = None,
  id: str = None,
  shape: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.configurationId">configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#configuration_id DataOciPsqlDefaultConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#db_version DataOciPsqlDefaultConfigurations#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#display_name DataOciPsqlDefaultConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#id DataOciPsqlDefaultConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#shape DataOciPsqlDefaultConfigurations#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#state DataOciPsqlDefaultConfigurations#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.configurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#configuration_id DataOciPsqlDefaultConfigurations#configuration_id}.

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.dbVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#db_version DataOciPsqlDefaultConfigurations#db_version}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#display_name DataOciPsqlDefaultConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#filter DataOciPsqlDefaultConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#id DataOciPsqlDefaultConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#shape DataOciPsqlDefaultConfigurations#shape}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#state DataOciPsqlDefaultConfigurations#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetConfigurationId">reset_configuration_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDbVersion">reset_db_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetShape">reset_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciPsqlDefaultConfigurationsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>]]

---

##### `reset_configuration_id` <a name="reset_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetConfigurationId"></a>

```python
def reset_configuration_id() -> None
```

##### `reset_db_version` <a name="reset_db_version" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDbVersion"></a>

```python
def reset_db_version() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_shape` <a name="reset_shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetShape"></a>

```python
def reset_shape() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciPsqlDefaultConfigurations resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciPsqlDefaultConfigurations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciPsqlDefaultConfigurations to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciPsqlDefaultConfigurations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDefaultConfigurations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.defaultConfigurationCollection">default_configuration_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList">DataOciPsqlDefaultConfigurationsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationIdInput">configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersionInput">db_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `default_configuration_collection`<sup>Required</sup> <a name="default_configuration_collection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.defaultConfigurationCollection"></a>

```python
default_configuration_collection: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filter"></a>

```python
filter: DataOciPsqlDefaultConfigurationsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList">DataOciPsqlDefaultConfigurationsFilterList</a>

---

##### `configuration_id_input`<sup>Optional</sup> <a name="configuration_id_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationIdInput"></a>

```python
configuration_id_input: str
```

- *Type:* str

---

##### `db_version_input`<sup>Optional</sup> <a name="db_version_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersionInput"></a>

```python
db_version_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciPsqlDefaultConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurations.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDefaultConfigurationsConfig <a name="DataOciPsqlDefaultConfigurationsConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_id: str = None,
  db_version: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciPsqlDefaultConfigurationsFilter]] = None,
  id: str = None,
  shape: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.configurationId">configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#configuration_id DataOciPsqlDefaultConfigurations#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#db_version DataOciPsqlDefaultConfigurations#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#display_name DataOciPsqlDefaultConfigurations#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#id DataOciPsqlDefaultConfigurations#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#shape DataOciPsqlDefaultConfigurations#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#state DataOciPsqlDefaultConfigurations#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_id`<sup>Optional</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#configuration_id DataOciPsqlDefaultConfigurations#configuration_id}.

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#db_version DataOciPsqlDefaultConfigurations#db_version}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#display_name DataOciPsqlDefaultConfigurations#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciPsqlDefaultConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#filter DataOciPsqlDefaultConfigurations#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#id DataOciPsqlDefaultConfigurations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `shape`<sup>Optional</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#shape DataOciPsqlDefaultConfigurations#shape}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#state DataOciPsqlDefaultConfigurations#state}.

---

### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection()
```


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems()
```


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails()
```


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems()
```


### DataOciPsqlDefaultConfigurationsFilter <a name="DataOciPsqlDefaultConfigurationsFilter" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#name DataOciPsqlDefaultConfigurations#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#values DataOciPsqlDefaultConfigurations#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#regex DataOciPsqlDefaultConfigurations#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#name DataOciPsqlDefaultConfigurations#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#values DataOciPsqlDefaultConfigurations#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configurations#regex DataOciPsqlDefaultConfigurations#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.allowedValues">allowed_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.defaultConfigValue">default_config_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isOverridable">is_overridable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isRestartRequired">is_restart_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.allowedValues"></a>

```python
allowed_values: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `default_config_value`<sup>Required</sup> <a name="default_config_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.defaultConfigValue"></a>

```python
default_config_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_overridable`<sup>Required</sup> <a name="is_overridable" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isOverridable"></a>

```python
is_overridable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_restart_required`<sup>Required</sup> <a name="is_restart_required" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.isRestartRequired"></a>

```python
is_restart_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItems</a>

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.items"></a>

```python
items: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetails</a>

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.configurationDetails">configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceMemorySizeInGbs">instance_memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceOcpuCount">instance_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.isFlexible">is_flexible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `configuration_details`<sup>Required</sup> <a name="configuration_details" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.configurationDetails"></a>

```python
configuration_details: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsConfigurationDetailsList</a>

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_memory_size_in_gbs`<sup>Required</sup> <a name="instance_memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceMemorySizeInGbs"></a>

```python
instance_memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_ocpu_count`<sup>Required</sup> <a name="instance_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.instanceOcpuCount"></a>

```python
instance_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_flexible`<sup>Required</sup> <a name="is_flexible" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.isFlexible"></a>

```python
is_flexible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItems</a>

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference <a name="DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.items"></a>

```python
items: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection">DataOciPsqlDefaultConfigurationsDefaultConfigurationCollection</a>

---


### DataOciPsqlDefaultConfigurationsFilterList <a name="DataOciPsqlDefaultConfigurationsFilterList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDefaultConfigurationsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciPsqlDefaultConfigurationsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>]]

---


### DataOciPsqlDefaultConfigurationsFilterOutputReference <a name="DataOciPsqlDefaultConfigurationsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configurations

dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciPsqlDefaultConfigurationsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfigurations.DataOciPsqlDefaultConfigurationsFilter">DataOciPsqlDefaultConfigurationsFilter</a>]

---



