# `dataOciMediaServicesMediaWorkflowJobFacts` Submodule <a name="`dataOciMediaServicesMediaWorkflowJobFacts` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowJobFacts <a name="DataOciMediaServicesMediaWorkflowJobFacts" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts oci_media_services_media_workflow_job_facts}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  media_workflow_job_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobFactsFilter]] = None,
  id: str = None,
  key: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.mediaWorkflowJobId">media_workflow_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#media_workflow_job_id DataOciMediaServicesMediaWorkflowJobFacts#media_workflow_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#id DataOciMediaServicesMediaWorkflowJobFacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#key DataOciMediaServicesMediaWorkflowJobFacts#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#type DataOciMediaServicesMediaWorkflowJobFacts#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `media_workflow_job_id`<sup>Required</sup> <a name="media_workflow_job_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.mediaWorkflowJobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#media_workflow_job_id DataOciMediaServicesMediaWorkflowJobFacts#media_workflow_job_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#filter DataOciMediaServicesMediaWorkflowJobFacts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#id DataOciMediaServicesMediaWorkflowJobFacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#key DataOciMediaServicesMediaWorkflowJobFacts#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#type DataOciMediaServicesMediaWorkflowJobFacts#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobFactsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobFacts resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobFacts resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowJobFacts to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMediaServicesMediaWorkflowJobFacts that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowJobFacts to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList">DataOciMediaServicesMediaWorkflowJobFactsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobFactCollection">media_workflow_job_fact_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobIdInput">media_workflow_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobId">media_workflow_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filter"></a>

```python
filter: DataOciMediaServicesMediaWorkflowJobFactsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList">DataOciMediaServicesMediaWorkflowJobFactsFilterList</a>

---

##### `media_workflow_job_fact_collection`<sup>Required</sup> <a name="media_workflow_job_fact_collection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobFactCollection"></a>

```python
media_workflow_job_fact_collection: DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobFactsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `media_workflow_job_id_input`<sup>Optional</sup> <a name="media_workflow_job_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobIdInput"></a>

```python
media_workflow_job_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `media_workflow_job_id`<sup>Required</sup> <a name="media_workflow_job_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.mediaWorkflowJobId"></a>

```python
media_workflow_job_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFacts.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowJobFactsConfig <a name="DataOciMediaServicesMediaWorkflowJobFactsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  media_workflow_job_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobFactsFilter]] = None,
  id: str = None,
  key: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.mediaWorkflowJobId">media_workflow_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#media_workflow_job_id DataOciMediaServicesMediaWorkflowJobFacts#media_workflow_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#id DataOciMediaServicesMediaWorkflowJobFacts#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#key DataOciMediaServicesMediaWorkflowJobFacts#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#type DataOciMediaServicesMediaWorkflowJobFacts#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `media_workflow_job_id`<sup>Required</sup> <a name="media_workflow_job_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.mediaWorkflowJobId"></a>

```python
media_workflow_job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#media_workflow_job_id DataOciMediaServicesMediaWorkflowJobFacts#media_workflow_job_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobFactsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#filter DataOciMediaServicesMediaWorkflowJobFacts#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#id DataOciMediaServicesMediaWorkflowJobFacts#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#key DataOciMediaServicesMediaWorkflowJobFacts#key}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#type DataOciMediaServicesMediaWorkflowJobFacts#type}.

---

### DataOciMediaServicesMediaWorkflowJobFactsFilter <a name="DataOciMediaServicesMediaWorkflowJobFactsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#name DataOciMediaServicesMediaWorkflowJobFacts#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#values DataOciMediaServicesMediaWorkflowJobFacts#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#regex DataOciMediaServicesMediaWorkflowJobFacts#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#name DataOciMediaServicesMediaWorkflowJobFacts#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#values DataOciMediaServicesMediaWorkflowJobFacts#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_job_facts#regex DataOciMediaServicesMediaWorkflowJobFacts#regex}.

---

### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection()
```


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaWorkflowJobFactsFilterList <a name="DataOciMediaServicesMediaWorkflowJobFactsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobFactsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>]]

---


### DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference <a name="DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMediaServicesMediaWorkflowJobFactsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsFilter">DataOciMediaServicesMediaWorkflowJobFactsFilter</a>]

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.detail">detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.mediaWorkflowJobId">media_workflow_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `detail`<sup>Required</sup> <a name="detail" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.detail"></a>

```python
detail: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `media_workflow_job_id`<sup>Required</sup> <a name="media_workflow_job_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.mediaWorkflowJobId"></a>

```python
media_workflow_job_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItems</a>

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference <a name="DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_job_facts

dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.items"></a>

```python
items: DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobFacts.DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection">DataOciMediaServicesMediaWorkflowJobFactsMediaWorkflowJobFactCollection</a>

---



