# `dataOciDatascienceModelDeployments` Submodule <a name="`dataOciDatascienceModelDeployments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatascienceModelDeployments <a name="DataOciDatascienceModelDeployments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments oci_datascience_model_deployments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  created_by: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatascienceModelDeploymentsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#compartment_id DataOciDatascienceModelDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#created_by DataOciDatascienceModelDeployments#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#display_name DataOciDatascienceModelDeployments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#id DataOciDatascienceModelDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#project_id DataOciDatascienceModelDeployments#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#state DataOciDatascienceModelDeployments#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#compartment_id DataOciDatascienceModelDeployments#compartment_id}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.createdBy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#created_by DataOciDatascienceModelDeployments#created_by}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#display_name DataOciDatascienceModelDeployments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#filter DataOciDatascienceModelDeployments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#id DataOciDatascienceModelDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#project_id DataOciDatascienceModelDeployments#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#state DataOciDatascienceModelDeployments#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetCreatedBy">reset_created_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatascienceModelDeploymentsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>]]

---

##### `reset_created_by` <a name="reset_created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetCreatedBy"></a>

```python
def reset_created_by() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatascienceModelDeployments resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatascienceModelDeployments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatascienceModelDeployments to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatascienceModelDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatascienceModelDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList">DataOciDatascienceModelDeploymentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.modelDeployments">model_deployments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList">DataOciDatascienceModelDeploymentsModelDeploymentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.createdByInput">created_by_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.filter"></a>

```python
filter: DataOciDatascienceModelDeploymentsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList">DataOciDatascienceModelDeploymentsFilterList</a>

---

##### `model_deployments`<sup>Required</sup> <a name="model_deployments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.modelDeployments"></a>

```python
model_deployments: DataOciDatascienceModelDeploymentsModelDeploymentsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList">DataOciDatascienceModelDeploymentsModelDeploymentsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `created_by_input`<sup>Optional</sup> <a name="created_by_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.createdByInput"></a>

```python
created_by_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatascienceModelDeploymentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeployments.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatascienceModelDeploymentsConfig <a name="DataOciDatascienceModelDeploymentsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  created_by: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatascienceModelDeploymentsFilter]] = None,
  id: str = None,
  project_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#compartment_id DataOciDatascienceModelDeployments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.createdBy">created_by</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#created_by DataOciDatascienceModelDeployments#created_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#display_name DataOciDatascienceModelDeployments#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#id DataOciDatascienceModelDeployments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#project_id DataOciDatascienceModelDeployments#project_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#state DataOciDatascienceModelDeployments#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#compartment_id DataOciDatascienceModelDeployments#compartment_id}.

---

##### `created_by`<sup>Optional</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#created_by DataOciDatascienceModelDeployments#created_by}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#display_name DataOciDatascienceModelDeployments#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatascienceModelDeploymentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#filter DataOciDatascienceModelDeployments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#id DataOciDatascienceModelDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#project_id DataOciDatascienceModelDeployments#project_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#state DataOciDatascienceModelDeployments#state}.

---

### DataOciDatascienceModelDeploymentsFilter <a name="DataOciDatascienceModelDeploymentsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#name DataOciDatascienceModelDeployments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#values DataOciDatascienceModelDeployments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#regex DataOciDatascienceModelDeployments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#name DataOciDatascienceModelDeployments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#values DataOciDatascienceModelDeployments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/datascience_model_deployments#regex DataOciDatascienceModelDeployments#regex}.

---

### DataOciDatascienceModelDeploymentsModelDeployments <a name="DataOciDatascienceModelDeploymentsModelDeployments" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeployments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeployments.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeployments()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration()
```


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatascienceModelDeploymentsFilterList <a name="DataOciDatascienceModelDeploymentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatascienceModelDeploymentsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>]]

---


### DataOciDatascienceModelDeploymentsFilterOutputReference <a name="DataOciDatascienceModelDeploymentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatascienceModelDeploymentsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsFilter">DataOciDatascienceModelDeploymentsFilter</a>]

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccess</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.access">access</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.predict">predict</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.access"></a>

```python
access: DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsAccessList</a>

---

##### `predict`<sup>Required</sup> <a name="predict" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.predict"></a>

```python
predict: DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetails</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.logGroupId">log_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.logId">log_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_group_id`<sup>Required</sup> <a name="log_group_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.logGroupId"></a>

```python
log_group_id: str
```

- *Type:* str

---

##### `log_id`<sup>Required</sup> <a name="log_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.logId"></a>

```python
log_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredictOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsPredict</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.cmd">cmd</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.entrypoint">entrypoint</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.environmentConfigurationType">environment_configuration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.environmentVariables">environment_variables</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.healthCheckPort">health_check_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.image">image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.imageDigest">image_digest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.serverPort">server_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cmd`<sup>Required</sup> <a name="cmd" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.cmd"></a>

```python
cmd: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.entrypoint"></a>

```python
entrypoint: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `environment_configuration_type`<sup>Required</sup> <a name="environment_configuration_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.environmentConfigurationType"></a>

```python
environment_configuration_type: str
```

- *Type:* str

---

##### `environment_variables`<sup>Required</sup> <a name="environment_variables" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.environmentVariables"></a>

```python
environment_variables: StringMap
```

- *Type:* cdktf.StringMap

---

##### `health_check_port`<sup>Required</sup> <a name="health_check_port" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.healthCheckPort"></a>

```python
health_check_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image`<sup>Required</sup> <a name="image" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.image"></a>

```python
image: str
```

- *Type:* str

---

##### `image_digest`<sup>Required</sup> <a name="image_digest" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.imageDigest"></a>

```python
image_digest: str
```

- *Type:* str

---

##### `server_port`<sup>Required</sup> <a name="server_port" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.serverPort"></a>

```python
server_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetails</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.cpuBaseline">cpu_baseline</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cpu_baseline`<sup>Required</sup> <a name="cpu_baseline" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.cpuBaseline"></a>

```python
cpu_baseline: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetails</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.instanceShapeName">instance_shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.modelDeploymentInstanceShapeConfigDetails">model_deployment_instance_shape_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_shape_name`<sup>Required</sup> <a name="instance_shape_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.instanceShapeName"></a>

```python
instance_shape_name: str
```

- *Type:* str

---

##### `model_deployment_instance_shape_config_details`<sup>Required</sup> <a name="model_deployment_instance_shape_config_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.modelDeploymentInstanceShapeConfigDetails"></a>

```python
model_deployment_instance_shape_config_details: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationModelDeploymentInstanceShapeConfigDetailsList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfiguration</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.bandwidthMbps">bandwidth_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.instanceConfiguration">instance_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.maximumBandwidthMbps">maximum_bandwidth_mbps</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.modelId">model_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.scalingPolicy">scaling_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bandwidth_mbps`<sup>Required</sup> <a name="bandwidth_mbps" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.bandwidthMbps"></a>

```python
bandwidth_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_configuration`<sup>Required</sup> <a name="instance_configuration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.instanceConfiguration"></a>

```python
instance_configuration: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsInstanceConfigurationList</a>

---

##### `maximum_bandwidth_mbps`<sup>Required</sup> <a name="maximum_bandwidth_mbps" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.maximumBandwidthMbps"></a>

```python
maximum_bandwidth_mbps: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_id`<sup>Required</sup> <a name="model_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.modelId"></a>

```python
model_id: str
```

- *Type:* str

---

##### `scaling_policy`<sup>Required</sup> <a name="scaling_policy" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.scalingPolicy"></a>

```python
scaling_policy: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetails</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.autoScalingPolicyType">auto_scaling_policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.initialInstanceCount">initial_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.maximumInstanceCount">maximum_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.minimumInstanceCount">minimum_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.rules">rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_policy_type`<sup>Required</sup> <a name="auto_scaling_policy_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.autoScalingPolicyType"></a>

```python
auto_scaling_policy_type: str
```

- *Type:* str

---

##### `initial_instance_count`<sup>Required</sup> <a name="initial_instance_count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.initialInstanceCount"></a>

```python
initial_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maximum_instance_count`<sup>Required</sup> <a name="maximum_instance_count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.maximumInstanceCount"></a>

```python
maximum_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `minimum_instance_count`<sup>Required</sup> <a name="minimum_instance_count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.minimumInstanceCount"></a>

```python
minimum_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rules`<sup>Required</sup> <a name="rules" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.rules"></a>

```python
rules: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPolicies</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.metricExpressionRuleType">metric_expression_rule_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.metricType">metric_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.scaleInConfiguration">scale_in_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.scaleOutConfiguration">scale_out_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `metric_expression_rule_type`<sup>Required</sup> <a name="metric_expression_rule_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.metricExpressionRuleType"></a>

```python
metric_expression_rule_type: str
```

- *Type:* str

---

##### `metric_type`<sup>Required</sup> <a name="metric_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.metricType"></a>

```python
metric_type: str
```

- *Type:* str

---

##### `scale_in_configuration`<sup>Required</sup> <a name="scale_in_configuration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.scaleInConfiguration"></a>

```python
scale_in_configuration: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList</a>

---

##### `scale_out_configuration`<sup>Required</sup> <a name="scale_out_configuration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.scaleOutConfiguration"></a>

```python
scale_out_configuration: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRules</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.instanceCountAdjustment">instance_count_adjustment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.pendingDuration">pending_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.scalingConfigurationType">scaling_configuration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_count_adjustment`<sup>Required</sup> <a name="instance_count_adjustment" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.instanceCountAdjustment"></a>

```python
instance_count_adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending_duration`<sup>Required</sup> <a name="pending_duration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.pendingDuration"></a>

```python
pending_duration: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `scaling_configuration_type`<sup>Required</sup> <a name="scaling_configuration_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.scalingConfigurationType"></a>

```python
scaling_configuration_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleInConfiguration</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.instanceCountAdjustment">instance_count_adjustment</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.pendingDuration">pending_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.scalingConfigurationType">scaling_configuration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.threshold">threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `instance_count_adjustment`<sup>Required</sup> <a name="instance_count_adjustment" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.instanceCountAdjustment"></a>

```python
instance_count_adjustment: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pending_duration`<sup>Required</sup> <a name="pending_duration" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.pendingDuration"></a>

```python
pending_duration: str
```

- *Type:* str

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `scaling_configuration_type`<sup>Required</sup> <a name="scaling_configuration_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.scalingConfigurationType"></a>

```python
scaling_configuration_type: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.threshold"></a>

```python
threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesRulesScaleOutConfiguration</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.autoScalingPolicies">auto_scaling_policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.coolDownInSeconds">cool_down_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.instanceCount">instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.policyType">policy_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `auto_scaling_policies`<sup>Required</sup> <a name="auto_scaling_policies" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.autoScalingPolicies"></a>

```python
auto_scaling_policies: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyAutoScalingPoliciesList</a>

---

##### `cool_down_in_seconds`<sup>Required</sup> <a name="cool_down_in_seconds" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.coolDownInSeconds"></a>

```python
cool_down_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `instance_count`<sup>Required</sup> <a name="instance_count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.instanceCount"></a>

```python
instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `policy_type`<sup>Required</sup> <a name="policy_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.policyType"></a>

```python
policy_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicyOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsScalingPolicy</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.environmentConfigurationDetails">environment_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.modelConfigurationDetails">model_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `environment_configuration_details`<sup>Required</sup> <a name="environment_configuration_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.environmentConfigurationDetails"></a>

```python
environment_configuration_details: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsEnvironmentConfigurationDetailsList</a>

---

##### `model_configuration_details`<sup>Required</sup> <a name="model_configuration_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.modelConfigurationDetails"></a>

```python
model_configuration_details: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsModelConfigurationDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetails</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.currentInstanceCount">current_instance_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.systemInfraType">system_infra_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `current_instance_count`<sup>Required</sup> <a name="current_instance_count" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.currentInstanceCount"></a>

```python
current_instance_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `system_infra_type`<sup>Required</sup> <a name="system_infra_type" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.systemInfraType"></a>

```python
system_infra_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemData</a>

---


### DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference <a name="DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_datascience_model_deployments

dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.categoryLogDetails">category_log_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentConfigurationDetails">model_deployment_configuration_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentSystemData">model_deployment_system_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentUrl">model_deployment_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.opcParentRptUrl">opc_parent_rpt_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeployments">DataOciDatascienceModelDeploymentsModelDeployments</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_log_details`<sup>Required</sup> <a name="category_log_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.categoryLogDetails"></a>

```python
category_log_details: DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsCategoryLogDetailsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `model_deployment_configuration_details`<sup>Required</sup> <a name="model_deployment_configuration_details" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentConfigurationDetails"></a>

```python
model_deployment_configuration_details: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentConfigurationDetailsList</a>

---

##### `model_deployment_system_data`<sup>Required</sup> <a name="model_deployment_system_data" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentSystemData"></a>

```python
model_deployment_system_data: DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList">DataOciDatascienceModelDeploymentsModelDeploymentsModelDeploymentSystemDataList</a>

---

##### `model_deployment_url`<sup>Required</sup> <a name="model_deployment_url" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.modelDeploymentUrl"></a>

```python
model_deployment_url: str
```

- *Type:* str

---

##### `opc_parent_rpt_url`<sup>Required</sup> <a name="opc_parent_rpt_url" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.opcParentRptUrl"></a>

```python
opc_parent_rpt_url: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeploymentsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatascienceModelDeploymentsModelDeployments
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatascienceModelDeployments.DataOciDatascienceModelDeploymentsModelDeployments">DataOciDatascienceModelDeploymentsModelDeployments</a>

---



