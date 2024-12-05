# `dataOciDevopsProjectRepositorySetting` Submodule <a name="`dataOciDevopsProjectRepositorySetting` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDevopsProjectRepositorySetting <a name="DataOciDevopsProjectRepositorySetting" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_project_repository_setting oci_devops_project_repository_setting}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_project_repository_setting#project_id DataOciDevopsProjectRepositorySetting#project_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_project_repository_setting#project_id DataOciDevopsProjectRepositorySetting#project_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDevopsProjectRepositorySetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDevopsProjectRepositorySetting to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDevopsProjectRepositorySetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_project_repository_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDevopsProjectRepositorySetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.approvalRules">approval_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList">DataOciDevopsProjectRepositorySettingApprovalRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.mergeSettings">merge_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList">DataOciDevopsProjectRepositorySettingMergeSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `approval_rules`<sup>Required</sup> <a name="approval_rules" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.approvalRules"></a>

```python
approval_rules: DataOciDevopsProjectRepositorySettingApprovalRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList">DataOciDevopsProjectRepositorySettingApprovalRulesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `merge_settings`<sup>Required</sup> <a name="merge_settings" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.mergeSettings"></a>

```python
merge_settings: DataOciDevopsProjectRepositorySettingMergeSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList">DataOciDevopsProjectRepositorySettingMergeSettingsList</a>

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySetting.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDevopsProjectRepositorySettingApprovalRules <a name="DataOciDevopsProjectRepositorySettingApprovalRules" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRules()
```


### DataOciDevopsProjectRepositorySettingApprovalRulesItems <a name="DataOciDevopsProjectRepositorySettingApprovalRulesItems" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItems()
```


### DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewers <a name="DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewers" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewers()
```


### DataOciDevopsProjectRepositorySettingConfig <a name="DataOciDevopsProjectRepositorySettingConfig" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  project_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_project_repository_setting#project_id DataOciDevopsProjectRepositorySetting#project_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/devops_project_repository_setting#project_id DataOciDevopsProjectRepositorySetting#project_id}.

---

### DataOciDevopsProjectRepositorySettingMergeSettings <a name="DataOciDevopsProjectRepositorySettingMergeSettings" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettings()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDevopsProjectRepositorySettingApprovalRulesItemsList <a name="DataOciDevopsProjectRepositorySettingApprovalRulesItemsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference <a name="DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch">destination_branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount">min_approvals_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers">reviewers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItems">DataOciDevopsProjectRepositorySettingApprovalRulesItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `destination_branch`<sup>Required</sup> <a name="destination_branch" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.destinationBranch"></a>

```python
destination_branch: str
```

- *Type:* str

---

##### `min_approvals_count`<sup>Required</sup> <a name="min_approvals_count" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.minApprovalsCount"></a>

```python
min_approvals_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reviewers`<sup>Required</sup> <a name="reviewers" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.reviewers"></a>

```python
reviewers: DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList">DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsProjectRepositorySettingApprovalRulesItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItems">DataOciDevopsProjectRepositorySettingApprovalRulesItems</a>

---


### DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList <a name="DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference <a name="DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId">principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName">principal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState">principal_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType">principal_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewers">DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewers</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_id`<sup>Required</sup> <a name="principal_id" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalId"></a>

```python
principal_id: str
```

- *Type:* str

---

##### `principal_name`<sup>Required</sup> <a name="principal_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalName"></a>

```python
principal_name: str
```

- *Type:* str

---

##### `principal_state`<sup>Required</sup> <a name="principal_state" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalState"></a>

```python
principal_state: str
```

- *Type:* str

---

##### `principal_type`<sup>Required</sup> <a name="principal_type" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.principalType"></a>

```python
principal_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewersOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewers
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewers">DataOciDevopsProjectRepositorySettingApprovalRulesItemsReviewers</a>

---


### DataOciDevopsProjectRepositorySettingApprovalRulesList <a name="DataOciDevopsProjectRepositorySettingApprovalRulesList" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference <a name="DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList">DataOciDevopsProjectRepositorySettingApprovalRulesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRules">DataOciDevopsProjectRepositorySettingApprovalRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.property.items"></a>

```python
items: DataOciDevopsProjectRepositorySettingApprovalRulesItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesItemsList">DataOciDevopsProjectRepositorySettingApprovalRulesItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsProjectRepositorySettingApprovalRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingApprovalRules">DataOciDevopsProjectRepositorySettingApprovalRules</a>

---


### DataOciDevopsProjectRepositorySettingMergeSettingsList <a name="DataOciDevopsProjectRepositorySettingMergeSettingsList" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference <a name="DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_devops_project_repository_setting

dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies">allowed_merge_strategies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy">default_merge_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettings">DataOciDevopsProjectRepositorySettingMergeSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_merge_strategies`<sup>Required</sup> <a name="allowed_merge_strategies" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.property.allowedMergeStrategies"></a>

```python
allowed_merge_strategies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `default_merge_strategy`<sup>Required</sup> <a name="default_merge_strategy" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.property.defaultMergeStrategy"></a>

```python
default_merge_strategy: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDevopsProjectRepositorySettingMergeSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDevopsProjectRepositorySetting.DataOciDevopsProjectRepositorySettingMergeSettings">DataOciDevopsProjectRepositorySettingMergeSettings</a>

---



