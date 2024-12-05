# `dataOciMysqlMysqlConfiguration` Submodule <a name="`dataOciMysqlMysqlConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlConfiguration <a name="DataOciMysqlMysqlConfiguration" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration oci_mysql_mysql_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.configurationId">configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration#configuration_id DataOciMysqlMysqlConfiguration#configuration_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.Initializer.parameter.configurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration#configuration_id DataOciMysqlMysqlConfiguration#configuration_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMysqlMysqlConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMysqlMysqlConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMysqlMysqlConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.initVariables">init_variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList">DataOciMysqlMysqlConfigurationInitVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.parentConfigurationId">parent_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.variables">variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList">DataOciMysqlMysqlConfigurationVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationIdInput">configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `init_variables`<sup>Required</sup> <a name="init_variables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.initVariables"></a>

```python
init_variables: DataOciMysqlMysqlConfigurationInitVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList">DataOciMysqlMysqlConfigurationInitVariablesList</a>

---

##### `parent_configuration_id`<sup>Required</sup> <a name="parent_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.parentConfigurationId"></a>

```python
parent_configuration_id: str
```

- *Type:* str

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `variables`<sup>Required</sup> <a name="variables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.variables"></a>

```python
variables: DataOciMysqlMysqlConfigurationVariablesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList">DataOciMysqlMysqlConfigurationVariablesList</a>

---

##### `configuration_id_input`<sup>Optional</sup> <a name="configuration_id_input" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationIdInput"></a>

```python
configuration_id_input: str
```

- *Type:* str

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlConfigurationConfig <a name="DataOciMysqlMysqlConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  configuration_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.configurationId">configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration#configuration_id DataOciMysqlMysqlConfiguration#configuration_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationConfig.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_configuration#configuration_id DataOciMysqlMysqlConfiguration#configuration_id}.

---

### DataOciMysqlMysqlConfigurationInitVariables <a name="DataOciMysqlMysqlConfigurationInitVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables()
```


### DataOciMysqlMysqlConfigurationVariables <a name="DataOciMysqlMysqlConfigurationVariables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlConfigurationInitVariablesList <a name="DataOciMysqlMysqlConfigurationInitVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlConfigurationInitVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlConfigurationInitVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationInitVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames">lower_case_table_names</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables">DataOciMysqlMysqlConfigurationInitVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `lower_case_table_names`<sup>Required</sup> <a name="lower_case_table_names" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.lowerCaseTableNames"></a>

```python
lower_case_table_names: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlConfigurationInitVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationInitVariables">DataOciMysqlMysqlConfigurationInitVariables</a>

---


### DataOciMysqlMysqlConfigurationVariablesList <a name="DataOciMysqlMysqlConfigurationVariablesList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMysqlMysqlConfigurationVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMysqlMysqlConfigurationVariablesOutputReference <a name="DataOciMysqlMysqlConfigurationVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_mysql_mysql_configuration

dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.autocommit">autocommit</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.bigTables">big_tables</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds">binlog_expire_logs_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata">binlog_row_metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions">binlog_row_value_options</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression">binlog_transaction_compression</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.completionType">completion_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize">connection_memory_chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit">connection_memory_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout">connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth">cte_max_recursion_depth</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin">default_authentication_plugin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks">foreign_key_checks</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength">generated_random_password_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit">global_connection_memory_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking">global_connection_memory_tracking</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency">group_replication_consistency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry">information_schema_stats_expiry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct">innodb_buffer_pool_dump_pct</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances">innodb_buffer_pool_instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize">innodb_buffer_pool_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize">innodb_ddl_buffer_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads">innodb_ddl_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword">innodb_ft_enable_stopword</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize">innodb_ft_max_token_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize">innodb_ft_min_token_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize">innodb_ft_num_word_optimize</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit">innodb_ft_result_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable">innodb_ft_server_stopword_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout">innodb_lock_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads">innodb_log_writer_threads</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag">innodb_max_purge_lag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay">innodb_max_purge_lag_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages">innodb_stats_persistent_sample_pages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages">innodb_stats_transient_sample_pages</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout">interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.localInfile">local_infile</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles">mandatory_roles</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket">max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize">max_binlog_cache_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors">max_connect_errors</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnections">max_connections</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime">max_execution_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize">max_heap_table_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount">max_prepared_stmt_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode">mysql_firewall_mode</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout">mysqlx_connect_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel">mysqlx_deflate_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel">mysqlx_deflate_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix">mysqlx_document_id_unique_prefix</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice">mysqlx_enable_hello_notice</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout">mysqlx_idle_worker_thread_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout">mysqlx_interactive_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel">mysqlx_lz4_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel">mysqlx_lz4_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket">mysqlx_max_allowed_packet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads">mysqlx_min_worker_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout">mysqlx_read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout">mysqlx_wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout">mysqlx_write_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel">mysqlx_zstd_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel">mysqlx_zstd_max_client_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel">mysql_zstd_default_compression_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout">net_read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout">net_write_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize">parser_max_mem_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize">query_alloc_block_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize">query_prealloc_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit">regexp_time_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize">sort_buffer_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlMode">sql_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey">sql_require_primary_key</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings">sql_warnings</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners">thread_pool_dedicated_listeners</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit">thread_pool_max_transactions_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize">tmp_table_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation">transaction_isolation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout">wait_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables">DataOciMysqlMysqlConfigurationVariables</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.autocommit"></a>

```python
autocommit: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `big_tables`<sup>Required</sup> <a name="big_tables" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.bigTables"></a>

```python
big_tables: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `binlog_expire_logs_seconds`<sup>Required</sup> <a name="binlog_expire_logs_seconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogExpireLogsSeconds"></a>

```python
binlog_expire_logs_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `binlog_row_metadata`<sup>Required</sup> <a name="binlog_row_metadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowMetadata"></a>

```python
binlog_row_metadata: str
```

- *Type:* str

---

##### `binlog_row_value_options`<sup>Required</sup> <a name="binlog_row_value_options" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogRowValueOptions"></a>

```python
binlog_row_value_options: str
```

- *Type:* str

---

##### `binlog_transaction_compression`<sup>Required</sup> <a name="binlog_transaction_compression" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.binlogTransactionCompression"></a>

```python
binlog_transaction_compression: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `completion_type`<sup>Required</sup> <a name="completion_type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.completionType"></a>

```python
completion_type: str
```

- *Type:* str

---

##### `connection_memory_chunk_size`<sup>Required</sup> <a name="connection_memory_chunk_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryChunkSize"></a>

```python
connection_memory_chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `connection_memory_limit`<sup>Required</sup> <a name="connection_memory_limit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectionMemoryLimit"></a>

```python
connection_memory_limit: str
```

- *Type:* str

---

##### `connect_timeout`<sup>Required</sup> <a name="connect_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.connectTimeout"></a>

```python
connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cte_max_recursion_depth`<sup>Required</sup> <a name="cte_max_recursion_depth" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.cteMaxRecursionDepth"></a>

```python
cte_max_recursion_depth: str
```

- *Type:* str

---

##### `default_authentication_plugin`<sup>Required</sup> <a name="default_authentication_plugin" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.defaultAuthenticationPlugin"></a>

```python
default_authentication_plugin: str
```

- *Type:* str

---

##### `foreign_key_checks`<sup>Required</sup> <a name="foreign_key_checks" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.foreignKeyChecks"></a>

```python
foreign_key_checks: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `generated_random_password_length`<sup>Required</sup> <a name="generated_random_password_length" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.generatedRandomPasswordLength"></a>

```python
generated_random_password_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `global_connection_memory_limit`<sup>Required</sup> <a name="global_connection_memory_limit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryLimit"></a>

```python
global_connection_memory_limit: str
```

- *Type:* str

---

##### `global_connection_memory_tracking`<sup>Required</sup> <a name="global_connection_memory_tracking" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.globalConnectionMemoryTracking"></a>

```python
global_connection_memory_tracking: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `group_replication_consistency`<sup>Required</sup> <a name="group_replication_consistency" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.groupReplicationConsistency"></a>

```python
group_replication_consistency: str
```

- *Type:* str

---

##### `information_schema_stats_expiry`<sup>Required</sup> <a name="information_schema_stats_expiry" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.informationSchemaStatsExpiry"></a>

```python
information_schema_stats_expiry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_dump_pct`<sup>Required</sup> <a name="innodb_buffer_pool_dump_pct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolDumpPct"></a>

```python
innodb_buffer_pool_dump_pct: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_instances`<sup>Required</sup> <a name="innodb_buffer_pool_instances" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolInstances"></a>

```python
innodb_buffer_pool_instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_buffer_pool_size`<sup>Required</sup> <a name="innodb_buffer_pool_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbBufferPoolSize"></a>

```python
innodb_buffer_pool_size: str
```

- *Type:* str

---

##### `innodb_ddl_buffer_size`<sup>Required</sup> <a name="innodb_ddl_buffer_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlBufferSize"></a>

```python
innodb_ddl_buffer_size: str
```

- *Type:* str

---

##### `innodb_ddl_threads`<sup>Required</sup> <a name="innodb_ddl_threads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbDdlThreads"></a>

```python
innodb_ddl_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_enable_stopword`<sup>Required</sup> <a name="innodb_ft_enable_stopword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtEnableStopword"></a>

```python
innodb_ft_enable_stopword: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `innodb_ft_max_token_size`<sup>Required</sup> <a name="innodb_ft_max_token_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMaxTokenSize"></a>

```python
innodb_ft_max_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_min_token_size`<sup>Required</sup> <a name="innodb_ft_min_token_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtMinTokenSize"></a>

```python
innodb_ft_min_token_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_num_word_optimize`<sup>Required</sup> <a name="innodb_ft_num_word_optimize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtNumWordOptimize"></a>

```python
innodb_ft_num_word_optimize: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_ft_result_cache_limit`<sup>Required</sup> <a name="innodb_ft_result_cache_limit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtResultCacheLimit"></a>

```python
innodb_ft_result_cache_limit: str
```

- *Type:* str

---

##### `innodb_ft_server_stopword_table`<sup>Required</sup> <a name="innodb_ft_server_stopword_table" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbFtServerStopwordTable"></a>

```python
innodb_ft_server_stopword_table: str
```

- *Type:* str

---

##### `innodb_lock_wait_timeout`<sup>Required</sup> <a name="innodb_lock_wait_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLockWaitTimeout"></a>

```python
innodb_lock_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_log_writer_threads`<sup>Required</sup> <a name="innodb_log_writer_threads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbLogWriterThreads"></a>

```python
innodb_log_writer_threads: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `innodb_max_purge_lag`<sup>Required</sup> <a name="innodb_max_purge_lag" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLag"></a>

```python
innodb_max_purge_lag: str
```

- *Type:* str

---

##### `innodb_max_purge_lag_delay`<sup>Required</sup> <a name="innodb_max_purge_lag_delay" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbMaxPurgeLagDelay"></a>

```python
innodb_max_purge_lag_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `innodb_stats_persistent_sample_pages`<sup>Required</sup> <a name="innodb_stats_persistent_sample_pages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsPersistentSamplePages"></a>

```python
innodb_stats_persistent_sample_pages: str
```

- *Type:* str

---

##### `innodb_stats_transient_sample_pages`<sup>Required</sup> <a name="innodb_stats_transient_sample_pages" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.innodbStatsTransientSamplePages"></a>

```python
innodb_stats_transient_sample_pages: str
```

- *Type:* str

---

##### `interactive_timeout`<sup>Required</sup> <a name="interactive_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.interactiveTimeout"></a>

```python
interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `local_infile`<sup>Required</sup> <a name="local_infile" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.localInfile"></a>

```python
local_infile: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mandatory_roles`<sup>Required</sup> <a name="mandatory_roles" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mandatoryRoles"></a>

```python
mandatory_roles: str
```

- *Type:* str

---

##### `max_allowed_packet`<sup>Required</sup> <a name="max_allowed_packet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxAllowedPacket"></a>

```python
max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_binlog_cache_size`<sup>Required</sup> <a name="max_binlog_cache_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxBinlogCacheSize"></a>

```python
max_binlog_cache_size: str
```

- *Type:* str

---

##### `max_connect_errors`<sup>Required</sup> <a name="max_connect_errors" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnectErrors"></a>

```python
max_connect_errors: str
```

- *Type:* str

---

##### `max_connections`<sup>Required</sup> <a name="max_connections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxConnections"></a>

```python
max_connections: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_execution_time`<sup>Required</sup> <a name="max_execution_time" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxExecutionTime"></a>

```python
max_execution_time: str
```

- *Type:* str

---

##### `max_heap_table_size`<sup>Required</sup> <a name="max_heap_table_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxHeapTableSize"></a>

```python
max_heap_table_size: str
```

- *Type:* str

---

##### `max_prepared_stmt_count`<sup>Required</sup> <a name="max_prepared_stmt_count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.maxPreparedStmtCount"></a>

```python
max_prepared_stmt_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysql_firewall_mode`<sup>Required</sup> <a name="mysql_firewall_mode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlFirewallMode"></a>

```python
mysql_firewall_mode: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mysqlx_connect_timeout`<sup>Required</sup> <a name="mysqlx_connect_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxConnectTimeout"></a>

```python
mysqlx_connect_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_deflate_default_compression_level`<sup>Required</sup> <a name="mysqlx_deflate_default_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateDefaultCompressionLevel"></a>

```python
mysqlx_deflate_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_deflate_max_client_compression_level`<sup>Required</sup> <a name="mysqlx_deflate_max_client_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDeflateMaxClientCompressionLevel"></a>

```python
mysqlx_deflate_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_document_id_unique_prefix`<sup>Required</sup> <a name="mysqlx_document_id_unique_prefix" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxDocumentIdUniquePrefix"></a>

```python
mysqlx_document_id_unique_prefix: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_enable_hello_notice`<sup>Required</sup> <a name="mysqlx_enable_hello_notice" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxEnableHelloNotice"></a>

```python
mysqlx_enable_hello_notice: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mysqlx_idle_worker_thread_timeout`<sup>Required</sup> <a name="mysqlx_idle_worker_thread_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxIdleWorkerThreadTimeout"></a>

```python
mysqlx_idle_worker_thread_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_interactive_timeout`<sup>Required</sup> <a name="mysqlx_interactive_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxInteractiveTimeout"></a>

```python
mysqlx_interactive_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_lz4_default_compression_level`<sup>Required</sup> <a name="mysqlx_lz4_default_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4DefaultCompressionLevel"></a>

```python
mysqlx_lz4_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_lz4_max_client_compression_level`<sup>Required</sup> <a name="mysqlx_lz4_max_client_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxLz4MaxClientCompressionLevel"></a>

```python
mysqlx_lz4_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_max_allowed_packet`<sup>Required</sup> <a name="mysqlx_max_allowed_packet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMaxAllowedPacket"></a>

```python
mysqlx_max_allowed_packet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_min_worker_threads`<sup>Required</sup> <a name="mysqlx_min_worker_threads" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxMinWorkerThreads"></a>

```python
mysqlx_min_worker_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_read_timeout`<sup>Required</sup> <a name="mysqlx_read_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxReadTimeout"></a>

```python
mysqlx_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_wait_timeout`<sup>Required</sup> <a name="mysqlx_wait_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWaitTimeout"></a>

```python
mysqlx_wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_write_timeout`<sup>Required</sup> <a name="mysqlx_write_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxWriteTimeout"></a>

```python
mysqlx_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_zstd_default_compression_level`<sup>Required</sup> <a name="mysqlx_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdDefaultCompressionLevel"></a>

```python
mysqlx_zstd_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysqlx_zstd_max_client_compression_level`<sup>Required</sup> <a name="mysqlx_zstd_max_client_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlxZstdMaxClientCompressionLevel"></a>

```python
mysqlx_zstd_max_client_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `mysql_zstd_default_compression_level`<sup>Required</sup> <a name="mysql_zstd_default_compression_level" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.mysqlZstdDefaultCompressionLevel"></a>

```python
mysql_zstd_default_compression_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_read_timeout`<sup>Required</sup> <a name="net_read_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netReadTimeout"></a>

```python
net_read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `net_write_timeout`<sup>Required</sup> <a name="net_write_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.netWriteTimeout"></a>

```python
net_write_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `parser_max_mem_size`<sup>Required</sup> <a name="parser_max_mem_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.parserMaxMemSize"></a>

```python
parser_max_mem_size: str
```

- *Type:* str

---

##### `query_alloc_block_size`<sup>Required</sup> <a name="query_alloc_block_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryAllocBlockSize"></a>

```python
query_alloc_block_size: str
```

- *Type:* str

---

##### `query_prealloc_size`<sup>Required</sup> <a name="query_prealloc_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.queryPreallocSize"></a>

```python
query_prealloc_size: str
```

- *Type:* str

---

##### `regexp_time_limit`<sup>Required</sup> <a name="regexp_time_limit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.regexpTimeLimit"></a>

```python
regexp_time_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sort_buffer_size`<sup>Required</sup> <a name="sort_buffer_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sortBufferSize"></a>

```python
sort_buffer_size: str
```

- *Type:* str

---

##### `sql_mode`<sup>Required</sup> <a name="sql_mode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlMode"></a>

```python
sql_mode: str
```

- *Type:* str

---

##### `sql_require_primary_key`<sup>Required</sup> <a name="sql_require_primary_key" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlRequirePrimaryKey"></a>

```python
sql_require_primary_key: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `sql_warnings`<sup>Required</sup> <a name="sql_warnings" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.sqlWarnings"></a>

```python
sql_warnings: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `thread_pool_dedicated_listeners`<sup>Required</sup> <a name="thread_pool_dedicated_listeners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolDedicatedListeners"></a>

```python
thread_pool_dedicated_listeners: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `thread_pool_max_transactions_limit`<sup>Required</sup> <a name="thread_pool_max_transactions_limit" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.threadPoolMaxTransactionsLimit"></a>

```python
thread_pool_max_transactions_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `tmp_table_size`<sup>Required</sup> <a name="tmp_table_size" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.tmpTableSize"></a>

```python
tmp_table_size: str
```

- *Type:* str

---

##### `transaction_isolation`<sup>Required</sup> <a name="transaction_isolation" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.transactionIsolation"></a>

```python
transaction_isolation: str
```

- *Type:* str

---

##### `wait_timeout`<sup>Required</sup> <a name="wait_timeout" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.waitTimeout"></a>

```python
wait_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariablesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMysqlMysqlConfigurationVariables
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlConfiguration.DataOciMysqlMysqlConfigurationVariables">DataOciMysqlMysqlConfigurationVariables</a>

---



