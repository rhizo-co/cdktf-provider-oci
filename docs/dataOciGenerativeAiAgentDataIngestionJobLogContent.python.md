# `dataOciGenerativeAiAgentDataIngestionJobLogContent` Submodule <a name="`dataOciGenerativeAiAgentDataIngestionJobLogContent` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentDataIngestionJobLogContent <a name="DataOciGenerativeAiAgentDataIngestionJobLogContent" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content oci_generative_ai_agent_data_ingestion_job_log_content}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_data_ingestion_job_log_content

dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_ingestion_job_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.dataIngestionJobId">data_ingestion_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#data_ingestion_job_id DataOciGenerativeAiAgentDataIngestionJobLogContent#data_ingestion_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#id DataOciGenerativeAiAgentDataIngestionJobLogContent#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_ingestion_job_id`<sup>Required</sup> <a name="data_ingestion_job_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.dataIngestionJobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#data_ingestion_job_id DataOciGenerativeAiAgentDataIngestionJobLogContent#data_ingestion_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#id DataOciGenerativeAiAgentDataIngestionJobLogContent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentDataIngestionJobLogContent resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_data_ingestion_job_log_content

dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_data_ingestion_job_log_content

dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_data_ingestion_job_log_content

dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_data_ingestion_job_log_content

dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentDataIngestionJobLogContent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciGenerativeAiAgentDataIngestionJobLogContent to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciGenerativeAiAgentDataIngestionJobLogContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentDataIngestionJobLogContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.dataIngestionJobIdInput">data_ingestion_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.dataIngestionJobId">data_ingestion_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `data_ingestion_job_id_input`<sup>Optional</sup> <a name="data_ingestion_job_id_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.dataIngestionJobIdInput"></a>

```python
data_ingestion_job_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `data_ingestion_job_id`<sup>Required</sup> <a name="data_ingestion_job_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.dataIngestionJobId"></a>

```python
data_ingestion_job_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContent.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentDataIngestionJobLogContentConfig <a name="DataOciGenerativeAiAgentDataIngestionJobLogContentConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_generative_ai_agent_data_ingestion_job_log_content

dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_ingestion_job_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.dataIngestionJobId">data_ingestion_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#data_ingestion_job_id DataOciGenerativeAiAgentDataIngestionJobLogContent#data_ingestion_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#id DataOciGenerativeAiAgentDataIngestionJobLogContent#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_ingestion_job_id`<sup>Required</sup> <a name="data_ingestion_job_id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.dataIngestionJobId"></a>

```python
data_ingestion_job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#data_ingestion_job_id DataOciGenerativeAiAgentDataIngestionJobLogContent#data_ingestion_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataIngestionJobLogContent.DataOciGenerativeAiAgentDataIngestionJobLogContentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_ingestion_job_log_content#id DataOciGenerativeAiAgentDataIngestionJobLogContent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



