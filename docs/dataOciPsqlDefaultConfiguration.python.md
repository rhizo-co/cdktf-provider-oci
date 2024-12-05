# `dataOciPsqlDefaultConfiguration` Submodule <a name="`dataOciPsqlDefaultConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciPsqlDefaultConfiguration <a name="DataOciPsqlDefaultConfiguration" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration oci_psql_default_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_configuration_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.defaultConfigurationId">default_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#default_configuration_id DataOciPsqlDefaultConfiguration#default_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#id DataOciPsqlDefaultConfiguration#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_configuration_id`<sup>Required</sup> <a name="default_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.defaultConfigurationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#default_configuration_id DataOciPsqlDefaultConfiguration#default_configuration_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#id DataOciPsqlDefaultConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciPsqlDefaultConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciPsqlDefaultConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciPsqlDefaultConfiguration to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciPsqlDefaultConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciPsqlDefaultConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.configurationDetails">configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList">DataOciPsqlDefaultConfigurationConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.instanceMemorySizeInGbs">instance_memory_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.instanceOcpuCount">instance_ocpu_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.isFlexible">is_flexible</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.defaultConfigurationIdInput">default_configuration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.defaultConfigurationId">default_configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `configuration_details`<sup>Required</sup> <a name="configuration_details" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.configurationDetails"></a>

```python
configuration_details: DataOciPsqlDefaultConfigurationConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList">DataOciPsqlDefaultConfigurationConfigurationDetailsList</a>

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `instance_memory_size_in_gbs`<sup>Required</sup> <a name="instance_memory_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.instanceMemorySizeInGbs"></a>

```python
instance_memory_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_ocpu_count`<sup>Required</sup> <a name="instance_ocpu_count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.instanceOcpuCount"></a>

```python
instance_ocpu_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_flexible`<sup>Required</sup> <a name="is_flexible" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.isFlexible"></a>

```python
is_flexible: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `default_configuration_id_input`<sup>Optional</sup> <a name="default_configuration_id_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.defaultConfigurationIdInput"></a>

```python
default_configuration_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `default_configuration_id`<sup>Required</sup> <a name="default_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.defaultConfigurationId"></a>

```python
default_configuration_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfiguration.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciPsqlDefaultConfigurationConfig <a name="DataOciPsqlDefaultConfigurationConfig" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  default_configuration_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.defaultConfigurationId">default_configuration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#default_configuration_id DataOciPsqlDefaultConfiguration#default_configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#id DataOciPsqlDefaultConfiguration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_configuration_id`<sup>Required</sup> <a name="default_configuration_id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.defaultConfigurationId"></a>

```python
default_configuration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#default_configuration_id DataOciPsqlDefaultConfiguration#default_configuration_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/psql_default_configuration#id DataOciPsqlDefaultConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciPsqlDefaultConfigurationConfigurationDetails <a name="DataOciPsqlDefaultConfigurationConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetails()
```


### DataOciPsqlDefaultConfigurationConfigurationDetailsItems <a name="DataOciPsqlDefaultConfigurationConfigurationDetailsItems" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList <a name="DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference <a name="DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.allowedValues">allowed_values</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.configKey">config_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.defaultConfigValue">default_config_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.isOverridable">is_overridable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.isRestartRequired">is_restart_required</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItems">DataOciPsqlDefaultConfigurationConfigurationDetailsItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.allowedValues"></a>

```python
allowed_values: str
```

- *Type:* str

---

##### `config_key`<sup>Required</sup> <a name="config_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.configKey"></a>

```python
config_key: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `default_config_value`<sup>Required</sup> <a name="default_config_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.defaultConfigValue"></a>

```python
default_config_value: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `is_overridable`<sup>Required</sup> <a name="is_overridable" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.isOverridable"></a>

```python
is_overridable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_restart_required`<sup>Required</sup> <a name="is_restart_required" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.isRestartRequired"></a>

```python
is_restart_required: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDefaultConfigurationConfigurationDetailsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItems">DataOciPsqlDefaultConfigurationConfigurationDetailsItems</a>

---


### DataOciPsqlDefaultConfigurationConfigurationDetailsList <a name="DataOciPsqlDefaultConfigurationConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference <a name="DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_psql_default_configuration

dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList">DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetails">DataOciPsqlDefaultConfigurationConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.items"></a>

```python
items: DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList">DataOciPsqlDefaultConfigurationConfigurationDetailsItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciPsqlDefaultConfigurationConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciPsqlDefaultConfiguration.DataOciPsqlDefaultConfigurationConfigurationDetails">DataOciPsqlDefaultConfigurationConfigurationDetails</a>

---



