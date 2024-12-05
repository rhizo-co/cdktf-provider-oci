# `dataOciDatascienceJobRun` Submodule <a name="`dataOciDatascienceJobRun` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceJobRun <a name="DataOciDatascienceJobRun" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_run oci_datascience_job_run}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRun(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_run_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.jobRunId">job_run_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_run#job_run_id DataOciDatascienceJobRun#job_run_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_run_id`<sup>Required</sup> <a name="job_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.Initializer.parameter.jobRunId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_run#job_run_id DataOciDatascienceJobRun#job_run_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatascienceJobRun resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRun.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRun.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRun.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRun.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatascienceJobRun resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatascienceJobRun to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatascienceJobRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_run#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceJobRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.asynchronous">asynchronous</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobConfigurationOverrideDetails">job_configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList">DataOciDatascienceJobRunJobConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobEnvironmentConfigurationOverrideDetails">job_environment_configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList">DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobId">job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobInfrastructureConfigurationDetails">job_infrastructure_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList">DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobLogConfigurationOverrideDetails">job_log_configuration_override_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList">DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobStorageMountConfigurationDetailsList">job_storage_mount_configuration_details_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList">DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.logDetails">log_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList">DataOciDatascienceJobRunLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.opcParentRptUrl">opc_parent_rpt_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobRunIdInput">job_run_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobRunId">job_run_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `asynchronous`<sup>Required</sup> <a name="asynchronous" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.asynchronous"></a>

```python
asynchronous: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `job_configuration_override_details`<sup>Required</sup> <a name="job_configuration_override_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobConfigurationOverrideDetails"></a>

```python
job_configuration_override_details: DataOciDatascienceJobRunJobConfigurationOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList">DataOciDatascienceJobRunJobConfigurationOverrideDetailsList</a>

---

##### `job_environment_configuration_override_details`<sup>Required</sup> <a name="job_environment_configuration_override_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobEnvironmentConfigurationOverrideDetails"></a>

```python
job_environment_configuration_override_details: DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList">DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList</a>

---

##### `job_id`<sup>Required</sup> <a name="job_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobId"></a>

```python
job_id: str
```

- *Type:* str

---

##### `job_infrastructure_configuration_details`<sup>Required</sup> <a name="job_infrastructure_configuration_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobInfrastructureConfigurationDetails"></a>

```python
job_infrastructure_configuration_details: DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList">DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList</a>

---

##### `job_log_configuration_override_details`<sup>Required</sup> <a name="job_log_configuration_override_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobLogConfigurationOverrideDetails"></a>

```python
job_log_configuration_override_details: DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList">DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList</a>

---

##### `job_storage_mount_configuration_details_list`<sup>Required</sup> <a name="job_storage_mount_configuration_details_list" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobStorageMountConfigurationDetailsList"></a>

```python
job_storage_mount_configuration_details_list: DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList">DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `log_details`<sup>Required</sup> <a name="log_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.logDetails"></a>

```python
log_details: DataOciDatascienceJobRunLogDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList">DataOciDatascienceJobRunLogDetailsList</a>

---

##### `opc_parent_rpt_url`<sup>Required</sup> <a name="opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.opcParentRptUrl"></a>

```python
opc_parent_rpt_url: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `job_run_id_input`<sup>Optional</sup> <a name="job_run_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobRunIdInput"></a>

```python
job_run_id_input: str
```

- *Type:* str

---

##### `job_run_id`<sup>Required</sup> <a name="job_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.jobRunId"></a>

```python
job_run_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRun.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceJobRunConfig <a name="DataOciDatascienceJobRunConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  job_run_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.jobRunId">job_run_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_run#job_run_id DataOciDatascienceJobRun#job_run_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `job_run_id`<sup>Required</sup> <a name="job_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunConfig.property.jobRunId"></a>

```python
job_run_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_job_run#job_run_id DataOciDatascienceJobRun#job_run_id}.

---

### DataOciDatascienceJobRunJobConfigurationOverrideDetails <a name="DataOciDatascienceJobRunJobConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetails()
```


### DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetails <a name="DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetails()
```


### DataOciDatascienceJobRunJobInfrastructureConfigurationDetails <a name="DataOciDatascienceJobRunJobInfrastructureConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetails()
```


### DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails <a name="DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails()
```


### DataOciDatascienceJobRunJobLogConfigurationOverrideDetails <a name="DataOciDatascienceJobRunJobLogConfigurationOverrideDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetails()
```


### DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStruct <a name="DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStruct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStruct()
```


### DataOciDatascienceJobRunLogDetails <a name="DataOciDatascienceJobRunLogDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceJobRunJobConfigurationOverrideDetailsList <a name="DataOciDatascienceJobRunJobConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference <a name="DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.commandLineArguments">command_line_arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.environmentVariables">environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.jobType">job_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes">maximum_runtime_in_minutes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetails">DataOciDatascienceJobRunJobConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `command_line_arguments`<sup>Required</sup> <a name="command_line_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.commandLineArguments"></a>

```python
command_line_arguments: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `job_type`<sup>Required</sup> <a name="job_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.jobType"></a>

```python
job_type: str
```

- *Type:* str

---

##### `maximum_runtime_in_minutes`<sup>Required</sup> <a name="maximum_runtime_in_minutes" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.maximumRuntimeInMinutes"></a>

```python
maximum_runtime_in_minutes: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunJobConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobConfigurationOverrideDetails">DataOciDatascienceJobRunJobConfigurationOverrideDetails</a>

---


### DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList <a name="DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference <a name="DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmd">cmd</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureId">image_signature_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentType">job_environment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.cmd"></a>

```python
cmd: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `image_signature_id`<sup>Required</sup> <a name="image_signature_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.imageSignatureId"></a>

```python
image_signature_id: str
```

- *Type:* str

---

##### `job_environment_type`<sup>Required</sup> <a name="job_environment_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.jobEnvironmentType"></a>

```python
job_environment_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetails">DataOciDatascienceJobRunJobEnvironmentConfigurationOverrideDetails</a>

---


### DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList <a name="DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference <a name="DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails">DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetails</a>

---


### DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList <a name="DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference <a name="DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs">block_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType">job_infrastructure_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails">job_shape_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetails">DataOciDatascienceJobRunJobInfrastructureConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_storage_size_in_gbs`<sup>Required</sup> <a name="block_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.blockStorageSizeInGbs"></a>

```python
block_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `job_infrastructure_type`<sup>Required</sup> <a name="job_infrastructure_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobInfrastructureType"></a>

```python
job_infrastructure_type: str
```

- *Type:* str

---

##### `job_shape_config_details`<sup>Required</sup> <a name="job_shape_config_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.jobShapeConfigDetails"></a>

```python
job_shape_config_details: DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList">DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsJobShapeConfigDetailsList</a>

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunJobInfrastructureConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobInfrastructureConfigurationDetails">DataOciDatascienceJobRunJobInfrastructureConfigurationDetails</a>

---


### DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList <a name="DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference <a name="DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation">enable_auto_log_creation</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableLogging">enable_logging</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetails">DataOciDatascienceJobRunJobLogConfigurationOverrideDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enable_auto_log_creation`<sup>Required</sup> <a name="enable_auto_log_creation" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableAutoLogCreation"></a>

```python
enable_auto_log_creation: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `enable_logging`<sup>Required</sup> <a name="enable_logging" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.enableLogging"></a>

```python
enable_logging: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunJobLogConfigurationOverrideDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobLogConfigurationOverrideDetails">DataOciDatascienceJobRunJobLogConfigurationOverrideDetails</a>

---


### DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList <a name="DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference <a name="DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName">destination_directory_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath">destination_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId">export_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId">mount_target_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStruct">DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `destination_directory_name`<sup>Required</sup> <a name="destination_directory_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationDirectoryName"></a>

```python
destination_directory_name: str
```

- *Type:* str

---

##### `destination_path`<sup>Required</sup> <a name="destination_path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.destinationPath"></a>

```python
destination_path: str
```

- *Type:* str

---

##### `export_id`<sup>Required</sup> <a name="export_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.exportId"></a>

```python
export_id: str
```

- *Type:* str

---

##### `mount_target_id`<sup>Required</sup> <a name="mount_target_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.mountTargetId"></a>

```python
mount_target_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStruct">DataOciDatascienceJobRunJobStorageMountConfigurationDetailsListStruct</a>

---


### DataOciDatascienceJobRunLogDetailsList <a name="DataOciDatascienceJobRunLogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceJobRunLogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceJobRunLogDetailsOutputReference <a name="DataOciDatascienceJobRunLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_job_run

dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetails">DataOciDatascienceJobRunLogDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceJobRunLogDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceJobRun.DataOciDatascienceJobRunLogDetails">DataOciDatascienceJobRunLogDetails</a>

---



