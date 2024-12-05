# `dataOciDevopsRepositorySetting` Submodule <a name="`dataOciDevopsRepositorySetting` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsRepositorySetting <a name="DataOciDevopsRepositorySetting" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_setting oci_devops_repository_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_setting#repository_id DataOciDevopsRepositorySetting#repository_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.Initializer.parameter.repositoryId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_setting#repository_id DataOciDevopsRepositorySetting#repository_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDevopsRepositorySetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDevopsRepositorySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDevopsRepositorySetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDevopsRepositorySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsRepositorySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.approvalRules">approval_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList">DataOciDevopsRepositorySettingApprovalRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.mergeChecks">merge_checks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList">DataOciDevopsRepositorySettingMergeChecksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.mergeSettings">merge_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList">DataOciDevopsRepositorySettingMergeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.repositoryIdInput">repository_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.repositoryId">repository_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `approval_rules`<sup>Required</sup> <a name="approval_rules" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.approvalRules"></a>

```python
approval_rules: DataOciDevopsRepositorySettingApprovalRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList">DataOciDevopsRepositorySettingApprovalRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `merge_checks`<sup>Required</sup> <a name="merge_checks" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.mergeChecks"></a>

```python
merge_checks: DataOciDevopsRepositorySettingMergeChecksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList">DataOciDevopsRepositorySettingMergeChecksList</a>

---

##### `merge_settings`<sup>Required</sup> <a name="merge_settings" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.mergeSettings"></a>

```python
merge_settings: DataOciDevopsRepositorySettingMergeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList">DataOciDevopsRepositorySettingMergeSettingsList</a>

---

##### `repository_id_input`<sup>Optional</sup> <a name="repository_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.repositoryIdInput"></a>

```python
repository_id_input: str
```

- *Type:* str

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsRepositorySettingApprovalRules <a name="DataOciDevopsRepositorySettingApprovalRules" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRules()
```


### DataOciDevopsRepositorySettingApprovalRulesItems <a name="DataOciDevopsRepositorySettingApprovalRulesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItems()
```


### DataOciDevopsRepositorySettingApprovalRulesItemsReviewers <a name="DataOciDevopsRepositorySettingApprovalRulesItemsReviewers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewers()
```


### DataOciDevopsRepositorySettingConfig <a name="DataOciDevopsRepositorySettingConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  repository_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.repositoryId">repository_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_setting#repository_id DataOciDevopsRepositorySetting#repository_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `repository_id`<sup>Required</sup> <a name="repository_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingConfig.property.repositoryId"></a>

```python
repository_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_repository_setting#repository_id DataOciDevopsRepositorySetting#repository_id}.

---

### DataOciDevopsRepositorySettingMergeChecks <a name="DataOciDevopsRepositorySettingMergeChecks" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecks()
```


### DataOciDevopsRepositorySettingMergeSettings <a name="DataOciDevopsRepositorySettingMergeSettings" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsRepositorySettingApprovalRulesItemsList <a name="DataOciDevopsRepositorySettingApprovalRulesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference <a name="DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch">destination_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount">min_approvals_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.reviewers">reviewers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList">DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItems">DataOciDevopsRepositorySettingApprovalRulesItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_branch`<sup>Required</sup> <a name="destination_branch" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch"></a>

```python
destination_branch: str
```

- *Type:* str

---

##### `min_approvals_count`<sup>Required</sup> <a name="min_approvals_count" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount"></a>

```python
min_approvals_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reviewers`<sup>Required</sup> <a name="reviewers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.reviewers"></a>

```python
reviewers: DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList">DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositorySettingApprovalRulesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItems">DataOciDevopsRepositorySettingApprovalRulesItems</a>

---


### DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList <a name="DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference <a name="DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName">principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState">principal_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewers">DataOciDevopsRepositorySettingApprovalRulesItemsReviewers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `principal_name`<sup>Required</sup> <a name="principal_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName"></a>

```python
principal_name: str
```

- *Type:* str

---

##### `principal_state`<sup>Required</sup> <a name="principal_state" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState"></a>

```python
principal_state: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositorySettingApprovalRulesItemsReviewers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsReviewers">DataOciDevopsRepositorySettingApprovalRulesItemsReviewers</a>

---


### DataOciDevopsRepositorySettingApprovalRulesList <a name="DataOciDevopsRepositorySettingApprovalRulesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositorySettingApprovalRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositorySettingApprovalRulesOutputReference <a name="DataOciDevopsRepositorySettingApprovalRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList">DataOciDevopsRepositorySettingApprovalRulesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRules">DataOciDevopsRepositorySettingApprovalRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.property.items"></a>

```python
items: DataOciDevopsRepositorySettingApprovalRulesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesItemsList">DataOciDevopsRepositorySettingApprovalRulesItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositorySettingApprovalRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingApprovalRules">DataOciDevopsRepositorySettingApprovalRules</a>

---


### DataOciDevopsRepositorySettingMergeChecksList <a name="DataOciDevopsRepositorySettingMergeChecksList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositorySettingMergeChecksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositorySettingMergeChecksOutputReference <a name="DataOciDevopsRepositorySettingMergeChecksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.property.lastBuildSucceeded">last_build_succeeded</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecks">DataOciDevopsRepositorySettingMergeChecks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_build_succeeded`<sup>Required</sup> <a name="last_build_succeeded" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.property.lastBuildSucceeded"></a>

```python
last_build_succeeded: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositorySettingMergeChecks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeChecks">DataOciDevopsRepositorySettingMergeChecks</a>

---


### DataOciDevopsRepositorySettingMergeSettingsList <a name="DataOciDevopsRepositorySettingMergeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsRepositorySettingMergeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsRepositorySettingMergeSettingsOutputReference <a name="DataOciDevopsRepositorySettingMergeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_repository_setting

dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies">allowed_merge_strategies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy">default_merge_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettings">DataOciDevopsRepositorySettingMergeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_merge_strategies`<sup>Required</sup> <a name="allowed_merge_strategies" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies"></a>

```python
allowed_merge_strategies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_merge_strategy`<sup>Required</sup> <a name="default_merge_strategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy"></a>

```python
default_merge_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsRepositorySettingMergeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsRepositorySetting.DataOciDevopsRepositorySettingMergeSettings">DataOciDevopsRepositorySettingMergeSettings</a>

---



