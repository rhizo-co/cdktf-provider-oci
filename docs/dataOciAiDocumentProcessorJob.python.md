# `dataOciAiDocumentProcessorJob` Submodule <a name="`dataOciAiDocumentProcessorJob` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAiDocumentProcessorJob <a name="DataOciAiDocumentProcessorJob" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_document_processor_job oci_ai_document_processor_job}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  processor_job_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.processorJobId">processor_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_document_processor_job#processor_job_id DataOciAiDocumentProcessorJob#processor_job_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `processor_job_id`<sup>Required</sup> <a name="processor_job_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.Initializer.parameter.processorJobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_document_processor_job#processor_job_id DataOciAiDocumentProcessorJob#processor_job_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAiDocumentProcessorJob resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAiDocumentProcessorJob resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAiDocumentProcessorJob to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAiDocumentProcessorJob that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_document_processor_job#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAiDocumentProcessorJob to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.inputLocation">input_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList">DataOciAiDocumentProcessorJobInputLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.outputLocation">output_location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList">DataOciAiDocumentProcessorJobOutputLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.percentComplete">percent_complete</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorConfig">processor_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList">DataOciAiDocumentProcessorJobProcessorConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeAccepted">time_accepted</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorJobIdInput">processor_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorJobId">processor_job_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `input_location`<sup>Required</sup> <a name="input_location" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.inputLocation"></a>

```python
input_location: DataOciAiDocumentProcessorJobInputLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList">DataOciAiDocumentProcessorJobInputLocationList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `output_location`<sup>Required</sup> <a name="output_location" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.outputLocation"></a>

```python
output_location: DataOciAiDocumentProcessorJobOutputLocationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList">DataOciAiDocumentProcessorJobOutputLocationList</a>

---

##### `percent_complete`<sup>Required</sup> <a name="percent_complete" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.percentComplete"></a>

```python
percent_complete: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `processor_config`<sup>Required</sup> <a name="processor_config" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorConfig"></a>

```python
processor_config: DataOciAiDocumentProcessorJobProcessorConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList">DataOciAiDocumentProcessorJobProcessorConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_accepted`<sup>Required</sup> <a name="time_accepted" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeAccepted"></a>

```python
time_accepted: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `processor_job_id_input`<sup>Optional</sup> <a name="processor_job_id_input" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorJobIdInput"></a>

```python
processor_job_id_input: str
```

- *Type:* str

---

##### `processor_job_id`<sup>Required</sup> <a name="processor_job_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.processorJobId"></a>

```python
processor_job_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJob.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAiDocumentProcessorJobConfig <a name="DataOciAiDocumentProcessorJobConfig" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  processor_job_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.processorJobId">processor_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_document_processor_job#processor_job_id DataOciAiDocumentProcessorJob#processor_job_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `processor_job_id`<sup>Required</sup> <a name="processor_job_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobConfig.property.processorJobId"></a>

```python
processor_job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ai_document_processor_job#processor_job_id DataOciAiDocumentProcessorJob#processor_job_id}.

---

### DataOciAiDocumentProcessorJobInputLocation <a name="DataOciAiDocumentProcessorJobInputLocation" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocation()
```


### DataOciAiDocumentProcessorJobInputLocationObjectLocations <a name="DataOciAiDocumentProcessorJobInputLocationObjectLocations" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocations()
```


### DataOciAiDocumentProcessorJobOutputLocation <a name="DataOciAiDocumentProcessorJobOutputLocation" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocation.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocation()
```


### DataOciAiDocumentProcessorJobProcessorConfig <a name="DataOciAiDocumentProcessorJobProcessorConfig" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfig()
```


### DataOciAiDocumentProcessorJobProcessorConfigFeatures <a name="DataOciAiDocumentProcessorJobProcessorConfigFeatures" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeatures"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeatures.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeatures()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciAiDocumentProcessorJobInputLocationList <a name="DataOciAiDocumentProcessorJobInputLocationList" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiDocumentProcessorJobInputLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiDocumentProcessorJobInputLocationObjectLocationsList <a name="DataOciAiDocumentProcessorJobInputLocationObjectLocationsList" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference <a name="DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocations">DataOciAiDocumentProcessorJobInputLocationObjectLocations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiDocumentProcessorJobInputLocationObjectLocations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocations">DataOciAiDocumentProcessorJobInputLocationObjectLocations</a>

---


### DataOciAiDocumentProcessorJobInputLocationOutputReference <a name="DataOciAiDocumentProcessorJobInputLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.objectLocations">object_locations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList">DataOciAiDocumentProcessorJobInputLocationObjectLocationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocation">DataOciAiDocumentProcessorJobInputLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `object_locations`<sup>Required</sup> <a name="object_locations" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.objectLocations"></a>

```python
object_locations: DataOciAiDocumentProcessorJobInputLocationObjectLocationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationObjectLocationsList">DataOciAiDocumentProcessorJobInputLocationObjectLocationsList</a>

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiDocumentProcessorJobInputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobInputLocation">DataOciAiDocumentProcessorJobInputLocation</a>

---


### DataOciAiDocumentProcessorJobOutputLocationList <a name="DataOciAiDocumentProcessorJobOutputLocationList" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiDocumentProcessorJobOutputLocationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiDocumentProcessorJobOutputLocationOutputReference <a name="DataOciAiDocumentProcessorJobOutputLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.prefix">prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocation">DataOciAiDocumentProcessorJobOutputLocation</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.prefix"></a>

```python
prefix: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiDocumentProcessorJobOutputLocation
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobOutputLocation">DataOciAiDocumentProcessorJobOutputLocation</a>

---


### DataOciAiDocumentProcessorJobProcessorConfigFeaturesList <a name="DataOciAiDocumentProcessorJobProcessorConfigFeaturesList" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference <a name="DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType">feature_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf">generate_searchable_pdf</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults">max_results</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeatures">DataOciAiDocumentProcessorJobProcessorConfigFeatures</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `feature_type`<sup>Required</sup> <a name="feature_type" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.featureType"></a>

```python
feature_type: str
```

- *Type:* str

---

##### `generate_searchable_pdf`<sup>Required</sup> <a name="generate_searchable_pdf" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.generateSearchablePdf"></a>

```python
generate_searchable_pdf: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_results`<sup>Required</sup> <a name="max_results" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.maxResults"></a>

```python
max_results: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiDocumentProcessorJobProcessorConfigFeatures
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeatures">DataOciAiDocumentProcessorJobProcessorConfigFeatures</a>

---


### DataOciAiDocumentProcessorJobProcessorConfigList <a name="DataOciAiDocumentProcessorJobProcessorConfigList" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAiDocumentProcessorJobProcessorConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAiDocumentProcessorJobProcessorConfigOutputReference <a name="DataOciAiDocumentProcessorJobProcessorConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_ai_document_processor_job

dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.documentType">document_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.features">features</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList">DataOciAiDocumentProcessorJobProcessorConfigFeaturesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled">is_zip_output_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.language">language</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.processorType">processor_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfig">DataOciAiDocumentProcessorJobProcessorConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `document_type`<sup>Required</sup> <a name="document_type" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.documentType"></a>

```python
document_type: str
```

- *Type:* str

---

##### `features`<sup>Required</sup> <a name="features" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.features"></a>

```python
features: DataOciAiDocumentProcessorJobProcessorConfigFeaturesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigFeaturesList">DataOciAiDocumentProcessorJobProcessorConfigFeaturesList</a>

---

##### `is_zip_output_enabled`<sup>Required</sup> <a name="is_zip_output_enabled" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.isZipOutputEnabled"></a>

```python
is_zip_output_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `language`<sup>Required</sup> <a name="language" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.language"></a>

```python
language: str
```

- *Type:* str

---

##### `processor_type`<sup>Required</sup> <a name="processor_type" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.processorType"></a>

```python
processor_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAiDocumentProcessorJobProcessorConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAiDocumentProcessorJob.DataOciAiDocumentProcessorJobProcessorConfig">DataOciAiDocumentProcessorJobProcessorConfig</a>

---



