# `dataOciMediaServicesMediaWorkflowJobs` Submodule <a name="`dataOciMediaServicesMediaWorkflowJobs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMediaServicesMediaWorkflowJobs <a name="DataOciMediaServicesMediaWorkflowJobs" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs oci_media_services_media_workflow_jobs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobsFilter]] = None,
  id: str = None,
  media_workflow_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#compartment_id DataOciMediaServicesMediaWorkflowJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#display_name DataOciMediaServicesMediaWorkflowJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#id DataOciMediaServicesMediaWorkflowJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.mediaWorkflowId">media_workflow_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#media_workflow_id DataOciMediaServicesMediaWorkflowJobs#media_workflow_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#state DataOciMediaServicesMediaWorkflowJobs#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#compartment_id DataOciMediaServicesMediaWorkflowJobs#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#display_name DataOciMediaServicesMediaWorkflowJobs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#filter DataOciMediaServicesMediaWorkflowJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#id DataOciMediaServicesMediaWorkflowJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `media_workflow_id`<sup>Optional</sup> <a name="media_workflow_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.mediaWorkflowId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#media_workflow_id DataOciMediaServicesMediaWorkflowJobs#media_workflow_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#state DataOciMediaServicesMediaWorkflowJobs#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetMediaWorkflowId">reset_media_workflow_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_media_workflow_id` <a name="reset_media_workflow_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetMediaWorkflowId"></a>

```python
def reset_media_workflow_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMediaServicesMediaWorkflowJobs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMediaServicesMediaWorkflowJobs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMediaServicesMediaWorkflowJobs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMediaServicesMediaWorkflowJobs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList">DataOciMediaServicesMediaWorkflowJobsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowJobCollection">media_workflow_job_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowIdInput">media_workflow_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowId">media_workflow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.filter"></a>

```python
filter: DataOciMediaServicesMediaWorkflowJobsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList">DataOciMediaServicesMediaWorkflowJobsFilterList</a>

---

##### `media_workflow_job_collection`<sup>Required</sup> <a name="media_workflow_job_collection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowJobCollection"></a>

```python
media_workflow_job_collection: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `media_workflow_id_input`<sup>Optional</sup> <a name="media_workflow_id_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowIdInput"></a>

```python
media_workflow_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `media_workflow_id`<sup>Required</sup> <a name="media_workflow_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.mediaWorkflowId"></a>

```python
media_workflow_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMediaServicesMediaWorkflowJobsConfig <a name="DataOciMediaServicesMediaWorkflowJobsConfig" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobsFilter]] = None,
  id: str = None,
  media_workflow_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#compartment_id DataOciMediaServicesMediaWorkflowJobs#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#display_name DataOciMediaServicesMediaWorkflowJobs#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#id DataOciMediaServicesMediaWorkflowJobs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.mediaWorkflowId">media_workflow_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#media_workflow_id DataOciMediaServicesMediaWorkflowJobs#media_workflow_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#state DataOciMediaServicesMediaWorkflowJobs#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#compartment_id DataOciMediaServicesMediaWorkflowJobs#compartment_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#display_name DataOciMediaServicesMediaWorkflowJobs#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#filter DataOciMediaServicesMediaWorkflowJobs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#id DataOciMediaServicesMediaWorkflowJobs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `media_workflow_id`<sup>Optional</sup> <a name="media_workflow_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.mediaWorkflowId"></a>

```python
media_workflow_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#media_workflow_id DataOciMediaServicesMediaWorkflowJobs#media_workflow_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#state DataOciMediaServicesMediaWorkflowJobs#state}.

---

### DataOciMediaServicesMediaWorkflowJobsFilter <a name="DataOciMediaServicesMediaWorkflowJobsFilter" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#name DataOciMediaServicesMediaWorkflowJobs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#values DataOciMediaServicesMediaWorkflowJobs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#regex DataOciMediaServicesMediaWorkflowJobs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#name DataOciMediaServicesMediaWorkflowJobs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#values DataOciMediaServicesMediaWorkflowJobs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/media_services_media_workflow_jobs#regex DataOciMediaServicesMediaWorkflowJobs#regex}.

---

### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection()
```


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems()
```


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks()
```


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs()
```


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMediaServicesMediaWorkflowJobsFilterList <a name="DataOciMediaServicesMediaWorkflowJobsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesMediaWorkflowJobsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMediaServicesMediaWorkflowJobsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>]]

---


### DataOciMediaServicesMediaWorkflowJobsFilterOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMediaServicesMediaWorkflowJobsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsFilter">DataOciMediaServicesMediaWorkflowJobsFilter</a>]

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocks</a>

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.isLockOverride">is_lock_override</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowConfigurationIds">media_workflow_configuration_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowId">media_workflow_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowName">media_workflow_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.outputs">outputs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.parameters">parameters</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.runnable">runnable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.taskLifecycleState">task_lifecycle_state</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.workflowIdentifierType">workflow_identifier_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.isLockOverride"></a>

```python
is_lock_override: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.locks"></a>

```python
locks: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsLocksList</a>

---

##### `media_workflow_configuration_ids`<sup>Required</sup> <a name="media_workflow_configuration_ids" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowConfigurationIds"></a>

```python
media_workflow_configuration_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `media_workflow_id`<sup>Required</sup> <a name="media_workflow_id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowId"></a>

```python
media_workflow_id: str
```

- *Type:* str

---

##### `media_workflow_name`<sup>Required</sup> <a name="media_workflow_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.mediaWorkflowName"></a>

```python
media_workflow_name: str
```

- *Type:* str

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.outputs"></a>

```python
outputs: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.parameters"></a>

```python
parameters: str
```

- *Type:* str

---

##### `runnable`<sup>Required</sup> <a name="runnable" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.runnable"></a>

```python
runnable: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `task_lifecycle_state`<sup>Required</sup> <a name="task_lifecycle_state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.taskLifecycleState"></a>

```python
task_lifecycle_state: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `workflow_identifier_type`<sup>Required</sup> <a name="workflow_identifier_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.workflowIdentifierType"></a>

```python
workflow_identifier_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItems</a>

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.assetType">asset_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `asset_type`<sup>Required</sup> <a name="asset_type" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.assetType"></a>

```python
asset_type: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsOutputs</a>

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleStateOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsTaskLifecycleState</a>

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference <a name="DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_media_services_media_workflow_jobs

dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.items"></a>

```python
items: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMediaServicesMediaWorkflowJobs.DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection">DataOciMediaServicesMediaWorkflowJobsMediaWorkflowJobCollection</a>

---



