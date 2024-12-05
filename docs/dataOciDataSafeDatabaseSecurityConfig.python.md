# `dataOciDataSafeDatabaseSecurityConfig` Submodule <a name="`dataOciDataSafeDatabaseSecurityConfig` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeDatabaseSecurityConfig <a name="DataOciDataSafeDatabaseSecurityConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config oci_data_safe_database_security_config}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_config

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_security_config_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.databaseSecurityConfigId">database_security_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config#database_security_config_id DataOciDataSafeDatabaseSecurityConfig#database_security_config_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_security_config_id`<sup>Required</sup> <a name="database_security_config_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.Initializer.parameter.databaseSecurityConfigId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config#database_security_config_id DataOciDataSafeDatabaseSecurityConfig#database_security_config_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_config

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_config

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_config

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_config

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeDatabaseSecurityConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeDatabaseSecurityConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeDatabaseSecurityConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeDatabaseSecurityConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.refreshTrigger">refresh_trigger</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.sqlFirewallConfig">sql_firewall_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.targetId">target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeLastRefreshed">time_last_refreshed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput">database_security_config_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId">database_security_config_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `refresh_trigger`<sup>Required</sup> <a name="refresh_trigger" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.refreshTrigger"></a>

```python
refresh_trigger: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sql_firewall_config`<sup>Required</sup> <a name="sql_firewall_config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.sqlFirewallConfig"></a>

```python
sql_firewall_config: DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `target_id`<sup>Required</sup> <a name="target_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.targetId"></a>

```python
target_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_refreshed`<sup>Required</sup> <a name="time_last_refreshed" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeLastRefreshed"></a>

```python
time_last_refreshed: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `database_security_config_id_input`<sup>Optional</sup> <a name="database_security_config_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigIdInput"></a>

```python
database_security_config_id_input: str
```

- *Type:* str

---

##### `database_security_config_id`<sup>Required</sup> <a name="database_security_config_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.databaseSecurityConfigId"></a>

```python
database_security_config_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeDatabaseSecurityConfigConfig <a name="DataOciDataSafeDatabaseSecurityConfigConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_config

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database_security_config_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId">database_security_config_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config#database_security_config_id DataOciDataSafeDatabaseSecurityConfig#database_security_config_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database_security_config_id`<sup>Required</sup> <a name="database_security_config_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigConfig.property.databaseSecurityConfigId"></a>

```python
database_security_config_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_database_security_config#database_security_config_id DataOciDataSafeDatabaseSecurityConfig#database_security_config_id}.

---

### DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig <a name="DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_config

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList <a name="DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_config

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference <a name="DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_database_security_config

dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob">exclude_job</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated">time_status_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge">violation_log_auto_purge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exclude_job`<sup>Required</sup> <a name="exclude_job" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.excludeJob"></a>

```python
exclude_job: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_status_updated`<sup>Required</sup> <a name="time_status_updated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.timeStatusUpdated"></a>

```python
time_status_updated: str
```

- *Type:* str

---

##### `violation_log_auto_purge`<sup>Required</sup> <a name="violation_log_auto_purge" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.violationLogAutoPurge"></a>

```python
violation_log_auto_purge: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeDatabaseSecurityConfig.DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig">DataOciDataSafeDatabaseSecurityConfigSqlFirewallConfig</a>

---



